document.addEventListener("DOMContentLoaded", function() {
    fetch("data/teams.json")
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById("teams-container");
            data.teams.forEach(team => {
                const teamDiv = document.createElement("div");
                teamDiv.classList.add("team");
                teamDiv.innerHTML = `
                    <img src="${team.logo}" alt="${team.name}">
                    <h3>${team.name}</h3>
                    <a href="pages/team.html?team=${team.name}">View Team</a>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => console.error("Error loading teams:", error));
});
