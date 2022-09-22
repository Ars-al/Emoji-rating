const starsEl = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".far");
const arraycolor =  ["red", "orange", "pink", "blue", "green"];

updateRating(0);

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if(idx < index + 1) {
            starEl.classList.add("active")
        }
        else {
            starEl.classList.remove("active")
        }
    })

    emojis.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = arraycolor[index];
    }); 
}


