let board = document.querySelector(".board");
const sounds = {};

let whiteKeyset = [
  "A0","B0",
  "C1","D1","E1","F1","G1","A1","B1",
  "C2","D2","E2","F2","G2","A2","B2",
  "C3","D3","E3","F3","G3","A3","B3",
  "C4","D4","E4","F4","G4","A4","B4",
  "C5","D5","E5","F5","G5","A5","B5",
  "C6","D6","E6","F6","G6","A6","B6",
  "C7","D7","E7","F7","G7","A7","B7",
  "C8"
];

for (let i = 0;i<whiteKeyset.length;i++){
  let key = document.createElement("div");
  let keyName = document.createElement("div");
  
  key.classList.add("key");
  keyName.classList.add("keyName");
  keyName.textContent = whiteKeyset[i];
  board.appendChild(key);
  key.appendChild(keyName);
  sounds[whiteKeyset[i]] = new Audio(`keys/${whiteKeyset[i]}.mp3`);
}

board.addEventListener("click", (event) => {
  const key = event.target.closest(".key");
  const note = key.textContent.trim();
  sounds[note].currentTime = 0;
  sounds[note].play();
});