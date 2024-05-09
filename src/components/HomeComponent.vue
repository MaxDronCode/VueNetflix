<template>

  <NavComponent></NavComponent>
  <img class="logo-img" alt="Vue logo" src="../assets/logo.webp">
  <h2>Tendencias</h2>
  <div class="pelis">
    <PeliComponent v-for="(peli, index) in peliculas" :key="index" :Poster="peli.Poster" :Title="peli.Title"
      :Year="peli.Year" :imdbID="peli.imdbID">
    </PeliComponent>
  </div>
  <h2>Últimos Trailers</h2>
  <div class="trailers">
    <TrailerComponent v-for="(trailer, index) in trailers" :key="index" :imgUrl="trailer.imgUrl"
      :tituloTrailer="trailer.tituloTrailer">
    </TrailerComponent>
  </div>
  <UneteComponent class="unete" />
  <FooterComponent class="footer" />

</template>

<script>
import NavComponent from './NavComponent.vue'
import PeliComponent from './PeliComponent.vue'
import TrailerComponent from './TrailerComponent.vue'
import UneteComponent from './UneteComponent.vue'
import FooterComponent from './FooterComponent.vue'
import axios from "axios";


export default {
  name: "HomeComponent",
  components: {
    NavComponent,
    PeliComponent,
    TrailerComponent,
    UneteComponent,
    FooterComponent
  },
  data() {
    return {
      peliculas: [
        // {imgUrl: "img/theMiracleClub.webp", tituloPeli: "The Miracle Club", puntuacionPeli: "8.5"},
        // {imgUrl: "img/RebelMoon.jpg", tituloPeli: "Rebel Moon", puntuacionPeli: "8.4"},
        // {imgUrl: "img/freuds.jpg", tituloPeli: "Freud's Last Session", puntuacionPeli: "8.3"},
        // {imgUrl: "img/thanksgiving.webp", tituloPeli: "Thanksgiving", puntuacionPeli: "8.2"},
        // {imgUrl: "img/theKitchen.webp", tituloPeli: "The Kitchen", puntuacionPeli: "8.1"},
        // {imgUrl: "img/laSociedadDeLaNieve.webp", tituloPeli: "La Sociedad de la Nieve", puntuacionPeli: "8"},
        // {imgUrl: "img/anatomiaDeUnaCaida.jpg", tituloPeli: "Anatomia de una Caída", puntuacionPeli: "7.9"},
        // {imgUrl: "img/chickenRun.jpg", tituloPeli: "Chicken Run", puntuacionPeli: "7.8"},
        // {imgUrl: "img/granTurismo.jpg", tituloPeli: "Gran Turismo", puntuacionPeli: "7.7"},
        // {imgUrl: "img/killersOfTheFlowerMoon.jpg", tituloPeli: "Killers Of The Flower Moon", puntuacionPeli: "7.6"},
        // {imgUrl: "img/leaveTheWorldBehind.jpg", tituloPeli: "Leave The World Behind", puntuacionPeli: "7.5"},
        // {imgUrl: "img/napoleon.jpg", tituloPeli: "Napoleon", puntuacionPeli: "7.4"},

      ],
      trailers: [
        { imgUrl: "img/cobraKai.jpg", tituloTrailer: "Cobra Kai" },
        { imgUrl: "img/starWarsLaRemesaMala.jpg", tituloTrailer: "Star Wars: La Remesa Mala" },
        { imgUrl: "img/starWarsVisions.jpg", tituloTrailer: "Star Wars: Visions" },
        { imgUrl: "img/atlas.jpg", tituloTrailer: "Atlas" },
        { imgUrl: "img/garfield.jpg", tituloTrailer: "Garfield" },
        { imgUrl: "img/elReinoDelPlanetaDeLosSimios.jpg", tituloTrailer: "El Reino Del Planeta De Los Simios" },
        { imgUrl: "img/theBoys.jpg", tituloTrailer: "The Boys" },
      ]
    }
  },
  mounted() {
    axios
      .get('http://www.omdbapi.com/?apikey=2adb59fa&s=war')
      .then(response => {
        this.info = response.data;
        if (this.info && this.info.Search) {
          this.peliculas = this.info.Search.map(peli => ({
            imdbID: peli.imdbID,
            Poster: peli.Poster,
            Title: peli.Title,
            Year: peli.Year,
          }));
        }
      });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

* {
  box-sizing: border-box;
  font-family: "Teachers", sans-serif;
  letter-spacing: -.003em;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

.logo-img {
  width: 100%;
  display: block;

}

h2 {
  text-align: left;
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}

.pelis {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: flex-start;
  height: 420px;
  gap: 20px;
  padding: 0;
  background-color: antiquewhite;
  background-image: url("@/assets/bg_tendencias.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.trailers {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: flex-start;
  height: 320px;
  gap: 20px;
  padding: 0;
}
</style>