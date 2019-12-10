<template>
  <div>
    <g-link :to="post.path">
      <div>
        <g-image v-if="post.image" :src="post.image" />
      </div>
      <div>
        <h2 v-html="post.title" />
        <p v-html="post.content" />
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
