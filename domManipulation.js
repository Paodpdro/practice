const bodyPage = document.querySelector("body");

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!"
redText.style.color = "red";
bodyPage.appendChild(redText)


const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
bodyPage.appendChild(blueHeader)

const divBlack = document.createElement("div");
divBlack.style.border = "3px solid black";
divBlack.style.backgroundColor = "pink";
bodyPage.appendChild(divBlack);

const headerDiv = document.createElement("h1");
headerDiv.textContent = "I'm in a div"
divBlack.appendChild(headerDiv);

const divText = document.createElement("p");
divText.textContent = "ME TOO!";
divBlack.appendChild(divText);
