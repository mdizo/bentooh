<template>
  <header
    class="header"
    :class="{
      sticky: $route.path === '/' || $route.path.includes('/projects/')
    }"
  >
    <div class="head-container">
      <div class="container">
        <div class="left">
          <g-link :to="{ name: 'home' }" class="home-link">
            <h1>bentooh ART</h1>
          </g-link>
        </div>
        <nav class="nav right">
          <a
            v-if="settings.contact.twitter_handle"
            :href="'https://twitter.com/' + settings.contact.twitter_handle"
            target="_blank"
          >
            <font-awesome :icon="['fab', 'twitter']" />
          </a>
          <a
            v-if="settings.contact.instagram_handle"
            :href="'https://instagram.com/' + settings.contact.instagram_handle"
            target="_blank"
          >
            <font-awesome :icon="['fab', 'instagram']" />
          </a>
          <a
            v-if="settings.contact.facebook_handle"
            :href="'https://instagram.com/' + settings.contact.facebook_handle"
            target="_blank"
          >
            <font-awesome :icon="['fab', 'facebook']" />
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: require('../../static/logo.svg'),
      settings: require('@/assets/content/data/config.json')
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}
.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header > .head-container {
  width: 100%;
  background-color: white;
}
.header > .head-container > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  font-family: 'pixelig_cursief';
  text-decoration: none;
}
.logo {
  height: 1.5rem;
}
.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav > a {
  padding-left: 1rem;
  transition: border 0.15s;
}
.nav > *:last-of-type {
  margin: 0;
}
</style>
