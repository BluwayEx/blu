const fondos = [

  "https://picsum.photos/1600/900",

/* ==========================
   FARMACIA / SALUD
========================== */

  "https://loremflickr.com/1600/900/pharmacy?random=1",
  "https://loremflickr.com/1600/900/medicine?random=2",
  "https://loremflickr.com/1600/900/vitamins?random=3",
  "https://loremflickr.com/1600/900/supplements?random=4",
  "https://loremflickr.com/1600/900/pills?random=5",
  "https://loremflickr.com/1600/900/wellness?random=6",
  "https://loremflickr.com/1600/900/health?random=7",


/* ==========================
   NUTRICIÓN / FITNESS
========================== */

  "https://loremflickr.com/1600/900/protein?random=8",
  "https://loremflickr.com/1600/900/nutrition?random=9",
  "https://loremflickr.com/1600/900/fitness?random=10",


/* ==========================
   UNSPLASH (fotos reales — salud/farmacia)
========================== */

  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=90",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1920&q=90",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=90",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?w=1920&q=90",
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1920&q=90",
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=1920&q=90",

];

const hero = document.querySelector(".hero");

/* Capa oscura que se combina con la foto para que el texto
   y el buscador se sigan leyendo bien encima de cualquier imagen */
const overlay = "linear-gradient(160deg, rgba(4,7,15,.78), rgba(10,15,44,.6) 55%, rgba(20,27,63,.7))";

function cargarFondo(indice = 0) {

  if (indice >= fondos.length) {
    console.log("No se pudo cargar ningún fondo");
    return;
  }

  const img = new Image();

  img.onload = function() {
    hero.style.backgroundImage = `${overlay}, url('${fondos[indice]}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    console.log("Fondo cargado:", fondos[indice]);
  };

  img.onerror = function() {
    console.log("Falló:", fondos[indice]);
    cargarFondo(indice + 1);
  };

  img.src = fondos[indice];
}

cargarFondo();