<template>
    <NavComponent />

    <br>
    <h1>CRUD</h1>

    <div class="pelis">
        <div v-for="(peli, index) in peliculas" :key="index" class="peli">
            <PeliComponent :imgUrl="peli.imgUrl" :tituloPeli="peli.tituloPeli" :puntuacionPeli="peli.puntuacionPeli" />
            <button @click="editarPelicula(index)">Editar</button>
            <button @click="eliminarPelicula(index)">Eliminar</button>
        </div>
    </div>

    <div class="forms">

        <!-- Formulario para añadir una nueva película -->
        <form @submit.prevent="crearPelicula">
            <h2>Afegir Película</h2>
            <label for="peli_nom">Nom:</label>
            <input type="text" v-model="nuevaPelicula.tituloPeli"><br>
            <label for="peli_punt">Puntuació:</label>
            <input type="text" v-model="nuevaPelicula.puntuacionPeli"><br>
            <label for="peli_img">Poster:</label>
            <input type="file" @change="cargarImagen"><br>
            <input type="submit" value="Crear">
        </form>

        <!-- Formulario para editar una película existente -->
        <form v-if="editandoPelicula !== null" @submit.prevent="guardarEdicion">
            <h2>Editar Película</h2>
            <label for="edit_peli_nom">Nom:</label>
            <input type="text" v-model="peliculaEditada.tituloPeli"><br>
            <label for="edit_peli_punt">Puntuació:</label>
            <input type="text" v-model="peliculaEditada.puntuacionPeli"><br>
            <label for="edit_peli_img">Poster:</label>
            <input type="file" @change="cargarImagenEditada"><br>
            <input type="submit" value="Guardar Cambios">
            <button type="button" @click="cancelarEdicion">Cancelar</button>
        </form>

        
    </div>
</template>

<script>
import NavComponent from './NavComponent.vue';
import PeliComponent from './PeliComponent.vue';

export default {
    name: "CrudComponent",
    components: {
        NavComponent,
        PeliComponent
    },
    data() {
        return {
            peliculas: [
                { imgUrl: "img/theMiracleClub.webp", tituloPeli: "The Miracle Club", puntuacionPeli: "8.5" },
                { imgUrl: "img/RebelMoon.jpg", tituloPeli: "Rebel Moon", puntuacionPeli: "8.4" }
            ],
            nuevaPelicula: {
                tituloPeli: '',
                puntuacionPeli: '',
                imgUrl: ''
            },
            editandoPelicula: null,
            peliculaEditada: {
                tituloPeli: '',
                puntuacionPeli: '',
                imgUrl: ''
            }
        }
    },
    methods: {
        crearPelicula() {
            if (this.nuevaPelicula.tituloPeli && this.nuevaPelicula.puntuacionPeli && this.nuevaPelicula.imgUrl) {
                this.peliculas.push({ ...this.nuevaPelicula });
                this.nuevaPelicula = {
                    tituloPeli: '',
                    puntuacionPeli: '',
                    imgUrl: ''
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
                    this.nuevaPelicula.imgUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        editarPelicula(index) {
            this.editandoPelicula = index;
            this.peliculaEditada = { ...this.peliculas[index] };
        },
        guardarEdicion() {
            if (this.peliculaEditada.tituloPeli && this.peliculaEditada.puntuacionPeli && this.peliculaEditada.imgUrl) {
                this.peliculas[this.editandoPelicula] = { ...this.peliculaEditada };
                this.cancelarEdicion();
            } else {
                alert('Por favor, rellene todos los campos');
            }
        },
        cancelarEdicion() {
            this.editandoPelicula = null;
            this.peliculaEditada = {
                tituloPeli: '',
                puntuacionPeli: '',
                imgUrl: ''
            };
        },
        cargarImagenEditada(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.peliculaEditada.imgUrl = e.target.result;
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
    color: whitesmoke;
    margin: 20px;
}
.forms{
    display: flex;
}
input{
    margin: 5px;
    font-size: 16px;

}

</style>
