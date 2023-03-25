let id_1 = document.getElementById(`unique_1`);

function back_orange(detail) {
    detail.target.style.backgroundColor = `orange`;
};

id_1.addEventListener(`click`, back_orange);

let id_4 = document.getElementById(`unique_4`);

function new_title(details) {
    details.outerHTML = `<h1>NEW TITLE</h1>`;
};

id_4.addEventListener(`dblclick`, new_title);

let id_5 = document.getElementById(`unique_5`);

function last_mouse(details) {
    details.insertAdjacentHTML(`beforeend`, `<p>NEW1</p>`);
    details.insertAdjacentHTML(`beforeend`, `<p>NEW2</p>`);
    details.insertAdjacentHTML(`beforeend`, `<p>NEW3</p>`);
}

id_5.addEventListener(`mouseover`, last_mouse);