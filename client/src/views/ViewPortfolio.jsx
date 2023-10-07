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
                    imgLink: `https://raw.githubusercontent.com/x4ndez/${item.name}/main/assets/screenshot.png`,
                }

                array.push(projectData);

            }

            setProjects(array);

        }

    }

    getRepoData();

    return (

        <>

            {projects
                ? projects.map((item, i) => {
                    return <Project
                        key={i}
                        projectData={item}
                    // description={item.description}
                    // repoUrl={item.repoUrl}
                    // imgLink={item.imgLink}
                    />
                }) : ""}

        </>

    );

}