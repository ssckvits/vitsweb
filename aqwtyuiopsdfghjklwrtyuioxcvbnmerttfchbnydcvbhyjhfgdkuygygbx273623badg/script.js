 
    // Initialize Firebase
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

    // Tab functionality
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Bowler template
    const bowlerTemplate = (index = '', bowler = {}) => `
        <div class="bowler-row" data-index="${index}">
            <h3>Bowler ${index ? index : 'New'}</h3>
            <div class="form-grid">
                <div class="form-group">
                    <label for="bowlerName${index}">Name</label>
                    <input type="text" id="bowlerName${index}" value="${bowler.name || ''}" placeholder="Bowler name">
                </div>
                <div class="form-group">
                    <label for="bowlerOvers${index}">Overs</label>
                    <input type="text" id="bowlerOvers${index}" value="${bowler.overs || '0.0'}" placeholder="E.g., 7.2">
                </div>
                <div class="form-group">
                    <label for="bowlerMaidens${index}">Maidens</label>
                    <input type="text" id="bowlerMaidens${index}" value="${bowler.maidens || '0'}" placeholder="E.g., 1">
                </div>
                <div class="form-group">
                    <label for="bowlerRuns${index}">Runs</label>
                    <input type="text" id="bowlerRuns${index}" value="${bowler.runs || '0'}" placeholder="E.g., 32">
                </div>
                <div class="form-group">
                    <label for="bowlerWickets${index}">Wickets</label>
                    <input type="text" id="bowlerWickets${index}" value="${bowler.wickets || '0'}" placeholder="E.g., 2">
                </div>
                <div class="form-group">
                    <label for="bowlerEconomy${index}">Economy</label>
                    <input type="text" id="bowlerEconomy${index}" value="${bowler.economy || '0.00'}" placeholder="E.g., 4.36">
                </div>
                <div class="form-group">
                    <label for="bowlerDotBalls${index}">0s</label>
                    <input type="text" id="bowlerDotBalls${index}" value="${bowler.dotBalls || '0'}" placeholder="Dot balls">
                </div>
                <div class="form-group">
                    <label for="bowlerFoursConceded${index}">4s</label>
                    <input type="text" id="bowlerFoursConceded${index}" value="${bowler.foursConceded || '0'}" placeholder="4s conceded">
                </div>
                <div class="form-group">
                    <label for="bowlerSixesConceded${index}">6s</label>
                    <input type="text" id="bowlerSixesConceded${index}" value="${bowler.sixesConceded || '0'}" placeholder="6s conceded">
                </div>
            </div>
            <button class="btn btn-remove remove-bowler">Remove Bowler</button>
        </div>
    `;

    // Dismissed batter template
    const dismissedTemplate = (index = '', batter = {}) => `
        <div class="dismissed-row" data-index="${index}">
            <h3>Dismissed Batter ${index ? index : 'New'}</h3>
            <div class="form-grid">
                <div class="form-group">
                    <label for="dismissedName${index}">Name</label>
                    <input type="text" id="dismissedName${index}" value="${batter.name || ''}" placeholder="Batter name">
                </div>
                <div class="form-group">
                    <label for="dismissedRuns${index}">Runs</label>
                    <input type="text" id="dismissedRuns${index}" value="${batter.runs || '0'}" placeholder="E.g., 45">
                </div>
                <div class="form-group">
                    <label for="dismissedBalls${index}">Balls</label>
                    <input type="text" id="dismissedBalls${index}" value="${batter.balls || '0'}" placeholder="E.g., 38">
                </div>
                <div class="form-group">
                    <label for="dismissedFours${index}">4s</label>
                    <input type="text" id="dismissedFours${index}" value="${batter.fours || '0'}" placeholder="E.g., 5">
                </div>
                <div class="form-group">
                    <label for="dismissedSixes${index}">6s</label>
                    <input type="text" id="dismissedSixes${index}" value="${batter.sixes || '0'}" placeholder="E.g., 2">
                </div>
                <div class="form-group">
                    <label for="dismissedSR${index}">Strike Rate</label>
                    <input type="text" id="dismissedSR${index}" value="${batter.sr || '0'}" placeholder="E.g., 118.42">
                </div>
                <div class="form-group">
                    <label for="dismissal${index}">Dismissal</label>
                    <input type="text" id="dismissal${index}" value="${batter.dismissal || ''}" placeholder="E.g., b. Smith">
                </div>
            </div>
            <button class="btn btn-remove remove-dismissed">Remove Batter</button>
        </div>
    `;

    // Quick Score Update functionality
    let scoreHistory = [];

    // Toggle quick score panel
    document.getElementById('quickScoreToggle').addEventListener('click', () => {
        const panel = document.getElementById('quickScorePanel');
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    // Close quick score panel
    document.querySelector('.quick-score-close').addEventListener('click', () => {
        document.getElementById('quickScorePanel').style.display = 'none';
    });

    // Handle quick score buttons
    document.querySelectorAll('.quick-score-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const batter = document.getElementById('quickScoreBatter').value;
            const runs = btn.getAttribute('data-runs');
            
            if (!batter) {
                showStatus('Please select a batter first', 'error');
                return;
            }
            
            updateScore(batter, runs);
        });
    });

    // Function to calculate projected score
    function calculateProjectedScore() {
        const teamRunsText = document.getElementById('team1Runs').value || '0/0';
        const totalRuns = parseInt(teamRunsText.split('/')[0]) || 0;
        const oversBowled = parseFloat(document.getElementById('team1Overs').value) || 0.1;
        
        // Assuming a 50-over match (can be adjusted if needed)
        const totalOvers = 50;
        const remainingOvers = totalOvers - oversBowled;
        
        if (remainingOvers <= 0) {
            return totalRuns; // Match completed
        }
        
        const currentRunRate = parseFloat(document.getElementById('runRate').value) || 0;
        const projectedScore = Math.round(totalRuns + (currentRunRate * remainingOvers));
        
        return projectedScore;
    }

    // Update score based on quick input
    function updateScore(batter, runs) {
        // Save current state for undo
        saveCurrentState();
        
        // Get batter elements
        const runsElement = document.getElementById(`${batter}Runs`);
        const ballsElement = document.getElementById(`${batter}Balls`);
        const foursElement = document.getElementById(`${batter}four`);
        const sixesElement = document.getElementById(`${batter}six`);
        
        // Get current values
        let currentRuns = parseInt(runsElement.value) || 0;
        let currentBalls = parseInt(ballsElement.value) || 0;
        let currentFours = parseInt(foursElement.value) || 0;
        let currentSixes = parseInt(sixesElement.value) || 0;
        
        // Update based on run type
        if (runs === 'wicket') {
            // Handle wicket - move batter to dismissed section
            const batterName = document.getElementById(`${batter}Name`).value;
            if (!batterName) {
                showStatus('Please enter batter name first', 'error');
                return;
            }
            
            // Get bowler name for dismissal method
            const bowlerName = document.getElementById('bowlerName').value || 'Unknown';
            
            // Calculate strike rate
            const strikeRate = currentBalls > 0 ? ((currentRuns / currentBalls) * 100).toFixed(2) : '0';
            
            // Add to dismissed batters
            const dismissedContainer = document.getElementById('dismissedContainer');
            dismissedContainer.innerHTML += dismissedTemplate('', {
                name: batterName,
                runs: currentRuns,
                balls: currentBalls,
                fours: currentFours,
                sixes: currentSixes,
                sr: strikeRate,
                dismissal: `b. ${bowlerName}`
            });
            
            // Reset batter
            document.getElementById(`${batter}Name`).value = '';
            runsElement.value = '0';
            ballsElement.value = '0';
            foursElement.value = '0';
            sixesElement.value = '0';
            
            // Update bowler wickets
            updateBowlerStats('wicket');
            
            // Update team wickets count
            updateTeamWickets();
            
            showStatus(`${batterName} dismissed by ${bowlerName}!`, 'success');
        } else if (runs === 'wide') {
            // Handle wide - doesn't count as ball faced
            currentRuns += 1;
            runsElement.value = currentRuns;
            
            // Update team extras
            updateExtras(1);
            
            // Update bowler stats
            updateBowlerStats('wide');
            
            showStatus('Wide ball - +1 run', 'success');
        } else {
            // Normal runs
            const runValue = parseInt(runs);
            currentRuns += runValue;
            currentBalls += 1;
            
            runsElement.value = currentRuns;
            ballsElement.value = currentBalls;
            
            // Update fours/sixes if applicable
            if (runValue === 4) {
                currentFours += 1;
                foursElement.value = currentFours;
            } else if (runValue === 6) {
                currentSixes += 1;
                sixesElement.value = currentSixes;
            }
            
            // Update bowler stats
            updateBowlerStats(runValue);
            
            // Update partnership and team score
            updateTeamScore(runValue);
            
            showStatus(`Scored ${runValue} run${runValue !== 1 ? 's' : ''}`, 'success');
        }
        
        // Update strike rate automatically
        updateStrikeRate(batter);
        
        // Update projected score
        document.getElementById('projectedScore').value = calculateProjectedScore();
    }

    // Update team wickets count
    function updateTeamWickets() {
        const teamRunsElement = document.getElementById('team1Runs');
        const teamRunsText = teamRunsElement.value || '0/0';
        const [totalRuns, wickets] = teamRunsText.split('/').map(Number);
        
        // Increment wickets by 1
        teamRunsElement.value = `${totalRuns}/${wickets + 1}`;
        
        // Reset partnership
        document.getElementById('partnership').value = '0';
        
        // Update projected score
        document.getElementById('projectedScore').value = calculateProjectedScore();
    }

    // Save current state for undo functionality
    function saveCurrentState() {
        const state = {
            batter1: {
                name: document.getElementById('batter1Name').value,
                runs: document.getElementById('batter1Runs').value,
                balls: document.getElementById('batter1Balls').value,
                fours: document.getElementById('batter1four').value,
                sixes: document.getElementById('batter1six').value
            },
            batter2: {
                name: document.getElementById('batter2Name').value,
                runs: document.getElementById('batter2Runs').value,
                balls: document.getElementById('batter2Balls').value,
                fours: document.getElementById('batter2four').value,
                sixes: document.getElementById('batter2six').value
            },
            bowler: {
                name: document.getElementById('bowlerName').value,
                overs: document.getElementById('bowlerOvers').value,
                maidens: document.getElementById('bowlerMaidens').value,
                runs: document.getElementById('bowlerRuns').value,
                wickets: document.getElementById('bowlerWickets').value,
                economy: document.getElementById('bowlerEconomy').value
            },
            team1Runs: document.getElementById('team1Runs').value,
            team1Overs: document.getElementById('team1Overs').value,
            partnership: document.getElementById('partnership').value,
            extras: document.getElementById('extras').value,
            dismissedBatters: []
        };
        
        // Save current dismissed batters for undo
        document.querySelectorAll('.dismissed-row').forEach(row => {
            const idx = row.getAttribute('data-index');
            state.dismissedBatters.push({
                name: document.getElementById(`dismissedName${idx}`)?.value || '',
                runs: document.getElementById(`dismissedRuns${idx}`)?.value || '0',
                balls: document.getElementById(`dismissedBalls${idx}`)?.value || '0',
                fours: document.getElementById(`dismissedFours${idx}`)?.value || '0',
                sixes: document.getElementById(`dismissedSixes${idx}`)?.value || '0',
                sr: document.getElementById(`dismissedSR${idx}`)?.value || '0',
                dismissal: document.getElementById(`dismissal${idx}`)?.value || ''
            });
        });
        
        scoreHistory.push(state);
        
        // Keep only last 10 states to prevent memory issues
        if (scoreHistory.length > 10) {
            scoreHistory.shift();
        }
    }

    // Undo last action
    document.getElementById('quickScoreUndo').addEventListener('click', () => {
        if (scoreHistory.length === 0) {
            showStatus('Nothing to undo', 'error');
            return;
        }
        
        const lastState = scoreHistory.pop();
        
        // Restore batter1
        document.getElementById('batter1Name').value = lastState.batter1.name;
        document.getElementById('batter1Runs').value = lastState.batter1.runs;
        document.getElementById('batter1Balls').value = lastState.batter1.balls;
        document.getElementById('batter1four').value = lastState.batter1.fours;
        document.getElementById('batter1six').value = lastState.batter1.sixes;
        
        // Restore batter2
        document.getElementById('batter2Name').value = lastState.batter2.name;
        document.getElementById('batter2Runs').value = lastState.batter2.runs;
        document.getElementById('batter2Balls').value = lastState.batter2.balls;
        document.getElementById('batter2four').value = lastState.batter2.fours;
        document.getElementById('batter2six').value = lastState.batter2.sixes;
        
        // Restore bowler
        document.getElementById('bowlerName').value = lastState.bowler.name;
        document.getElementById('bowlerOvers').value = lastState.bowler.overs;
        document.getElementById('bowlerMaidens').value = lastState.bowler.maidens;
        document.getElementById('bowlerRuns').value = lastState.bowler.runs;
        document.getElementById('bowlerWickets').value = lastState.bowler.wickets;
        document.getElementById('bowlerEconomy').value = lastState.bowler.economy;
        
        // Restore team stats
        document.getElementById('team1Runs').value = lastState.team1Runs;
        document.getElementById('team1Overs').value = lastState.team1Overs;
        document.getElementById('partnership').value = lastState.partnership;
        document.getElementById('extras').value = lastState.extras;
        
        // Restore dismissed batters
        const dismissedContainer = document.getElementById('dismissedContainer');
        dismissedContainer.innerHTML = '';
        lastState.dismissedBatters.forEach((batter, index) => {
            dismissedContainer.innerHTML += dismissedTemplate(index + 1, batter);
        });
        
        // Update projected score
        document.getElementById('projectedScore').value = calculateProjectedScore();
        
        showStatus('Last action undone', 'success');
    });

    // Save quick updates
    document.getElementById('quickScoreSave').addEventListener('click', () => {
        saveAllData();
        document.getElementById('quickScorePanel').style.display = 'none';
    });

    // Update bowler stats
    function updateBowlerStats(runs) {
        const bowlerRuns = document.getElementById('bowlerRuns');
        const bowlerWickets = document.getElementById('bowlerWickets');
        const bowlerOvers = document.getElementById('bowlerOvers');
        
        let currentRuns = parseInt(bowlerRuns.value) || 0;
        let currentWickets = parseInt(bowlerWickets.value) || 0;
        let currentOvers = bowlerOvers.value || '0.0';
        
        if (runs === 'wicket') {
            currentWickets += 1;
            bowlerWickets.value = currentWickets;
        } else if (runs === 'wide') {
            currentRuns += 1;
            bowlerRuns.value = currentRuns;
        } else {
            currentRuns += runs;
            bowlerRuns.value = currentRuns;
            
            // Update overs (simplified - assumes each click is one ball)
            const [overs, balls] = currentOvers.split('.').map(Number);
            let newOvers = overs;
            let newBalls = (balls || 0) + 1;
            
            if (newBalls === 6) {
                newOvers += 1;
                newBalls = 0;
            }
            
            bowlerOvers.value = newBalls > 0 ? `${newOvers}.${newBalls}` : `${newOvers}.0`;
        }
        
        // Update economy rate
        const totalOvers = parseFloat(currentOvers) || 0.1; // Prevent division by zero
        const economy = (currentRuns / totalOvers).toFixed(2);
        document.getElementById('bowlerEconomy').value = economy;
    }

    // Update team score
    function updateTeamScore(runs) {
        if (typeof runs !== 'number') return;
        
        // Update team runs (format: "245/5")
        const teamRunsElement = document.getElementById('team1Runs');
        const teamRunsText = teamRunsElement.value || '0/0';
        const [totalRuns, wickets] = teamRunsText.split('/').map(Number);
        
        teamRunsElement.value = `${totalRuns + runs}/${wickets}`;
        
        // Update partnership
        const partnershipElement = document.getElementById('partnership');
        const currentPartnership = parseInt(partnershipElement.value) || 0;
        partnershipElement.value = currentPartnership + runs;
        
        // Update last 5 overs (simplified - just adding to total)
        const last5Element = document.getElementById('last5');
        const last5 = parseInt(last5Element.value) || 0;
        last5Element.value = last5 + runs;
        
        // Update run rate
        const oversElement = document.getElementById('team1Overs');
        const overs = parseFloat(oversElement.value) || 0.1; // Prevent division by zero
        const runRate = ((totalRuns + runs) / overs).toFixed(2);
        document.getElementById('runRate').value = runRate;
        
        // Update projected score
        document.getElementById('projectedScore').value = calculateProjectedScore();
    }

    // Update extras
    function updateExtras(amount) {
        const extrasElement = document.getElementById('extras');
        const currentExtras = parseInt(extrasElement.value) || 0;
        extrasElement.value = currentExtras + amount;
    }

    // Update strike rate
    function updateStrikeRate(batter) {
        const runs = parseInt(document.getElementById(`${batter}Runs`).value) || 0;
        const balls = parseInt(document.getElementById(`${batter}Balls`).value) || 0;
        
        if (balls > 0) {
            const strikeRate = ((runs / balls) * 100).toFixed(2);
            // You might want to display this somewhere or just calculate when needed
        }
    }

    // Load data from Firebase
    function loadData() {
        db.ref("match").once("value").then(snapshot => {
            const data = snapshot.val();
            if (!data) return;

            // Basic match info
            document.getElementById("matchTitle").value = data.matchTitle || '36th Battle of Babes - ODI Match';
            document.getElementById("team1Name").value = data.team1Name || 'St. Sylvester\'s College';
            document.getElementById("team2Name").value = data.team2Name || 'Vidyartha College';
            document.getElementById("toss").value = data.toss || '';
            document.getElementById("GroundName").value = data.GroundName || '';
            document.getElementById("matchDate").value = data.matchDate || '';
            document.getElementById("umpireName").value = data.umpireName || '';
            document.getElementById("inningsStatus").value = data.inningsStatus || '';

            // Match stats
            document.getElementById("team1Runs").value = data.team1Runs || '0/0';
            document.getElementById("team1Overs").value = data.team1Overs || '0.0';
            document.getElementById("partnership").value = data.partnership || '0';
            document.getElementById("last5").value = data.last5 || '0';
            document.getElementById("extras").value = data.extras || '0';
            document.getElementById("runRate").value = data.runRate || '0.00';
            document.getElementById("requiredRate").value = data.requiredRate || '0.00';
            document.getElementById("projectedScore").value = data.projectedScore || calculateProjectedScore();

            // Match summary
            document.getElementById("matchSituation").value = data.matchSituation || '';
            document.getElementById("keyMoment").value = data.keyMoment || '';
            document.getElementById("bestBatsman").value = data.bestBatsman || '';
            document.getElementById("bestBowler").value = data.bestBowler || '';

            // Current batters
            document.getElementById("batter1Name").value = data.batter1Name || '';
            document.getElementById("batter1Runs").value = data.batter1Runs || '0';
            document.getElementById("batter1Balls").value = data.batter1Balls || '0';
            document.getElementById("batter1four").value = data.batter1four || '0';
            document.getElementById("batter1six").value = data.batter1six || '0';

            document.getElementById("batter2Name").value = data.batter2Name || '';
            document.getElementById("batter2Runs").value = data.batter2Runs || '0';
            document.getElementById("batter2Balls").value = data.batter2Balls || '0';
            document.getElementById("batter2four").value = data.batter2four || '0';
            document.getElementById("batter2six").value = data.batter2six || '0';

            // Current bowler
            document.getElementById("bowlerName").value = data.bowlerName || '';
            document.getElementById("bowlerOvers").value = data.bowlerOvers || '0.0';
            document.getElementById("bowlerMaidens").value = data.bowlerMaidens || '0';
            document.getElementById("bowlerRuns").value = data.bowlerRuns || '0';
            document.getElementById("bowlerWickets").value = data.bowlerWickets || '0';
            document.getElementById("bowlerEconomy").value = data.bowlerEconomy || '0.00';

            // Bowlers
            const bowlersContainer = document.getElementById("bowlersContainer");
            bowlersContainer.innerHTML = '';
            
            if (data.bowlers && Array.isArray(data.bowlers)) {
                data.bowlers.forEach((bowler, index) => {
                    bowlersContainer.innerHTML += bowlerTemplate(index + 1, bowler);
                });
            }

            // Dismissed batters
            const dismissedContainer = document.getElementById("dismissedContainer");
            dismissedContainer.innerHTML = '';
            
            if (data.dismissedBatters && Array.isArray(data.dismissedBatters)) {
                data.dismissedBatters.forEach((batter, index) => {
                    dismissedContainer.innerHTML += dismissedTemplate(index + 1, batter);
                });
            }
            
            // Reset score history when loading new data
            scoreHistory = [];
            
            // Calculate initial projected score
            document.getElementById("projectedScore").value = calculateProjectedScore();
        });
    }

    // Add bowler
    document.getElementById("addBowlerBtn").addEventListener('click', () => {
        const bowlersContainer = document.getElementById("bowlersContainer");
        bowlersContainer.innerHTML += bowlerTemplate();
    });

    // Add dismissed batter
    document.getElementById("addDismissedBtn").addEventListener('click', () => {
        const dismissedContainer = document.getElementById("dismissedContainer");
        dismissedContainer.innerHTML += dismissedTemplate();
    });

    // Remove bowler (event delegation)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-bowler')) {
            e.target.closest('.bowler-row').remove();
        }
        
        if (e.target.classList.contains('remove-dismissed')) {
            e.target.closest('.dismissed-row').remove();
        }
    });

    // Save all data
    function saveAllData() {
        const matchData = {
            // Basic match info
            matchTitle: document.getElementById("matchTitle").value,
            team1Name: document.getElementById("team1Name").value,
            team2Name: document.getElementById("team2Name").value,
            toss: document.getElementById("toss").value,
            GroundName: document.getElementById("GroundName").value,
            matchDate: document.getElementById("matchDate").value,
            umpireName: document.getElementById("umpireName").value,
            inningsStatus: document.getElementById("inningsStatus").value,

            // Match stats
            team1Runs: document.getElementById("team1Runs").value,
            team1Overs: document.getElementById("team1Overs").value,
            partnership: document.getElementById("partnership").value,
            last5: document.getElementById("last5").value,
            extras: document.getElementById("extras").value,
            runRate: document.getElementById("runRate").value,
            requiredRate: document.getElementById("requiredRate").value,
            projectedScore: document.getElementById("projectedScore").value,

            // Match summary
            matchSituation: document.getElementById("matchSituation").value,
            keyMoment: document.getElementById("keyMoment").value,
            bestBatsman: document.getElementById("bestBatsman").value,
            bestBowler: document.getElementById("bestBowler").value,

            // Current batters
            batter1Name: document.getElementById("batter1Name").value,
            batter1Runs: document.getElementById("batter1Runs").value,
            batter1Balls: document.getElementById("batter1Balls").value,
            batter1four: document.getElementById("batter1four").value,
            batter1six: document.getElementById("batter1six").value,

            batter2Name: document.getElementById("batter2Name").value,
            batter2Runs: document.getElementById("batter2Runs").value,
            batter2Balls: document.getElementById("batter2Balls").value,
            batter2four: document.getElementById("batter2four").value,
            batter2six: document.getElementById("batter2six").value,

            // Current bowler
            bowlerName: document.getElementById("bowlerName").value,
            bowlerOvers: document.getElementById("bowlerOvers").value,
            bowlerMaidens: document.getElementById("bowlerMaidens").value,
            bowlerRuns: document.getElementById("bowlerRuns").value,
            bowlerWickets: document.getElementById("bowlerWickets").value,
            bowlerEconomy: document.getElementById("bowlerEconomy").value,

            // Bowlers
            bowlers: [],
            
            // Dismissed batters
            dismissedBatters: []
        };

        // Collect bowlers data
        document.querySelectorAll('.bowler-row').forEach((row, index) => {
            const idx = row.getAttribute('data-index') || index + 1;
            matchData.bowlers.push({
                name: document.getElementById(`bowlerName${idx}`)?.value || '',
                overs: document.getElementById(`bowlerOvers${idx}`)?.value || '0.0',
                maidens: document.getElementById(`bowlerMaidens${idx}`)?.value || '0',
                runs: document.getElementById(`bowlerRuns${idx}`)?.value || '0',
                wickets: document.getElementById(`bowlerWickets${idx}`)?.value || '0',
                economy: document.getElementById(`bowlerEconomy${idx}`)?.value || '0.00',
                dotBalls: document.getElementById(`bowlerDotBalls${idx}`)?.value || '0',
                foursConceded: document.getElementById(`bowlerFoursConceded${idx}`)?.value || '0',
                sixesConceded: document.getElementById(`bowlerSixesConceded${idx}`)?.value || '0'
            });
        });

        // Collect dismissed batters data
        document.querySelectorAll('.dismissed-row').forEach((row, index) => {
            const idx = row.getAttribute('data-index') || index + 1;
            matchData.dismissedBatters.push({
                name: document.getElementById(`dismissedName${idx}`)?.value || '',
                runs: document.getElementById(`dismissedRuns${idx}`)?.value || '0',
                balls: document.getElementById(`dismissedBalls${idx}`)?.value || '0',
                fours: document.getElementById(`dismissedFours${idx}`)?.value || '0',
                sixes: document.getElementById(`dismissedSixes${idx}`)?.value || '0',
                sr: document.getElementById(`dismissedSR${idx}`)?.value || '0',
                dismissal: document.getElementById(`dismissal${idx}`)?.value || ''
            });
        });

        // Save to Firebase
        db.ref("match").set(matchData)
            .then(() => {
                showStatus('Data saved successfully!', 'success');
            })
            .catch(error => {
                showStatus('Error saving data: ' + error.message, 'error');
            });
    }

    document.getElementById("saveAllBtn").addEventListener('click', saveAllData);

    // Reset form
    document.getElementById("resetBtn").addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all changes?')) {
            loadData();
            showStatus('Form reset to last saved values', 'success');
        }
    });

    // Show status message
    function showStatus(message, type) {
        const statusElement = document.getElementById("statusMessage");
        statusElement.textContent = message;
        statusElement.className = 'status-message ' + type;
        
        setTimeout(() => {
            statusElement.textContent = '';
            statusElement.className = 'status-message';
        }, 5000);
    }

    // Load data when page loads
    window.addEventListener('load', loadData);