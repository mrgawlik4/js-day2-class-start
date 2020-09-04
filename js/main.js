//main.js for learing JS in Day 2
// var x = 2;
// var userName = "steven";
// var htmlBuilder = "";

teams = ["Braves","Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


console.log(teams);
console.log(wins);
console.log(wins[x]);

//logic to determin the team with the most wins.

var tempHighWins = 0;
var tempLeader = 0;
var tempHighLosses = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){

    tempHighWins = wins[i];
    tempLeader = i;
    tempHighLosses = losses[i];
  }
}
console.log(tempHighWins + teams[tempLeader] + tempHighLosses);
console.log("The team with the most wins of " + tempHighWins + " is " + teams[tempLeader]);



htmlBuilder = '<h2>Teams:</h2>';
htmlBuilder += '<div class="team-list">';
htmlBuilder += '<table>';
htmlBuilder += "<tr>" + "<th>" + "Team" + "</th>" + "<th>" + "Wins" + "</th>" + "<th>" + "Losses" + "</th>" + "</tr>";

for (var i=0; i<teams.length; i++){
  console.log(teams[i]);
  console.log(wins[i]);
  if(wins[i] == tempHighWins){
    htmlBuilder += "<tr>" + "<td>" + "<strong>"+ teams[i] + "</strong>" + "</td>" + "<td>" + "<strong>"+ wins[i] + "</strong>" + "</td>" + "<td>" + "<strong>"+ losses[i] + "</strong>" + "</td>" + "</tr>";
  }else{
    htmlBuilder += "<tr>" + "<td>" + teams[i] + "</td>" + "<td>" + wins[i] + "</td>" + "<td>" + losses[i] + "</td>" + "</tr>";
  }
}
htmlBuilder += '</table>'
htmlBuilder += "</div>";

document.getElementById('teams').innerHTML=htmlBuilder;
console.log(htmlBuilder);
