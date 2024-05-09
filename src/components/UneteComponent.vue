<template>
    <div class="container">
        <div class="div1">
            <h2>Únete Hoy</h2>
            <p>
                Obtén acceso para mantener tus propias
                <span>listas personales personalizadas</span>, hacer un seguimiento de lo que has visto
                y buscar y filtrar
                <span>qué ver a continuación</span>, independientemente de si está en los cines, en la
                televisión o disponible en servicios de streaming populares como Disney Plus, Amazon
                Prime Video, Netflix, fuboTV y Apple TV Plus.
            </p>
            <router-link to="/login" class="button">Regístrate</router-link>
        </div>
        <div class="div2">
            <ul>
                <li>Disfruta de TMDB sin anuncios</li>
                <li>Mantén una lista de seguimiento personal</li>
                <li>
                    Filtra por tus suscripciones a servicios de retransmisión y encuentra algo que
                    ver
                </li>
                <li>Registra las películas y series que has visto</li>
                <li>Crea listas personalizadas</li>
                <li>Aporta y mejora nuestra base de datos</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UneteComponent'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f9ebd9;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 20px;
}

.div1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
    text-align: left;
    width: 60%;
    min-width: 250px;
    margin-right: 20px;
}

h2, p {
    margin-top: 0;
    margin-bottom: 0;
}

h2 {
    height: 50px;
}

p {
    font-weight: 500;
}

span {
    font-style: italic;
    color: #273644;
    font-weight: 600;
}

.button {
    text-decoration: none;
    background-color: #273644;
    color: #f9ebda;
    width: 120px;
    height: 40px;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 30px;
    text-align: center;
    line-height: 40px;
    font-family: "Teachers", sans-serif;
}

.div2 {
    flex: 1;
    min-width: 250px;
    padding: 20px;
}

li {
    text-align: left;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: flex-start;
    }

    .div1, .div2 {
        width: 100%;
        margin: 0;
        padding: 10px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }

    .button {
        width: 100%;
        margin-top: 10px;
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }

    .button {
        font-size: 14px;
        height: 35px;
        line-height: 35px;
    }
}
</style>
    