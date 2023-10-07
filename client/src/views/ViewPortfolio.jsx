import Project from "../components/Project"

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

            const array = [];

            for (let item of await response.json()) {

                const projectData = {
                    name: item.name,
                    description: item.description,
                    repoUrl: item.html_url,
                    imgLink: "",
                }

                if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${item.name}/main/assets/screenshot.png`)).status === 200) {
                    projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${item.name}/main/assets/screenshot.png`;
                }
                else if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${item.name}/main/assets/screenshot.gif`)).status === 200) {
                    projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${item.name}/main/assets/screenshot.gif`;
                } else {
                    projectData.imgLink = `https://as2.ftcdn.net/v2/jpg/05/62/99/31/1000_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg`;
                }

                array.push(projectData);

            }

            setProjects(array);

        }

    }

    getRepoData();

    return (

        <>

            {projects.length
                ? projects.map((item, i) => {
                    return <Project
                        key={i}
                        projectData={item}
                    />
                }) : "Loading... Feel free to make a coffee while you wait :)"}

        </>

    );

}