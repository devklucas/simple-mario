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