$(document).ready(function () {
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#number').text(Random);
    
var GeneratedNumbers = []
var total = 0;
var wins = 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//sets up random numbers for each TMNT
function fourRandomNumbers() {
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 13 + 1);
        GeneratedNumbers.push(num);
    }
}