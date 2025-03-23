<template>
  <div :class="M.layout">
    <nav :class="M.nav">
      <RouterLink :class="M.link" :to="{name: 'home'}" :exact-active-class="M.active">Home</RouterLink>
      <RouterLink :class="M.link" :to="{name: 'custom'}" :exact-active-class="M.active">Custom</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>


<style module="M">
  .layout {
    background: #fff;
    width: 30rem;
    padding: 2rem;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: .9rem;
    color: #7d44e7;
    opacity: .5;
  }
  .link:hover,
  .active {
    color: #7d44e7;
    opacity: 1;
  }
</style>