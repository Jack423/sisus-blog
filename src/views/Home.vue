<template>
  <div class="home">
    <BlogFeed />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogFeed from '@/components/BlogFeed.vue'

export default {
  name: 'Home',
  components: {
    BlogFeed
  }
}
</script>
