<template>
  <v-tabs
    center-active
    align-with-title
    class="ml-16 justify-space-between d-none d-md-inline d-lg-inline d-xl-inline"
    color="grey"
  >
    <v-tabs-slider color="grey lighten-3"></v-tabs-slider>
    <v-tab>Home</v-tab>
    <v-tab>Shop</v-tab>
    <!-- fix drop down -->
    <v-menu
      :nudge-width="50"
      open-on-click
      offset-y
      transition="scroll-y-transition"
      content-class="contain-none"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-tab @click="downIconInTab($event)" id="tab" v-bind="attrs" v-on="on">
          Categary
          <v-icon x-small class="ml-2">fas fa-angle-down</v-icon>
        </v-tab>
      </template>
      <div>
        <v-list class="grey lighten-3 pointer">
          <div v-if="load" class="ml-4">
            <v-progress-circular
              indeterminate
              color="blue"
              class="ml-15"
            ></v-progress-circular>
          </div>
          <template v-else>
            <v-menu
              v-for="(category, index) in categoryTab"
              :key="index"
              :nudge-width="50"
              open-on-hover
              transition="scroll-x-transition"
              offset-x
              content-class=" contain-none"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on" link>
                  {{ category.name }}
                  <v-icon v-if="category.subCategory" class="ml-15" x-small>fas fa-chevron-right</v-icon>
                </v-list-item>
              </template>
              <v-list
                v-if="category.subCategory"
                class="grey lighten-3 pointer"
              >
                <v-list-item
                  v-for="(subCategory, index) in category.subCategory"
                  :key="index"
                  link
                >
                  <router-link :to="`/shop/${subCategory.slug}`"
                    ><v-list-item-title>{{
                      subCategory.name
                    }}</v-list-item-title></router-link
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <!--  -->
        </v-list>
      </div>
    </v-menu>
    <v-tab> <router-link to="/about">About Us</router-link></v-tab>
    <v-tab>Contact</v-tab>
    <v-tab>Review</v-tab>
  </v-tabs>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    let self = this;
    document.body.addEventListener("click", function () {
      self.event?.classList.remove("rotateMenu");
    });
    //load category from vuex
  },
  data() {
    return {
      event: null,
    };
  },
  computed: {
    ...mapState({
      categoryTab: (state) => state.Bar.category,
      load: (state) => state.Bar.load,
    }),
  },
  methods: {
    ...mapActions("Bar", ["category"]),
    downIconInTab(event) {
      this.event = event.target.children[0];
      if (event.target.children[0]?.classList.contains("rotateMenu")) {
        this.event.classList.remove("rotateMenu");
      } else {
        setTimeout(function () {
          event.target.children[0]?.classList.add("rotateMenu");
        }, 20);
      }
      if (!this.categoryTab) {
        this.category();
      }
    },
  },
};
</script>

<style src="../../../assets/Css/Bars/appBar.css" scoped></style>
