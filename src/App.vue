<template>
  <NavComponent></NavComponent>
  <img class="logo-img" alt="Vue logo" src="./assets/logo.webp">
  <div class="pelis">
    <PeliComponent imgUrl="img/predestination.jpg" tituloPeli="Predestination" puntuacionPeli="8.3"></PeliComponent>
    <PeliComponent imgUrl="img/GrandHotelBudapest.jpg" tituloPeli="Grand Hotel Budapest" puntuacionPeli="8.5"></PeliComponent>
    <PeliComponent imgUrl="img/GrandHotelBudapest.jpg" tituloPeli="Grand Hotel Budapest" puntuacionPeli="8.5"></PeliComponent>
    <PeliComponent imgUrl="img/GrandHotelBudapest.jpg" tituloPeli="Grand Hotel Budapest" puntuacionPeli="8.5"></PeliComponent>
    <PeliComponent imgUrl="img/GrandHotelBudapest.jpg" tituloPeli="Grand Hotel Budapest" puntuacionPeli="8.5"></PeliComponent>
    <PeliComponent imgUrl="img/GrandHotelBudapest.jpg" tituloPeli="Grand Hotel Budapest" puntuacionPeli="8.5"></PeliComponent>

  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import PeliComponent from './components/PeliComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    PeliComponent
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.logo-img{
  width: 100%;
}
.pelis{
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;

}

</style>
