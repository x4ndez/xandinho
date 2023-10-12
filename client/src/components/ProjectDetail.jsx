import "../styles/ProjectDetail.css";
import { useEffect } from "react";

export default function ProjectDetail(props) {

    function deployedAppDisplay(url) {

        if (url != null) {
            if (url.length > 5) deployedApp.innerHTML = `<a href=${props.projectData.homePage}><button>DEPLOYED APPLICATION</button></a>`;
        }


    }

    useEffect(() => {

        deployedAppDisplay(props.projectData.homePage);

    }, []);



    return (

        <>

            <div id="project-detail">
                <h1>{props.projectData.name}</h1>
                <img src={props.projectData.imgLink} />
                <p>Description: {props.projectData.description}</p>
                <div><a href={props.projectData.repoUrl}><button>GITHUB REPO</button></a></div>
                <div id="deployedApp"></div>
                <div><button onClick={props.toggleDetailState}>EXIT</button></div>
            </div>


        </>

    );

}