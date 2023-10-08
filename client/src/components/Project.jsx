import { useState, useEffect } from "react";

import "../styles/Project.css";

import ProjectDetail from "./ProjectDetail"

export default function Project(props) {

    const [detail, setDetail] = useState(0);

    const toggleDetailState = () => {

        console.log(`Current State: ${detail}`);

        if (detail === 0) {
            setDetail(1);
        }

        if (detail === 1) {
            setDetail(0);
        }

    }

    function renderDetail() {

        if (detail === 1) {
            return <ProjectDetail toggleDetailState={toggleDetailState} projectData={props.projectData} />
        }

    }

    return (

        <>

            {renderDetail()}

            <div className="project">

                <div className="overlay">

                    <h3>{props.projectData.name}</h3>
                    <button onClick={toggleDetailState}>Click to View</button>

                </div>

                <img src={props.projectData.imgLink} />

            </div>

        </>

    );

}