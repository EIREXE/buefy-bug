<template>
  <div class="container">
    <b-dropdown>
      <button class="button is-primary" slot="trigger">
        <span>Click me!</span>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <b-dropdown-item ref="a1b">Action 1</b-dropdown-item>
      <b-dropdown-item>Action 2</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
