<template>
    <NavComponent />

    <br>
    <h1>CRUD</h1>

    <div class="pelis">
        <div v-for="(peli, index) in peliculas" :key="index" class="peli">
            <PeliComponent :Poster="peli.Poster" :Title="peli.Title" :Year="peli.Year" :imdbID="peli.imdbID"/>
            <button @click="editarPelicula(index)">Editar</button>
            <button @click="eliminarPelicula(index)">Eliminar</button>
        </div>
    </div>

    <div class="forms">

        <!-- Formulario para añadir una nueva película -->
        <form @submit.prevent="crearPelicula">
            <h2>Afegir Película</h2>
            <label for="peli_nom">Nom:</label>
            <input type="text" v-model="nuevaPelicula.Title"><br>
            <label for="peli_punt">Puntuació:</label>
            <input type="text" v-model="nuevaPelicula.Year"><br>
            <label for="peli_img">Poster:</label>
            <input type="file" @change="cargarImagen"><br>
            <input type="submit" value="Crear">
        </form>
    </div>
    <div v-if="editandoPelicula !== null" class="modal-overlay">
        <div class="modal-content">
            <form @submit.prevent="guardarEdicion">
                <h2>Editar Película</h2>
                <label for="edit_peli_nom">Nom:</label>
                <input type="text" v-model="peliculaEditada.Title"><br>
                <label for="edit_peli_punt">Puntuació:</label>
                <input type="text" v-model="peliculaEditada.Year"><br>
                <label for="edit_peli_img">Poster:</label>
                <input type="file" @change="cargarImagenEditada"><br>
                <input type="submit" value="Guardar Cambios">
                <button type="button" @click="cancelarEdicion">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<script>
import NavComponent from './NavComponent.vue';
import PeliComponent from './PeliComponent.vue';
import axios from "axios"


export default {
    name: "CrudComponent",
    components: {
        NavComponent,
        PeliComponent
    },
    data() {
        return {
            peliculas: [],
            nuevaPelicula: {
                Title: '',
                Year: '',
                Poster: '',
                imdbID: 'tt5186860'
            },
            editandoPelicula: null,
            peliculaEditada: {
                Title: '',
                Year: '',
                Poster: '',
                imdbID: ''
            }
        }
    },
    mounted() {
        this.obtenirDetalls();
    },
    methods: {
        obtenirDetalls() {
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
        },
        crearPelicula() {
            if (this.nuevaPelicula.Title && this.nuevaPelicula.Year && this.nuevaPelicula.Poster) {
                this.peliculas.push({ ...this.nuevaPelicula });
                this.nuevaPelicula = {
                    Title: '',
                    Year: '',
                    Poster: '',
                    imdbID: 'tt5186860'
                };
            } else {
                alert('Por favor, rellene todos los campos');
            }
        },
        cargarImagen(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.nuevaPelicula.Poster = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        editarPelicula(index) {
            this.editandoPelicula = index;
            this.peliculaEditada = { ...this.peliculas[index] };
        },
        guardarEdicion() {
            if (this.peliculaEditada.Title && this.peliculaEditada.Year && this.peliculaEditada.Poster) {
                this.peliculas[this.editandoPelicula] = { ...this.peliculaEditada };
                this.cancelarEdicion();
            } else {
                alert('Por favor, rellene todos los campos');
            }
        },
        cancelarEdicion() {
            this.editandoPelicula = null;
            this.peliculaEditada = {
                Title: '',
                Year: '',
                Poster: ''
            };
        },
        cargarImagenEditada(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.peliculaEditada.Poster = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        eliminarPelicula(index) {
            if (confirm("Estas segur? S'eliminará la película de finitivament.")){
                this.peliculas.splice(index,1)
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

* {
    font-family: "Teachers", sans-serif;
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

.peli {
    color: whitesmoke;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pelis {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

form {
    color: black;
    margin: 20px;
}
.forms{
    display: flex;
}
input{
    margin: 5px;
    font-size: 16px;

}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 10000;
}
.blur {
    filter: blur(5px);
    pointer-events: none;
}

</style>
