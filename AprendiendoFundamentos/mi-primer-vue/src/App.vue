<script setup>

  const name="Vue dinámico";
  const styleColor="color:blue";
  const arrayColores=["blue","red","peru"];
  const activo=true;

</script>


<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  <h2>{{arrayColores}}</h2>
  <h2 :style="`color: ${arrayColores[2]}`">Soy Perú</h2>
  <!---<h2>
   {{activo ? "Estoy activo":"Estoy inactivo"}}
  </h2>-->
  <p v-if="activo ===true">Estoy activo</p>
  <p v-else="activo===false">Estoy inactivo</p>
  <p v-else>Estoy indeciso papu</p>

  <h2 v-show="false">Estoy activo v-show</h2>

  </template>


<style>
  h1{
    color:red;
  }
</style>

