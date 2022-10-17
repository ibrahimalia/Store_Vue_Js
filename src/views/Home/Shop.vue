<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" class="">
        <v-row>
          <v-col cols="8" sm="8" class="">
            <div class="container">
              <input
                type="radio"
                v-model="imgUrl"
                :value="images[0]"
                name="image"
                id="one"
              />
              <input
                type="radio"
                v-model="imgUrl"
                :value="images[1]"
                name="image"
                id="two"
              />
              <input
                type="radio"
                v-model="imgUrl"
                :value="images[2]"
                name="image"
                id="three"
              />
              <input
                type="radio"
                v-model="imgUrl"
                :value="images[3]"
                name="image"
                id="four"
              />

              <div id="display-image"></div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
window.addEventListener("mouseover", function () {
  var container = this.document.getElementById("display-image");
  var imageSrc =
    container.currentStyle || this.window.getComputedStyle(container, false);
  // console.log()
  var img = new Image();
  //
  img.src = imageSrc.backgroundImage.slice(4, -1).replace(/"/g, " ");
  img.onload = function () {
    var imgWidth = img.naturalWidth;
    var imgHeigth = img.naturalHeight;
    var ratio = imgWidth / imgHeigth;
    // var percentage = ratio * 100 + "%";
    container.onmousemove = function (e) {
      var boxWidth = container.clientWidth;
      var xPos = e.pageX - this.offsetLeft;
      var yPos = e.pageY - this.offsetTop;
      var xPercent = xPos / (boxWidth / 100) + "%";
      var yPercent = yPos / ((boxWidth * ratio) / 100) + "%";
      Object.assign(container.style, {
        backgroundPosition: xPercent + " " + yPercent,
        backgroundSize: imgWidth + "px",
      });
    };
  };
  container.onmouseleave = function () {
    Object.assign(container.style, {
      backgroundPosition: "center",
      backgroundSize: "contain",
    });
  };
});
export default {
  data() {
    return {
      imgUrl: null,
      images: [
        "../../assets/p1.jpeg",
        "../../assets/p2.jpg",
        "../../assets/p3.webp",
        "https://picsum.photos/510/300?random",
      ],
    };
  },
  watch:{
    imgUrl:function(oldValue){
      let id= document.getElementById("display-image");
      id.style.backgroundImage=`url(${oldValue})`
    }
  }
};
</script>

<style scoped>
input[type="radio"] {
  width: 150px;
  height: 100px;
  display: block;
  -webkit-appearance: none;
}
#display-image {
  width: 400px;
  height: 300px;
  background-position: center;
  background-size: contain;
}

#one {
  background-image: url("../../assets/p1.jpeg");
  background-size: contain;
}
#two {
  background-image: url("../../assets/p2.jpg");
  background-size: contain;
}
#three {
  background-image: url("../../assets/p3.webp");
  background-size: contain;
  width: auto;
}
#four {
  background-image: url("https://picsum.photos/510/300?random");
  background-size: contain;
}
</style>
