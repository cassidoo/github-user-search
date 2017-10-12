<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/#/es">Go to Spain!</a>
    <div>{{ count }}</div>
    <button v-on:click="count++">Increase the count!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue App',
      count: 0
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
