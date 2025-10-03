<template>
  <section class="contato-section">
    <div class="container">
      <h2 class="page-title animate__animated animate__fadeInUp">
        Entre em <span class="highlight">Contato</span>
      </h2>

      <div class="contact-form animate__animated animate__fadeInUp">
        <div class="form-group">
          <label class="form-label">Nome</label>
          <input 
            type="text" 
            class="form-input" 
            v-model="formData.nome"
            placeholder="Seu nome"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Email</label>
          <input 
            type="email" 
            class="form-input" 
            v-model="formData.email"
            placeholder="seu@email.com"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Mensagem</label>
          <textarea 
            class="form-textarea" 
            v-model="formData.mensagem"
            placeholder="Sua mensagem..."
            rows="6"
          ></textarea>
        </div>

        <button 
          class="btn btn-primary" 
          @click="sendMessage"
          :disabled="isSending"
        >
          {{ isSending ? 'Enviando...' : 'Enviar Mensagem' }}
        </button>

        <div 
          v-if="showSuccess" 
          class="success-message animate__animated animate__fadeInDown"
        >
          ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
        </div>
      </div>

      <div class="contact-direct">
        <p class="contact-text">Ou entre em contato diretamente:</p>
        <div class="direct-links">
          <a href="tel:11993952555" class="direct-link">
            <span class="direct-icon">📱</span>
            <span>(11) 9.9395-2555</span>
          </a>
          <a href="mailto:mrbrunofeliciano@outlook.com" class="direct-link">
            <span class="direct-icon">✉️</span>
            <span>mrbrunofeliciano@outlook.com</span>
          </a>
          <a href="https://linkedin.com/in/bruno-feliciano-de-souza" target="_blank" class="direct-link">
            <span class="direct-icon">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContatoView',
  setup() {
    const formData = ref({
      nome: '',
      email: '',
      mensagem: ''
    })

    const isSending = ref(false)
    const showSuccess = ref(false)

    const sendMessage = () => {
      if (!formData.value.nome || !formData.value.email || !formData.value.mensagem) {
        alert('Por favor, preencha todos os campos!')
        return
      }

      if (!validateEmail(formData.value.email)) {
        alert('Por favor, insira um email válido!')
        return
      }

      isSending.value = true

      setTimeout(() => {
        showSuccess.value = true
        isSending.value = false

        formData.value = {
          nome: '',
          email: '',
          mensagem: ''
        }

        setTimeout(() => {
          showSuccess.value = false
        }, 5000)
      }, 1500)
    }

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }

    return {
      formData,
      isSending,
      showSuccess,
      sendMessage
    }
  }
}
</script>

<style scoped>
.contato-section {
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
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

/* Formulário */
.contact-form {
  max-width: 600px;
  margin: 0 auto 4rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text);
  font-size: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
  background: transparent;
  color: var(--text);
}

.dark-mode .form-input,
.dark-mode .form-textarea {
  background: var(--dark-light);
  border-color: rgba(255, 77, 0, 0.2);
  color: var(--text);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.btn {
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 77, 0, 0.4);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 77, 0, 0.6);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Mensagem de Sucesso */
.success-message {
  margin-top: 1.5rem;
  background: #28a745;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

/* Contato Direto */
.contact-direct {
  text-align: center;
  margin-top: 4rem;
}

.contact-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-dim);
}

.direct-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.direct-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 77, 0, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.direct-link:hover {
  background: rgba(255, 77, 0, 0.2);
  border-color: var(--primary);
  transform: translateY(-3px);
}

.direct-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .direct-links {
    flex-direction: column;
    align-items: center;
  }

  .direct-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>