const fondos = [

  "https://este-link-no-existe.com/imagen.jpg",
  "https://picsum.photos/1600/900",
  "https://loremflickr.com/1600/900/shop",

/* ==========================
   MODA / TIENDA / ESTILO
========================== */

  "https://loremflickr.com/1600/900/clothing?random=2",
  "https://loremflickr.com/1600/900/shopping?random=3",
  "https://loremflickr.com/1600/900/store?random=4",
  "https://loremflickr.com/1600/900/style?random=5",
  "https://loremflickr.com/1600/900/model?random=6",


/* ==========================
   NEGOCIOS / PREMIUM
========================== */

  "https://loremflickr.com/1600/900/business?random=7",
  "https://loremflickr.com/1600/900/office?random=8",
  "https://loremflickr.com/1600/900/luxury?random=9",
  "https://loremflickr.com/1600/900/technology?random=10",


/* ==========================
   PAISAJES PREMIUM
========================== */

  "https://picsum.photos/seed/mountain/1600/900",
  "https://picsum.photos/seed/nature/1600/900",
  "https://picsum.photos/seed/ocean/1600/900",
  "https://picsum.photos/seed/city/1600/900",
  "https://picsum.photos/seed/night/1600/900",


/* ==========================
   UNSPLASH (fotos reales)
========================== */

  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1600",


/* ==========================
   UNSPLASH PREMIUM HD
========================== */

"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=90",
"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=90",
"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1920&q=90",
"https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=90"

];


const hero = document.querySelector(".hero");


function cargarFondo(indice = 0) {

  if (indice >= fondos.length) {
    console.log("No se pudo cargar ningún fondo");
    return;
  }


  const img = new Image();


  img.onload = function() {

    hero.style.backgroundImage =
    `url('${fondos[indice]}')`;

    console.log("Fondo cargado:", fondos[indice]);

  };


  img.onerror = function() {

    console.log("Falló:", fondos[indice]);

    cargarFondo(indice + 1);

  };


  img.src = fondos[indice];

}


cargarFondo();