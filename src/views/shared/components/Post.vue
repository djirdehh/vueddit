<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <div class="level-item post-votes">
        <i class="fas fa-angle-up"></i>
        <p class="post-votes-number">123</p>
        <i class="fas fa-angle-down"></i>
      </div>
      <div class="level-item post-type">
        <i class="fas fa-comment-alt"></i>
      </div>
      <div class="level-item post-description">
        <h4 class="subtitle">This is the post title</h4>
        <div class="post-description--details">
          <router-link to="/v/personalfinance" tag="p" class="sub-vueddit">v/personalfinance</router-link>
          <p class="span">•</p>
          <p class="user">Posted by u/shewmai</p>
          <p class="timestamp">9 hours ago</p>
        </div>
        <div class="post-description--capabilities">
          <a class="button is-white"><i class="fas fa-external-link-alt"></i></a>
          <a class="button is-white"><i class="fas fa-comment-alt"></i> 1.4k Comments</a>
          <a class="button is-white"><i class="fas fa-sign-out-alt"></i> Share</a>
          <a class="button is-white"><i class="fas fa-ban"></i> Hide</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<style scoped>
nav.level {
  background: #FFF;
  border: 1px solid rgb(204, 204, 204);
  border-bottom: 0;
  margin: 0;
  cursor: pointer;

  overflow: hidden;
}

nav.level:hover {
  outline: 0.5px solid rgb(137, 137, 137);
  border-top: 1px solid transparent;
}

nav.level .level-left {
  width: 100%;
}

/* Post Votes */
nav.level .level-item.post-votes {
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.25em;
  background-color: #f8f9fa;
  max-width: 40px;
}

nav.level .level-item.post-votes .fas {
  cursor: pointer;
  color: rgb(135, 138, 140);
}

nav.level .level-item.post-votes .post-votes-number {
  font-size: 0.8em;
  font-weight: 600;
  padding: 0.5em;
}

nav.level .level-item.post-votes .fa-angle-up {
  position: relative;
  top: 0.1em;
}

nav.level .level-item.post-votes .fa-angle-up:hover {
  color: #65b587;
}

nav.level .level-item.post-votes .fa-angle-down {
  position: relative;
  bottom: 0.1em;
}

nav.level .level-item.post-votes .fa-angle-down:hover {
  color: rgb(90, 117, 204);
}

/* Post Type */
nav.level .level-item.post-type {
  padding: 1.5em;
  max-width: 60px;
}

nav.level .level-item.post-type .fa-comment-alt {
  font-size: 1.5em;
}

/* Post Description */
nav.level .level-item.post-description {
  flex-direction: column;
  flex: 1;
}

nav.level .level-item.post-description .subtitle {
  margin-right: auto;
  padding-top: 0.3em;
  color: rgb(34, 34, 34);
  overflow-wrap: break-word;
  font-size: 1.0em;
  font-weight: 500;
  max-width: 1055px;
}

nav.level .level-item.post-description .post-description--details {
  margin-right: auto;
  position: relative;
  bottom: 0.2em;
}

nav.level .level-item.post-description .post-description--details p {
  display: inline-block;
  font-size: 0.75em;
  line-height: 1.0em;
}

nav.level .level-item.post-description .post-description--details p.sub-vueddit {
  font-weight: 700;
  color: rgb(28, 28, 28);
}

nav.level .level-item.post-description .post-description--details p.sub-vueddit:hover {
  text-decoration: underline;
}

nav.level .level-item.post-description .post-description--details p.span {
  font-size: 0.5em;
  color: rgb(124, 124, 124);
  margin: 0 0.5em;
}

nav.level .level-item.post-description .post-description--details p.user,
nav.level .level-item.post-description .post-description--details p.timestamp {
  font-weight: 400;
  color: rgb(120, 124, 126);
  line-height: 1.2em;
  margin: 0 0.1em;
}

nav.level .level-item.post-description .post-description--capabilities {
  margin-right: auto;
  position: relative;
  right: 5px;
}

nav.level .level-item.post-description .post-description--capabilities a {
  color: #868a8c;
  font-size: 0.75em;
  font-weight: 700;
  padding: 0;
  margin: 0;
}

nav.level .level-item.post-description .post-description--capabilities a:not(:first-child) {
  padding-right: 0.4em;
}

nav.level .level-item.post-description .post-description--capabilities a .fas {
  position: relative;
  top: 1px;
  padding: 0 0.5em;
}

nav.level .level-item.post-description .post-description--capabilities a .fa-external-link-alt {
  border-right: 1px solid rgb(237, 239, 241);
  padding: 0.5em;
  top: 0;
}
</style>
