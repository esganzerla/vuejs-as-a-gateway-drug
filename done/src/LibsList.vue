<template>
    <table v-if="libs.length > 0">
        <tr v-for="(lib, i) in libs" v-bind:key="i">
            <td class="lib">{{ lib | capitalize }}</td>
        </tr>
        <tfoot>
            <td class="info">{{ libs.length }} results</td>
        </tfoot>
    </table>
</template>

<script>
export default {
  filters: {
    capitalize (text) {
      return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }
  },
  props: {
      libs: {
          type: Array,
          default: () => ([])
      }
  }
}
</script>

<style scoped>
    table {
        width: 100%;
    }
    .lib {
        padding: 10px 0;
        border-bottom: 1px solid rgba(0,0,0,0.5);
    }
    .info {
        padding-top: 20px;
        text-decoration: underline
    }
</style>
