<template>
    <NavComponent/>
    <br><h1>LOGIN</h1>
</template>

<script>
import NavComponent from './NavComponent.vue'

export default {
    name: "LoginComponent",
    components: {
        NavComponent
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');
*{
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
</style>