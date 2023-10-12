// import resumeDoc from "../assets/resume1.docx";

export default function PageResume() {

    return (

        <>

            <div id="wrapper">

                <h1>Resume</h1>

                <div id="content-container">

                    <div id="p-container">
                        <h2>Download Link</h2>
                        <p>
                            You can download my resume <a href="../assets/resume1.docx" download>here</a>.
                        </p>
                        <h2>Proficiencies</h2>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Handlebars</li>
                            <li>MongoDB, Mongoose, GraphQL</li>
                            <li>MySQL, Sequelize</li>
                        </ul>

                    </div>


                </div>

            </div>

        </>

    );

}