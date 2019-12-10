<template>
  <Layout>
    <div class="posts">
      <transition-group name="fade">
        <PostCard v-for="{ node } of loadedPosts" :key="node.id" :post="node" />
      </transition-group>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more">No more posts</div>
          <div slot="no-results">No posts</div>
        </infinite-loading>
      </ClientOnly>
    </div>
  </Layout>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostCard
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.posts.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
        if (data.posts.edges.length) {
          this.currentPage = data.posts.pageInfo.currentPage;
          this.loadedPosts.push(...data.posts.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  }
};
</script>

<page-query>
query ($page: Int) {
	posts: allStrapiBlogpost(perPage: 1, page: $page) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				title
				# image
        content
			}
		}
	}
}
</page-query>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: ease opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>