let player = Math.floor(Math.random() * 6);
console.log(player)
let computer = Math.floor(Math.random() * 6);
console.log (computer)

if (player === computer){
    console.log ('Parità')
}

else if (player < computer){
    console.log ('Hai perso')
}

else if(player > computer)
    console.log ('Hai vinto')