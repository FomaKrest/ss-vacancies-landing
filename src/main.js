const vacancies = ["web-programmer", "sales", "smm"]

for (vacancy of vacancies) {
  const popUp = document.querySelector(`.${vacancy}-popup`);
  const popUpBody = popUp.querySelector(".pop-up-body")
  const open = document.querySelector(`.${vacancy}-open`);
  const close = document.querySelector(`.${vacancy}-close`);

  open.addEventListener("click", (e) => {
    e.preventDefault();
    popUp.classList.add("active");
  })

  close.addEventListener("click", () => {
    popUp.classList.remove("active");
  })

  popUp.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(popUpBody);
   
    if ( ! withinBoundaries ) {
      console.log("Clicked")
      popUp.classList.remove("active");
    }
    
  })
}

