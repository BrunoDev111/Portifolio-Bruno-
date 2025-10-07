<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">
        Entre em <span class="highlight">Contato</span>
      </h2>
      
      <div class="contact-cards">
        <a 
          href="mailto:mrbrunofeliciano@outlook.com" 
          class="contact-card"
        >
          <div class="contact-icon">✉️</div>
          <h3>Email</h3>
          <p>mrbrunofeliciano@outlook.com</p>
        </a>

        <a 
          href="tel:+5511993952555" 
          class="contact-card"
        >
          <div class="contact-icon">📱</div>
          <h3>Telefone</h3>
          <p>(11) 9.9395-2555</p>
        </a>

        <a 
          href="https://linkedin.com/in/bruno-feliciano-de-souza" 
          target="_blank"
          class="contact-card"
        >
          <div class="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <p>Conecte-se comigo</p>
        </a>

        <a 
          href="https://github.com/BrunoDev111" 
          target="_blank"
          class="contact-card"
        >
          <div class="contact-icon">💻</div>
          <h3>GitHub</h3>
          <p>Veja meus projetos</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  font-weight: 900;
  position: relative;
}

.section-title::after {
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

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 77, 0, 0.2);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.light-mode .contact-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(255, 77, 0, 0.3);
  border-color: var(--primary);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

.contact-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.contact-card p {
  color: var(--text-dim);
  font-size: 1rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
  }
}
</style>