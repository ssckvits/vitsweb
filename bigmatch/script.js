const firebaseConfig = {
    apiKey: "AIzaSyCmiP5PvgGnYbCJ8UGXf9OJwTlbaOQW6TE",
    authDomain: "livecricketscoree-b6a55.firebaseapp.com",
    databaseURL: "https://livecricketscoree-b6a55-default-rtdb.firebaseio.com",
    projectId: "livecricketscoree-b6a55",
    storageBucket: "livecricketscoree-b6a55.firebasestorage.app",
    messagingSenderId: "688421882959",
    appId: "1:688421882959:web:25fdd0cf8bd15a61a2ee3a"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Voting function
function voteTeam(team) {
    try {
        if (!team || !['SSC', 'VC'].includes(team)) {
            throw new Error('Invalid team selection');
        }

        if (localStorage.getItem('hasVoted')) {
            alert('You have already voted!');
            return;
        }

        const teamRef = db.ref('pollVotes/' + team);
        teamRef.transaction((currentVotes) => {
            return (currentVotes || 0) + 1;
        }).then(() => {
            localStorage.setItem('hasVoted', 'true');
            document.querySelectorAll('.poll-btn').forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
            });
        }).catch(error => {
            console.error('Vote failed:', error);
            alert('Failed to submit vote. Please try again.');
        });
    } catch (error) {
        console.error('Voting error:', error);
        alert('Error submitting vote: ' + error.message);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('hasVoted')) {
        document.querySelectorAll('.poll-btn').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.6';
            btn.style.cursor = 'not-allowed';
        });
    }
});
/// Real-time poll result updates (original code)
const pollRef = db.ref('pollVotes');
pollRef.on('value', (snapshot) => {
    const data = snapshot.val() || { SSC: 0, VC: 0 };
    document.getElementById('votesSSC').textContent = data.SSC;
    document.getElementById('votesVC').textContent = data.VC;

    const total = data.SSC + data.VC;
    const percentSSC = total ? ((data.SSC / total) * 100).toFixed(1) : 0;
    const percentVC = total ? ((data.VC / total) * 100).toFixed(1) : 0;

    document.getElementById('percentSSC').style.width = percentSSC + '%';
    document.getElementById('percentSSC').textContent = percentSSC + '%';
    document.getElementById('percentVC').style.width = percentVC + '%';
    document.getElementById('percentVC').textContent = percentVC + '%';
});

db.ref("match").on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    // Update basic match info
    document.getElementById("inningsStatus").textContent = data.inningsStatus || '';
    document.getElementById("tossText").textContent = data.toss || '';
    document.getElementById("GroundName").textContent = data.GroundName || '';
    document.getElementById("teamName").textContent = data.team1Name || 'St. Sylvester\'s'; // Corrected ID
    document.getElementById("team1Runs").textContent = data.team1Runs || '0/0';
    document.getElementById("team1Overs").textContent = `(${data.team1Overs || '0.0'} overs)`;
    document.getElementById("umpireName").textContent = data.umpireName || '';
    document.getElementById("matchDate").textContent = data.matchDate || '';

    // Update batter information
    document.getElementById("batter1Name").textContent = data.batter1Name || '';
    document.getElementById("batter1Runs").textContent = data.batter1Runs || '0';
    document.getElementById("batter1Balls").textContent = `${data.batter1Balls || '0'} balls`;
    document.getElementById("batter1four").textContent = `${data.batter1four || '0'} Four`;
    document.getElementById("batter1six").textContent = `${data.batter1six || '0'} Six`;

    document.getElementById("batter2Name").textContent = data.batter2Name || '';
    document.getElementById("batter2Runs").textContent = data.batter2Runs || '0';
    document.getElementById("batter2Balls").textContent = `${data.batter2Balls || '0'} balls`;
    document.getElementById("batter2four").textContent = `${data.batter2four || '0'} Four`;
    document.getElementById("batter2six").textContent = `${data.batter2six || '0'} Six`;

    // Update bowler information
    document.getElementById("bowlerName").textContent = data.bowlerName || '';
    document.getElementById("bowlerOvers").textContent = data.bowlerOvers || '0.0';
    document.getElementById("bowlerMaidens").textContent = data.bowlerMaidens || '0';
    document.getElementById("bowlerRuns").textContent = data.bowlerRuns || '0';
    document.getElementById("bowlerWickets").textContent = data.bowlerWickets || '0';
    document.getElementById("bowlerEconomy").textContent = data.bowlerEconomy || '0.00';

    // Update match stats
    document.getElementById("partnership").textContent = data.partnership || '0';
    document.getElementById("last5").textContent = data.last5 || '0';
    document.getElementById("extras").textContent = data.extras || '0';
    document.getElementById("runRate").textContent = data.runRate || '0.00';
    document.getElementById("requiredRate").textContent = data.requiredRate || '0.00';
    document.getElementById("projectedScore").textContent = data.projectedScore || '-';

    // Update summary cards
    document.getElementById("matchSituation").textContent = data.matchSituation || '';
    document.getElementById("keyMoment").textContent = data.keyMoment || '';
    document.getElementById("bestBatsman").textContent = data.bestBatsman || '';
    document.getElementById("bestBowler").textContent = data.bestBowler || '';

    // Update dismissed batters table
    const dismissedTable = document.querySelector("#dismissedBattersTable tbody");
    dismissedTable.innerHTML = "";
    (data.dismissedBatters || []).forEach(b => {
        const row = `<tr>
                    <td>${b.name || ''}</td>
                    <td>${b.runs || '0'}</td>
                    <td>${b.balls || '0'}</td>
                    <td>${b.fours || '0'}</td>
                    <td>${b.sixes || '0'}</td>
                    <td>${b.sr || '0'}</td>
                    <td>${b.dismissal || ''}</td>
                </tr>`;
        dismissedTable.innerHTML += row;
    });

    // Update bowlers table
    const bowlersTable = document.querySelector("#bowlersTable tbody");
    bowlersTable.innerHTML = "";
    (data.bowlers || []).forEach(b => {
        const row = `<tr>
                    <td>${b.name || ''}</td>
                    <td>${b.overs || '0.0'}</td>
                    <td>${b.maidens || '0'}</td>
                    <td>${b.runs || '0'}</td>
                    <td>${b.wickets || '0'}</td>
                    <td>${b.economy || '0.00'}</td>
                    <td>${b.dotBalls || '0'}</td>
                    <td>${b.foursConceded || '0'}</td>
                    <td>${b.sixesConceded || '0'}</td>
                </tr>`;
        bowlersTable.innerHTML += row;
    });
});

// Add theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
}