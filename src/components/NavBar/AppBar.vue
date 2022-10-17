<template>
  <v-app-bar
    id="navbar"
    elevation="6"
    dense
    flat
    outlined
    elevate-on-scroll
    prominent
    color="grey lighten-3"
  >
    <v-row class="mt-3">
      <v-col cols="2" sm="2" md="4">
        <v-app-bar-nav-icon
          class=" d-flex d-sm-flex d-md-none"
          @click="changeDrawer()"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="title d-none d-lg-inline d-xl-inline">
          <span class="black--text"> BRANDLABTOB</span>
          <span class="green--text">.com</span>
        </v-toolbar-title>
        <v-toolbar-title class="d-none d-md-inline d-lg-none d-xl-none">
          <span class="black--text"> BRANDLABTOB</span>
          <span class="green--text">.com</span>
        </v-toolbar-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" sm="6" md="6" >
        <v-row >
          <v-col class="ml-5" cols="4" sm="4">
            <span
              class="grey--text text-caption d-none d-lg-inline d-xl-inline d-xl-none "
              >Login</span
            >
            <span class="black--text text-caption d-inline d-sm-inline ml-1"
              ><v-icon small color="grey lighten-1">fas fa-user-plus</v-icon></span
            >
          </v-col>
          <v-col cols="1" sm="4" md="4">
            <span
              class="grey--text text-caption d-none d-lg-inline d-xl-inline d-xl-none "
              >Wishlist</span
            >
            <v-icon small class=" ml-1 d-none d-sm-inline" color="grey lighten-1"
              >fas fa-shopping-basket</v-icon
            >
          </v-col>
          <v-col >
            <span
              class="grey--text text-caption d-none d-lg-inline d-xl-inline d-xl-none"
              >Cart/p 0.0$</span
            >
            <v-icon small class="ml-1 d-inline d-sm-inline" color="grey lighten-1"
              >mdi-cart</v-icon
            >
          </v-col>
        </v-row>
      </v-col>

      <v-row class="d-none d-md-inline d-lg-inline d-xl-none">
        <v-col cols="12" sm="12">
          <v-divider class="ml-16 mr-16"></v-divider>
        </v-col>
      </v-row>
    </v-row>
    <template v-slot:extension>
       <tabs-line-bar></tabs-line-bar>  
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import TabsLineBar from "./AppBar/TabsLineBar.vue";
export default {
  components:{
  TabsLineBar
  },
  mounted() {

    /* For Bar */
    window.addEventListener("scroll", function () {
      let m = this.document.getElementById("navbar");
      if (window.pageYOffset > 700) {
        m.classList.add("hideBar");
        setTimeout(function () {
          m.classList.add("add");
        }, 20);
      } else {
        m.classList.remove("hideBar");
        m.classList.remove("add");
      }
    });
    /* For Bar */
  },
  data() {
    return {
      icons: ["fas fa-business-time", "fas fa-suitcase"],
    };
  },
  methods: {
    ...mapActions("Manage", ["changeDrawer", "redirectTo"]),
    
  },
};
</script>
<style src="../../assets/Css/Bars/appBar.css" scoped></style>
