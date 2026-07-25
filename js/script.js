document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            meta: {
                title: 'Diego Lopez · Desarrollador Full-Stack Jr',
                description: 'Portafolio de Diego Emilio López Gutiérrez, desarrollador full-stack. Proyectos, habilidades y contacto.'
            },
            a11y: {
                themeToggle: 'Cambiar modo claro/oscuro',
                openMenu: 'Abrir menú',
                prevImage: 'Imagen anterior',
                nextImage: 'Siguiente imagen'
            },
            nav: { inicio: 'Inicio', sobremi: 'SobreMi', habilidades: 'Habilidades', proyectos: 'Proyectos', contacto: 'Contacto' },
            hero: {
                eyebrow: '// bienvenida',
                greeting: 'Hola, soy',
                tagline: 'Que algo no funcione a la primera no significa que sea un fracaso, es el primer borrador de una buena solución.',
                ctaProjects: 'Ver mis proyectos',
                ctaCV: 'Descargar CV',
                code: {
                    nameKey: 'nombre',
                    roleKey: 'rol',
                    roleValue: '"Full Stack Developer Jr."',
                    exploringKey: 'explorando',
                    exploringValue: '"IA aplicada al desarrollo"'
                },
                roles: [
                    'Full Stack Developer Jr.',
                    'Java · C# · React · Node.js',
                    'Explorando IA aplicada al desarrollo'
                ]
            },
            about: {
                eyebrow: '// sobre-mi',
                title: 'Sobre mí',
                photoAlt: 'Foto de Diego Emilio López Gutiérrez',
                bio: 'Estudiante de 6.º Perito en Informática en Fundación Kinal, próximo a iniciar Ingeniería en Sistemas. Me apasiona crear soluciones tecnológicas que resuelvan problemas reales, y veo cada proyecto como una oportunidad para fortalecer mis habilidades como desarrollador. A largo plazo aspiro a especializarme como Ingeniero de Software.',
                facts: {
                    name: 'Nombre',
                    age: 'Edad',
                    location: 'Ubicación',
                    locationValue: 'Ciudad de Guatemala, Guatemala',
                    education: 'Formación',
                    educationValue: '6.º Perito en Informática, Fundación Kinal',
                    next: 'Próximo paso',
                    nextValue: 'Ingeniería en Sistemas',
                    contact: 'Contacto'
                },
                interests: { music: 'Música', games: 'Videojuegos', coding: 'Programación', movies: 'Películas' }
            },
            skills: {
                eyebrow: '// habilidades',
                cat: {
                    languages: 'Lenguajes',
                    frameworks: 'Frameworks',
                    databases: 'Bases de datos',
                    tools: 'Herramientas',
                    ai: 'IA aplicada al desarrollo'
                },
                timelineTitle: 'Educación & experiencia',
                timeline: {
                    t1role: 'Perito en Computación',
                    t2role: 'Reparación y mantenimiento de computadoras',
                    t3year: 'Próximamente',
                    t3role: 'Ingeniería en Sistemas',
                    t3place: '[Universidad]'
                }
            },
            projects: {
                eyebrow: '// proyectos',
                title: 'Proyectos destacados',
                filters: { all: 'Todos', mobile: 'Móvil' },
                learnedLabel: 'Aprendizajes:',
                linkRepo: 'Ver repositorio',
                linkDemo: 'Demo en vivo',
                p1: {
                    title: 'Sistema Bancario',
                    desc: 'Aplicación bancaria full-stack que permite a los usuarios consultar saldos, gestionar tarjetas y realizar movimientos entre cuentas, inspirada en las plataformas digitales de bancos reales. Colaboré en el diseño de la arquitectura cliente-servidor y en la integración entre el frontend y la API.',
                    learned: 'autenticación segura, diseño de esquemas en MongoDB y consumo de APIs REST desde React.',
                    alt1: 'KinalBank — pantalla de saldo', alt2: 'KinalBank — gestión de tarjetas', alt3: 'KinalBank — historial de movimientos'
                },
                p2: {
                    desc: 'Plataforma de gestión para un restaurante de comida rápida, similar en arquitectura a KinalBank pero orientada al sector gastronómico: permite hacer pedidos en línea, reservar mesas y gestionar eventos dentro del local.',
                    learned: 'diseño de un sistema de reservas con validación de disponibilidad y manejo de pedidos en tiempo real.',
                    alt1: 'KFC — catálogo de menú', alt2: 'KFC — sistema de reservaciones', alt3: 'KFC — gestión de eventos'
                },
                p3: {
                    title: 'Plataforma de trabajos informales - WorkDispatch',
                    desc: 'Plataforma web que conecta a personas con trabajadores informales (albañilería, plomería, electricidad) para facilitar el contacto directo entre cliente y prestador de servicio. Trabajé el backend con .NET y la integración con el cliente en React.',
                    learned: 'diseño de API REST con .NET, modelado de datos relacional en PostgreSQL y manejo de estado en React.'
                },
                p4: {
                    title: 'App Móvil - WorkDispatch',
                    desc: 'Versión móvil de WorkDispatch construida con React Native y Expo, enfocada en que los usuarios busquen y contacten trabajadores informales desde su celular con la misma lógica de la plataforma web.',
                    learned: 'navegación entre pantallas con React Navigation, consumo de la misma API del proyecto web desde un cliente móvil, y diseño de interfaces táctiles.',
                    alt1: 'App móvil WorkDispatch'
                }
            },
            contact: {
                eyebrow: '// contacto',
                title: 'Hablemos',
                form: {
                    name: 'Nombre', email: 'Correo', message: 'Mensaje', submit: 'Enviar mensaje',
                    sending: 'Enviando…',
                    success: '✓ Mensaje enviado. Te responderé pronto.',
                    fail: '✗ Hubo un problema al enviar. Intenta de nuevo o escríbeme directo por correo.',
                    connectionError: '✗ No se pudo conectar. Revisa tu internet e intenta de nuevo.',
                    required: 'Este campo es obligatorio.',
                    invalidEmail: 'Correo inválido.'
                },
                social: {
                    linkedinDesc: 'Perfil profesional',
                    githubDesc: 'Código y repositorios',
                    whatsappDesc: 'Contacto personal'
                }
            }
        },
        en: {
            meta: {
                title: 'Diego Lopez · Junior Full-Stack Developer',
                description: "Diego Emilio López Gutiérrez's portfolio, full-stack developer. Projects, skills and contact."
            },
            a11y: {
                themeToggle: 'Switch light/dark mode',
                openMenu: 'Open menu',
                prevImage: 'Previous image',
                nextImage: 'Next image'
            },
            nav: { inicio: 'Home', sobremi: 'AboutMe', habilidades: 'Skills', proyectos: 'Projects', contacto: 'Contact' },
            hero: {
                eyebrow: '// welcome',
                greeting: "Hi, I'm",
                tagline: "Something not working the first time doesn't mean it's a failure, it's the first draft of a good solution.",
                ctaProjects: 'See my projects',
                ctaCV: 'Download CV',
                code: {
                    nameKey: 'name',
                    roleKey: 'role',
                    roleValue: '"Full Stack Developer Jr."',
                    exploringKey: 'exploring',
                    exploringValue: '"AI applied to development"'
                },
                roles: [
                    'Full Stack Developer Jr.',
                    'Java · C# · React · Node.js',
                    'Exploring AI applied to development'
                ]
            },
            about: {
                eyebrow: '// about-me',
                title: 'About me',
                photoAlt: 'Photo of Diego Emilio López Gutiérrez',
                bio: "6th-year IT Technical student at Fundación Kinal, about to start a Systems Engineering degree. I'm passionate about building technology solutions that solve real problems, and I see every project as a chance to grow as a developer. Long-term, I aim to specialize as a Software Engineer.",
                facts: {
                    name: 'Name',
                    age: 'Age',
                    location: 'Location',
                    locationValue: 'Guatemala City, Guatemala',
                    education: 'Education',
                    educationValue: '6th year, IT Technical Degree, Fundación Kinal',
                    next: 'Next step',
                    nextValue: 'Systems Engineering',
                    contact: 'Contact'
                },
                interests: { music: 'Music', games: 'Video games', coding: 'Coding', movies: 'Movies' }
            },
            skills: {
                eyebrow: '// skills',
                cat: {
                    languages: 'Languages',
                    frameworks: 'Frameworks',
                    databases: 'Databases',
                    tools: 'Tools',
                    ai: 'AI applied to development'
                },
                timelineTitle: 'Education & experience',
                timeline: {
                    t1role: 'IT Technical Degree',
                    t2role: 'Computer repair and maintenance',
                    t3year: 'Coming soon',
                    t3role: 'Systems Engineering',
                    t3place: '[University]'
                }
            },
            projects: {
                eyebrow: '// projects',
                title: 'Featured projects',
                filters: { all: 'All', mobile: 'Mobile' },
                learnedLabel: 'What I learned:',
                linkRepo: 'View repository',
                linkDemo: 'Live demo',
                p1: {
                    title: 'Banking System',
                    desc: 'Full-stack banking app that lets users check balances, manage cards, and transfer money between accounts, inspired by real digital banking platforms. I collaborated on the client-server architecture and the integration between the frontend and the API.',
                    learned: 'secure authentication, schema design in MongoDB, and consuming REST APIs from React.',
                    alt1: 'KinalBank — balance screen', alt2: 'KinalBank — card management', alt3: 'KinalBank — transaction history'
                },
                p2: {
                    desc: 'Management platform for a fast-food restaurant, similar in architecture to KinalBank but geared towards the food industry: lets customers order online, book tables, and manage in-house events.',
                    learned: 'designing a reservation system with availability validation and real-time order handling.',
                    alt1: 'KFC — menu catalog', alt2: 'KFC — reservation system', alt3: 'KFC — event management'
                },
                p3: {
                    title: 'Informal jobs platform - WorkDispatch',
                    desc: 'Web platform that connects people with informal workers (masonry, plumbing, electrical work) to enable direct contact between clients and service providers. I worked on the backend with .NET and the client integration in React.',
                    learned: 'REST API design with .NET, relational data modeling in PostgreSQL, and state management in React.'
                },
                p4: {
                    title: 'Mobile App - WorkDispatch',
                    desc: 'Mobile version of WorkDispatch built with React Native and Expo, focused on letting users find and contact informal workers from their phone with the same logic as the web platform.',
                    learned: 'screen navigation with React Navigation, consuming the same API as the web project from a mobile client, and touch interface design.',
                    alt1: 'WorkDispatch mobile app'
                }
            },
            contact: {
                eyebrow: '// contact',
                title: "Let's talk",
                form: {
                    name: 'Name', email: 'Email', message: 'Message', submit: 'Send message',
                    sending: 'Sending…',
                    success: "✓ Message sent. I'll get back to you soon.",
                    fail: '✗ There was a problem sending it. Try again or email me directly.',
                    connectionError: "✗ Couldn't connect. Check your internet and try again.",
                    required: 'This field is required.',
                    invalidEmail: 'Invalid email.'
                },
                social: {
                    linkedinDesc: 'Professional profile',
                    githubDesc: 'Code and repositories',
                    whatsappDesc: 'Personal contact'
                }
            }
        }
    };

    function getNested(obj, path) {
        return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
    }

    let currentLang = localStorage.getItem('portfolio-lang')
        || (navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');

    const langToggle = document.getElementById('langToggle');

    function updateStatusBarLabel() {
        const activeTab = document.querySelector('.editor-tab.is-active');
        const statusSection = document.getElementById('statusSection');
        if (activeTab && statusSection) {
            statusSection.textContent = `● ${activeTab.textContent.trim()}`;
        }
    }

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('portfolio-lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = getNested(dict, el.dataset.i18n);
            if (value !== null) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const value = getNested(dict, el.dataset.i18nAlt);
            if (value !== null) el.setAttribute('alt', value);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = getNested(dict, el.dataset.i18nAria);
            if (value !== null) el.setAttribute('aria-label', value);
        });

        const pageTitle = document.getElementById('pageTitle');
        const pageDescription = document.getElementById('pageDescription');
        if (pageTitle) pageTitle.textContent = dict.meta.title;
        if (pageDescription) pageDescription.setAttribute('content', dict.meta.description);

        if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

        resetTypeLoop();

        updateStatusBarLabel();
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', initialTheme);
    themeToggle.setAttribute('aria-pressed', initialTheme === 'light');

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
        themeToggle.setAttribute('aria-pressed', next === 'light');
    });

    const navBurger = document.getElementById('navBurger');
    const editorTabs = document.getElementById('editorTabs');

    navBurger.addEventListener('click', () => {
        const isOpen = editorTabs.classList.toggle('is-open');
        navBurger.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.editor-tab').forEach(tab => {
        tab.addEventListener('click', () => editorTabs.classList.remove('is-open'));
    });

    const tabs = document.querySelectorAll('.editor-tab');
    const sections = document.querySelectorAll('main .section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                tabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.tab === id));
                updateStatusBarLabel();
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(section => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const typedEl = document.getElementById('heroTyped');
    let roleIndex = 0, charIndex = 0, deleting = false;
    let typeTimeoutId = null;

    function typeLoop() {
        const roles = translations[currentLang].hero.roles;
        const current = roles[roleIndex % roles.length];

        if (!deleting) {
            charIndex++;
            typedEl.textContent = current.slice(0, charIndex);
            if (charIndex === current.length) {
                deleting = true;
                typeTimeoutId = setTimeout(typeLoop, 1400);
                return;
            }
        } else {
            charIndex--;
            typedEl.textContent = current.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }
        typeTimeoutId = setTimeout(typeLoop, deleting ? 40 : 70);
    }

    function resetTypeLoop() {
        clearTimeout(typeTimeoutId);
        roleIndex = 0;
        charIndex = 0;
        deleting = false;
        typedEl.textContent = '';
        typeLoop();
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const tags = card.dataset.tags.split(' ');
                const show = filter === 'all' || tags.includes(filter);
                card.classList.toggle('is-hidden', !show);
            });
        });
    });

    document.querySelectorAll('.project-card__gallery').forEach(gallery => {
        const track = gallery.querySelector('.project-card__gallery-track');
        const images = Array.from(track.querySelectorAll('img'));
        const dotsContainer = gallery.querySelector('.project-card__gallery-dots');
        const prevBtn = gallery.querySelector('.project-card__gallery-arrow--prev');
        const nextBtn = gallery.querySelector('.project-card__gallery-arrow--next');

        if (images.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        let currentIndex = 0;

        images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('project-card__gallery-dot');
            if (i === 0) dot.classList.add('is-active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        const dots = Array.from(dotsContainer.querySelectorAll('.project-card__gallery-dot'));

        function goToSlide(index) {
            currentIndex = (index + images.length) % images.length;
            track.scrollTo({ left: track.clientWidth * currentIndex, behavior: 'smooth' });
            updateActiveDot(currentIndex);
        }

        function updateActiveDot(index) {
            dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        let scrollTimeout;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const index = Math.round(track.scrollLeft / track.clientWidth);
                currentIndex = index;
                updateActiveDot(index);
            }, 100);
        });
    });

    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let valid = true;
        const t = translations[currentLang].contact.form;

        ['name', 'email', 'message'].forEach(field => {
            const input = form.elements[field];
            const errorEl = form.querySelector(`[data-error-for="${field}"]`);
            errorEl.textContent = '';

            if (!input.value.trim()) {
                errorEl.textContent = t.required;
                valid = false;
            } else if (field === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
                errorEl.textContent = t.invalidEmail;
                valid = false;
            }
        });

        if (!valid) return;

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        formStatus.textContent = t.sending;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = t.success;
                form.reset();
            } else {
                formStatus.textContent = t.fail;
            }
        } catch (err) {
            formStatus.textContent = t.connectionError;
        } finally {
            submitBtn.disabled = false;
        }
    });

    document.getElementById('statusYear').textContent = new Date().getFullYear();

    applyLanguage(currentLang);

});