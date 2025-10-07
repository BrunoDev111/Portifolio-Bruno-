<template>
    <section class="hero">
        <div class="container">
            <div class="hero-grid">
                <!-- Conteúdo à esquerda -->
                 <div class="hero-content animate__animated animate__fadeInLeft">
                    <p class="greeting">Olá, eu sou</p>
                    <h1 class="name">Bruno Feliciano</h1>
                    <div class="title">
                        <span class="subtitle">Desenvolvedor</span>
                        <span class="highlight">Vue.js</span>
                    </div>
                    <p class="description">
                        Desenvolvedor Jr focado em criar experiências web modernas e interativas 
            com Vue.js e tecnologias front-end
                    </p>
                    <div class="cta-buttons">
                        <router-link to="/projetos" class="btn btn-primary">
                            Ver projetos
                        </router-link>
                        <button class="btn btn-secondary" @click="downloadCV" >
                            📥 Baixar CV
                        </button>
                    </div>
                    <div class="social-links">
                        <a 
                        href="https://github.com/BrunoDev111" 
                        class="social-icon"
                        target="_blank"
                        title="GitHub">
                        💻
                        </a>
                        <a 
                        href="https://linkedin.com/in/bruno-feliciano-de-souza"
                        class="social-icon"
                        target="_blank"
                        title="LinkedIn">
                        💼
                        </a>
                        <a 
                        href="https://app.netlify.com/teams/brunodev111" 
                        class="social-icon"
                        target="_blank"
                        title="Netlifly">
                        🚀
                        </a>
                        <a 
                        href="mailto:mrbrunofeliciano@outlook.com" 
                        class="social-icon"
                        title="Email">
                        ✉️
                        </a>
                    </div>
                 </div>
                         <!-- Imagem à direita -->
                 <div class="hero-image animate__animated animate__fadeInRight">
                    <img    src="../assets/img/bruno3.png" 
                            alt="Bruno Feliciano" 
                            class="profile-pic">
                 </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'Hero',
    methods: {
        downloadCV() {
    window.open('https://curriculovirtualbruno.netlify.app/', '_blank');
}
    }
}
</script>


<style scope>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
}
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-image {
    order: -1;
  }
  
  .cta-buttons,
  .social-links {
    justify-content: center;
  }
}
/* Conteúdo */
.hero-content {
  max-width: 600px;
}
.greeting {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.name {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.light-mode .name {
  background: linear-gradient(135deg, #212529 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.subtitle {
  color: var(--text-dim);
}
.highlight {
  color: var(--primary);
  font-weight: bold;
}
.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-dim);
}
/* Botões */
.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
/* Redes Sociais */
.social-links {
  display: flex;
  gap: 1rem;
}
.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 77, 0, 0.1);
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s;
}
.social-icon:hover {
  background: rgba(255, 77, 0, 0.2);
  transform: scale(1.1);
}
/* Imagem */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-pic {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--primary);
  box-shadow: 
    0 0 0 10px rgba(255, 77, 0, 0.1),
    0 0 0 20px rgba(255, 77, 0, 0.05),
    0 20px 60px rgba(255, 77, 0, 0.4);
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s, box-shadow 0.3s;
}
.profile-pic:hover {
  transform: scale(1.05);
  box-shadow: 
    0 0 0 10px rgba(255, 77, 0, 0.2),
    0 0 0 20px rgba(255, 77, 0, 0.1),
    0 25px 80px rgba(255, 77, 0, 0.6);
}
@keyframes float {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-20px);
  }
}
@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .profile-pic {
    width: 250px;
    height: 250px;
  }
}
</style>