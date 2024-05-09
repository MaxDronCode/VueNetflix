<template>
    <div :style="fondoPelicula" class="full-page">
        <NavComponent/><br>
        <h1>Detalls</h1>
        <div class="general-container" >
            <img :src=pelicula.Poster alt="Descripció Película">
            <div class="int1-container">
                <h2><span>Títol: </span>{{ pelicula.Title }}</h2> 
                <h2><span>Sinopsis: </span></h2>
                <h3>{{ pelicula.Plot }}</h3>
                <h3>{{ pelicula.Year }} - {{ pelicula.Runtime }} - {{ pelicula.Genre }}</h3>
                <h2><span>Director: </span>{{ pelicula.Director }}</h2>
                <h2><span>Premis: </span>{{ pelicula.Awards }}</h2>
                <h2><span>Actors: </span></h2>
                <h3>{{ pelicula.Actors }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import NavComponent from "./NavComponent.vue";
import axios from "axios"


export default {
    name: "DetallComponent",
    props: {
        imdbID: {
            type: String,
            required: true
        }
    },
    components: {
        NavComponent
    },
    data(){
        return {
            pelicula : {}
        }
    },
    mounted() {
        this.obtenirDetalls();
    },
    methods: {
        obtenirDetalls() {
            const apiKey = '2adb59fa';
            axios
                .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${this.imdbID}`)
                .then(response => {
                    this.pelicula = response.data;
                })
                .catch(error => {
                    console.error("Error al obtenir els detalls de la pelicula:", error);
                });
        }
    },
    computed: {
        fondoPelicula() {
            return {
                backgroundImage: `url(${this.pelicula.Poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1
            };
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

* {
  box-sizing: border-box;
  font-family: "Teachers", sans-serif;
  letter-spacing: -.003em;

}
.full-page{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
img{
    border-radius: 10px;
}
h1 {
    width: 700px;
    margin: 50px auto 30px auto;
    font-size: 60px; 
    font-family: 'Arial', sans-serif; 
    background: linear-gradient(to right, #faebd8, #ffc67c); 
    /* -webkit-background-clip: text;  */
    /* color: transparent;  */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    text-align: center;
    border: 1px solid black;

}
h2,h3{
    color: #2d3e4f;
}

span{
    color: #161f27;
    padding-right: 30px;
    text-decoration: underline;
}
.general-container{
    width: 100%vw;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(10px); 
}
.int1-container{
    width: 600px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
