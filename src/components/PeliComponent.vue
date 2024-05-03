<template>
    <div class="peli">
        <img :src=imgUrl alt="Descripció Película">
        <p>{{ tituloPeli }}</p>
        <p>{{ puntuacionPeli }}</p>

    </div>

</template>

<script>
export default {
  name: 'PeliComponent',
  props: {
    imgUrl: String,
    tituloPeli: String,
    puntuacionPeli: String
  }
}
</script>

<style scoped>
.peli{
    color: whitesmoke;
    width: 300px;
    height: 400px;
    /* border: 1px solid whitesmoke; */
}
.peli img{
    height: 300px;
}

</style>