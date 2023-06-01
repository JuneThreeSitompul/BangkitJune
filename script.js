//untuk membuat supaya sidebar bisa dibuka ketika tombol flexbox di click
const  menuInput = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menuInput.addEventListener('click', function () {
        nav.classList.toggle('transisi');
    });

