const dicts = [
  "the",
  "be",
  "of",
  "and",
  "a",
  "to",
  "in",
  "he",
  "have",
  "it",
  "that",
  "for",
  "they",
  "I",
  "with",
  "as",
  "not",
  "on",
  "she",
  "at",
  "by",
  "this",
  "we",
  "you",
  "do",
  "but",
  "from",
  "or",
  "which",
  "one",
  "would",
  "all",
  "will",
  "there",
  "say",
  "who",
  "make",
  "when",
  "can",
  "more",
  "if",
  "no",
  "man",
  "out",
  "other",
  "so",
  "what",
  "time",
  "up",
  "go",
  "about",
  "than",
  "into",
  "could",
  "state",
  "only",
  "new",
  "year",
  "some",
  "take",
  "come",
  "these",
  "know",
  "see",
  "use",
  "get",
  "like",
  "then",
  "first",
  "any",
  "work",
  "now",
  "may",
  "such",
  "give",
  "over",
  "think",
  "most",
  "even",
  "find",
  "day",
  "also",
  "after",
  "way",
  "many",
  "must",
  "look",
  "before",
  "great",
  "back",
  "through",
  "long",
  "where",
  "much",
  "should",
  "well",
  "people",
  "down",
  "own",
  "just",
  "because",
  "good",
  "each",
  "those",
  "feel",
  "seem",
  "how",
  "high",
  "too",
  "place",
  "little",
  "world",
  "very",
  "still",
  "nation",
  "hand",
  "old",
  "life",
  "tell",
  "write",
  "become",
  "here",
  "show",
  "house",
  "both",
  "between",
  "need",
  "mean",
  "call",
  "develop",
  "under",
  "last",
  "right",
  "move",
  "thing",
  "general",
  "school",
  "never",
  "same",
  "another",
  "begin",
  "while",
  "number",
  "part",
  "turn",
  "real",
  "leave",
  "might",
  "want",
  "point",
  "form",
  "off",
  "child",
  "few",
  "small",
  "since",
  "against",
  "ask",
  "late",
  "home",
  "interest",
  "large",
  "person",
  "end",
  "open",
  "public",
  "follow",
  "during",
  "present",
  "without",
  "again",
  "hold",
  "govern",
  "around",
  "possible",
  "head",
  "consider",
  "word",
  "program",
  "problem",
  "however",
  "lead",
  "system",
  "set",
  "order",
  "eye",
  "plan",
  "run",
  "keep",
  "face",
  "fact",
  "group",
  "play",
  "stand",
  "increase",
  "early",
  "course",
  "change",
  "help",
  "line",
];

let words = [];
let check = [];

const explosion = document.getElementById("explosion");
const bg = document.getElementById("background");
const lose = document.getElementById("lose");
const enter = document.getElementById("enter");
const mainElem = document.querySelector(".main");
const inputType = document.querySelector("input");
const scoreElem = document.querySelector(".score");
const btnType = document.querySelector(".btn");
const dictSize = dicts.length;
let i = 0;

bg.play();

play = setInterval(() => {
  run();
  setTimeout(() => {
    falling();
  }, 100);
}, 2000);

function run() {
  let random = randomNum(0, dictSize);
  words.push(dicts[random]);
  check.push(dicts[random]);
  createWord(words[i]);
  i++;
  // console.log(words)
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createWord(word) {
  const createElem = document.createElement("a-word");
  createElem.innerText = word;
  createElem.dataset.top = 0;
  createElem.style.setProperty("--l", randomNum(2, 9));
  mainElem.appendChild(createElem);
}

function falling() {
  let element = document.querySelectorAll("a-word");
  for (let el of element) {
    let nextTop = parseInt(el.dataset.top) + 1;
    if (nextTop == 4) {
      el.dataset.status = 0;
      el.style.opacity = 0;
      el.style.transition = "opacity .5s linear";
    } else {
      el.dataset.top = nextTop;
      el.style.top = nextTop * 20 + "%";
    }
  }
  powerLife();
}

let count = 0;
let countCheck = 1;
function powerLife() {
  let checkElem = document.querySelectorAll('a-word[data-status="0"]');
  let heartElem = document.querySelectorAll(".heart");
  let gameElem = document.querySelector("game-over");
  let checkSize = checkElem.length;

  if (checkSize == countCheck) {
    explosion.play();
    heartElem[count].style.background = "transparent";
    heartElem[count].dataset.x = 0;
    count++;
    countCheck++;
  }

  let heartCheck = document.querySelectorAll('.heart[data-x="0"]');
  if (heartCheck.length == 5) {
    lose.play();
    clearInterval(play);
    removeAllChildNodes(mainElem);
    gameElem.classList.add("show-end");
    document.querySelector(".t_rex").style.backgroundImage =
      "url('https://media.discordapp.net/attachments/806442516307902495/807226094599798855/20210205_192536.gif?width=397&height=397')";
    document.querySelector(".show-end").addEventListener("click", function () {
      window.location.reload(false);
    });
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
let score = 0;
document.body.onkeydown = (e) => {
  if (e.code == "Enter") {
    let checkWord = check.indexOf(inputType.value);
    if (checkWord != -1) {
      enter.volume = 0.5;
      enter.play();
      console.log(checkWord);
      check.splice(checkWord, 1);
      document.querySelectorAll("a-word")[checkWord].remove();
      score += 100;
      scoreElem.textContent = "Score " + score;
    }
    inputType.value = null;
  }
};
