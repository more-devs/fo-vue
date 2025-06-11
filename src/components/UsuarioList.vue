<template>
  <div>
    <h2>Usuarios</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} - {{ usuario.edad }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      usuarios: []
    };
  },
  async created() {
    try {
      const res = await api.get('/usuarios');
      this.usuarios = res.data;
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }
};
</script>
