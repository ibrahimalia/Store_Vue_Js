<template>
  <v-footer dark padless class="mt-7">
    <v-card flat tile class="lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 my-3">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-col lg="12">
        <v-row class="justify-center">
          <v-col lg="6" class="text-center">
            <v-card-text>
              <v-form>
                <v-text-field label="Email" outlined dense></v-text-field>
                <v-btn color="green" rounded outlined dense> send eamil</v-btn>
              </v-form>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>

      <v-divider class="mx-6"></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Web Burden </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-linkedin-square",
        "fab fa-instagram",
      ],
    };
  },
};
</script>

<style></style>
