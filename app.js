// 1. Setup the user variables
const user = "MewingCats";
const skill = "JavaScript";
const favoriteTheme = "Cyberpunk Dark";
const githubUsername = "MewingCats-codes";

// 2. Use a multi-line template literal to create the Markdown code
function generateProfile() {
  return `
#  Hi, I'm ${user}!
###  About Me
-  I am currently learning **${skill}**.
-  My favorite IDE coding theme is **${favoriteTheme}**.


  `.trim();
}

// 3. Print your generated layout to the console
console.log(generateProfile());
