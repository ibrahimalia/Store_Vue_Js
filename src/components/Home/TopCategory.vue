<template>
  <v-row>
    <v-col
      v-for="(item, index) in category"
      :key="index"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card class="mx-auto" max-width="344" elevation="12">
        <v-img
          max-width="300"
          max-height="250"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          src="https://via.placeholder.com/600/92c952"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="blue"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-card-actions class="mt-16">
            <v-row class="text-center mt-16" wrap>
              <v-col
                cols="12"
                sm="12"
                class="grey lighten-2 mt-16 captionCategury"
              >
                {{item.name}}
              </v-col>
            </v-row>
          </v-card-actions>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    if (!this.category) {
      this.topCategory();
    }
  },
  computed: {
    ...mapState({
      category: (state) => state.Home.topCategory,
    }),
  },
  methods: {
    ...mapActions("Home", ["topCategory"]),
  },
};
</script>

<style src="../../assets/Css/Home/home.css" scoped></style>
