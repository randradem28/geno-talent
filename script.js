// script.js (MODIFICADO para nuevos filtros)

const allCandidates = [
    {
        id: 2,
        name: "Roberto Andrade",
        role: "GenO | Consulting",
        areasOfInterest: ["Ventas", "Marketing", "Pre-Venta"], // Áreas de interés
        location: "Ciudad de México",
        languages: [{name: "Inglés", level: "B1"}, {name: "Portugués", level: "A2"}],
        profileLink: "https://docs.google.com/document/d/e/2PACX-1vRg1CojaLCZ6bmHzePh0YrvoPPEundUKFeKg0n8eyLN0RazoIBDo-_3-6cLKJdkCkdfeiFO5nNhNPIX/pub",
	profileAria: "https://people.oracle.com/apex/f?p=8000:PERSON:3467852970447:::2:PERSON:roberto.andrade",
        photo: "images/Andrade-Roberto.jpeg"
    },
    {
        id: 1,
        name: "Victoria Montes",
        role: "GenO | Consulting",
        areasOfInterest: ["Consulting", "Software Development", "Cloud Computing"],
        location: "Ciudad de México",
        languages: [{name: "Inglés", level: "B1"}],
        profileLink: "#",
	profileAria: "https://people.oracle.com/apex/f?p=8000:PERSON:3467852970447:::2:PERSON:maria.victoria.montes.betanco",
        photo: "images/victoria-montes.jpg",
    },
    {
        id: 3,
        name: "Angélica Cervantes",
        role: "GenO | Comercial",
        areasOfInterest: ["Ventas", "Innovación", "Business Development"],
        location: "Ciudad de México",
        languages: [{name: "Inglés", level: "C1"}],
        profileLink: "#",
	profileAria: "https://people.oracle.com/apex/f?p=8000:PERSON:3467852970447:::2:PERSON:angelica.cervantes",
        photo: "images/angelica-cervantes.jpeg",
    },
    {
        id: 'juan-perez',
        name: "Juan Pérez",
        role: "Data Analyst",
        areasOfInterest: ["Machine Learning", "Big Data", "Data Storytelling"],
        location: "Monterrey",
        languages: [{name: "Inglés", level: "Básico"}],
        bio: "Científico de datos emergente con fuerte base matemática. Busca su primera oportunidad en el mundo empresarial.",
        profileLink: "candidates/juan-perez.html",
        photo: "images/juan-perez.jpg",
        pitch: "Analista de Datos con curiosidad por descubrir patrones ocultos."
    },
    {
        id: 'laura-martinez',
        name: "Laura Martínez",
        role: "Marketing Digital",
        areasOfInterest: ["SEO Estratégico", "Marketing de Contenidos", "Influencer Marketing"],
        location: "Remoto",
        languages: [{name: "Inglés", level: "Avanzado"}, {name: "Portugués", level: "Intermedio"}],
        bio: "Entusiasta del marketing digital con conocimientos en estrategias online. Lista para impulsar la visibilidad y el engagement de la marca.",
        profileLink: "candidates/laura-martinez.html",
        photo: "images/laura-martinez.jpg",
        pitch: "Estratega de Marketing Digital, creando conexiones significativas."
    },
    {
        id: 'roberto-gomez',
        name: "Roberto Gómez",
        role: "Soporte TI",
        areasOfInterest: ["Ciberseguridad", "Administración de Redes", "Soporte Nivel 2"],
        location: "Ciudad de México",
        languages: [{name: "Inglés", level: "Intermedio"}],
        bio: "Técnico de soporte TI con habilidades para resolver problemas y brindar asistencia eficiente. Comprometido con la continuidad operativa.",
        profileLink: "candidates/roberto-gomez.html",
        photo: "images/roberto-gomez.jpg",
        pitch: "Especialista en Soporte TI, garantizando la fluidez tecnológica."
    },
    {
        id: 'sofia-hernandez',
        name: "Sofía Hernández",
        role: "Contador Junior",
        areasOfInterest: ["Auditoría Interna", "Finanzas Corporativas", "Análisis Fiscal"],
        location: "Guadalajara",
        languages: [{name: "Inglés", level: "Básico"}],
        bio: "Estudiante de contaduría con interés en procesos financieros y fiscales. Proactiva y organizada, lista para iniciar su carrera profesional.",
        profileLink: "candidates/sofia-hernandez.html",
        photo: "images/sofia-hernandez.jpg",
        pitch: "Futura experta contable, enfocada en la precisión y el detalle."
    },
    {
        id: 'pablo-ruiz',
        name: "Pablo Ruíz",
        role: "Diseñador Gráfico",
        areasOfInterest: ["Branding", "Motion Graphics", "Diseño 3D"],
        location: "Remoto",
        languages: [{name: "Inglés", level: "Básico"}],
        bio: "Diseñador gráfico emergente con creatividad para branding y materiales visuales. Busca aplicar su visión artística en proyectos reales.",
        profileLink: "candidates/pablo-ruiz.html",
        photo: "images/pablo-ruiz.jpg",
        pitch: "Diseñador Gráfico con visión para marcas memorables."
    },
    {
        id: 'andrea-castro',
        name: "Andrea Castro",
        role: "Recursos Humanos",
        areasOfInterest: ["Desarrollo Organizacional", "Adquisición de Talento", "Bienestar Laboral"],
        location: "Monterrey",
        languages: [{name: "Inglés", level: "Avanzado"}],
        bio: "Apasionada por el talento humano y el bienestar laboral. Deseosa de contribuir en la creación de equipos de alto rendimiento.",
        profileLink: "candidates/andrea-castro.html",
        photo: "images/andrea-castro.jpg",
        pitch: "Talento de RRHH, construyendo culturas laborales excepcionales."
    },
    {
        id: 'daniel-vargas',
        name: "Daniel Vargas",
        role: "Gestión de Proyectos",
        areasOfInterest: ["Metodologías Ágiles", "Gestión de Riesgos", "Transformación Digital"],
        location: "Ciudad de México",
        languages: [{name: "Inglés", level: "Intermedio"}],
        bio: "Futuro líder de proyectos con habilidades organizativas y de comunicación. Comprometido con el éxito de las iniciativas empresariales.",
        profileLink: "candidates/daniel-vargas.html",
        photo: "images/daniel-vargas.jpg",
        pitch: "Gestor de Proyectos, organizando el caos hacia el éxito."
    }
];

const candidatesGrid = document.getElementById('candidates-grid');
const filterRoleInput = document.getElementById('filter-role');
const filterInterestsInput = document.getElementById('filter-interests'); // Nuevo input
const filterLocationInput = document.getElementById('filter-location');
const filterLanguagesInput = document.getElementById('filter-languages'); // Nuevo input
const applyFiltersBtn = document.getElementById('apply-filters-btn');
const clearFiltersBtn = document.getElementById('clear-filters-btn');

// Función para renderizar los candidatos en la cuadrícula
function renderCandidates(candidatesToRender) {
    candidatesGrid.innerHTML = ''; // Limpiar la cuadrícula actual

    if (candidatesToRender.length === 0) {
        candidatesGrid.innerHTML = '<p>No se encontraron becarios con los filtros seleccionados. Intenta ajustar tus criterios.</p>';
        return;
    }

    candidatesToRender.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.classList.add('candidate-card');
        candidateCard.innerHTML = `
            ${candidate.photo ? `<img src="${candidate.photo}" alt="Foto de ${candidate.name}" class="candidate-photo">` : ''}
            <h3>${candidate.name}</h3>
            <p><strong>Rol Actual:</strong> ${candidate.role}</p>
            <p class="interests"><strong>Áreas de Interés:</strong> ${candidate.areasOfInterest.join(', ')}</p>
	    <p class="languages"><strong>Idiomas:</strong> ${candidate.languages.map(lang => `${lang.name} (${lang.level})`).join(', ')}</p>            
	    <p class="location">Ubicación: ${candidate.location}</p>
            <div class="candidate-actions">
                <a href="${candidate.profileLink}" class="btn-action" target="_blank" rel="noopener noreferrer">Ver CV Completo</a>
                ${candidate.profileAria ? `<a href="${candidate.profileAria}" class="btn-action btn-aria" target="_blank" rel="noopener noreferrer">Ver Perfil en Aria</a>` : ''} 
            </div>
        `;
        candidatesGrid.appendChild(candidateCard);
    });
}

// Función para aplicar los filtros
function applyFilters() {
    const role = filterRoleInput.value.toLowerCase().trim();
    const interests = filterInterestsInput.value.toLowerCase().split(',').map(s => s.trim()).filter(s => s);
    const location = filterLocationInput.value.toLowerCase().trim();
    const languagesQuery = filterLanguagesInput.value.toLowerCase().split(',').map(s => s.trim()).filter(s => s);

    const filteredCandidates = allCandidates.filter(candidate => {
        // Filtrar por Perfil Actual
        const matchesRole = !role || candidate.role.toLowerCase().includes(role);

        // Filtrar por Áreas de Interés (si el candidato tiene AL MENOS UNA de las áreas buscadas)
        const matchesInterests = interests.length === 0 || interests.some(interest =>
            candidate.areasOfInterest.map(ai => ai.toLowerCase()).includes(interest)
        );

        // Filtrar por Ubicación
        const matchesLocation = !location || candidate.location.toLowerCase().includes(location);

        // Filtrar por Idiomas (más complejo: busca "Idioma (nivel)" o solo "Idioma")
        const matchesLanguages = languagesQuery.length === 0 || languagesQuery.some(query => {
            return candidate.languages.some(lang => {
                const fullLangString = `${lang.name.toLowerCase()} (${lang.level.toLowerCase()})`;
                return fullLangString.includes(query) || lang.name.toLowerCase().includes(query);
            });
        });

        return matchesRole && matchesInterests && matchesLocation && matchesLanguages;
    });

    renderCandidates(filteredCandidates);
}

// Función para limpiar los filtros
function clearFilters() {
    filterRoleInput.value = '';
    filterInterestsInput.value = '';
    filterLocationInput.value = '';
    filterLanguagesInput.value = '';
    renderCandidates(allCandidates); // Volver a mostrar todos los candidatos
}

// Event Listeners
applyFiltersBtn.addEventListener('click', applyFilters);
clearFiltersBtn.addEventListener('click', clearFilters);

// Cargar todos los candidatos al inicio
document.addEventListener('DOMContentLoaded', () => {
    renderCandidates(allCandidates);
});