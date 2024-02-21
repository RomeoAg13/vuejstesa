import { createApp } from 'vue'
import './style.css'

/** LES PLUGINS */

//----------------------VUE-ROUTER------------------------
import { createRouter, createWebHashHistory } from 'vue-router'

//---------------------FONTAWESOME------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faSignInAlt, faSignOutAlt, faShoppingBag, faCartPlus, faPlus, faShop, faMinus } from '@fortawesome/free-solid-svg-icons'

//---------------------HARLEM-----------------
import {
    createVuePlugin
} from 'harlem';


//---------------------PINIA-----------------
import {
    createPinia
} from 'pinia'

/** FIN DES PLUGINS */

/** LES COMPONENTS  */
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ShopPage from './pages/ShopPage.vue'
import CartPage from './pages/CartPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

/** LES CHOSES DYNAMIQUES UTILISANT LES PLUGINS  */
//-------------------------AJOUT DES ICONES--------------------------
/* add icons to the library */
library.add(faHome, faSignInAlt, faSignOutAlt, faShoppingBag, faCartPlus, faPlus, faShop, faMinus)
// harlem related 
//-------------------------AJOUT DES ROUTES-----------------------
const routes = [
    { 
        path: '/', 
        component: HomePage, 
        name: 'landing', 
    },
    {
        path: '/landing',
        redirect: '/',
        sensitive: true
    },
    { 
        path: '/login', 
        component: LoginPage, 
        name: 'login',
    },
    { 
        path: '/dashboard/:id(\\d+)', 
        component: DashboardPage, 
        name: 'dashboard',
    },
    { 
        path: '/shop', 
        name: 'shop',
        component: ShopPage ,
    }, 
    {
        path: '/cart',
        name: 'cart',
        component: CartPage
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFoundPage,
    },
]


//-------------------------AJOUT DU ROUTER-----------------------
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes, 
    strict: true,
})

//-------------NAVIGATION GUARDS-----------------------
router.beforeEach((to, from, next) => {

    const harlerUserStore = import('../src/stores/auth-store')
        .then((result) => {
            if (to.name == 'dashboard' &&  (result.userGetter.value.user.id).toString() !== to.params.id) { 
                next({ name: 'login' })
            } else {
                next()
            }
           
        })
        .catch(error => {
            console.error('Une erreur est survenue lors de l\'importation du module :', error);
            next({ name: 'login' }); 
        });

  
})


//-------------------------AJOUT DES PLUGINS À L'APPLICATION ----------------------
const app = createApp(App)
const pinia = createPinia()
const harlem = createVuePlugin()
app.use(router)
app.use(harlem)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
