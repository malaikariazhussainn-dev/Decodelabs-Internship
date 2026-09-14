/* =========================================================
   LUMEN — FORM VALIDATION & JSON PAYLOAD
   PROJECT 4: FORM DESIGN & VALIDATION
========================================================= */


// ---------------------------------------------------------
// 01. SELECT FORM
// ---------------------------------------------------------

const registrationForm =
    document.querySelector("#registration-form");


// ---------------------------------------------------------
// 02. SELECT INPUTS
// ---------------------------------------------------------

const fullName =
    document.querySelector("#full-name");

const email =
    document.querySelector("#email");

const password =
    document.querySelector("#password");

const confirmPassword =
    document.querySelector("#confirm-password");


// ---------------------------------------------------------
// 03. SELECT ERROR MESSAGES
// ---------------------------------------------------------

const fullNameError =
    document.querySelector("#full-name-error");

const emailError =
    document.querySelector("#email-error");

const passwordError =
    document.querySelector("#password-error");

const confirmPasswordError =
    document.querySelector("#confirm-password-error");


// ---------------------------------------------------------
// 04. GLOBAL FORM STATUS
// ---------------------------------------------------------

const formStatus =
    document.querySelector("#form-status");


// ---------------------------------------------------------
// 05. PASSWORD REGEX
// ---------------------------------------------------------

const passwordPattern =
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;


// ---------------------------------------------------------
// 06. VALIDATE FULL NAME
// ---------------------------------------------------------

function validateFullName() {

    const value =
        fullName.value.trim();

    return value !== "";
}


// ---------------------------------------------------------
// 07. VALIDATE EMAIL
// ---------------------------------------------------------

function validateEmail() {

    const value =
        email.value.trim();

    if (value === "") {
        return false;
    }

    return email.validity.valid;
}


// ---------------------------------------------------------
// 08. VALIDATE PASSWORD
// ---------------------------------------------------------

function validatePassword() {

    const value =
        password.value;

    if (value === "") {
        return false;
    }

    return passwordPattern.test(value);
}


// ---------------------------------------------------------
// 09. VALIDATE CONFIRM PASSWORD
// ---------------------------------------------------------

function validateConfirmPassword() {

    const value =
        confirmPassword.value;

    if (value === "") {
        return false;
    }

    return value === password.value;
}


// ---------------------------------------------------------
// 10. CLEAR PREVIOUS ERRORS
// ---------------------------------------------------------

function clearErrors() {

    fullNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    formStatus.textContent = "";

    // Remove previous success state.
    formStatus.classList.remove("success");


    // Remove error styling.
    fullName.classList.remove("input-error");
    email.classList.remove("input-error");
    password.classList.remove("input-error");
    confirmPassword.classList.remove("input-error");


    // Reset accessibility states.
    fullName.setAttribute(
        "aria-invalid",
        "false"
    );

    email.setAttribute(
        "aria-invalid",
        "false"
    );

    password.setAttribute(
        "aria-invalid",
        "false"
    );

    confirmPassword.setAttribute(
        "aria-invalid",
        "false"
    );
}


// ---------------------------------------------------------
// 11. DISPLAY VALIDATION ERRORS
// ---------------------------------------------------------

function showErrors(
    nameValid,
    emailValid,
    passwordValid,
    confirmPasswordValid
) {


    if (!nameValid) {

        fullNameError.textContent =
            "Please enter your full name.";

        fullName.classList.add(
            "input-error"
        );

        fullName.setAttribute(
            "aria-invalid",
            "true"
        );
    }


    if (!emailValid) {

        emailError.textContent =
            "Please enter a valid email address.";

        email.classList.add(
            "input-error"
        );

        email.setAttribute(
            "aria-invalid",
            "true"
        );
    }


    if (!passwordValid) {

        passwordError.textContent =
            "Password must contain 8+ characters, uppercase, lowercase, number and special character.";

        password.classList.add(
            "input-error"
        );

        password.setAttribute(
            "aria-invalid",
            "true"
        );
    }


    if (!confirmPasswordValid) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        confirmPassword.classList.add(
            "input-error"
        );

        confirmPassword.setAttribute(
            "aria-invalid",
            "true"
        );
    }


    formStatus.textContent =
        "Please correct the highlighted fields.";
}


// ---------------------------------------------------------
// 12. CREATE JSON PAYLOAD
// ---------------------------------------------------------

function createPayload() {

    const formData = {

        fullName:
            fullName.value.trim(),

        email:
            email.value.trim(),

        password:
            password.value,

        confirmPassword:
            confirmPassword.value

    };


    return JSON.stringify(
        formData,
        null,
        2
    );
}


// ---------------------------------------------------------
// 13. FORM SUBMISSION
// ---------------------------------------------------------

registrationForm.addEventListener(
    "submit",
    function (event) {


        // -------------------------------------------------
        // SHIELD
        // -------------------------------------------------

        event.preventDefault();


        // -------------------------------------------------
        // RESET PREVIOUS STATE
        // -------------------------------------------------

        clearErrors();


        // -------------------------------------------------
        // VALIDATE EACH FIELD
        // -------------------------------------------------

        const nameValid =
            validateFullName();

        const emailValid =
            validateEmail();

        const passwordValid =
            validatePassword();

        const confirmPasswordValid =
            validateConfirmPassword();


        // -------------------------------------------------
        // OVERALL VALIDATION
        // -------------------------------------------------

        const formIsValid =
            nameValid &&
            emailValid &&
            passwordValid &&
            confirmPasswordValid;


        // -------------------------------------------------
        // INVALID FORM
        // -------------------------------------------------

        if (!formIsValid) {

            showErrors(
                nameValid,
                emailValid,
                passwordValid,
                confirmPasswordValid
            );

            console.log(
                "LUMEN: Validation failed."
            );

            return;
        }


        // -------------------------------------------------
        // VALID FORM — CREATE JSON
        // -------------------------------------------------

        const jsonPayload =
            createPayload();


        // -------------------------------------------------
        // SUCCESS STATE
        // -------------------------------------------------

        formStatus.classList.add(
            "success"
        );

        formStatus.textContent =
            "Verification successful. Your information has been prepared for submission.";


        // -------------------------------------------------
        // SAFE DEVELOPMENT OUTPUT
        // -------------------------------------------------

        console.log(
            "LUMEN: JSON Payload prepared successfully."
        );


        // Do NOT print the actual password.
        console.log({

            fullName:
                fullName.value.trim(),

            email:
                email.value.trim(),

            password:
                "[REDACTED]",

            confirmPassword:
                "[REDACTED]"

        });


        // Keep the JSON payload available
        // for a future backend/API request.
        console.log(
            "LUMEN: Payload ready for backend/API."
        );

    }
);