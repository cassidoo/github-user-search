<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="queryGitHub(query)">
      <input type="text" placeholder="GitHub username" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <img v-bind:src="results.avatar_url" />
      <h2>{{ results.name }}</h2>
      <div>{{ results.bio }}</div>
      <div>{{ results.location }}</div>
      <div v-if="results.followers">Followers: {{ results.followers }}</div>
      <div v-if="results.following">Following: {{ results.following }}</div>
      <a v-if="results.blog" v-bind:href="results.blog">Go to website</a>
      {{ results.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHub',
  data () {
    return {
      msg: 'GitHub Search',
      query: '',
      results: null
    }
  },
  methods: {
    queryGitHub(q) {
      let self = this;
      fetch('https://api.github.com/users/' + q)
        .then((j) => {
          return j.json();
        })
        .then((r) => {
          console.log(r);
          self.results = r;
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.results {
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
}

.results img {
  float: left;
  width: 250px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
