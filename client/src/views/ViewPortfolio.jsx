import Project from "../components/Project";
import "../styles/ViewPortfolio.css";

import { useState, useEffect } from "react";

export default function ViewPortfolio() {

    const [projects, setProjects] = useState([]);

    async function getRepoData() {

        if (projects.length === 0) {

            const response = await fetch("https://api.github.com/users/x4ndez/repos", {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },

            });

            const responseData = await response.json();

            console.log(responseData);

            const promiseArray = responseData.map(async (data) => {
                const projectData = {
                    name: data.name,
                    description: data.description,
                    repoUrl: data.html_url,
                    homePage: data.homepage,
                    imgLink: "",
                }

                if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.png`)).status === 200) {
                    projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.png`;
                }
                else if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.gif`)).status === 200) {
                    projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.gif`;
                } else {
                    projectData.imgLink = `https://github.com/x4ndez/xandinho/blob/main/client/src/assets/img/noimage.png?raw=true`;
                }

                return projectData;
            });

            const array = await Promise.all(promiseArray);
            setProjects(array);

        }

    }

    getRepoData();

    return (

        <>

            <div id="wrapper">

                <h1>Portfolio</h1>

                <div id="project-container">

                    {projects.length
                        ? projects.map((item, i) => {
                            return <Project
                                key={i}
                                projectData={item}
                            />
                        }) : "Loading... Just calling up GitHub. Feel free to make a coffee while you wait :)"}

                </div>

            </div>

        </>

    );

}