document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.hidden');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0000001
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Array.from(elements).indexOf(entry.target) * 50;
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elements.forEach(element => observer.observe(element));
});

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

db.ref("match").on("value", (snapshot) => {
  const data = snapshot.val();
  if (!data) return;
  document.getElementById("inningsStatus").textContent = data.inningsStatus || '';
  document.getElementById("team1Button").textContent = data.team1Name || 'St. Sylvester\'s College\'s';
  document.getElementById("tossText").textContent = data.toss || '';
  document.getElementById("batter1").textContent = data.batter1 || '';
  document.getElementById("batter2").textContent = data.batter2 || '';
  document.getElementById("bowler").textContent = data.bowler || '';
  document.getElementById("totalRuns").textContent = data.totalRuns || '';
  document.getElementById("overs").textContent = data.overs || '';
  document.getElementById("extras").textContent = data.extras || '';
  document.getElementById("partnership").textContent = data.partnership || '';
  document.getElementById("last5").textContent = data.last5 || '';
  document.getElementById("firstInningsSummary").textContent = data.firstInningsSummary || '';
  document.getElementById("secondInningsSummary").textContent = data.secondInningsSummary || '';
  document.getElementById("interval").textContent = data.interval || '';

  // Dismissed Batters Table
  const dismissedTable = document.querySelector("#dismissedBattersTable tbody");
  dismissedTable.innerHTML = "";
  (data.dismissedBatters || []).forEach(b => {
    const row = `<tr><td>${b.name}</td><td>${b.runs}</td><td>${b.balls}</td><td>${b.dismissal}</td></tr>`;
    dismissedTable.innerHTML += row;
  });

  // Bowlers Table
  const bowlersTable = document.querySelector("#bowlersTable tbody");
  bowlersTable.innerHTML = "";
  (data.bowlers || []).forEach(b => {
    const row = `<tr><td>${b.name}</td><td>${b.overs}</td><td>${b.maidens}</td><td>${b.runs}</td><td>${b.wickets}</td></tr>`;
    bowlersTable.innerHTML += row;
  });
});

function facebook() {
  window.open("https://www.facebook.com/share/1GAWtrX8tL/", "_blank");
}

function instagram() {
  window.open("https://www.instagram.com/ssckict?igsh=MXBrejF1NDBlcDZzdA==", "_blank");
}

function youtube() {
  window.open("https://youtube.com/@vestersict?si=r7SCMfCdUJ26iOat", "_blank");
}

function about() {
  window.open("https://vits.lk/about.html", "_blank");
}

function contact() {
  window.open("https://vits.lk/about.html#contact", "_blank");
}
function vits() {
  window.open("https://vits.lk/", "_blank");
}