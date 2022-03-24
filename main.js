const url = "https://api.npoint.io/20c1afef1661881ddc9c";
async function allData() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.playerList);
    let playersAllData = data.playerList;

    playersAllData.sort(function (a, b) {
        return a.Value - b.Value;
    }); // sorting

    displayteam(playersAllData);
}
allData();
let main_div = document.getElementById("teamDiv");
function displayteam(allData) {
    allData.forEach((single) => {
        let div = document.createElement("div");
        div.classList.add("player_d");
        let image = document.createElement("img");
        image.src = "./player-images/" + `${single.Id}` + ".jpg";
        let fullName = document.createElement("p");
        fullName.innerText = "Name - " + single.PFName;
        let skillName = document.createElement("p");
        skillName.innerText = "Skill - " + single.SkillDesc;
        let value = document.createElement("p");
        value.innerText = "Value - " + single.Value;
        let upcomeMatches = document.createElement("p");
        upcomeMatches.innerText = `Upcoming Match - ${single.UpComingMatchesList[0].CCode} Vs ${single.UpComingMatchesList[0].VsCCode}`;
        div.append(image, fullName, skillName, value, upcomeMatches); /////// append
        main_div.appendChild(div);
    });
}
function sortLtoH() {
    playersAllData.sort(function (a, b) {
        return a.Value - b.Value;
    });
    displayteam(playersAllData);
}
sortLtoH();