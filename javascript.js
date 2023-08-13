const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");
    console.log("control clicked", isLeft);

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    items.forEach((item) => item.classList.remove("current-item"));
    items[currentItem].scrollIntoView({
      inLine: "center",
      behavior: "smooth",
    });
    items[currentItem].classList.add("current-item");
  });
});

const telefones = document.querySelector(".telefones");
const whatsapp = document.getElementById("whats");

whatsapp.addEventListener("click", () => {
  console.log("clicado");
  if (telefones.classList.contains("active")) {
    telefones.classList.remove("active");
  } else {
    telefones.classList.add("active");
  }

  services.classList.remove("active");
  local.classList.remove("active");
});


const services = document.querySelector(".nossosServicos");
const servicos = document.getElementById("serviços");

servicos.addEventListener("click", () => {
  console.log("clicado");
  if (services.classList.contains("active")) {
    services.classList.remove("active");
  } else {
    services.classList.add("active");
  }

  telefones.classList.remove("active");
  local.classList.remove("active");
});

const local = document.querySelector(".local");
const onde = document.getElementById("ondeEstamos");

onde.addEventListener("click", () => {
  console.log("clicado");
  if (local.classList.contains("active")) {
    local.classList.remove("active");
  } else {
    local.classList.add("active");
  }

  telefones.classList.remove("active");
  services.classList.remove("active");
});