import "../styles/ViewAboutMe.css";
import bioPhoto from "../assets/img/bioPhoto.jpg";

export default function ViewAboutMe() {

    return (

        <div id="wrapper">

            <h1>About Me</h1>

            <div id="content-container">

                <div id="bio-photo-container">
                    <img src={bioPhoto} id="bio-photo" />
                </div>

                <div id="p-container">
                    <h3>Bio</h3>
                    <p>
                        Hey there!  You're reading this because you want to know about me, or because you're forced to read it as an edX/Monash University grader. Ha! I'm joking... *whispers* please give me 100%.
                    </p>
                    <p>
                        I'm currently a Service Technician... which sounds incredibly broad.  I work with integration systems that bring a multitude of other automation systems together so that they can all be controlled from one place.  I also work with each individual automation system, as some clients don't have an integration system in place.  A major mode of communication between all these systems (I promise, that's the last time I'll write systems) is a network; which means I'm often configuring, if not setting up these networks.  I'm often involved from start to finish of the installation: cabling, hardware and programming.  My day to day can be anything from troubleshooting for a service call, a retrofit, or a new project.
                        In conjunction to being a Service Technician, I'm also a registered electrician under compliance of the AS/NZS 3000 regulations (Victoria, Australia and New Zealand).</p>
                    <p>
                        Outside of my work life, I enjoy learning languages (e ai amigoxxxx), traveling to learn more languages and eat food, Brazilian Jiu Jitsu (no, I will not karate-chop you), Crossfit and now currently addicted to programming things to make things do other cool things.
                    </p>
                    <p>
                        If you want to know more about me, I'd suggest clicking the LinkedIn button at the top of the page, get in contact with me and lets have a conversation!
                    </p>
                </div>


            </div>

        </div>

    );

}