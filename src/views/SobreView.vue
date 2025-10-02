<template>
  <section class="sobre-section">
    <div class="container">
      <h2 class="page-title animate__animated animate__fadeInUp">
        Sobre <span class="highlight">Mim</span>
      </h2>

      <div class="about-grid">
        <div class="about-content animate__animated animate__fadeInLeft">
          <h3 class="section-subtitle">Quem sou eu?</h3>
          <p class="about-text">
            Desenvolvedor de 24 anos, graduando em Análise e Desenvolvimento de Sistemas, 
            com foco em desenvolvimento web front-end.
          </p>
          <p class="about-text">
            Possuo experiência prática com HTML5, CSS3, JavaScript e estou aprendendo frameworks 
            modernos como Vue.js para criar aplicações web interativas.
          </p>
          <p class="about-text">
            Busco oportunidade para aplicar conhecimentos em programação e contribuir para 
            projetos de tecnologia em empresa inovadora.
          </p>

          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>São Paulo, SP</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span>(11) 9.9395-2555</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>mrbrunofeliciano@outlook.com</span>
            </div>
          </div>
        </div>

        <div class="about-content animate__animated animate__fadeInRight">
          <h3 class="section-subtitle">Formação</h3>
          
          <div class="card">
            <div class="card-icon">🎓</div>
            <h4 class="card-title">Análise e Desenvolvimento de Sistemas</h4>
            <p class="card-company">Faculdade</p>
            <p class="card-period">Em andamento</p>
          </div>

          <div class="card">
            <div class="card-icon">📚</div>
            <h4 class="card-title">Desenvolvimento Web Completo</h4>
            <p class="card-company">Programador BR</p>
            <p class="card-period">2024-2025 - 76% concluído</p>
            <p class="card-description">
              Curso completo do zero ao profissional: HTML, CSS, JavaScript, React, Node.js, MongoDB e mais 10 tecnologias
            </p>
          </div>

          <div class="card">
            <div class="card-icon">📚</div>
            <h4 class="card-title">Desenvolvimento Web Avançado com Vue</h4>
            <p class="card-company">Udemy</p>
            <p class="card-period">2025 - 43,5 horas</p>
          </div>
        </div>
      </div>

      <div class="about-grid" style="margin-top: 3rem;">
        <div class="about-content animate__animated animate__fadeInLeft">
          <h3 class="section-subtitle">Experiência</h3>
          <div class="card">
            <div class="card-icon">🏢</div>
            <h4 class="card-title">Auxiliar Operacional</h4>
            <p class="card-company">Mercado Atacadão</p>
            <p class="card-period">2017 - 2025</p>
            <p class="card-description">
              Atendimento ao cliente, gestão de estoque, operação de sistemas PDV e controle de qualidade
            </p>
          </div>
        </div>

        <div class="about-content animate__animated animate__fadeInRight">
          <h3 class="section-subtitle">Idiomas</h3>
          <div class="languages-grid">
            <div class="card">
              <div class="card-icon">🌐</div>
              <h4 class="card-title">Português</h4>
              <p class="card-company">Nativo</p>
            </div>

            <div class="card">
              <div class="card-icon">🇺🇸</div>
              <h4 class="card-title">Inglês</h4>
              <p class="card-company">Intermediário</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreView'
}
</script>

<style scoped>

.sobre-section {
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
}
.page-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: 900;
  position: relative;
  display: inline-block;
  width: 100%;
}
.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
}
.highlight {
  color: var(--primary);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.section-subtitle {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 700;
}
.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dim);
}
.contact-info {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: var(--text);
}
.contact-icon {
  font-size: 2rem;
  color: var(--primary);
}
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.light-mode .card {
  background: white;
  border: 1px solid rgba(255, 0, 0, 0.05);
}
.dark-mode .card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 77, 0, 0.2);
  border-color: rgba(255, 77, 0, 0.3);
}
.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text);
}
.card-company {
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.card-period {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}
.card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-dim);
  margin-top: 0.5rem;
}
.languages-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .languages-grid {
    grid-template-columns: 1fr;
  }
}
</style>