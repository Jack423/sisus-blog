<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-8">
          <q-img v-if="posts[0].url !== null" :src="posts[0].url" class="q-mt-md large-photo" />
        </div>
        <div class="col-12 col-md-4 content">
          <span class="text-weight-light date">{{posts[0].date}}</span>
          <h4 style="margin: 0">{{posts[0].title}}</h4>
          <p
            class="text-ellipsis--5"
            style="font-size: 19pt; color: #292930"
          >{{posts[0].body}}</p>
          <q-btn
            outline
            color="primary"
            label="Read More..."
            @click="goToPost(posts[0].postId)"
          />
        </div>
    </div>
      <!-- <div v-if="index == 0" class="row q-col-gutter-md">
        <div class="col-12 col-md-8">
          <q-img v-if="url !== null" :src="url" class="q-mt-md large-photo" />
        </div>
        <div class="col-12 col-md-4 content">
          <span class="text-weight-light date">March 30, 2021</span>
          <h4 style="margin: 0">My First Post</h4>
          <p
            class="text-ellipsis--5"
            style="font-size: 19pt; color: #292930"
          >{{post.body}}</p>
          <q-btn
            outline
            color="primary"
            label="Read More..."
            @click="goToPost(post.postId)"
          />
        </div>
      </div> -->
      <div style="margin-top: 16px" class="row q-col-gutter-md">
        <div
          v-for="(post, index) in posts.slice(1, posts.length)"
          v-bind:key="index"
          class="col-xs-12 col-sm-6 col-md-4"
        >
          <q-img
            class="clickable rounded-image image-description"
            :src="post.url"
            v-on:click="goToPost(post.postId)"
          >
            <div class="absolute-bottom text-subtitle1 image-description-text">
              <q-icon name="event" />
              {{ post.date }}
              <q-icon name="map" />
              {{ post.location }}
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
      posts: [
        {
          postId: "1",
          url:
            "https://lh3.google.com/pw/ACtC-3cQ0wcmLK4IBVy1vMM7qYl4xswzLGHN0D8wkmX3V_vtctcjAfEFaCJUP9eDjmmNUEKIYZ119hA7pZVLkdcR2K0OYLCyOHg=w2050-h1538-no?authuser=0",
          date: "March 20, 2021",
          location: "Merrimac, WI",
          title: "My First Post",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          postId: "2",
          url:
            "https://lh3.google.com/pw/ACtC-3fW50lpyaitTZj2ySIEV8joSB7zhkg6pRk3_kX5QUlcGnGLJG6kNPMGSoKBJos7uiHTPh1NLvjThzYdJOFStuCNJnGk6Ss=w2050-h1538-no?authuser=0",
          date: "March 21, 2021",
          location: "Merrimac, WI",
          title: "My Second Post",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          postId: "3",
          url:
            "https://lh3.google.com/pw/ACtC-3cLauySB_jKs0cXDDmvAGV1Z_ceSeMMxZtody6uOAZd9jQoIswi_NfnYpHtt2m5KbbbEWrIFdY4WmTjF7wMqPFzJyFcpK0=w2050-h1538-no?authuser=0",
          date: "March 21, 2021",
          location: "Merrimac, WI",
          title: "My Third Post",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
  methods: {
    goToPost(postId) {
      this.$router.push("/post/" + postId);
    },
    // getHeader() {
    //   Array.from().slice(0, this.posts.length)
    //   return posts.find((value, index, obj) => index == 0);
    // }
  },
};
</script>


<style scoped>
.clickable {
  cursor: pointer;
}
.image-description .image-description-text {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.image-description:hover .image-description-text {
  visibility: visible;
  opacity: 1;
  transition: 0.3s;
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
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50%
  );
}
</style>