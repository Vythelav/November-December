let imgNode = document.querySelector(`#button2`);
let img1Node = document.querySelector(`#button1`);
let imegButtonNode = document.querySelector(`#imeg`);

imgNode.addEventListener(`click`, function () {
    imegButtonNode.innerHTML = `<img src="assets/dark.png" alt=""></img>`;
    imegButtonNode.classList.add(`dark`);
});

img1Node.addEventListener(`click`, function () {
    imegButtonNode.innerHTML = `<img src="assets/light.png" alt=""></img>`;
    imegButtonNode.classList.remove(`dark`);
});
