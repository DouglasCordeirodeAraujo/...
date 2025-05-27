function toggleDropdown() {
      const dropdown = document.getElementById("dropdownMenu");
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    window.onclick = function (event) {
      const dropdown = document.getElementById("dropdownMenu");
      const button = document.querySelector('.menu-button');
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
      }
    };

    function iniciarAnimacao(){
        const svgNS = "http://www.w3.org/2000/svg";
    const scene = document.getElementById("scene");

    function createSVGElement(type, attrs) {
      const el = document.createElementNS(svgNS, type);
      for (let attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
      }
      return el;
    }

    // Boneco da esquerda
    scene.appendChild(createSVGElement("circle", { cx: 100, cy: 60, r: 10, fill: "black" })); // Cabeça
    scene.appendChild(createSVGElement("line", { x1: 100, y1: 70, x2: 100, y2: 110, stroke: "black", "stroke-width": 2 })); // Corpo
    scene.appendChild(createSVGElement("line", { x1: 100, y1: 80, x2: 80, y2: 100, stroke: "black", "stroke-width": 2 })); // Braço esquerdo

    const leftArm = createSVGElement("line", { x1: 100, y1: 80, x2: 120, y2: 100, stroke: "black", "stroke-width": 2 });
    scene.appendChild(leftArm);

    // Boneco da direita
    scene.appendChild(createSVGElement("circle", { cx: 300, cy: 60, r: 10, fill: "black" }));
    scene.appendChild(createSVGElement("line", { x1: 300, y1: 70, x2: 300, y2: 110, stroke: "black", "stroke-width": 2 }));
    const rightArm = createSVGElement("line", { x1: 300, y1: 80, x2: 280, y2: 100, stroke: "black", "stroke-width": 2 });
    scene.appendChild(rightArm);
    scene.appendChild(createSVGElement("line", { x1: 300, y1: 80, x2: 320, y2: 100, stroke: "black", "stroke-width": 2 }));

    // Caixa
    const box = createSVGElement("rect", { x: 130, y: 90, width: 20, height: 20, fill: "sienna" });
    scene.appendChild(box);

    // Função de animação
    let t = 0;
    function animate() {
      t += 0.02;

      // Animação do braço esquerdo
      leftArm.setAttribute("x2", 120 + 10 * Math.sin(t));
      leftArm.setAttribute("y2", 100 - 10 * Math.sin(t));

      // Animação do braço direito
      rightArm.setAttribute("x2", 280 - 10 * Math.sin(t));
      rightArm.setAttribute("y2", 100 - 10 * Math.sin(t));

      // Animação da caixa
      const boxX = 130 + 140 * ((Math.sin(t) + 1) / 2);
      box.setAttribute("x", boxX);

      requestAnimationFrame(animate);
    }

    // Iniciar animação
    animate();
    }