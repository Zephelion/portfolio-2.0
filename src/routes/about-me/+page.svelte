<script>
  import CenterLayout from "../../components/layouts/CenterLayout.svelte";
  import InProgress from "../../components/InProgress.svelte";
  import Navigation from "../../components/Navigation.svelte";
  import Footer from "../../components/Footer.svelte";
  import Fade from "../../components/transitions/Fade.svelte";
</script>

<svelte:head>
  <title>About - Russell Numo</title>
</svelte:head>

<Navigation />
<CenterLayout hasMinimum={true}>
  <Fade>
    <div class="about">
      <p class="description">
        Hello my name is Russell Numo An aspiring full stack developer with a
        passion for creating innovative and user-friendly web applications.
        Currently attending Amsterdam University of Applied Sciences studying
        Communication Multimedia Design.
      </p>
    </div>
  </Fade>
</CenterLayout>
<Footer />

<style lang="scss">
  .about {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .description {
    font-size: 2rem;
    font-weight: 200;
  }
</style>
