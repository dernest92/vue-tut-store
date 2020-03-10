<template>
<div>
  <nav>
    <router-link to="/"><h1>NB</h1></router-link>
  </nav>  
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
