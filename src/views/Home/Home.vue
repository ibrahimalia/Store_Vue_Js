<template>
  <v-container fluid>
    <v-row class="mt-n4">
      <slider> </slider>
      <Caption :name="'Top Category'"></Caption>
    </v-row>
    <v-row>
      <v-container>
       <top-category></top-category>
      </v-container>
    </v-row>
     <v-row>
      <v-col cols="12" sm="12">
        <Caption :name="'Featured Products'"></Caption>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <slider-caption></slider-caption>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script type="module">
// @ is an alias to /src
import Slider from "../../components/Home/Slider.vue";
import TopCategory from "../../components/Home/TopCategory.vue";
import Caption from "../../components/Home/Caption.vue";
import SliderCaption from "../../components/Home/SliderCaption.vue";
export default {
  name: "Home",
  components: {
    Slider,
    Caption,
    SliderCaption,
    TopCategory
  },

  data() {
    return {};
  },
};
</script>
<style src="../../assets/Css/Home/home.css" scoped></style>
