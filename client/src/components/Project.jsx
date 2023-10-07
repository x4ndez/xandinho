import "../styles/Project.css";

export default function Project(props) {

    return (

        <>

            <div id="project">

                <div className="overlay">

                    <button>Click to View</button>

                </div>

                <img src={props.imgLink} />

            </div>

        </>

    );

}