<script>
  export let hasMinimum = false;
</script>

<section class="center" class:min-height={hasMinimum}>
  <slot />
</section>

<style lang="scss">
  @import "../../styles/global.scss";

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .min-height {
    min-height: 89vh;
  }
</style>
