<template lang='pug'>
div#app
  h2 Scroll down
  div.empty
  input.input(v-scroll-focus type='text' name='login' placeholder='Enter your login')
  div.empty
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.empty {
  height: 200vh;
}

.input {
  width: 300px;
  height: 45px;
  border: 1px solid #cccccc;
  transition: border 1s ease, background 1s ease;
  margin: 0 auto;
  display: block;
  padding-left: 8px;

  &.focus {
    border-color: red;
    background: fade-out(red, .8);
  }
}
</style>
