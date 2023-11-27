<script>
  import Landing from "../components/Landing.svelte";
  import Spinner from "../components/Spinner.svelte";

  let showLandingComponent = true;

  const fadeLandingOut = () => {
    showLandingComponent = false;
  };
</script>

<svelte:head>
  <title>Russell Numo</title>
  <meta
    name="description"
    content="Emerging full stack developer with a passion for building web applications."
  />
</svelte:head>
{#if showLandingComponent}
  <Landing on:clickLanding={fadeLandingOut} />
{:else}
  <Spinner />
{/if}

<style lang="scss">
  @import "../styles/global.scss";
</style>
