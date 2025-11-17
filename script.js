// ...existing code...
function playSound(name) {
  const a = document.getElementById(name);
  if (!a) return;
  a.currentTime = 0;
  a.play();
}

// example key mapping
const keyMap = {
  A: "kick",
  S: "snare",
  D: "tom1",
  F: "tom2",
  G: "tom3",
  H: "tom4",
  I: "crash"
};

window.addEventListener("keydown", (e) => {
  const name = keyMap[e.key.toUpperCase()];
  if (name) {
    playSound(name);
    flashKey(name);
  }
});

// add click handlers to .key elements
document.querySelectorAll(".key").forEach((el) => {
  el.addEventListener("click", () => {
    const sound = el.dataset.sound;
    if (sound) {
      playSound(sound);
      el.classList.add("active");
      setTimeout(() => el.classList.remove("active"), 150);
    }
  });
});

// helper to flash the matching key by sound id
function flashKey(soundId) {
  const el = document.querySelector(`.key[data-sound="${soundId}"]`);
  if (!el) return;
  el.classList.add("active");
  setTimeout(() => el.classList.remove("active"), 150);
}
// ...existing code...