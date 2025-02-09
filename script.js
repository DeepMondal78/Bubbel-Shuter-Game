const main = document.querySelector(".game");
for (let i = 1; i < 100; i++) {
    const num = Math.floor(Math.random() * 10);
    const btn = document.createElement("button");
    btn.classList.add("btn")
    btn.textContent = num;
    main.appendChild(btn)
}

const target = document.getElementById("hit");
const scoreElement = document.getElementById("score");
let score = 0;

target.textContent = Math.floor(Math.random() * 10);

function generateNumbers() {
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.textContent = Math.floor(Math.random() * 10);
    });
}

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent == target.textContent) {
            score += 5;
            generateNumbers();
            target.textContent = Math.floor(Math.random() * 10); 
        } else {
            score -= 2; 
        }
        scoreElement.textContent = score;
    });
});
