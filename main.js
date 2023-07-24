
const fetchTeams = () => {
    fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(console.log) 
}

fetchTeams()