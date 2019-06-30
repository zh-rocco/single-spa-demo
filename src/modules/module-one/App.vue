<template>
  <div id="module-one">
    <h1>module-one</h1>
    <div class="module-nav">
      <router-link to="/module-one/page-a">A</router-link>
      <span> | </span>
      <router-link to="/module-one/page-b">B</router-link>
    </div>
    <router-view />
  </div>
</template>
