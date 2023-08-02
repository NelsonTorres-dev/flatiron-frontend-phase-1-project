


//render to page
//click event to see rest of team details
//form to add new teams
const fetchTeams = () => {
    fetch("http://localhost:3000/teams")
    .then(response => response.json())
    .then(teams => renderTeams(teams)) 
}

fetchTeams()

const form = document.querySelector('#addNewTeam')
const addNewTeam = (e) =>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const year_founded = document.querySelector('#year_founded').value
    const coach = document.querySelector('#coach').value
    const keeper = document.querySelector('#keeper').value
    const imageURl = document.querySelector('#image').value

const newTeam = { name,  year_founded,  coach,  keeper,  imageURl}
    fetch('http://localhost:3000/teams',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newTeam)
    })
    .then(response => response.json())
    .then(newTeam => renderAllTeams(newTeam))
    form.reset()
    }


form.addEventListener('submit', addNewTeam)


//Dom Render Functions
function renderAllTeams(team){
    //build teams
    let divElement = document.createElement('div')
    divElement.className = 'card'
    let h3 = document.createElement('h3')
    h3.textContent = team.name
    let img = document.createElement('img')
    img.src = team.imageURl
    let button = document.createElement('button')
    button.textContent = 'hide'
    let div = document.createElement('div')
    div.className = 'content'
    let p = document.createElement('p')
    p.textContent = team.year_founded
    let teamCoachP = document.createElement('p')
    teamCoachP.textContent = team.coach

    divElement.append(h3,img,div,button)
    div.append(p,teamCoachP)
    
    document.querySelector('#teams-list').appendChild(divElement)
    
    // card.innerHTML = ` 
    //     <h3>${team.name}</h3>
    //     <img src="${team.imageURl}">
    //     <div class="content">
    //     <p>${team.year_founded}</p>
    //     <p>${team.coach}</p>
    //     </div>
    //     `
    //Add teams card to DOM
    
}

//render teams to page
function renderTeams(teams){
    teams.forEach(team => renderAllTeams(team));
}

