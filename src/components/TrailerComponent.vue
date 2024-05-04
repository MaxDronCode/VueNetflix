<template>
  <div class="container">
    <div class="trailer" :style="{ backgroundImage: 'url(' + imgUrl + ')' }">
      <img :src=dotsUrl alt="desc" class="dots">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffffff" d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
    </div>
    <p>{{ tituloTrailer }}</p>
  </div>
</template>

<script>
import DotsImage from '@/assets/DotsHorizontalCircle.png';
export default {
  name: 'TrailerComponent',
  props: {
    imgUrl: String,
    tituloTrailer: {
      type: String,
      default: "Texto por defecto"
    }
  },
  data(){
    return {
      dotsUrl: DotsImage
    }
  }
}
</script>
 
<style scoped>
*{
    box-sizing: border-box;

}

.trailer{
  border: 1px solid black;
  height: 200px;
  width: 300px;
  background-size: cover;
  border-radius: 4px;
  margin: auto;
  position: relative;
  transition: transform 0.15s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; 
}
.trailer:hover{
  transform: scale(1.1);
}
.trailer:hover svg{
  transform: scale(1.25);
}


.dots{
  position: absolute;
  width: 30px;
  height: auto;
  top: 10px;
  right: 10px;
}
.dots:hover{
  filter: sepia(1) hue-rotate(200deg) saturate(400%) brightness(120%);

}

svg{
  position: absolute;
  width: 70px;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: transform 0.15s ease-in-out;
}

p {
  color: antiquewhite;
  font-weight: 500;
}
.container{
  margin: auto;
  padding: 10px;
}

</style>


<!-- ---------------------- TESTS -------------------------- -->


