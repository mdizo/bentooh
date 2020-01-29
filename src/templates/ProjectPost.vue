<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title" v-html="$page.post.title" />
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span
                  class="category"
                  v-for="(category, index) in $page.post.categories"
                  :key="index"
                  v-text="category"
                />
              </div>
            </div>

            <div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.post.date" />
            </div>
          </div>
        </div>

        <div v-html="$page.post.content" class="content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    content
    categories
    project_bg_color
    project_fg_color
  }
  all: allProjectPost {
        edges {
            node {
                path
                title
            }
            next {
                path
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${
          this.$page.post.project_bg_color
            ? this.$page.post.project_bg_color
            : 'var(--color-base)'
        }; color: ${
          this.$page.post.project_fg_color
            ? this.$page.post.project_fg_color
            : 'var(--color-contrast)'
        }`
      }
    }
  }
}
</script>

<style lang="css">
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', ';
}
.category:last-of-type:after {
  content: '';
}
.content > p > img {
  margin-bottom: 2rem;
}

.content {
  width: 100%;
}

.content > a {
  padding-bottom: 1.45rem;
}

.content > :last-child {
  margin-bottom: 0;
}

.content > h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  padding: 1.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.content p {
  font-size: 1.2rem;
  color: #464646;
  font-weight: normal;
}

.content > p > img {
  margin: 1rem 0;
}

.content > ul {
  list-style: initial;
}

.content > ul,
ol {
  margin-left: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.45rem;
}
</style>
