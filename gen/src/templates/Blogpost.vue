<template>
  <div>
    <h1 v-html="$page.blogpost.title" />
    <div v-html="$page.blogpost.content" />
  </div>
</template>

<page-query>
query ($id: ID!) {
    blogpost(id: $id) {
        title
        content
    }
}
</page-query>