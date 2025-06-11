<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const personas = ref([])
const nombre = ref('')
const edad = ref(0)
const api = 'https://b-vue.onrender.com/'

const cargarDatos = async () => {
    const res = await axios.get(api)
    personas.value = res.data
}

const agregarPersona = async () => {
    await axios.post(api, { nombre: nombre.value, edad: edad.value })
    cargarDatos()
}

const eliminarPersona = async (id) => {
    await axios.delete(`${api}/${id}`)
    cargarDatos()
}

onMounted(cargarDatos)
</script>

<template>
    <h1>CRUD de Personas</h1>
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="edad" type="number" placeholder="Edad" />
    <button @click="agregarPersona">Agregar</button>

    <ul>
        <li v-for="p in personas" :key="p.id">
            {{ p.nombre }} - {{ p.edad }} años
            <button @click="eliminarPersona(p.id)">Eliminar</button>
        </li>
    </ul>
</template>
