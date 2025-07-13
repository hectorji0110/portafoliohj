var typed = new Typed(".multiple-text", {
  strings: ["Full Stack", "Frontend", "Backend"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


function cambiarModo() {
  const body = document.body;
  const boton = document.getElementById("modo");

  // Toggle la clase 'dark' en el body
  body.classList.toggle("dark");

  // Actualizar ícono del botón y guardar estado en localStorage
  const modoOscuroActivo = body.classList.contains("dark");

  boton.innerHTML = modoOscuroActivo ? "🌙" : "☀️";
  localStorage.setItem("modo", modoOscuroActivo ? "🌙" : "☀️");
}

// Aplicar el modo guardado al cargar
window.addEventListener("DOMContentLoaded", () => {
  const estado = localStorage.getItem("modo");
  if (estado === "🌙") {
    document.body.classList.add("dark");
    document.getElementById("modo").innerHTML = "🌙";
  } 
});

 const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,         // Mostrar 3 proyectos visibles a la vez
    spaceBetween: 20,          // Espacio entre slides en px
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Opcional: para que el slider sea responsive
  breakpoints: {
    120: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  });

  AOS.init({
  once: false,     // true = solo una vez
  duration: 800,   // velocidad de animación en ms
});

const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });


  const form = document.getElementById("formulario");
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      email: form.email.value,
      telefono: form.telefono.value,
      mensaje: form.mensaje.value
    };

    try {
      const res = await fetch("https://formspree.io/f/mnnzaqee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        respuesta.innerText = "✅ ¡Mensaje enviado correctamente!";
        form.reset();
      } else {
        respuesta.innerText = "❌ Error al enviar. Intenta nuevamente.";
      }
    } catch (error) {
      respuesta.innerText = "❌ Error de conexión. Intenta más tarde.";
    }
  });
