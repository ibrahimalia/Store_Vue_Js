<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-container id="contain" class="mx-auto grey lighten-4 show">
        <v-slide-group class="pa-4" show-arrows>
          <v-slide-item v-for="n in 15" :key="n">
            <v-hover open-delay="356" close-delay="385" v-slot="{ hover }">
              <v-card
                class="ml-1"
                height="370"
                width="250"
                :elevation="hover ? 12 : 2"
                :class="{
                  'on-hover': hover,
                  ['card'+n]: card,
                  ['cardTransition'+n]: cardTransition,
                }"
              >
                <v-img
                  class="white--text"
                  height="200px"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <v-spacer></v-spacer>
                    <v-fab-transition>
                      <v-btn
                        v-show="hover"
                        color="red"
                        class="white--text"
                        fab
                        x-small
                      >
                        <v-icon> mdi-heart </v-icon>
                      </v-btn>
                    </v-fab-transition>
                  </v-app-bar>
                  <v-card-title class="mt-16">name</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"> informaton </v-card-subtitle>

                <v-card-actions class="mt-16">
                  <v-fab-transition>
                    <v-btn
                      v-show="hover"
                      color="orange"
                      x-small
                      class="white--text"
                      fab
                    >
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                  </v-fab-transition>
                  <v-btn color="grey" text> Details </v-btn>
                  <v-btn color="grey" text> cart </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      card: true,
      cardTransition: false,
    };
  },
  mounted() {
    let contain = document.getElementById("contain");
    let self = this;
    // container
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          self.cardTransition = true;

          if (entries[0].target.classList.contains("show")) {
            entries[0].target.classList.remove("show");
          }
        }, 1000);
        observer.unobserve(entries[0].target)
      }
      
    });
    observer.observe(contain);
    

  },
};
</script>

<style src="../../assets/Css/Home/home.css" scoped></style>
