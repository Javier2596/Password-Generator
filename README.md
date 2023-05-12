# Password Generator

## Your Task

This week's Challenge required me to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by the written JavaScript code. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Usage
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Installation

I first started with creating the variables for the functions. Variables for the characters that would be included in the password, and variables that provided prompts and confirm messages asking the user which characters they wanted in the generated password. After I created if statements with concat to group specific password characters such as number and symbols if the user wanted these specifications. I then made a for loop that would give the parameters for selecting the characters at random. The big issue I faced during this challenge was rendering the password to the actual webpage. After editing the for loop and attaching the 'choicePW' variable to the password string I was able to get the random password to render to the webpage, but there was still an issue with the undefined phrase appearing before the password. I had to 'slice' the undefined out in order to produce only the wanted generated password. 

## Link

https://javier2596.github.io/Password-Generator/

## Credits

MMdn web docs  https://developer.mozilla.org/en-US/

## License

MIT license

---
