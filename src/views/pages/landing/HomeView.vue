<script>
import About from './About.vue';
import Contact from './Contact.vue';
import Hero from './Hero.vue';
import PopularPost from './PopularPost.vue';
import RecentPost from './RecentPost.vue';

export default {
  components: {
    Hero,
    About,
    RecentPost,
    PopularPost,
    Contact,
  }
}

</script>

<template>
  <main>
    <Hero />
    <About />
    <RecentPost />
    <PopularPost />
    <Contact />
  </main>
</template>
