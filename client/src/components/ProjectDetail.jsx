import "../styles/ProjectDetail.css";

export default function ProjectDetail(props) {

    return (

        <>

            <div id="project-detail">
                <h1>{props.projectData.name}</h1>
                <img src={props.projectData.imgLink} />
                <p>Description: {props.projectData.description}</p>
                <div><a href={props.projectData.repoUrl}><button>GITHUB REPO</button></a></div>
                <div><button onClick={props.toggleDetailState}>EXIT</button></div>
            </div>


        </>

    );

}