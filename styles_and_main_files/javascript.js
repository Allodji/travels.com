//Debut du bouton menu de la page d'accueil

let closeBtn = document.getElementById("closeBtn");
let openBtn = document.getElementById("openBtn");
let option = document.getElementById("option");

openBtn.addEventListener('click', function(){
        option.style.display = "flex";
});
closeBtn.addEventListener('click', function(){
        option.style.display = "none";
});

//Fin du bouton menu de la page d'accueil



// Debut du systeme de geolocalisation
   function Locate(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show);
    }else{
        alert('votre telephone ne peut pas faire la geolocalisation');
    }
   }

   function show(position){
      var  x =  position.coords.longitude;
      var  y = position.coords.latitude;
        return x, y;
   }
  
      
          
// Fin du systeme de geolocalisation


