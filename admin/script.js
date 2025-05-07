const firebaseConfig = {
  apiKey: "AIzaSyBiC2zD1pRdMT13EnRjUmCxv_ArBDJRM2s",
  authDomain: "big-match-live.firebaseapp.com",
  databaseURL: "https://big-match-live-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "big-match-live",
  storageBucket: "big-match-live.appspot.com",
  messagingSenderId: "1020321899771",
  appId: "1:1020321899771:web:2622d39926654dceec7c5e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function addDismissedRow() {
  const div = document.createElement('div');
  div.className = 'row-group';
  div.innerHTML = `
    <input type="text" placeholder="Name">
    <input type="number" placeholder="Runs">
    <input type="number" placeholder="Balls">
    <input type="text" placeholder="Dismissal">
  `;
  document.getElementById('dismissedContainer').appendChild(div);
}

function addBowlerRow() {
  const div = document.createElement('div');
  div.className = 'row-group';
  div.innerHTML = `
    <input type="text" placeholder="Name">
    <input type="number" placeholder="Overs">
    <input type="number" placeholder="Maidens">
    <input type="number" placeholder="Runs">
    <input type="number" placeholder="Wickets">
  `;
  document.getElementById('bowlersContainer').appendChild(div);
}

function updateScore() {
  const dismissedInputs = document.querySelectorAll('#dismissedContainer .row-group');
  const dismissed = [];
  dismissedInputs.forEach(group => {
    const inputs = group.querySelectorAll('input');
    const [name, runs, balls, dismissal] = Array.from(inputs).map(i => i.value.trim());
    if (name) dismissed.push({ name, runs: Number(runs), balls: Number(balls), dismissal });
  });

  const bowlerInputs = document.querySelectorAll('#bowlersContainer .row-group');
  const bowlers = [];
  bowlerInputs.forEach(group => {
    const inputs = group.querySelectorAll('input');
    const [name, overs, maidens, runs, wickets] = Array.from(inputs).map(i => i.value.trim());
    if (name) bowlers.push({
      name,
      overs: Number(overs),
      maidens: Number(maidens),
      runs: Number(runs),
      wickets: Number(wickets),
    });
  });

  db.ref("match").set({
    inningsStatus: document.getElementById('inningsStatus').value,
    team1Name: document.getElementById('team1Name').value,
    toss: document.getElementById('toss').value,
    batter1: document.getElementById('batter1').value,
    batter2: document.getElementById('batter2').value,
    bowler: document.getElementById('bowler').value,
    totalRuns: document.getElementById('runs').value,
    overs: document.getElementById('overs').value,
    extras: document.getElementById('extras').value,
    partnership: document.getElementById('partnership').value,
    last5: document.getElementById('last5').value,
    firstInningsSummary: document.getElementById("firstInningsSummary").value,
    secondInningsSummary: document.getElementById("secondInningsSummary").value,
    interval: document.getElementById('interval').value,
    dismissedBatters: dismissed,
    bowlers: bowlers
  }).then(() => {
    alert("Updated successfully!");
  }).catch((err) => {
    alert("Error: " + err.message);
    console.error(err);
  });
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login-sec");

document.getElementById("button").addEventListener("click", function () {
    event.preventDefault();

    const fail = document.getElementById("fail");
    const success = document.getElementById("success");

    if (username.value === "6969" && password.value === "guesswhat?") {
        success.style.visibility = "visible";
        success.style.opacity = "1";

        setTimeout(() => {
            login.style.opacity = "0";
            login.style.visibility = "hidden";
            login.style.display = "none";
        }, timeout = 2000);
    }else{
        fail.style.visibility = "visible";
        fail.style.opacity = "1";
    }
});

const close = document.getElementById("done");

document.getElementById("done").addEventListener("click", function () {
    
    fail.style.visibility = "hidden";
    fail.style.opacity = "0";
});

