const allBtn = document.querySelectorAll("button");

const playBtn =
  "M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z";
const pauseBtn = "M6 4h4v16H6zM14 4h4v16h-4z";

allBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const svgPath = button.querySelector("path");

    const current = svgPath.getAttribute("d"); // current icon

    if (current === playBtn) {
      svgPath.setAttribute("d", pauseBtn);
    } else {
      svgPath.setAttribute("d", playBtn);
    }
  });
});
