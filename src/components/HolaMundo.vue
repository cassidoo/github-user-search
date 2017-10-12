<template>
  <div class="hola">
    <h1>{{ msg }}</h1>
    <a href="/">Go to English</a>
  </div>
</template>

<script>
export default {
  name: 'HolaMundo',
  data () {
    return {
      msg: 'Bienvenidos a Vue!'
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
