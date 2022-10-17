<template>
  <v-row>
    <v-col cols="2" sm="2" class="mt-1">
      <Fillter></Fillter>
    </v-col>
    <v-col cols="10" sm="10" class="mt-1">
     <section-product></section-product> 
    </v-col>
  </v-row>
</template>

<script>
import Fillter from "../../components/Fillter/Fillter.vue";
import SectionProduct from "../../components/Product/SectionProduct.vue";
export default {
  props: ["slug"],
  components: {
    Fillter,
    SectionProduct,
  },
};
</script>

<style></style>
