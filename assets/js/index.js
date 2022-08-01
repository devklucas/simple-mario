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
  
  if (PipePosition < 150 && MarioPosition < 30) {
    Mario.setAttribute("src", "./assets/img/game-over.png");
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


