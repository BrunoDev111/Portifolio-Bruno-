<template>
    <nav class="navbar">
        <div class="nav-container">
            <!--logo-->
            <router-link to="/" class="logo">
                <span class="bracket">&lt;</span>
                BF
                <span class="bracket">/&gt;</span>
            </router-link>

                  <!-- Links Desktop -->
            <ul class="nav-links">
                <li>
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li>
                    <router-link to="/sobre" class="nav-link">Sobre</router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="nav-link">Projetos</router-link>
                </li>
                <li>
                    <router-link to="/habilidades" class="nav-link">Habilidades</router-link>
                </li>
                <li>
                    <router-link to="/contato" class="nav-link">Contato</router-link>
                </li>      
            </ul>

            <!-- Ações (Tema + Mobile Menu) -->

            <div class="nav-actions">
                <button 
                    class="theme-toggle"
                    @click="toggleTheme"
                    :title="isDarkMode ? 'Tema Claro' : 'Tema Escuro'">
                    {{ isDarkMode ? '🌙' : '☀️' }}    
                </button>
                <button 
                    class="mobile-toggle"
                    @click="toggleMobileMenu"
                    :class="{active: mobileMenuOpen}">
                    {{ mobileMenuOpen ? '✕' : '☰' }}
                </button>
            </div>
        </div>

            <!-- Menu Mobile -->
        <Transition name="slide-down">
            <div v-if="mobileMenuOpen" class="mobile-menu">
                <router-link to="/" class="mobile-link" @click="closeMobileMenu">
                    Home
                </router-link>
                <router-link to="/sobre" class="mobile-link" @click="closeMobileMenu">
                    Sobre
                </router-link>
                <router-link to="/projetos" class="mobile-link" @click="closeMobileMenu">
                    Projetos
                </router-link>
                <router-link to="/habilidades" class="mobile-link" @click="closeMobileMenu">
                    Habilidades
                </router-link>
                <router-link to="/contato" class="mobile-link" @click="closeMobileMenu">
                    Contato
                </router-link>
            </div>
        </Transition>
    </nav>
    </template>
    
    
    <script>

    import { computed, ref, onMounted, onUnmounted} from 'vue'
    import { useStore } from 'vuex'

    export default {
     name: 'Navbar',
    setup(){
        const store = useStore()
        const mobileMenuOpen = ref(false)

        // Getter para saber se está em dark mode
        const isDarkMode = computed(() => store.getters.isDarkMode)
            // Toggle tema
        const toggleTheme = () =>{
            store.dispatch('toggleTheme')
        }
            // Toggle menu mobile
        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value
        }
        // Fechar menu mobile
        const closeMobileMenu = () =>{
            mobileMenuOpen.value = false
        }
        // Fechar menu mobile ao redimensionar para desktop
        const handleResize = () => {
            if (window.innerWidth >= 768 && mobileMenuOpen.value) {
            mobileMenuOpen.value = false
            }
        }

        onMounted(() => {
            window.addEventListener('resize', handleResize)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })
         return{
            isDarkMode,
            mobileMenuOpen,
            toggleTheme,
            toggleMobileMenu,
            closeMobileMenu
         }
    }
}
</script>
<!-- Aplicando o estilo em escopo-->
<style scoped>
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    border-bottom: 1px solid rgba(255, 255, 255, 0,2);
}
.dark-mode .navbar{
    background-color: rgba(10, 14, 39, 0.8);
    border-bottom: 1px solid rgba(255, 77, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*logo*/
.logo{
    font-size: 1.5rem;
    font-weight:bolder ;
    color: #212529;
    text-decoration: none;
    transition: transform 0.3s;
}
.dark-mode .logo{
    color: #fff
}
.logo:hover{
    transform: scale(1.2);
    
}
.bracket {
  color: var(--primary);
}

/*navi links desk*/

.nav-links{
display: none;
list-style: none;
gap: 2rem;
margin: 0;
padding:0 ;
}

@media(min-width: 768px){
.nav-links{
    display: flex;
}

} 
.nav-link{
text-decoration: none;
color:#495057;
transition:color 0.3s ;
font-weight: 600;
padding: 0.5rem 0;
position: relative;
}
.dark-mode .nav-link{
    color:var(--text);
}
.nav-link::after{
    content: '';
    position:absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background:var(--primary);
    transition: width  0.3s;
}
.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}
.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;

}
.theme-toggle, .mobile-toggle{
    background: rgba(255, 77, 0, 0.1);
    border: none;
    padding:0.5rem 1rem ;
    border-radius:8px ;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s;
}
.theme-toggle:hover,
.mobile-toggle:hover {
  background: rgba(255, 77, 0, 0.2);
  transform: scale(1.1);
}
.mobile-toggle{
    display: block;
}

@media(min-width:768px){
    .mobile-toggle{
    display: none;
    }
}
.mobile-toggle.active {
  background: var(--primary);
  color: white;
}
/*menu mobile*/
.mobile-menu{
    display: flex;
    flex-direction: column;
    background: rgba(10, 14, 39, 0.95) ;
    backdrop-filter: blur(20px);
    padding: 1rem;
    border-top: 1px solid rgba(0, 0, 0,  0.2);  
}
.light-mode .mobile-menu{
    background:rgba(255, 255, 255,  0.95);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.mobile-link{
    padding: 1rem;
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s;
    text-align: center;
}
.light-mode .mobile-link {
  color: #212529;
}
.mobile-link:hover,
.mobile-link.router-link-active{
    background: rgba(192, 67, 14, 0.1);
    color: var(--primary);
}   
/*animacao de slide down*/
.slide-down-enter-active,
.slide-down-leave-active{
    transition:all 0.3s ease;
}
.slide-down-enter-from{
    transform:translateY(-100%);
    opacity:0;
}
.slide-down-leave-to{
    transform: translateY(-100%);
    opacity: 0;
}



</style>