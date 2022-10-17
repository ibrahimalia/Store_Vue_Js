<template>
  <v-col cols="12" sm="12">
    <section id="slider">
      <input type="radio" id="s0" name="slider" />
      <input type="radio" id="s1" name="slider" />
      <input type="radio" id="s2" name="slider" checked />
      <input type="radio" id="s3" name="slider" />
      <input type="radio" id="s4" name="slider" />

      <label
        v-for="(slide, index) in slides"
        :key="index"
        :for="'s' + index"
        :id="'slide' + index"
      >
        <v-img
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          :src="slide.url"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </label>
    </section>
  </v-col>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  mounted() {
    if (!this.slides) {
      this.topProduct();
    }
  },
 computed:{
   ...mapState({
     slides:(state)=>state.Home.topProduct
   })
 },
  methods: {
    ...mapActions("Home",["topProduct"])
  },
  
};
</script>

<style src="../../assets/Css/Home/home.css" scoped></style>
