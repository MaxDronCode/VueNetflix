<template>
    <div class="container">
        <div class="div1">
            <img :src="logoUrl" alt="Logo MaxFlix">
            <button>ÚNETE A LA COMUNIDAD</button>
        </div>
        <div class="div-general">
            <div class="div2">
                <p>LO BÁSICO</p>
                <a href="">Sobre MaxFlix</a><br />
                <a href="">Contacto</a><br />
                <a href="">Foros de Ayuda</a><br />
                <a href="">API</a><br />
                <a href="">Estado del Sistema</a>
            </div>
            <div class="div2">
                <p>PARTICIPA</p>
                <a href="">Guía de Aportaciones</a><br />
                <a href="">Añadir Nueva Pelicula</a><br />
                <a href="">Añadir Nueva Serie</a><br />
            </div>
            <div class="div2">
                <p>COMUNIDAD</p>
                <a href="">Directrices</a><br />
                <a href="">Discusiones</a><br />
                <a href="">Tabla de Clasificación</a><br />
            </div>
            <div class="div2">
                <p>LEGAL</p>
                <a href="">Términos de uso</a><br />
                <a href="">Términos de uso de la API</a><br />
                <a href="">Política de Privacidad</a>
            </div>
        </div>
    </div>
</template>

<script>
import logoMaxFlix from '@/assets/logoMaxFlix.webp';

export default {
    name: 'FooterComponent',
    data() {
        return {
            logoUrl: logoMaxFlix
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #273644;
    padding: 20px;
    gap: 30px;
    flex-wrap: wrap;
}

.div1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    gap: 15px;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

button {
    background-color: #f9ebda;
    color: #273644;
    width: 250px;
    height: 40px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #e5dbcb;
}

.div-general {
    display: flex;
    justify-content: space-evenly;
    gap: 50px;
    flex-wrap: wrap;
    text-align: left;
    max-width: 800px;
}

.div2 p {
    font-weight: 700;
    font-size: 20px;
    color: whitesmoke;
    margin-bottom: 10px;
}

.div2 a {
    text-decoration: none;
    color: #f9ebda;
    margin-bottom: 5px;
    display: block;
}

.div2 a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        /* align-items: flex-start; */
        gap: 20px;
    }

    .div1 {
        align-items: flex-start;
        text-align: left;
    }

    /* img {
        width: 120px;
        height: 120px;
    } */

    button {
        width: 200px;
    }

    .div-general {
        /* gap: 30px; */
        max-width: 100%;
    }

    .div2 p {
        font-size: 18px;
    }

    .div2 a {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    /* img {
        width: 100px;
        height: 100px;
    } */

    button {
        width: 180px;
        font-size: 14px;
    }

    .div2 p {
        font-size: 16px;
    }

    .div2 a {
        font-size: 12px;
    }
}
</style>
