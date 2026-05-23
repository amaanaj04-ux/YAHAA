const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const btnKahan = document.getElementById("btn-kahan");
const choices = document.getElementById("choices");
const yahannScreen = document.getElementById("yahann-screen");

function removeButton(btn) {
  btn.classList.add("removed");
  setTimeout(() => btn.remove(), 220);
}

function moveKahanElsewhere() {
  const padding = 80;
  const maxX = window.innerWidth - btnKahan.offsetWidth - padding;
  const maxY = window.innerHeight - btnKahan.offsetHeight - padding;
  const minX = padding;
  const minY = padding;

  const x = minX + Math.random() * Math.max(0, maxX - minX);
  const y = minY + Math.random() * Math.max(0, maxY - minY);

  if (!btnKahan.classList.contains("floating")) {
    choices.removeChild(btnKahan);
    document.body.appendChild(btnKahan);
    btnKahan.classList.add("floating");
  }

  btnKahan.style.left = `${x}px`;
  btnKahan.style.top = `${y}px`;
}

btnYes.addEventListener("click", () => {
  removeButton(btnYes);
  moveKahanElsewhere();
});

btnNo.addEventListener("click", () => {
  removeButton(btnNo);
  moveKahanElsewhere();
});

btnKahan.addEventListener("click", () => {
  yahannScreen.classList.remove("hidden");
  yahannScreen.setAttribute("aria-hidden", "false");
});
