<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-8">
        <q-img v-if="url !== null" :src="url" class="q-mt-md large-photo" />
      </div>
      <div class="col-12 col-md-4 content">
        <span class="text-weight-light date">March 30, 2021</span>
        <h4 style="margin: 0">My First Post</h4>
        <p class="overflow fade" style="font-size: 19pt;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div style="margin-top: 16px;" class="row q-col-gutter-md">
      <div
        v-for="(image, index) in images"
        v-bind:key="index"
        class="col-xs-12 col-sm-6 col-md-4"
        v-viewer="{movable: false}">
        <q-img class="clickable rounded-image image-description" :src="image.url" v-on:click="goToPost(image.postId)">
          <div class="absolute-bottom text-subtitle1 image-description-text">
            <q-icon name="event" />
            {{image.date}}
            <q-icon name="map" />
            {{image.location}}
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://lh3.googleusercontent.com/SCUvOJL3p8JlLYuXjwmcbmlUJ-_A9ITcZzqQP1AWnLdbUPOt34hW4O5Bu8CtKzPB1e3BhrvZ5Ap-VLWsE7XlLK42ysy8N90b5_dw_1TTWM5lv93_K0UB1bGdgIG0Qhg0v7Ye5NuNnbEsDFUjZI9WW6mSpyMvGAxdHYsv15zrHW8qtBXurgHm3z3658Lzrpf4QOrOBDT5_RG-Wi2OZ_9oHfACKRgWLybw7P6L8qf0n3GZFg7kGj0dWWcgGPvazYWOhR0G7EnKFqHn0hayJJDgNTJxGRliOI57CFORayPnq4U7mrUvf90q4o23_KOXu-trSclJFWAY-JPrfDLKtCqwElCkTKXSWNiR8Lls6LpcXiyND346cT0OUVZpjBd_H_-DC8QG3D_p2uUXLrOCO5E9MYPJEu8KKL1lsOesm_ZAnfCKT7ZIC4PiLY7x1S8mjt9mxO2PKszXC50MMIijCyYnlNw8_W41E37SHLTqLmtd-RPiN1xaI08rsG9qIL2j3HfzmgBhteKygpMogSEkZpAZ5SOLuqSgSn0CznHn49wXksxFBhVOpAUK7f83CPvsJfrgLu4o5Chw21rfJ5ZxYUwb3kkuIQiOx_n8XqHoOsRxOBFwW8HFiO62rkpchEqY_fctzmTKqqSPye2vcHQjXy4TyZlDTp3WRD0vO8IjXKgvbaea-6Sk-DZbSX7xqR_0bocJZ1I8L9RUtMZ6xNLPnDTSS_Hp6Q=w2288-h1716-no?authuser=0",
      images: [
        {
          postId: "1",
          url: "https://lh3.google.com/pw/ACtC-3cQ0wcmLK4IBVy1vMM7qYl4xswzLGHN0D8wkmX3V_vtctcjAfEFaCJUP9eDjmmNUEKIYZ119hA7pZVLkdcR2K0OYLCyOHg=w2050-h1538-no?authuser=0",
          date: "March 20, 2021",
          location: "Merrimac, WI"
        },
        {
          postId: "2",
          url: "https://lh3.google.com/pw/ACtC-3fW50lpyaitTZj2ySIEV8joSB7zhkg6pRk3_kX5QUlcGnGLJG6kNPMGSoKBJos7uiHTPh1NLvjThzYdJOFStuCNJnGk6Ss=w2050-h1538-no?authuser=0",
          date: "March 21, 2021",
          location: "Merrimac, WI"
        },
        {
          postId: "3",
          url: "https://lh3.google.com/pw/ACtC-3cLauySB_jKs0cXDDmvAGV1Z_ceSeMMxZtody6uOAZd9jQoIswi_NfnYpHtt2m5KbbbEWrIFdY4WmTjF7wMqPFzJyFcpK0=w2050-h1538-no?authuser=0",
          date: "March 21, 2021",
          location: "Merrimac, WI"
        }
      ]
    };
  },
  methods: {
    goToPost(postId) {
      this.$router.push('/post/' + postId)
    }
  }
};
</script>


<style scoped>
.clickable {
  cursor: pointer;
}
.image-description .image-description-text{
  visibility: hidden;
  opacity: 0;
  transition: .3s;
}
.image-description:hover .image-description-text {
  visibility: visible;
  opacity: 1;
  transition: .3s;
}
.large-photo {
  margin-top: 0;
  height: 300px;
  border-radius: 10px;
}
.rounded-image {
  border-radius: 10px;
}
.content {
  height: 300px;
}
.overflow {
  overflow: hidden;
}
.fade {
  position: relative;
  height: 16.5em; /* exactly three lines */
}
.fade:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 1.2em;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
}
</style>