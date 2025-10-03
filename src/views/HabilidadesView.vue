<template>
  <section class="habilidades-section">
    <div class="container">
      <h2 class="page-title animate__animated animate__fadeInUp">
        Minhas <span class="highlight">Habilidades</span>
      </h2>

      <div class="skills-list">
        <div 
          v-for="(skill, index) in sortedSkills"
          :key="index"
          class="skill-item animate__animated animate__fadeInUp"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percent">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div 
              class="skill-progress"
              :style="{ width: animateSkills ? `${skill.level}%` : '0%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="stat-icon">💻</div>
          <h3 class="stat-number">3</h3>
          <p class="stat-label">Projetos Online</p>
        </div>

        <div class="stat-card animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
          <div class="stat-icon">📚</div>
          <h3 class="stat-number">43.5h</h3>
          <p class="stat-label">Curso Vue.js</p>
        </div>

        <div class="stat-card animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="stat-icon">⚡</div>
          <h3 class="stat-number">76%</h3>
          <p class="stat-label">Curso Programador BR</p>
        </div>

        <div class="stat-card animate__animated animate__fadeInUp" style="animation-delay: 0.5s">
          <div class="stat-icon">🎯</div>
          <h3 class="stat-number">100%</h3>
          <p class="stat-label">Dedicação</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HabilidadesView',
  setup() {
    const store = useStore()
    const animateSkills = ref(false)

    const sortedSkills = computed(() => store.getters.sortedSkills)

    onMounted(() => {
      setTimeout(() => {
        animateSkills.value = true
      }, 300)
    })

    return {
      sortedSkills,
      animateSkills
    }
  }
}
</script>

<style scoped>
.habilidades-section {
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

/* Lista de Habilidades */
.skills-list {
  margin-bottom: 4rem;
}

.skill-item {
  margin-bottom: 2rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text);
}

.skill-percent {
  color: var(--primary);
  font-weight: 600;
  font-size: 1.1rem;
}

/* Barra de Progresso */
.skill-bar {
  height: 14px;
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.dark-mode .skill-bar {
  background: rgba(26, 31, 58, 0.8);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 10px;
  transition: width 1.5s ease;
  position: relative;
  overflow: hidden;
}

/* Efeito de Brilho na Barra */
.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Grid de Estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* Cards de Estatísticas */
.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.light-mode .stat-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
}

.dark-mode .stat-card {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 77, 0, 0.3);
  border-color: rgba(255, 77, 0, 0.3);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-dim);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-icon {
    font-size: 2.5rem;
  }
}
</style>