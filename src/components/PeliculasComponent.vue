<template>
    <NavComponent/>
    <br><h1>PELÍCULAS</h1>
    <div class="pelis">
        <PeliComponent class="peli"
            v-for="(peli,index) in peliculas"
            :key="index"
            :Poster="peli.Poster"
            :Title="peli.Title"
            :Year="peli.Year"
            :imdbID="peli.imdbID">
        </PeliComponent>
    </div>
    <FooterComponent/>
</template>

<script>
import axios from "axios";
import NavComponent from "./NavComponent.vue";
import PeliComponent from "./PeliComponent.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
    name: "PeliculasComponent",
    components: {
        NavComponent,
        PeliComponent,
        FooterComponent
    },
    data(){
        return {
            info: null,
            peliculas: []
        }
    },
    mounted() {
        axios
        .get('http://www.omdbapi.com/?apikey=2adb59fa&s=sta') 
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
*{
    font-family: "Teachers", sans-serif;

}
p{
    color: whitesmoke;
}
h1 {
    font-size: 60px; 
    font-family: 'Arial', sans-serif; 
    background: linear-gradient(to right, #faebd8, #ffc67c); 
    -webkit-background-clip: text; 
    color: transparent; 
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    text-align: center;
}
.peli{
    color: whitesmoke;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pelis{
    display: grid;
    grid-template-columns: 1fr 1fr;

}
</style>