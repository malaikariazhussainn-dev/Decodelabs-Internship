✦ LUMEN — Form Design & Validation

Engineering the Architecture of Trust

> A cinematic, responsive frontend form-validation experience created as part of my Frontend Development Internship at Decodelabs.




---

🌐 Live Demo

🔗 Live Website: YOUR_LIVE_LINK_HERE

🔗 GitHub Repository: YOUR_GITHUB_REPOSITORY_LINK_HERE

> Replace the placeholders above with the deployed website and repository links.




---

📌 Project Overview

Lumen is a modern frontend form design and validation project developed for Decodelabs Frontend Development — Project 4.

The project focuses on creating a professional user-input experience while demonstrating how JavaScript can validate form data, prevent invalid submissions, provide meaningful feedback, handle cross-field validation, and prepare validated information as a JSON payload.

The interface follows a cinematic "digital light chamber" concept, combining a dark visual environment with subtle lighting, glass surfaces, responsive layouts, and interactive validation states.

The core architecture follows:

INPUT → PROCESS → OUTPUT

The project also implements the four stages emphasized in the project brief:

STRUCTURE → SHIELD → SCAN → COMMUNICATE


---

🎯 Project Details

Project

Project 4 — Form Design & Validation

Project Theme

Engineering the Architecture of Trust

Main Objective

Create a form and validate user inputs using JavaScript.

Form Includes

Full Name

Email Address

Password

Confirm Password

Submit / Verification action


Main Focus

Form handling

Input validation

JavaScript logic

Regular Expressions

Cross-field validation

Error and success messages

Accessibility

JSON payload preparation

Responsive UI/UX



---

🧠 How Lumen Works

01 — Structure

Semantic HTML provides the foundation of the application.

HTML Form
    ↓
Labels
    ↓
Input Fields
    ↓
Validation Messages
    ↓
Submit Button

The form uses semantic elements and native HTML attributes such as:

required
type="email"
autocomplete


---

02 — Shield

JavaScript intercepts the browser's default submission behavior.

event.preventDefault();

This prevents an uncontrolled page refresh and allows the application to execute its custom validation process.


---

03 — Scan

The submitted information passes through multiple validation checks.

Full Name
   ↓
Email
   ↓
Password
   ↓
Confirm Password
   ↓
Validation Result

Regular Expressions are used where pattern-based validation is required.


---

04 — Communicate

The application communicates the result through:

Field-level error messages

Global status messages

Visual validation states

aria-invalid

aria-describedby

aria-live


A successful validation prepares the data as JSON.


---

🏗️ Project Structure

Project-4/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html

Responsible for:

Semantic document structure

Form structure

Labels

Input fields

Accessibility attributes

Error message containers

Submit button

Global status region


style.css

Responsible for:

Visual design

Layout

Responsive behavior

Typography

Colors

Animations

Input states

Error states

Success states

Accessibility-friendly focus states


script.js

Responsible for:

Form submission handling

preventDefault()

Validation logic

Email validation

Password Regex validation

Confirm Password validation

Error handling

Accessibility state management

JSON payload generation

Success feedback



---

🛠️ Technology Stack

Technology	Purpose

HTML5	Semantic structure and form foundation
CSS3	Layout, styling, responsiveness and animation
Vanilla JavaScript	Form handling and validation logic
Regular Expressions	Password pattern validation
ARIA	Accessible validation feedback
JSON	Validated payload preparation


No Framework Required

The project is intentionally built using:

HTML
CSS
Vanilla JavaScript

No unnecessary frontend framework or library is required.


---

⚙️ Technical Details

Form Validation

Full Name

The field must not be empty.

value.trim() !== ""

Email

Email syntax is checked using the browser's email validity model:

email.validity.valid

Password

The project uses the following Regex:

/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/

It requires:

Minimum 8 characters

Uppercase letter

Lowercase letter

Number

Special character


Confirm Password

The confirmation value must match the original password:

Password === Confirm Password

This demonstrates cross-field validation.


---

📦 JSON Payload

After all validation checks pass, the form data is packaged into JSON.

Example:

{
  "fullName": "Malaika Riaz",
  "email": "test@example.com",
  "password": "Hello@123",
  "confirmPassword": "Hello@123"
}

The payload is currently prepared for a future backend/API integration.

The project does not pretend that a backend exists where one has not been implemented.


---

♿ Accessibility

Accessibility is integrated into the validation architecture.

Each input is connected to its corresponding validation message using:

aria-describedby

Invalid fields are identified using:

aria-invalid="true"

Dynamic feedback uses:

aria-live="polite"

The architecture creates a relationship between the input and its validation message:

INPUT
  │
  ├── aria-invalid
  │
  └── aria-describedby
          │
          ▼
    ERROR MESSAGE
          │
          └── aria-live

This ensures that validation feedback is not communicated through color alone.


---

🎨 Design & UI

Lumen uses a custom cinematic visual direction rather than a traditional centered form card.

Design Characteristics

Dark atmospheric background

Deep plum tones

Verdigris accents

Burnished copper accents

Aged ivory typography

Glass-like surfaces

Soft shadows

Atmospheric lighting

Subtle grid texture

Smooth transitions

Responsive layout

Reduced-motion support


Core Color Palette

Obsidian          #0D1010
Deep Plum         #17121B
Verdigris         #58B7A5
Burnished Copper  #C47A52
Aged Ivory        #E8E1D4
Error             #D98282


---

📱 Responsive Design

The interface is designed for different screen sizes, including:

Desktop

Laptop

Tablet

Mobile

Narrow mobile screens


The main experience transitions from a two-column layout to a single-column layout on smaller screens.

The validation notification is also designed to remain within the viewport on mobile devices.


---

✅ Decodelabs Requirements Completed

Project 4 — Form Design & Validation

[x] Create a form

[x] Full Name input

[x] Email input

[x] Password input

[x] Confirm Password input

[x] Semantic HTML structure

[x] Required input handling

[x] JavaScript form handling

[x] event.preventDefault()

[x] Basic validation logic

[x] Email validation

[x] Password validation

[x] Regular Expression validation

[x] Confirm Password cross-field validation

[x] Custom error messages

[x] Success message

[x] Invalid submission prevention

[x] JSON payload preparation

[x] aria-invalid

[x] aria-describedby

[x] aria-live="polite"

[x] Responsive interface

[x] Accessible validation feedback

[x] Reduced-motion support



---

🔐 Security & Validation Notes

Frontend validation is an important user-experience and data-integrity layer, but it should not be considered the only security boundary.

For a production application:

Backend validation should be performed independently.

Data should be transmitted over HTTPS.

Passwords should never be logged.

Passwords should never be stored as plaintext.

Sensitive data should be handled securely on the server.

Email existence verification requires a backend or specialized verification service.


For this project, the actual password is intentionally not exposed in console output.


---

🧪 Testing

The project was designed around the following validation scenarios.

Empty Form

Expected:

❌ Validation fails
❌ Error messages appear
❌ Page does not refresh

Invalid Email

hello

Expected:

❌ Email validation fails

Weak Password

hello123

Expected:

❌ Password validation fails

Strong Password

Hello@123

Expected:

✅ Password validation passes

Password Mismatch

Password:         Hello@123
Confirm Password: Hello@124

Expected:

❌ Confirmation validation fails

Valid Submission

Full Name:        Malaika Riaz
Email:            test@example.com
Password:         Hello@123
Confirm Password: Hello@123

Expected:

✅ Validation passes
✅ Success message appears
✅ JSON payload is prepared
✅ Password is not exposed in console
✅ No uncontrolled page refresh


---

🎓 Internship Details

Decodelabs — Frontend Development Internship

Program: Frontend Development
Project: Project 4 — Form Design & Validation
Batch: 2026
Training: Industrial Training Kit

This project was completed as part of my practical frontend development journey during the Decodelabs Frontend Development Internship.

The project provided an opportunity to apply frontend concepts through a practical form-validation implementation, with particular attention to:

Semantic HTML
      ↓
JavaScript Logic
      ↓
Validation
      ↓
Accessibility
      ↓
User Feedback
      ↓
JSON Data Handling


---

👩‍💻 About Me

Hi! I'm Malaika Riaz Hussain, an aspiring Frontend Developer passionate about creating modern, responsive, accessible, and user-focused web experiences.

I'm continuously developing my skills in:

HTML

CSS

JavaScript

Responsive Web Design

UI/UX

Form Validation

Accessibility

Frontend Architecture


I enjoy turning ideas into functional interfaces while focusing not only on visual design, but also on clean structure, logical behavior, usability, and accessibility.

Projects like Lumen are part of my learning journey toward becoming a stronger and more professional frontend developer.


---

🌱 Learning Outcomes

Through this project, I strengthened my understanding of:

Semantic HTML

Form architecture

JavaScript event handling

preventDefault()

Input validation

Regular Expressions

Cross-field validation

DOM manipulation

Error-state management

Accessibility with ARIA

JSON data preparation

Responsive UI design

Frontend security considerations



---

🔮 Future Improvements

The current project is intentionally frontend-focused.

Future versions could introduce:

Frontend Validation
       ↓
Secure API Request
       ↓
Backend Validation
       ↓
Database / Authentication
       ↓
Server Response
       ↓
UI Feedback

Potential future additions include:

Backend/API integration

Secure authentication

Server-side validation

Email verification

Persistent user accounts

Database integration



---

🚀 Getting Started

No package installation or build process is required.

Clone or download the project and open:

index.html

in a modern web browser.

For development, a local server such as VS Code Live Server can be used.


---

📄 License

This project was created as an educational project during my Decodelabs Frontend Development Internship.


---

✦ Final Note

Lumen is more than a form.

It demonstrates how structure, validation, accessibility, communication, and thoughtful UI design can work together to create a trustworthy user experience.

> You are not just coding a form. You are architecting trust.




---

Made with ♡ by Malaika Riaz Hussain

Frontend Developer • Learner • Builder