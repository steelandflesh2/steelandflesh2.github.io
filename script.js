let counter = 0;

document.querySelector(".avatar").addEventListener('click', () => {
    if (counter === 5) {
        alert("I am pooping right now!");
        counter = 0;
    }
    counter++;
});