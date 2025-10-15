const lighter = document.getElementById("lighter");
const fuse = document.getElementById("fuse");
const burst = document.getElementById("burst");
const sound = document.getElementById("burst-sound");

let isDragging = false;

lighter.addEventListener("mousedown", () => (isDragging = true));
document.addEventListener("mouseup", () => (isDragging = false));

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  lighter.style.left = `${e.pageX - 25}px`;
  lighter.style.top = `${e.pageY - 25}px`;

  const lighterRect = lighter.getBoundingClientRect();
  const fuseRect = fuse.getBoundingClientRect();

  if (
    lighterRect.right > fuseRect.left &&
    lighterRect.left < fuseRect.right &&
    lighterRect.bottom > fuseRect.top &&
    lighterRect.top < fuseRect.bottom
  ) {
    burnFuse();
  }
});

function burnFuse() {
  fuse.style.background = "red";
  setTimeout(() => {
    burst.style.display = "block";
    sound.play();
    fuse.style.display = "none";
  }, 1000);
}
