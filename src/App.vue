<template>
  <NavComponent></NavComponent>
  <img class="logo-img" alt="Vue logo" src="./assets/logo.webp">
  <h2>Tendencias</h2>
  <div class="pelis">
    <PeliComponent
      v-for="(peli,index) in peliculas"
      :key="index"
      :imgUrl="peli.imgUrl"
      :tituloPeli="peli.tituloPeli"
      :puntuacionPeli="peli.puntuacionPeli">
    </PeliComponent>
  </div>
  <h2>Últimos Trailers</h2>
  <div class="trailers">
    <TrailerComponent v-for="(trailer, index) in trailers"
      :key="index"
      :imgUrl="trailer.imgUrl">
    </TrailerComponent>
  </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import PeliComponent from './components/PeliComponent.vue'
import TrailerComponent from './components/TrailerComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    PeliComponent,
    TrailerComponent
  },
  data() {
    return{
      peliculas: [
        {imgUrl: "img/theMiracleClub.webp", tituloPeli: "tituloPeli", puntuacionPeli: "8.5"},
        {imgUrl: "img/RebelMoon.jpg", tituloPeli: "Rebel Moon", puntuacionPeli: "8.4"},
        {imgUrl: "img/freuds.jpg", tituloPeli: "Freud's Last Session", puntuacionPeli: "8.3"},
        {imgUrl: "img/thanksgiving.webp", tituloPeli: "Thanksgiving", puntuacionPeli: "8.2"},
        {imgUrl: "img/theKitchen.webp", tituloPeli: "The Kitchen", puntuacionPeli: "8.1"},
        {imgUrl: "img/laSociedadDeLaNieve.webp", tituloPeli: "La Sociedad de la Nieve", puntuacionPeli: "8"},
        {imgUrl: "img/anatomiaDeUnaCaida.jpg", tituloPeli: "Anatomia de una Caída", puntuacionPeli: "7.9"},
        {imgUrl: "img/chickenRun.jpg", tituloPeli: "Chicken Run", puntuacionPeli: "7.8"},
        {imgUrl: "img/granTurismo.jpg", tituloPeli: "Gran Turismo", puntuacionPeli: "7.7"},
        {imgUrl: "img/killersOfTheFlowerMoon.jpg", tituloPeli: "Killers Of The Flower Moon", puntuacionPeli: "7.6"},
        {imgUrl: "img/leaveTheWorldBehind.jpg", tituloPeli: "Leave The World Behind", puntuacionPeli: "7.5"},
        {imgUrl: "img/napoleon.jpg", tituloPeli: "Napoleon", puntuacionPeli: "7.4"},
        
      ],
      trailers: [
        {imgUrl: "img/cobraKai.jpg"},
        {imgUrl: "img/starWarsLaRemesaMala.jpg"},
        {imgUrl: "img/starWarsVisions.jpg"},
      ]
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
.logo-img{
  width: 100%;
  display: block;

}
h2{
  text-align: left;
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}

.pelis{
  display: flex;
  overflow-x:auto;
  overflow-y: hidden;
  align-items: flex-start;
  height: 420px;
  gap: 20px;
  padding: 0;
  background-color: antiquewhite;
  background-image: url("../public/img/bg_tendencias.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.trailers{
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: flex-start;
  height: 320px;
  gap: 20px;
  padding: 0;
}

</style>
