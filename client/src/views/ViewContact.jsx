import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewContact() {

    const validateEmail = new RegExp(
        "^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
    );

    const [emailFocus, setEmailFocus] = useState(0);
    const [nameFocus, setNameFocus] = useState(0);
    const [msgFocus, setMsgFocus] = useState(0);

    const [emailIsValid, setEmailIsValid] = useState(0);
    const [nameIsValid, setNameIsValid] = useState(0);
    const [msgIsValid, setMsgIsValid] = useState(0);

    useEffect(() => {

        console.log(emailFocus);

        if (emailFocus === 0 || 2) {

            emailValidMsg.textContent = "";
            setEmailIsValid(0);

        }

        if (emailFocus === 1) {

            if (emailForm.value === "") {
                emailValidMsg.textContent = "Please input an email."
                setEmailIsValid(0);
            }
            else if (!validateEmail.test(emailForm.value)) {
                emailValidMsg.textContent = "Please input a valid email."
                setEmailIsValid(0);
            } else {
                emailValidMsg.textContent = "✓";
                setEmailIsValid(1);
            }

        }

    }, [emailFocus]);

    useEffect(() => {

        if (nameFocus === 0 || 2) {

            nameValidMsg.textContent = "";
            setNameIsValid(0);

        }

        if (nameFocus === 1) {

            if (!nameForm.value) {

                nameValidMsg.textContent = "Name entry is required.";
                setNameIsValid(0);

            } else {
                nameValidMsg.textContent = "✓";
                setNameIsValid(1);
            }

        }

    }, [nameFocus]);

    useEffect(() => {

        if (msgFocus === 0 || 2) {

            msgValidMsg.textContent = "";
            setMsgIsValid(0);

        }

        if (msgFocus === 1) {

            if (!msgForm.value) {

                msgValidMsg.textContent = "Message entry is required.";
                setMsgIsValid(0);

            } else {
                msgValidMsg.textContent = "✓";
                setMsgIsValid(1);
            }

        }

    }, [msgFocus]);

    function formSubmit(e) {

        const navigate = useNavigate();

        e.preventDefault();

        if (nameIsValid &&
            emailIsValid &&
            msgIsValid) {

            alert("Message sent!  DEV NOTE: This is just an affirmation message that your input is all valid, your input will not be sent to the developer.");
            navigate("/about");

        } else {
            alert("Message not sent!  Please make sure your email is valid and that all fields have content.");
        }

    }

    return (

        <>

            <div id="wrapper">

                <h1>Contact</h1>

                <div id="content-container">

                    <div id="p-container">

                        <form>

                            <div>

                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    placeholder="Xandinho"
                                    onFocus={() => setNameFocus(2)}
                                    onBlur={() => setNameFocus(1)}
                                    name="name"
                                    id="nameForm" />

                            </div>

                            <p id="nameValidMsg"></p>

                            <div>

                                <label htmlFor="email">Email</label>
                                <input type="text"
                                    placeholder="xande@xandegroup.com.au"
                                    onFocus={() => setEmailFocus(2)}
                                    onBlur={() => setEmailFocus(1)}
                                    name="email"
                                    id="emailForm" />

                            </div>

                            <p id="emailValidMsg"></p>

                            <div>

                                <label htmlFor="msg-content">Message</label>
                                <textarea
                                    placeholder="I really like your portfolio, it was the coolest one I think I've ever seen in my entire life."
                                    onFocus={() => setMsgFocus(2)}
                                    onBlur={() => setMsgFocus(1)}
                                    name="msg-content"
                                    id="msgForm">
                                </textarea>

                            </div>

                            <p id="msgValidMsg"></p>

                            <input type="submit"
                                onClick={formSubmit}
                                value="Submit" />

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}