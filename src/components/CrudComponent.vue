<template>
    <NavComponent />

    <br>
    <h1>CRUD</h1>

    <div class="pelis">
        <div v-for="(peli, index) in peliculas" :key="index" class="peli">
            <PeliComponent :Poster="peli.Poster" :Title="peli.Title" :Year="peli.Year" :imdbID="peli.imdbID">
                <button @click="editarPelicula(index)" class="btn_imp">Editar</button>
                <button @click="eliminarPelicula(index)" class="btn_imp">Eliminar</button>
            </PeliComponent>
        </div>
    </div>

    <div class="forms">
        <!-- Formulario para añadir una nueva película -->
        <form @submit.prevent="crearPelicula" class="formCrear">
            <h2>Afegir Película</h2>
            <label for="peli_nom">Nom:</label>
            <input type="text" v-model="nuevaPelicula.Title">
            <label for="peli_punt">Puntuació:</label>
            <input type="text" v-model="nuevaPelicula.Year">
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

    <FooterComponent></FooterComponent>
</template>

<script>
import NavComponent from './NavComponent.vue';
import PeliComponent from './PeliComponent.vue';
import FooterComponent from './FooterComponent.vue';
import axios from "axios";

export default {
    name: "CrudComponent",
    components: {
        NavComponent,
        PeliComponent,
        FooterComponent
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
                .get('https://www.omdbapi.com/?apikey=2adb59fa&s=war')
                .then(response => {
                    this.info = response.data;
                    if (this.info && this.info.Search) {
                        this.peliculas = this.info.Search.map(peli => ({
                            imdbID: peli.imdbID,
                            Poster: peli.Poster,
                            Title: peli.Title,
                            Year: peli.Year
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
            if (confirm("¿Estás seguro? Se eliminará la película definitivamente.")) {
                this.peliculas.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

* {
    font-family: "Teachers", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-size: 60px;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #faebd8, #ffc67c);
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    text-align: center;
    margin: 20px 0;
}

.peli {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background-color: #2d3e4f;
    border-radius: 10px;
    color: whitesmoke;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.pelis {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 20px;
    width: 100%;
}

form {
    color: black;
    margin: 20px;
}

.forms {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px;
}

input {
    margin: 5px;
    font-size: 16px;
    padding: 5px;
    width: 100%;
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
    width: 90%;
    max-width: 500px;
}

.blur {
    filter: blur(5px);
    pointer-events: none;
}

.btn_imp {
    width: 80%;
    font-size: 14px;
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    background-color: #ffc67c;
    border: none;
    border-radius: 6px;
    color: #2d3e4f;
    transition: background-color 0.3s ease;
}

.btn_imp:hover {
    background-color: #e6b46b;
}

.formCrear {
    color: whitesmoke;
    background-color: #273644;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
}

.formCrear input {
    margin: 10px 0;
    font-size: 16px;
    width: 100%;
}

.formCrear h2 {
    margin-top: 0;
    border-top: 1px solid wheat;
    padding-top: 10px;
}

@media (max-width: 768px) {
    .pelis {
        grid-template-columns: 1fr;
        gap: 15px;
        margin: 10px;
    }

    .forms {
        width: 100%;
        margin: 10px;
    }

    .formCrear {
        width: 95%;
    }

    .modal-content {
        width: 95%;
    }

    input {
        font-size: 14px;
        padding: 8px;
    }

    .btn_imp {
        font-size: 12px;
        padding: 8px;
    }
}
</style>
