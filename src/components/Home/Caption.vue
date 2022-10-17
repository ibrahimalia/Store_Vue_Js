<template>
  <v-col cols="12" sm="12 " class="text-center">
    <v-row align="center" justify="center">
      <div class="contain">
        <div class="lines">
          <div class="circle">
            <v-btn width="200" class="mt-1 mr-3" text outlined disabled> {{ name }} </v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style src="../../assets/Css/Home/home.css" scoped></style>
