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
  
  scenery.addEventListener("click", () => {
    pullUp()
  });
  
  Btn.addEventListener("click", () => {
    Modal.classList.add("invisible");
    document.location.reload(true);
  });