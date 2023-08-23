const button1 = document.querySelector('.button1');
const Nom = document.querySelector('.Nom');
const Prenom = document.querySelector('.Prenom');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const age = document.querySelector('.age');
const Humain= document.querySelector('.Humain');
const Homme = document.querySelector('.Homme');
const pays = document.querySelector('.pays');

const Firstname = document.getElementById('Firstname');
const Lastname = document.getElementById('Lastname');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
const Age = document.getElementById('Age');
const humain = document.getElementById('humain');
const homme = document.getElementById('homme');
const numero = /[0-9]{8}/;
const country = document.getElementById('country');

button1.addEventListener("click", function(e)  { 
    e.preventDefault()
    if (Firstname.value  === "") {
        Nom.innerHTML = " Veuillez saisir votre nom";
    } else if (Firstname.value != "") {
        Nom.innerHTML = "";

    }

})

button1.addEventListener("click", function(e) {
    e.preventDefault()
    if (Lastname.value  === "") {
        Prenom.innerHTML = " Veuillez saisir votre Prenom";
    } else if (Lastname.value != "") {
        Prenom.innerHTML = "";

    }
   
})

button1.addEventListener("click", function(e) {
    e.preventDefault()
    if (Phone.value  === "") {
        phone.innerHTML = " saisissez votre numero de telephone";
    } else if (Phone.value != "") {
        phone.innerHTML = "";
    } 
   
})


button1.addEventListener("click", function(e) {
    e.preventDefault()
    if (Age.value  === "") {
        age.innerHTML = " Saisissez votre age";
    } else if (Age.value != "") {
        age.innerHTML = "";
    }  
})
button1.addEventListener("click", function(e) {
    e.preventDefault()
    if (country.value  === "") {
        pays.innerHTML = " Veuillez selectionner un Pays";
    } else if (country.value != "") {
        pays.innerHTML = "";

    }
   
})







// button1.addEventListener("click", function(e) {
    // e.preventDefault()
    // if (Phone.value  === "") {
        // phone.innerHTML = "saisissez votre numero de telephone ";
    // } else if (Phone.value != ""  && Phone.value != /[0-9]{8}/ ) {
        // phone.innerHTML = "";
        // phone.innerHTML = "numero incorect";
    // } else {
        // phone.innerHTML = "";
    // }ç
   
// })


button1.addEventListener("click", function(e)  { 
    e.preventDefault()
    if (Email.value  === "") {
        email.innerHTML = " Veuillez saisir votre email";
    } else if (Email.value != "") {
        email.innerHTML = "";

    }

})
