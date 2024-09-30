# Password Strength Checker

This project is a simple **Password Strength Checker** that evaluates the strength of a user's password based on its length and complexity. The app provides real-time feedback as users type and helps them create secure passwords.

## Features

- **Real-time Feedback**: As you type, the strength of the password is displayed.
- **Strength Levels**:
  - Less than 4 characters: "At least four characters required"
  - 4-5 characters: Weak password
  - 6-9 characters: Moderate password
  - 10 characters (with a mix of uppercase, lowercase, numbers, and symbols): Strong password
- **Character Limit**: Limits input to 10 characters.

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for functionality

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in your web browser.
3. Type a password in the input field to see the real-time password strength evaluation.

## Project Structure

```bash
Password-Strength-Checker/
│
├── index.html        # Main HTML file
├── styles.css        # Styling for the UI
└── script.js         # JavaScript for password strength logic
