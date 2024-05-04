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
  border: 1px solid black;
    color: #393459;
    font-weight: 700;
    flex: 0 0 auto;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;  }
.peli p{
  margin: 20px auto 20px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
  transition: 0.2s ease-in-out;
}
.peli img{
    max-width: 200px;
    height: auto;
    border-radius: 4px;
    border-bottom: 1px solid black;
}

.peli:hover p{
  background-color: whitesmoke;
  border-radius: 4px;
}


</style>