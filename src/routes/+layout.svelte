<script>
  import Navigation from "../components/Navigation.svelte";
</script>

<main>
  <slot />
</main>

<style lang="scss">
  @import "../styles/global.scss";

  main {
    min-height: 100vh;
  }
</style>
