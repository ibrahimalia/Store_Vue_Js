<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-col>
    <v-col cols="12" sm="12" class="text ml-5"> ALL Brands </v-col>
    <v-col cols="12" sm="12">
      <v-toolbar class="grey lighten-3" flat>
        <v-toolbar-title class="grey--text"> Sort : </v-toolbar-title>
        <v-row>
          <v-col cols="3" sm="3" class="d-flex ml-5 mt-6">
            <v-select
              v-model="select"
              box="false"
              flat
              background-color="grey lighten-3"
              :items="selected"
              dense
              solo
              :menu-props="{ bottom: true, offsetY: true }"
            ></v-select>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider></v-divider>
    </v-col>
    <v-col cols="12" sm="12">
      <v-row>
        <v-col cols="3" sm="3" v-for="n in 10" :key="n">
          <v-hover open-delay="356" close-delay="385" v-slot="{ hover }">
            <v-card
              class="ml-1"
              height="370"
              width="300"
              :elevation="hover ? 12 : 2"
              :class="{
                'on-hover': hover,
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
                <router-link to="/shop/cables/cabel1">
                <v-btn color="grey" text> Details </v-btn>
                </router-link>
                <v-btn color="grey" text> cart </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
      ],
      selected: ["Foo", "Bar", "Fizz", "Buzz"],
      select: "Foo",
    };
  },
};
</script>

<style src="../../assets/Css/Fillter/fillter.css" scoped></style>
