<template>
  <div id="module-two">
    <h1>module-two</h1>
    <div class="module-nav">
      <router-link to="/module-two/page-a">A</router-link>
      <span> | </span>
      <router-link to="/module-two/page-b">B</router-link>
    </div>
    <router-view />
  </div>
</template>
