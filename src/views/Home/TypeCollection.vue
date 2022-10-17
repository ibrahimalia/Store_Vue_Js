<template>
  <v-row>
    <v-col cols="12" sm="12">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-col>
    <v-col cols="4" sm="4">
      <v-row class="ml-3">
        <v-col cols="12" sm="12">
          <div v-for="(n, i) in images" :key="i" :id="i" v-show="hide == i">
            <img :src="n.url" />
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <div
            class="imagecontainer img ml-1"
            v-for="(n, i) in images"
            :key="i"
            @click="change(i)"
          >
            <v-img width="200" height="50" :src="n.url"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" sm="4">
      <v-row>
        <v-col cols="12" sm="12">
          <span class="titleProduct"> Title product </span>
        </v-col>
        <v-col cols="12" sm="12" class="mt-n4">
          <span class="price"> $2323.23</span><br />
          <span class="grey--text">Carbon fiber rod for drone like angles</span>
        </v-col>
        <v-col cols="12" sm="12" class="grey--text fontText">
          Please take time to read and understand our<span class="red--text">
            Terms and Conditions </span
          ><br />for Online Ordering during the Community Quarantine.
        </v-col>
        <v-col cols="12" sm="12" class="green--text"> In Stack </v-col>
        <v-col cols="12" sm="12" class="grey--text">
          <v-row>
            <v-col cols="12" sm="12">
              Purchase this product now and earn 29 Points!
            </v-col>
            <v-divider class="ml-16 mr-16"></v-divider>
            <v-col cols="12" sm="12">
              features : <br />
              <ul>
                <li>Purchase this product now and earn 29 Points!</li>
                <li>Purchase this product now and earn 29 Points!</li>
                <li>Purchase this product now and earn 29 Points!</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" sm="4">
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <v-row justify="end" class="mr-4">
                <v-btn
                  icon
                  fab
                  x-small
                  color="grey"
                  class="grey lighten-3 mr-3 mt-n6"
                >
                  <v-icon>fas fa-angle-left</v-icon>
                </v-btn>

                <v-btn
                  icon
                  fab
                  x-small
                  color="grey"
                  class="grey lighten-3 mt-n6"
                >
                  <v-icon>fas fa-angle-right</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12">
          <v-col cols="12" sm="12" class="grey--text">
            Please spsefic quntity for this product:
          </v-col>
          <v-divider class="mr-15"></v-divider>
          <v-col cols="12" sm="12">
            <v-btn icon small color="red" flat text>
              <v-icon> mdi-minus</v-icon>
            </v-btn>
            <input type="text" value="1" disabled />
            <v-btn icon small color="green" flat text>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" class="grey--text">
            Please click button to put product in cart:
          </v-col>
          <v-divider class="mr-15"></v-divider>
          <v-col cols="12" sm="12">
            <v-btn class="ml-5 mt-n1" outlined color="indigo"> Add </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" class="ml-5">
      <v-divider class="mr-15"></v-divider>
      <v-row>
        <v-col cols="12" sm="12">
          <v-tabs v-model="tab" background-color="transparent" >
            <v-tab> DESCRIPTION </v-tab>
            <v-tab> REVIEWS </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-row class="grey lighten-4">
                <v-col cols="6" sm="6" class="grey lighten-4 mt-5 grey--text">
                  Thin and Lightweight Mount to your helmet and move with ease.
                  Thought and secure. A carbon fiber design with high tensile
                  strength keeps your camera secure. Ready for the elements.
                  Corrosion-resistant design. Use it in rain, snow or sunshine
                  without worry. A safe fit.
                </v-col>
                <v-col cols="12" sm="12">
                  <v-expansion-panels accordion class="grey lighten-4">
                    <v-expansion-panel class="grey lighten-4">
                      <v-expansion-panel-header class="grey lighten-4"
                        >Specification
                      </v-expansion-panel-header>
                      <v-expansion-panel-content class="grey lighten-4">
                        <v-col cols="6" sm="6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </v-col>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel class="grey lighten-4">
                      <v-expansion-panel-header class="grey lighten-4"
                        >What in the box</v-expansion-panel-header
                      >
                      <v-expansion-panel-content class="grey lighten-4">
                        <v-col cols="6" sm="6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </v-col>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="12" sm="12" class="text-center grey--text ">
                         Related Product
                </v-col>
                <v-col cols="12" sm="12">
                  <v-container  id="contain" class="grey lighten-4 show">
                    <v-slide-group class="pa-4" show-arrows>
                      <v-slide-item v-for="n in 15" :key="n">
                        <v-hover
                          open-delay="356"
                          close-delay="385"
                          v-slot="{ hover }"
                        >
                          <v-card
                            class="ml-1"
                            height="370"
                            width="250"
                            :elevation="hover ? 12 : 2"
                            :class="{
                              'on-hover': hover,
                              ['card' + n]: card,
                              ['cardTransition' + n]: cardTransition,
                            }"
                          >
                            <v-img
                              class="white--text"
                              height="200px"
                              :lazy-src="`https://picsum.photos/10/6?image=${
                                n * 5 + 10
                              }`"
                              :src="`https://picsum.photos/500/300?image=${
                                n * 5 + 10
                              }`"
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

                            <v-card-subtitle class="pb-0">
                              informaton
                            </v-card-subtitle>

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
            </v-tab-item>

            <v-tab-item> Reviews </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
const ImageZoom = require("js-image-zoom");
export default {
  created() {
    this.images = [
      { url: require("../../assets/p1.jpeg") },
      { url: require("../../assets/p2.jpg") },
      { url: require("../../assets/p3.webp") },
      { url: "https://picsum.photos/510/300?random" },
    ];
  },
  mounted() {
    var options = {
      height: 450,
      width: 400,
      zoomWidth: 350,
      offset: { vertical: 1, horizontal: 20 },
    };
    this.images.forEach((element, index) => {
      new ImageZoom(document.getElementById(index.toString()), options);
    });
  },

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
        {
          text: "Link 2",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
      ],
      images: [],
      hide: 0,
      tab: null,
      itemsTab: ["DESCRIPTION", "REVIEWS"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    change(id) {
      this.hide = id;
    },
  },
};
</script>

<style scoped src="../../assets/Css/Product/productDetails.css"></style>
