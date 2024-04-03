const button = document.getElementById("btn");
const main = document.getElementById("mn");
const title = document.getElementsByTagName("title")[0];
let darkmodus = false;
button.addEventListener("click", () => {
  if (darkmodus) {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.style.borderColor = "black";
    main.style.backgroundColor = "white";
    button.style.boxShadow = "none";
    title.textContent = "Good Morning";
    darkmodus = false;
  } else {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.boxShadow = "0px 0px 50px 10px yellow";
    button.style.borderColor = "white";
    main.style.backgroundColor = "black";
    main.style.transition = "background-color 1.5s";
    title.textContent = "Good Night";
    darkmodus = true;
  }
});
