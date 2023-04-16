prompt("whats your name");
prompt("whats their name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore + 1);

if (loveScore > 70) {
console.log("Your love score is " + loveScore + "%, You love each other.");
}
else{
    console.log("Your love score is " + loveScore + "%.");
}