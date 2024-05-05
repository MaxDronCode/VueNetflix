<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/peliculas">Películas</router-link>
        <router-link to="/series">Series</router-link>
        <router-link to="/login">Login</router-link>
        <router-view/>
    </nav>
</template>

<script>
    export default {
        name: 'NavComponent'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

    nav{
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: fixed;
        background-color: rgb(0, 0, 0,0.5);
        z-index: 1000;
    }
    a{
        text-decoration: none;
        transition: 0.2s ease-in-out;
        color: antiquewhite;
        font-family: "Teachers", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
        font-size: 30px;
        width: 25%;
        text-align: center;
    }
    a:hover{
        padding: 10px;
        text-shadow: 0 0 5px #ffffff, 0 0 10px #000000, 0 0 20px #ffffff;
    }
    
</style>