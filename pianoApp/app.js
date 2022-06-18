const WHITE_KEYS = ["y", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "f", "g", "h"];

const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach(function (key) {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");

  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

document.addEventListener("keydown", (e) => {
  let key = e.key;
  let whiteKeysIndex = WHITE_KEYS.indexOf(key);
  let blackKeysIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeysIndex > -1) playNote(whiteKeys[whiteKeysIndex]);
  if (blackKeysIndex > -1) playNote(blackKeys[blackKeysIndex]);
});
