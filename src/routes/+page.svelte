<script>
  import Landing from "../components/Landing.svelte";
  import Spinner from "../components/Spinner.svelte";

  let showLandingComponent = true;

  const fadeLandingOut = () => {
    showLandingComponent = false;
    console.log("fadeLandingOut");
  };
</script>

{#if showLandingComponent}
  <Landing on:clickLanding={fadeLandingOut} />
{:else}
  <Spinner />
{/if}

<style lang="scss">
  @import "../styles/global.scss";
</style>
