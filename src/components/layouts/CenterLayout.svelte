<script>
  export let hasMinimum = false;
  export let isColumn = false;
  export let allignStart = false;
  export let gap = null;
</script>

<section
  class="center"
  class:min-height={hasMinimum}
  class:column={isColumn}
  class:allign-start={allignStart}
  style:gap
>
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

  .column {
    flex-direction: column;
  }

  .allign-start {
    align-items: flex-start;
  }
</style>
