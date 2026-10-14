/* =========================================================
   DADOS DOS PROJETOS
========================================================= */

const projects = {
    exemplo1: {
        title: "Carol Biazin co create",
        category: "Design & Artes · Social Media",
        description: "Campanha Publicitária.",
        sections: [
            {
                title: "Campanha",
                images: [
                    "assets/PortifolioMarinaT/CarolBiazin1.jpeg",
                    "assets/PortifolioMarinaT/CarolBiazin2.jpeg"
                ]
            },
            {
                title: "Apresentação da campanha",
                pdf: "assets/PortifolioMarinaT/CarolBiazin.pdf",
                pdfButton: "Abrir PDF em nova aba ↗"
            }
        ]
    },

    exemplo2: {
        title: "Modelo 01",
        category: "Web & Digital",
        description: "Modelo de Portifólio 01.",
        sections: [
            {
                title: "Projeto",
                images: [
                    "assets/portfolio/PortModelo01/1.jpeg",
                    "assets/portfolio/PortModelo01/4.jpeg",
                    "assets/portfolio/PortModelo01/2.jpeg",
                    "assets/portfolio/PortModelo01/2.jpeg"
                ]
            },
            {
                title: "Portifólio",
                link: "https://gracesdigital.github.io/PortifolioModelo01/",
                linkText: "Ver Modelo completo ↗"
            }
        ]
    },

    exemplo3: {
        title: "Not Ressaca",
        category: "Design & Artes · Social Media",
        description: "Campanha Publicitária.",
        sections: [
            {
                title: "Produtos de divulgação",
                images: [
                    "assets/PortifolioMarinaT/NotRessaca.jpeg",
                    
                ]
            },
            {
                
            }
        ]
    },

    exemplo4: {
        title: "Instituto Caramelo",
        category: "Design & Artes · Social Media",
        description: "Campanha Publicitária.",
        sections: [
            {
                title: "Campanha",
                images: [
                    "assets/PortifolioMarinaT/InstitutoCaramelo1.jpeg",
                    "assets/PortifolioMarinaT/InstitutoCaramelo2.jpeg"
                ]
            },
            {
                title: "Apresentação da campanha",
                pdf: "assets/PortifolioMarinaT/Instituto Caramelo.pdf",
                pdfButton: "Abrir PDF em nova aba ↗"
            }
        ]
    },

    exemplo5: {
        title: "Eduarda Fragoso Arquitetura",
        category: "Web & Digital",
        description: "Modelo de site de arquitetura.",
        sections: [
            {
                title: "Conteúdo",
                images: [
                    "assets/portfolio/exemplo-7/1.jpeg",
                    "assets/portfolio/exemplo-7/2.jpeg",
                    "assets/portfolio/exemplo-7/3.jpeg"
                ]
            },
            {
                title: "Site",
                link: "https://gracesdigital.github.io/DudaFragosoArquitetura01/",
                linkText: "Vistar Site ↗"
            }
        ]
    },

    exemplo6: {
        title: "Liga Campista",
        category: "Design & Artes · Social Media",
        description: "Logo.",
        sections: [
            {
                title: "Projeto",
                images: [
                    "assets/portfolio/001 Liga Campista/Logo/1.jpeg",
                    "assets/portfolio/001 Liga Campista/Logo/3.jpeg",
                    "assets/portfolio/001 Liga Campista/Logo/fundo transparente.png",
                    "assets/portfolio/001 Liga Campista/Logo/2.jpeg",
                    "assets/portfolio/001 Liga Campista/Logo/paleta.jpeg",
                ]
            }
        ]
    },

    exemplo7: {
        title: "Modelo 01",
        category: "Web & Digital",
        description: "Modelo de Portifólio 01.",
        sections: [
            {
                title: "Projeto",
                images: [
                    "assets/portfolio/PortModelo02/1.jpeg",
                    "assets/portfolio/PortModelo02/2.jpeg",
                    "assets/portfolio/PortModelo02/4.jpeg",
                    "assets/portfolio/PortModelo02/3.jpeg",
                    "assets/portfolio/PortModelo02/5.jpeg"
                ]
            },
            {
                title: "Portifólio",
                link: "https://gracesdigital.github.io/PortifolioModelo02/",
                linkText: "Ver Modelo completo ↗"
            }
        ]
    },

};

/* =========================================================
   FILTROS
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const categories = card.dataset.categories.split(",");
            const show = filter === "todos" || categories.includes(filter);
            card.classList.toggle("hidden", !show);
        });
    });
});

/* =========================================================
   MODAL
========================================================= */

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;
    modalContent.innerHTML = "";

    project.sections.forEach(section => {
        const sectionElement = document.createElement("section");
        sectionElement.className = "modal-section";

        const title = document.createElement("h3");
        title.textContent = section.title;
        sectionElement.appendChild(title);

        if (section.images && section.images.length) {
            const gallery = document.createElement("div");
            gallery.className = section.images.length === 1 ? "gallery single" : "gallery";

            section.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = `${project.title} — ${section.title}`;
                img.loading = "lazy";
                gallery.appendChild(img);
            });

            sectionElement.appendChild(gallery);
        }

        if (section.video) {
            const video = document.createElement("video");
            video.className = "project-video";
            video.src = section.video;
            video.controls = true;
            video.preload = "metadata";
            sectionElement.appendChild(video);
        }

        if (section.pdf) {
            const iframe = document.createElement("iframe");
            iframe.className = "pdf-frame";
            iframe.src = section.pdf;
            iframe.title = `${project.title} — ${section.title}`;
            sectionElement.appendChild(iframe);

            const pdfLink = document.createElement("a");
            pdfLink.className = "project-link";
            pdfLink.href = section.pdf;
            pdfLink.target = "_blank";
            pdfLink.rel = "noopener noreferrer";
            pdfLink.textContent = section.pdfButton || "Abrir PDF em nova aba ↗";
            sectionElement.appendChild(pdfLink);

            const note = document.createElement("p");
            note.className = "pdf-note";
            note.textContent = "";
            sectionElement.appendChild(note);
        }

        if (section.link) {
            const link = document.createElement("a");
            link.className = "project-link";
            link.href = section.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = section.linkText || "Visitar projeto ↗";
            sectionElement.appendChild(link);
        }

        modalContent.appendChild(sectionElement);
    });

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeProject() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    modalContent.innerHTML = "";
}

document.querySelectorAll(".project-open").forEach(button => {
    button.addEventListener("click", () => {
        openProject(button.closest(".project-card").dataset.project);
    });
});

modalClose.addEventListener("click", closeProject);

document.querySelector(".modal-backdrop").addEventListener("click", closeProject);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProject();
});

/* =========================================================
   MENU MOBILE
========================================================= */

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

/* =========================================================
   WHATSAPP
========================================================= */


const whatsappMessage = document.getElementById("whatsappMessage");
const whatsappClose = document.getElementById("closeWhatsappMessage");

if (whatsappMessage && whatsappClose) {
    whatsappClose.addEventListener("click", () => {
        whatsappMessage.classList.add("hidden");
    });
}

