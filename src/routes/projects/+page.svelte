<script>
  import Projects from "../../data/Projects";
  import Navigation from "../../components/Navigation.svelte";
  import Project from "../../components/Project.svelte";
</script>

<svelte:head>
  <title>Projects - Russell Numo</title>
</svelte:head>

<Navigation />
<section class="base">
  <h1 class="page-title">Recent work</h1>

  <ul>
    {#each Projects as project}
      <Project title={project.title} link={`/projects/${project.slug}`} />
    {/each}
  </ul>
</section>

<style lang="scss">
  @import "../../styles/global.scss";
  .page-title {
    margin: 0;
    font-weight: 200;
    font-size: 8vw;
    border-bottom: 0.05rem solid black;
  }

  .base {
    padding: 1rem;
  }
</style>
