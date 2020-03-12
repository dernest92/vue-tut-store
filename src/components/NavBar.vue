<template>
  <nav class="nav-bar">
    <div class="nav-content">
      <router-link class="nav-logo" to="/">
        <h1>NB</h1>
      </router-link>
      <router-link to="/cart">CART</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  color: #444;
  font-weight: bold;
  text-decoration: none;
}

.nav-bar {
  padding: 16px 10px;
  margin-bottom: 40px;
  border-bottom: 2px #ddd solid;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.nav-logo {
  color: red;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
  width: fit-content;
  h1 {
    width: fit-content;
    display: inline-block;
  }
}
</style>