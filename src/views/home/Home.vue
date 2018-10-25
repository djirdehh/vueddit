<template>
  <div class="home columns">
    <div class="column primary is-four-fifths">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    <div class="column secondary">
      <div class="card">
        <div class="card-image">
          <figure class="image home-banner">
            <img :src="HomeBanner" alt="Home Banner">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image logo-badge">
                <img :src="LogoBadge" alt="Logo Badge">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-6">Home</p>
            </div>
          </div>

          <div class="content">
            <p>Your personal Vueddit frontpage. Come here to check in with your favorite communities.</p>
            <a class="button">Create Post</a>
          </div>
        </div>
      </div>
      <div class="card advertisement">
        <header class="card-header">
          <p class="card-header-title">
            Advertisement
          </p>
        </header>
        <div class="card-image">
          <figure class="image home-banner">
            <img :src="VuedditAd" alt="Home Banner">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from '@/assets/home_banner.png';
import LogoBadge from '@/assets/vueddit_logo_badge.png';
import VuedditAd from '@/assets/vueddit_ad.png';
import Post from '../shared/components/Post';

export default {
  name: 'Home',
  data() {
    return {
      HomeBanner,
      LogoBadge,
      VuedditAd
    }
  },
  components: {
    Post
  }
}
</script>

<style scoped>
.home {
  padding: 1.3em 1.5em;
}

.home .secondary .card {
  border-radius: 5px 5px 4px 4px;
  margin-bottom: 1.0em;
}

.home .secondary .card .card-content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0;
}

.home .secondary .card .card-content .media {
  margin-bottom: 0;
  position: relative;
  right: 5px;
}

.home .secondary .card .card-content .media-left {
  margin-right: 0.5rem;
}

.home .secondary .card .card-content .logo-badge {
  max-width: 50px;
  position: relative;
  bottom: 20px;
}

.home .secondary .card .card-content .media-content .subtitle {
  font-weight: 500;
}

.home .secondary .card .card-content .content {
  position: relative;
  bottom: 15px;
}

.home .secondary .card .card-content .content p {
  margin: 0;
  font-size: 0.85em;
  font-weight: 400;
}

.home .secondary .card .card-content .content .button {
  width: 100%;
  background-color: #0078d1;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 0.8em;
}

.home .secondary .card.advertisement {
  padding: 0.3em;
}

.home .secondary .card.advertisement .card-header .card-header-title {
  padding: 0;
  font-size: 0.65em;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  padding-bottom: 0.2em;
  text-transform: uppercase;

  cursor: default;
}

@media (max-width: 768px) {
  .column.secondary {
    display: none;
  }
}
</style>
