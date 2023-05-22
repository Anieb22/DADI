let email = ['anieb22@gmail.com', 'anielloverdino@gmail.com', 'booolean123@live.com', 'mario.rossi@live.com'];

let search = prompt('Inserire qui la tua email per verificare la registrazione');
let flag = false;

for(let i=0; i<email.length; i++){
    if(email[i].toLowerCase() === search.toLowerCase()){
        flag = true;
    }
}

if(flag === true){
    alert('registrazione effettuata');
}
else{
    alert('utente non trovato');
}