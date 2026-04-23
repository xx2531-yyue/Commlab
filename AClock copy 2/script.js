const book = document.getElementById("book");
const startBtn = document.getElementById("startBtn");

const keySound = document.getElementById("keySound");
const enterSound = document.getElementById("enterSound");
const pageSound = document.getElementById("pageSound");

let currentLine;
let charCount = 0;
let lineCount = 0;
let timer = null;

function playSound(audioElement) {
  const sound = audioElement.cloneNode();
  sound.volume = 0.4;
  sound.play();
}

function updatePageNumber() {
  const now = new Date();
  const hours = now.getHours();

  let pageNumber = document.getElementById("pageNumber");
  if (!pageNumber) {
    pageNumber = document.createElement("div");
    pageNumber.id = "pageNumber";
    book.appendChild(pageNumber);
  }

  pageNumber.textContent = hours;
}

function startPage() {
  book.innerHTML = "";
  lineCount = 0;
  newLine(false);
}

// 新行
function newLine(play = true) {

  if (play) playSound(enterSound);

  currentLine = document.createElement("div");
  currentLine.classList.add("line");
  book.appendChild(currentLine);

  charCount = 0;
  lineCount++;
}

// 翻页
function newPage() {
  playSound(pageSound);
  startPage();
}

// 随机字母
function randomLetter() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
}

// ✅ 初始化到“当前真实时间”
function syncToRealTime() {

  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 👉 先补完整分钟（整行）
  for (let i = 0; i < minutes; i++) {
    newLine(false);

    for (let j = 0; j < 60; j++) {
      currentLine.textContent += randomLetter();

      if ((j + 1) % 10 === 0) {
        currentLine.textContent += " ";
      }
    }
  }

  // 👉 当前分钟（秒）
  newLine(false);

  for (let j = 0; j < seconds; j++) {
    currentLine.textContent += randomLetter();

    if ((j + 1) % 10 === 0) {
      currentLine.textContent += " ";
    }
  }

  charCount = seconds;
  lineCount = minutes + 1;
}

// 主逻辑
function startClock() {

  if (timer) return;

  startPage();

  // ✅ 时间同步（关键）
  syncToRealTime();

  // ✅ 每秒运行
  timer = setInterval(() => {

    const letter = randomLetter();
    currentLine.textContent += letter;
    charCount++;

    playSound(keySound);

    // 每10个字母加空格
    if (charCount % 10 === 0) {
      currentLine.textContent += " ";
    }

    // 换行 / 翻页
    if (charCount >= 60) {
      if (lineCount >= 60) {
        newPage();
      } else {
        newLine();
      }
    }

    // 更新页码（小时）
    updatePageNumber();

  }, 1000);
}

// 点击启动（解锁音频）
startBtn.addEventListener("click", () => {

  keySound.play().then(() => {
    keySound.pause();
    keySound.currentTime = 0;
  }).catch(() => {});

  startClock();
});