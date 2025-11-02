const substituir = document.querySelector(".conteudo-portfolio");
const botoes = {
  home: document.querySelector(".categoria-home"),
  sobre: document.querySelector(".categoria-sobre"),
  projetos: document.querySelector(".categoria-projetos"),
  achievements: document.querySelector(".categoria-achievements"),
  contato: document.querySelector(".categoria-contato")
};



function animacao(elemento) {
    gsap.set(elemento, { 
        y: 300,  
        opacity: 0
    });
    gsap.to(elemento, {
        y: 0,
        opacity: 1,
        duration: 1, 
        ease: "power2.out"
    });
}


let ultimoClicado = botoes.home;
ultimoClicado.style.background = '#3e403f';

Object.values(botoes).forEach(el => {

el.addEventListener('click', () => {
    if (ultimoClicado) {
            ultimoClicado.style.background = '';
    }

    el.style.background = '#3e403f';
        ultimoClicado = el;
    });

});






// HOME
function carregarHome() {

    substituir.innerHTML = `
    
        <div class="animar">
            <div class="apresentacao">
            <h1>Olá, eu sou Daniel Goussevskii</h1>
            <p class="localizacao">
                <i class="fa-solid fa-location-dot"></i> Localizado no Brasil • Minas Gerais - Belo Horizonte
            </p>
            <p class="descricao">
                Sou um desenvolvedor <strong>Front-end</strong> com experiência em 
                <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, 
                <strong>React</strong>, <strong>TypeScript</strong>, <strong>PHP</strong>, 
                <strong>Bootstrap</strong> e <strong>Node.js</strong>. 
                Tenho foco na criação de interfaces modernas, responsivas e de fácil usabilidade,
                sempre priorizando desempenho e boas práticas de código. Busco desenvolver 
                soluções que unam design e funcionalidade, garantindo uma experiência fluida ao
                usuário e um código bem estruturado para o time de desenvolvimento.
            </p>
            </div>

            <div class="skills">
            <h2><i class="fa-solid fa-code"></i> Skills</h2>
            <p>Minhas Skills.</p>
            <div class="icones-skills">
                <img src="https://skillicons.dev/icons?i=html" alt="HTML">
                <img src="https://skillicons.dev/icons?i=css" alt="CSS">
                <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind">
                <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap">
                <img src="https://skillicons.dev/icons?i=js" alt="JavaScript">
                <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript">
                <img src="https://skillicons.dev/icons?i=react" alt="React">
                <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
                <img src="https://skillicons.dev/icons?i=php" alt="PHP">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub">
            </div>
            </div>
        </div>
    `;

    animacao(substituir.querySelector(".animar"));
     
}

// SOBRE
function carregarSobre() {

    substituir.innerHTML = `
    
        <div class="animar">
            <div class="apresentacao">
            <h1>Sobre</h1>
            <p class="localizacao">Um pouco sobre mim</p>
            <p class="descricao">
                Olá! Obrigado por visitar meu portfólio.<br>
                Sou um <strong>estudante de programação</strong> apaixonado por tecnologia e 
                desenvolvimento de software.<br>
                Atualmente, estou focado em aprimorar minhas habilidades como 
                <strong>desenvolvedor Front-end</strong>, criando interfaces modernas, 
                eficientes e com ótima experiência para o usuário.
                Gosto de enfrentar <strong>desafios</strong> que me façam evoluir,
                explorando diferentes formas de resolver problemas e otimizar o desempenho
                das aplicações.<br>
                Acredito que o equilíbrio entre <strong>praticidade</strong> e 
                <strong>performance</strong> é essencial para criar soluções realmente 
                eficazes.
                Sou <strong>curioso</strong>, <strong>autodidata</strong> e 
                sempre busco aprender novas ferramentas e boas práticas que me 
                tornem um profissional mais completo.<br>
                Valorizo a clareza no código, o trabalho em equipe 
                e a constante evolução pessoal e técnica.
                Atualmente, sigo aprendendo e construindo projetos 
                que unem <strong>design</strong>, <strong>funcionalidade</strong> e
                <strong>alta performance</strong> — sempre com o objetivo de transformar 
                boas ideias em experiências digitais de qualidade.
            </p>
            </div>

            <div class="carreira">
            <h2><i class="fa-solid fa-briefcase"></i> Minha Carreira</h2>
            <p>Minha jornada profissional até agora:</p>
            <div class="experiencia">
                <div class="cargo">
                <h3>Nada ainda kkk</h3>
                <span class="empresa">Pt. Affan Technology Indonesia (Parto.id) · Jambi, Indonesia</span>
                <span class="periodo">Jun 2025 - Aug 2025 · 2 Meses · Internship · Presencial</span>
                </div>
            </div>
            </div>

            <div class="educacao">
            <h2><i class="fa-solid fa-graduation-cap"></i> Educação</h2>
            <p>Minha jornada educacional:</p>
            <div class="experiencia">
                <div class="cargo">
                <h3>Nada também kkk</h3>
                <span class="empresa">Pt. Affan Technology Indonesia (Parto.id) · Jambi, Indonesia</span>
                <span class="periodo">Jun 2025 - Aug 2025 · 2 Meses · Internship · Presencial</span>
                </div>
            </div>
            </div>
        </div>
    `;

    animacao(substituir.querySelector(".animar"));
}

// PROJETOS
function carregarProjetos() {

    substituir.innerHTML = `
        <div class="animar">
            <div class="apresentacao">
            <h1>Projetos</h1>
            <p class="localizacao">Alguns dos projetos privados e públicos que desenvolvi ou colaborei</p>
            </div>

            <div class="projetos-portfolio">
            <div class="projeto">
                <div class="imagem-projeto">
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen>
                </iframe>
                </div>
                <div class="projeto-info">
                <h4>Portfólio Pessoal</h4>
                <span>Portfólio pessoal feito do zero através de HTML, TAILWIND E REACT</span>
                <div class="tecnologias-projeto">
                    <img src="https://skillicons.dev/icons?i=html" alt="HTML">
                    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind">
                    <img src="https://skillicons.dev/icons?i=react" alt="React">
                </div>
                </div>
            </div>

            <div class="projeto">
                <div class="imagem-projeto">
                <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen>
                </iframe>
                </div>
                <div class="projeto-info">
                <h4>Projeto 2</h4>
                <span>descricao-projeto escricao-projeto escricao-projeto escricao-projeto escricao-projeto</span>
                <div class="tecnologias-projeto">
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS">
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS">
                </div>
                </div>
            </div>
            </div>
        </div>
    `;

    animacao(substituir.querySelector(".animar"));
}

// ACHIEVEMENTS
function carregarAchievements() {

    substituir.innerHTML = `
        <div class="animar">
            <div class="apresentacao">
            <h1>Achievements</h1>
            <p class="localizacao">A coleção certificados e badges que conquistei ao longo da minha trajetória profissional e acadêmica.</p>
            </div>

            <div class="certificados-portfolio">
            <div class="certificado">
                <div class="imagem-certificado"></div>
                <div class="certificado-info">
                <h4>Certificado 1</h4>
                <span>Academia tal</span>
                <span>Data</span>
                </div>
            </div>

            <div class="certificado">
                <div class="imagem-certificado"></div>
                <div class="certificado-info">
                <h4>Certificado 2</h4>
                <span>Academia tal</span>
                <span>Data</span>
                </div>
            </div>

            <div class="certificado">
                <div class="imagem-certificado"></div>
                <div class="certificado-info">
                <h4>Certificado 3</h4>
                <span>Academia tal</span>
                <span>Data</span>
                </div>
            </div>
            </div>
        </div>
    `;

    animacao(substituir.querySelector(".animar"));
}

// CONTATO
function carregarContato() {

    substituir.innerHTML = `

        <div class="animar">
            <div class="apresentacao">
            <h1>Contato</h1>
            <p class="localizacao">Se estiver em busca de alguém dedicado para sua equipe, ficarei feliz em conversar.</p>
            </div>

            <div class="grade-contato">
            <div class="cartao-contato gmail">
                <div class="informacoes">
                <h3>Entre em Contato</h3>
                <p>Envie um e-mail para dúvidas ou colaborações.</p>
                <a href="mailto:danielgoussevskii@gmail.com" target="_blank" class="botao">Ir para o Gmail <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <i class="fa-solid fa-envelope icone"></i>
            </div>

            <div class="cartao-contato instagram">
                <div class="informacoes">
                <h3>Siga Minha Jornada</h3>
                <p>Acompanhe meu trabalho criativo.</p>
                <a href="https://www.instagram.com/_duskity_?igsh=MWRwMnpjaTk1ZTkxcw==" target="_blank" class="botao">Ir para o Instagram <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <i class="fa-brands fa-instagram icone"></i>
            </div>

            <div class="cartao-contato linkedin">
                <div class="informacoes">
                <h3>Conecte-se Comigo</h3>
                <p>Entre em contato profissionalmente.</p>
                <a href="https://www.linkedin.com/in/daniel-g-b47378383" target="_blank" class="botao">Ir para o LinkedIn <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <i class="fa-brands fa-linkedin icone"></i>
            </div>

            <div class="cartao-contato github">
                <div class="informacoes">
                <h3>Explore o Código</h3>
                <p>Confira meus projetos open-source.</p>
                <a href="https://github.com/Daniel-Dev-FullStack" target="_blank" class="botao">Ir para o GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                <i class="fa-brands fa-github icone"></i>
            </div>
            </div>

            <div class="contato-direto">
            <form class="formulario-contato">
                <h2 class="titulo-formulario">Ou contate-me diretamente</h2>
                <input placeholder="Nome" required type="text">
                <input placeholder="Email" required type="email">
                <textarea placeholder="Mensagem" required></textarea>
                <button>Enviar Mensagem</button>
            </form>
            </div>
        </div>
    `;

    animacao(substituir.querySelector(".animar"));
}

// EVENTOS
botoes.home.addEventListener("click", carregarHome);
botoes.sobre.addEventListener("click", carregarSobre);
botoes.projetos.addEventListener("click", carregarProjetos);
botoes.achievements.addEventListener("click", carregarAchievements);
botoes.contato.addEventListener("click", carregarContato);
