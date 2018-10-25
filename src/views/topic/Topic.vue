<template>
  <div class="topic">
    <div class="header">
      <div class="title">
        <img :src="LogoBadgeBlue"/>
        <span>v/personalfinance</span>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../shared/components/Post';
import LogoBadgeBlue from '@/assets/vueddit_logo_badge_blue.png';

export default {
  name: 'Topic',
  data() {
    return {
      LogoBadgeBlue
    }
  },
}
</script>

<style scoped>
.topic {
  margin-top: 3.3em;
}

.topic .header {
  display: flex;
  height: 78px;
  background: center top rgb(51, 168, 255);
  padding: 18px 26px;
}

.topic .header .title {
  align-self: end;
}

.topic .header .title img {
  height: 36px;
  width: 36px;
  position: relative;
  top: 8px;
}

.topic .header .title span {
  font-size: 22px;
  font-weight: 500;
  color: rgb(252, 252, 251);
  padding-left: 7px;
}
</style>
