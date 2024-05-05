import { createApp } from 'vue'                                   
import App from './App.vue'                                       // en App.vue la app se exporta como App
import { createRouter, createWebHistory } from 'vue-router'       // instalas vue-router con npm install
// importas los componentes para crear las rutas 
import HomeComponent from '@/components/HomeComponent'
import PeliculasComponent from '@/components/PeliculasComponent'
import SeriesComponent from '@/components/SeriesComponent'
import LoginComponent from '@/components/LoginComponent'
// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeComponent }, // El componente que se renderizará cuando estemos en "/"
    { path: '/peliculas', component: PeliculasComponent },
    { path: '/series', component: SeriesComponent },
    { path: '/login', component: LoginComponent},
  ]
});

const app = createApp(App); // Creas las app con createApp
app.use(router);            // Le indicas que use todo lo de arriba, lo del router
app.mount('#app');          // la montas en el DOM