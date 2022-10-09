const openingBtn = document.querySelector(".sidebar__header");
const closingBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");

openingBtn.addEventListener("click", openSidebar);

function openSidebar() {
    sidebar.classList.add('sidebar__header');
}
function testFunc(arg) {
    console.log(arg);
}

testFunc('HYU');