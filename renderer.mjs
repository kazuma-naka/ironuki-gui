let lastDetectedHex = "#FFFFFF";

function getReadableTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
}

window.api.getColorData(({ hex }) => {
  const currentHex = `#${hex}`;
  const windowElement = document.getElementById("window");
  const colorHex = document.getElementById("color-hex");

  lastDetectedHex = currentHex;
  windowElement.style.backgroundColor = currentHex;
  colorHex.textContent = currentHex;
  colorHex.style.color = getReadableTextColor(currentHex);
});

window.api.onWindowResize((newSize) => {
  const windowElement = document.getElementById("window");
  windowElement.style.width = `${newSize.width}px`;
  windowElement.style.height = `${newSize.height}px`;
});

document.getElementById("close-btn").addEventListener("click", (event) => {
  event.stopPropagation();
  window.api.closeWindow();
});

document.getElementById("window").addEventListener("click", () => {
  window.api.copyColor(lastDetectedHex);
  showToast(`${lastDetectedHex}`);
});

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
