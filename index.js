let Count = 00;
Counter.innerText = Count;
const pullUp = () => {
  Mario.classList.add("tojump");
  setTimeout(() => Mario.classList.remove("tojump"), 1000);
};


const Observer = setInterval(() => {
  const PipePosition = Pipe.offsetLeft;
  const MarioPosition = window.getComputedStyle(Mario).bottom.replace("px", "");
  Count = (+Count + 0.05).toFixed(2);
  Counter.innerText = Count;

  if (PipePosition < 180 && MarioPosition < 45) {
    Mario.setAttribute("src", "./assests/game-over.png");
    Mario.style.animation = "none";
    Pipe.style.left = `${MarioPosition}px`;
    Pipe.style.animation = "none";
    Cloud.style.animation = "none";
    Modal.classList.remove("invisible");
    Counter.classList.add("invisible");
    Points.innerText = `Você fez ${Count} pontos`;
    clearInterval(Observer);
  }
}, 10);

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    if (name === "ArrowUp") {
      pullUp();
    }
  },
  false
);

Btn.addEventListener("click", () => {
  Modal.classList.add("invisible");
  document.location.reload(true);
});
