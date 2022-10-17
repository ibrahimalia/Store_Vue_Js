<template>
  <v-row class="ml-1">
    <v-col cols="12" sm="12" class=""> </v-col>
    <v-col cols="12" sm="12">
      <div @click="show1 = !show1" class="titleFilter">
        Brand Item
        <v-icon small class="ml-16">{{
          show1 ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </div>
      <v-expand-transition>
        <div v-show="show1">
          <v-card-text class="bodyFilter">
            <v-checkbox
              v-model="ex4"
              label="secondary"
              color="primary"
              value="secondary"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="secondary"
              color="primary"
              value="ttt"
              hide-details
            ></v-checkbox>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-divider class="ml-5 mr-5 mt-5"></v-divider>
    </v-col>
    <v-col cols="12" sm="12" class="">
      <div @click="show2 = !show2" class="titleFilter">
        Processors
        <v-icon small class="ml-16">{{
          show2 ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </div>
      <v-expand-transition>
        <div v-show="show2">
          <v-card-text class="bodyFilter">
            <v-checkbox
              v-model="ex4"
              label="mdb"
              color="primary"
              value="tdt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="nvidia"
              color="primary"
              value="tvt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="Rtx"
              color="primary"
              value="txt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="intil"
              color="primary"
              value="tzt"
              hide-details
            ></v-checkbox>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-divider class="ml-5 mr-5 mt-5"></v-divider>
    </v-col>
    <v-col cols="12" sm="12" class="">
      <div @click="show3 = !show3" class="titleFilter">
        storage Item
        <v-icon small class="ml-13">{{
          show3 ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </div>
      <v-expand-transition>
        <div v-show="show3">
          <v-card-text class="bodyFilter">
            <v-checkbox
              v-model="ex4"
              label="mdb"
              color="primary"
              value="tdt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="nvidia"
              color="primary"
              value="tvt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="Rtx"
              color="primary"
              value="txt"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="ex4"
              label="intil"
              color="primary"
              value="tzt"
              hide-details
            ></v-checkbox>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-divider class="ml-5 mr-5 mt-5"></v-divider>
    </v-col>
    <v-col cols="12" sm="12" class="">
      <div @click="show4 = !show4" class="titleFilter">
        price Items
        <v-icon small class="ml-15">{{
          show4 ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </div>
      <v-expand-transition>
        <div v-show="show4">
          <v-card-text class="bodyFilter">
            <div >
               <input type="text" class="input" name="fname" :value="range[0]" disabled> -
              <span> <input type="text" class="input" name="fname" :value="range[1]" disabled></span>
            </div>
            <br>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-center"
              step="1"
              
            >
            </v-range-slider>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-divider class="ml-5 mr-5 mt-5"></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      ex4: [],
      min: 100,
      max: 1000000,
      range: [100, 1000000],
    };
  },
};
</script>

<style src="../../assets/Css/Fillter/fillter.css" scoped></style>
