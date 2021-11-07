<template>
  <div class="testecss">
    <h3>Minha app {{ teste }}</h3>
    {{ count }}
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      teste: "testeval",
      count: 1
    }
  },

  created() {
    window.$widget = {
      open: this.open,
      add: this.add,
    }
  },
  mounted() {
    if (window.widgetActions) {
      window.widgetActions.onLoad && window.widgetActions.onLoad()
    }
  },
  methods: {
    open() {
      console.log('open')
      this.teste = "openado"
      console.log(this.teste)
    },
    add() {
      this.count++
    }
  },
}
</script>

<style>
.testecss {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
