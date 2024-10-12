const today = new Date();
const year = document.querySelector("#year");
year.innerHTML = `&copy; <span>${today.getFullYear()}</span> 🎈Victor Ugwu🎈 Lagos, Nigeria`;


const lastModified = document.lastModified;
const lastMod = document.querySelector("#last-modified");
lastMod.innerHTML = `Last Modified: ${lastModified}`;

// const button = document.querySelector("#fa");
// button.addEventListener("click", function () {});
