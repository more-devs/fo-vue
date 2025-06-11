<template>
  <div>
    <h1>Mi App Vue</h1>
    <UsuarioList />
  </div>
</template>

<script>
import UsuarioList from './components/UsuarioList.vue';

export default {
  components: {
    UsuarioList
  }
};
</script>
