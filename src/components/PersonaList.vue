<template>
  <ul>
    <li v-for="p in personas" :key="p.id">
      {{ p.nombre }} ({{ p.edad }} años)
      <button @click="borrar(p.id)">🗑️</button>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  props: ['personas'],
  methods: {
    async borrar(id) {
      await axios.delete(`https://bo-vue.onrender.com/personass/${id}`);
      this.$emit('refresh');
    },
  },
};
</script>
