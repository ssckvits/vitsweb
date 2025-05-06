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
    document.getElementById("team1Button").textContent = data.team1Name || 'St. Sylvester\'s';
    document.getElementById("tossText").textContent = data.toss || '';
    document.getElementById("batter1").textContent = data.batter1 || '';
    document.getElementById("batter2").textContent = data.batter2 || '';
    document.getElementById("bowler").textContent = data.bowler || '';
    document.getElementById("totalRuns").textContent = data.totalRuns || '';
    document.getElementById("overs").textContent = data.overs || '';
    document.getElementById("extras").textContent = data.extras || '';
    document.getElementById("partnership").textContent = data.partnership || '';
    document.getElementById("last5").textContent = data.last5 || '';

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
      const row = `<tr><td>${b.name}</td><td>${b.overs}</td><td>${b.maidens}</td><td>${b.runs}</td><td>${b.wickets}</td><td>${b.economy}</td></tr>`;
      bowlersTable.innerHTML += row;
    });
  }); 