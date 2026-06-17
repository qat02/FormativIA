function goToGPT() {
  if (!GPT_LINK || GPT_LINK.includes("PEGA-AQUI")) {
    alert("Todavía falta pegar el enlace real del GPT en el archivo index.html");
    return;
  }
  window.open(GPT_LINK, "_blank");
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const examples = {
  rubrica: `
    <div class="modal-sheet">
      <h2>Rúbrica breve de proyecto</h2>
      <p class="section-subtitle">Ejemplo de instrumento formativo para valorar avances, retroalimentar y mejorar.</p>
      <div class="big-rubric">
        <div class="head">Criterio</div>
        <div class="head green">Lo logró</div>
        <div class="head yellow">Va en proceso</div>
        <div class="head red">Necesita apoyo</div>

        <div><strong>Contenido</strong><br>Comprende el tema.</div>
        <div class="green">Explica con claridad y ejemplos.</div>
        <div class="yellow">Explica algunas ideas, pero requiere más precisión.</div>
        <div class="red">Necesita apoyo para explicar el tema.</div>

        <div><strong>Organización</strong><br>Presenta sus ideas con orden.</div>
        <div class="green">La información está bien organizada.</div>
        <div class="yellow">Hay orden parcial.</div>
        <div class="red">Le falta organizar sus ideas.</div>

        <div><strong>Creatividad</strong><br>Usa recursos visuales.</div>
        <div class="green">El trabajo es creativo y claro.</div>
        <div class="yellow">Tiene algunos elementos creativos.</div>
        <div class="red">Necesita mejorar la presentación.</div>
      </div>
      <div class="modal-note">
        <strong>Retroalimentación:</strong> Lo que hizo bien, sugerencia para mejorar y próximo paso.
      </div>
    </div>
  `,
  cotejo: `
    <div class="modal-sheet">
      <h2>Lista de cotejo</h2>
      <p class="section-subtitle">Ejemplo para revisar aspectos básicos de una actividad sin convertirla en calificación.</p>
      <div class="big-checklist">
        <p>☑ Comprende el tema trabajado.</p>
        <p>☑ Participa activamente en su equipo.</p>
        <p>☐ Explica sus ideas con claridad.</p>
        <p>☐ Escucha y respeta a sus compañeros.</p>
        <p>☐ Identifica qué puede mejorar.</p>
      </div>
      <div class="modal-note">
        <strong>Próximo paso:</strong> escribir una acción concreta para seguir aprendiendo.
      </div>
    </div>
  `,
  diana: `
    <div class="modal-sheet">
      <h2>Diana de evaluación</h2>
      <p class="section-subtitle">Ejemplo visual para que el alumno ubique su avance y reflexione sobre su mejora.</p>
      <div class="big-target"></div>
      <div class="modal-note">
        <strong>Aspectos a valorar:</strong> comprensión, participación, colaboración y responsabilidad.
      </div>
    </div>
  `
};

document.querySelectorAll(".example-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.example;
    modalBody.innerHTML = examples[key];
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
