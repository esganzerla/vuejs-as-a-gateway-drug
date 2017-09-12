<template>
  <div class="container">
    <h1>LIBS LIST</h1>
    <input type="text" v-model="including" v-on:keyup.enter="addLib">

    <p v-if="libs.length === 0" class="info">There are no JS libs!</p>
    <libs-list v-bind:libs="libs" />
  </div>
</template>

<script>
import LibsList from './LibsList.vue'
export default {
  name: 'app',
  components: { LibsList },
  data: () => ({
    including: '',
    libs: []
  }),
  methods: {
    addLib () {
      this.libs.push(this.including)
      this.including = ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.libs = [
        'VueJS',
        'ReactJS',
        'Angular'
      ]
    }, 500);
  }
}
</script>

<style>
* { box-sizing: border-box; }
body {
    background-color: #f6f6f6;
    font-family: Helvetica, sans-serif;
    width: 100%;
}
.container {
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
}
input {
  font-size: 1.5em;
  padding: 10px;
}
.info {
  color: red;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
