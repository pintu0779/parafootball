
const clubContainer=document.getElementById("clubList")

if(clubContainer){
clubs.forEach(c=>{
clubContainer.innerHTML+=`
<div class="club">
<img src="${c.photo}">
<h3>${c.name}</h3>
<p>${c.address}</p>
<p>ESTD ${c.estd}</p>
<a href="club.html?id=${c.id}">View Players</a>
</div>
`
})
}

const params=new URLSearchParams(window.location.search)
const clubId=params.get("id")

if(clubId){
const club=clubs.find(c=>c.id==clubId)
document.getElementById("clubName").innerText=club.name

const table=document.getElementById("playerTable")

club.players.forEach(p=>{
table.innerHTML+=`
<tr>
<td><img src="${p.photo}" class="player-photo"></td>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.dob}</td>
<td>${p.phone}</td>
<td>${p.address}</td>
<td>${p.match}</td>
<td>${p.goal}</td>
</tr>
`
})
}

const allPlayers=document.getElementById("allPlayers")

if(allPlayers){
clubs.forEach(c=>{
c.players.forEach(p=>{
allPlayers.innerHTML+=`
<tr>
<td><img src="${p.photo}" class="player-photo"></td>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${c.name}</td>
<td>${p.dob}</td>
<td>${p.phone}</td>
</tr>
`
})
})
}
