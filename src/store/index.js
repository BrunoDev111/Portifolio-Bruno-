import { createStore } from 'vuex'

export default createStore({
state: {

    //aqui vao ser os temas 
    darkMode: true,

    //aqui serao os projetos
    projects:[{
                id:1,
                title:'Baudelare',
                description: 'E-commerce de bolsas femininas com design elegante e minimalista.Catálogo de produtos com detalhes e preços.',
                tech:['HTML5', 'CSS3', 'JavaScript', 'Design Responsivo'],
                icon:'👜',
                github:'https://github.com/seu-usuario/baudelare',
                demo:'https://baudelare.com/'
            },{
                id:2,
                title:'Fashionni',
                description: 'Landing page de moda com coleções sazonais. Interface moderna e atrativa para e-commerce de moda.',
                tech:['HTML5', 'CSS3', 'JavaScript',],
                icon:'👗',
                github:'https://github.com/seu-usuario/fashionni',
                demo:'https://fashionni.netlify.app/'
            },{
                id: 3,
                title: 'Rodizio Organistas',
                description: 'Sistema de organização de rodízio de organistas para igreja. Calendário interativo com agenda de julho a dezembro 2025.',
                tech: ['HTML5', 'CSS3', 'JavaScript'],
                icon: '🎹',
                github: 'https://github.com/seu-usuario/organistas',
                demo: 'https://organistas-guarani.netlify.app/'
            }
        ],
    skills:[
                { name: 'HTML5', level: 90 },
                { name: 'CSS3 & Animações', level: 90 },
                { name: 'JavaScript', level: 80 },
                { name: 'Vue.js', level: 80 },
                { name: 'Vuex', level: 70 },
                { name: 'Bootstrap 5', level: 40 },
                { name: 'Node.js & Express', level: 20 },
                { name: 'Firebase', level: 20 },
                { name: 'jQuery', level: 15 },
                { name: 'Git/GitHub', level: 10 },
                { name: 'MongoDB', level: 10 },
                { name: 'React.js', level: 10 }
            ],
            currentFilter: 'all',
            searchQuery: ''
    },
getters: {
    //tema do site
    isDarkMode: state => state.darkMode,

    //projetos filtrados
    fiteredPorjects: state =>{
        let filtered = state.projects

    //filtro por busca
    if(state.searchQuery){
        filtered = filtered.filter(project =>
            project.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
            project.description.toLowerCase().includes(state.searchQuery.toLowerCase())
        )}

    //filtro por tecnologia    
    if(state.currentFilter !== 'all'){
        filtered = filtered.filter(project =>
            project.tech.some(tech =>
                tech.toLowerCase().includes(state.currentFilter.toLowerCase())
            )
        )
    }
        return filtered 
    },

    //skill ordenadas por nivel 
    sortedSkills: state =>{
        return [...state.skills].sort((a,b) => b.level - a.level)
    },

     // tecnologias únicas para filtros
    uniqueTechs: state =>{
        const techs = new Set()
        state.projects.forEach(project =>{
            project.tech.forEach(tech => techs.add(tech))
        })
        return['all', ...Array.from(techs)]
    }
},

mutations:{

    //toggle tema    
    TOGGLE_THEME(state){
        state.darkMode = !state.darkMode
        localStorage.setItem('darkMode', state.darkMode)
    },

    //inicializar o  tema do localstorage
    INIT_THEME(state){
        const savedTheme = localStorage.getItem('darkMode')
        if(savedTheme !== null){
            state.darkMode = savedTheme === 'true'
        }
    },
    // atualizar filtro de projetos
    SET_FILTER(state, filter) {
      state.currentFilter = filter
    },
    // atualizar busca
    SET_SEARCH(state, query) {
      state.searchQuery = query
    },
    // limpar filtros
    CLEAR_FILTERS(state) {
      state.currentFilter = 'all'
      state.searchQuery = ''
    }
},
actions: {
    // Toggle tema com animação
    toggleTheme({ commit }) {
      commit('TOGGLE_THEME')
      document.body.classList.toggle('dark-mode')
      document.body.classList.toggle('light-mode')
    },
    
    // Inicializar app
    initApp({ commit, state }) {
      commit('INIT_THEME')
      // Aplicar tema no body
      if (state.darkMode) {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('light-mode')
      } else {
        document.body.classList.add('light-mode')
        document.body.classList.remove('dark-mode')
      }
    },
    
    // Atualizar filtro
    updateFilter({ commit }, filter) {
      commit('SET_FILTER', filter)
    },
    
    // Atualizar busca
    updateSearch({ commit }, query) {
      commit('SET_SEARCH', query)
    },
    
    // Limpar todos os filtros
    clearAllFilters({ commit }) {
      commit('CLEAR_FILTERS')
    }
  }
})