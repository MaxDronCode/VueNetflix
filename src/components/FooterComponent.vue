<template>
    <div class="container">
        <div class="div1">
            <img :src=logoUrl alt="descripcion">
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
                <a href="">Directrices</a><br/>
                <a href="">Discusiones</a><br/>
                <a href="">Tabla de Clasificación</a><br/>
            </div>
            <div class="div2">
                <p>LEGAL</p>
                <a href="">Términos de uso</a><br/>
                <a href="">Términos de uso de la API</a><br/>
                <a href="">Política de Privacidad</a>
            </div>
        </div>
    </div>
</template>

<script>
import logoMaxFlix from '@/assets/logoMaxFlix.webp';
export default {
    name: 'FooterComponent',
    data(){
        return {
            logoUrl: logoMaxFlix
        }
    }
}

</script>

<style scoped>
*{
    /* border: 1px solid white; */
}
.div-general{
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
    /* margin: auto; */
    gap: 50px;

}
.container{
    display: flex;
    background-color: #273644;
    height: 320px;
    width: 100%;
    justify-content: space-evenly;
}
.div1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    
}
img{
    width: 200px;
    height: auto;
    border-radius: 100%;
    margin: auto;
    
}
button{
    background-color: #f9ebda;
    color: #273644;
    margin: auto;
    width: 300px;
    height: 40px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
}
.div2{
    text-align: left;
    
}
a{
    text-decoration: none;
    color: #f9ebda;
}
p{
    font-weight: 700;
    font-size: 20px;
    color: whitesmoke;
}
</style>
