<template>
  <form @submit.prevent="agregarPersona">
    <input v-model="nombre" placeholder="Nombre" required />
    <input v-model.number="edad" type="number" placeholder="Edad" required />
    <button type="submit">Agregar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      edad: '',
    };
  },
  methods: {
    async agregarPersona() {
      await axios.post('https://bo-vue.onrender.com/personass', {
        nombre: this.nombre,
        edad: this.edad,
      });
      this.nombre = '';
      this.edad = '';
      this.$emit('refresh');
    },
  },
};
</script>
