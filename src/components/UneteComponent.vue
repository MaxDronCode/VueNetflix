<template>
    <div class="container">
        <div class="div1">
            <h2>Únete Hoy</h2>
            <p>Obtén acceso para mantener tus propias <span>listas personales personalizadas, hacer un seguimiento de lo que has visto</span> y buscar y filtrar <span>qué ver a continuación</span>, independientemente de si está en los cines, en la televisión o disponible en servicios de streaming populares como Disney Plus, Amazon Prime Video, Netflix, fuboTV y Apple TV Plus.</p>
            <button href="#">Regístrate</button>
        </div>
        <div class="div2">
            <ul>
                <li>Disfruta de TMDB sin anuncios</li>
                <li>Mantén una lista de seguimiento personal</li>
                <li>Filtra por tus suscripciones a servicios de retransmisión y encuentra algo que ver</li>
                <li>Registra las películas y series que has visto</li>
                <li>Crea listas personalizadas</li>
                <li>Aporta y mejora nuestra base de datos</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UneteComponent',
}
</script>

<style scoped>
*{
    /* border: 1px solid white; */
    background-color: #f9ebd9;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    display: flex;
    height: 300px;
}
.div1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 10px; 
    padding: 20px;
    text-align: left;
    width: 70%;
    margin-right: 100px;
}
h2, p {
    margin-top: 0;
    margin-bottom: 0; 
}
h2{
    height: 50px;
}
p{
    font-weight: 500;
}
span{
    font-style: italic;
    color: #273644;
    font-weight: 600;
}
button{
    background-color: #273644;
    color: #f9ebda;
    width: 120px;
    height: 40px;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 30px;
}
.div2{
    width: 50vw;
    margin-top: 80px;
}
li{
    text-align: left;
}
</style>
