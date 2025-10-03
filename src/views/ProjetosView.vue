<template>
  <section class="projetos-section">
    <div class="container">
      <h2 class="page-title animate__animated animate__fadeInUp">
        Meus <span class="highlight">Projetos</span>
      </h2>

      <div class="filters">
        <input 
          type="text" 
          class="search-input"
          :value="searchQuery"
          @input="handleSearch"
          placeholder="🔍 Buscar projeto..."
        />

        <div class="tech-filters">
          <button 
            v-for="tech in uniqueTechs"
            :key="tech"
            class="filter-btn"
            :class="{ active: currentFilter === tech }"
            @click="handleFilter(tech)"
          >
            {{ tech }}
          </button>
        </div>
      </div>

      <div v-if="filteredProjects.length > 0" class="projects-grid">
        <div 
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card animate__animated animate__fadeInUp"
        >
          <div class="project-image">
            <div class="project-icon">{{ project.icon }}</div>
            <div class="project-overlay">
              <a :href="project.github" target="_blank" class="overlay-btn">GitHub</a>
              <a :href="project.demo" target="_blank" class="overlay-btn">Demo</a>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span 
                v-for="(tech, index) in project.tech"
                :key="index"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="no-results">
        😕 Nenhum projeto encontrado com esses filtros
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ProjetosView',
  setup() {
    const store = useStore()

    const filteredProjects = computed(() => store.getters.fiteredPorjects)
    const uniqueTechs = computed(() => store.getters.uniqueTechs)
    const currentFilter = computed(() => store.state.currentFilter)
    const searchQuery = computed(() => store.state.searchQuery)

    const handleFilter = (filter) => {
      store.dispatch('updateFilter', filter)
    }

    const handleSearch = (event) => {
      store.dispatch('updateSearch', event.target.value)
    }

    return {
      filteredProjects,
      uniqueTechs,
      currentFilter,
      searchQuery,
      handleFilter,
      handleSearch
    }
  }
}
</script>

<style scoped>
.projetos-section {
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

/* Filtros */
.filters {
  margin-bottom: 3rem;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.3s;
}

.dark-mode .search-input {
  background: var(--dark-light);
  border-color: rgba(255, 77, 0, 0.2);
  color: var(--text);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
}

.tech-filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  border: 2px solid #dee2e6;
  background: transparent;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  color: var(--text);
}

.dark-mode .filter-btn {
  border-color: rgba(255, 77, 0, 0.3);
  color: var(--text);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
}

/* Grid de Projetos */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Cards de Projeto */
.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.light-mode .project-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.08);
}

.dark-mode .project-card {
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 60px rgba(255, 77, 0, 0.4);
  border-color: var(--primary);
}

/* Imagem/Ícone do Projeto */
.project-image {
  height: 200px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-icon {
  font-size: 5rem;
  position: relative;
  z-index: 1;
}

.project-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

/* Overlay com Botões */
.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-btn {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.overlay-btn:hover {
  background: var(--secondary);
  transform: scale(1.05);
}

/* Conteúdo do Card */
.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--text);
}

.project-description {
  color: var(--text-dim);
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.375rem 0.75rem;
  background: rgba(255, 77, 0, 0.1);
  color: var(--primary);
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Mensagem de Sem Resultados */
.no-results {
  text-align: center;
  padding: 4rem 0;
  font-size: 1.2rem;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>