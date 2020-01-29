<template>
  <div class="hero">
    <g-image class="hero-image" src="@/assets/content/images/profile.jpg" />
    <h1 class="hero-title" v-if="settings.show_title === true" v-html="settings.hero_title" />
    <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      settings: require('@/assets/content/data/config.json')
    }
  }
}
</script>

<style>
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem 0;
  height: 100vh;
}

.hero-image {
  margin-bottom: 0rem;
}
.hero-title {
  font-family: "pixelig_cursief";
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin-bottom: 1rem;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}
</style>
