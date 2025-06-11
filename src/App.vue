<template>
  <div class="container">
    <h1>CRUD de Personas</h1>
    <PersonaForm @refresh="fetchPersonas" />
    <PersonaList :personas="personas" @refresh="fetchPersonas" />
  </div>
</template>

<script>
import PersonaForm from './components/PersonaForm.vue';
import PersonaList from './components/PersonaList.vue';
import axios from 'axios';

export default {
  components: { PersonaForm, PersonaList },
  data() {
    return {
      personas: [],
    };
  },
  methods: {
    async fetchPersonas() {
      const res = await axios.get('https://b-vue-1.onrender.com/personas');
      this.personas = res.data;
    },
  },
  mounted() {
    this.fetchPersonas();
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>
