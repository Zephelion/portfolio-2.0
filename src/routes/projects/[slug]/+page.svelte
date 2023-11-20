<script>
  import Navigation from "../../../components/Navigation.svelte";
  import Footer from "../../../components/Footer.svelte";
  import Projects from "../../../data/Projects";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let project;

  onMount(() => {
    const url = window.location.pathname.split("/").pop();

    project = Projects.find((project) => project.slug === url);
  });
</script>

<Navigation />

{#if project}
  <section class="base">
    <div class="heading">
      <div class="title">
        <h1
          transition:fade={{ delay: 250, duration: 300 }}
          class="project-title"
        >
          {project.title}
        </h1>
      </div>
      <div class="labels-container">
        <div class="label">
          <h5 class="type">Role</h5>
          <div class="line" />
          <p class="role-title">{project.projectTags.role.join(" & ")}</p>
        </div>
        <div class="label">
          <h5 class="type">Language</h5>
          <div class="line" />
          <p class="role-title">{project.projectTags.language}</p>
        </div>
        <div class="label">
          <h5 class="type">Platform</h5>
          <div class="line" />
          <p class="role-title">{project.projectTags.platform}</p>
        </div>
        <div class="label">
          <h5 class="type">Status</h5>
          <div class="line" />
          <p class="role-title">
            {project.status ? "Deployed" : "Not deployed"}
          </p>
        </div>
      </div>
      <div class="description-container">
        <p class="description">{project.description}</p>
      </div>
    </div>
    {#if project.images}
      <div class="img-container">
        {#each project.images as image}
          <div transition:fade={{ delay: 250, duration: 400 }} class="img">
            <img src={image.src} alt={image.alt} />
          </div>
        {/each}
      </div>
    {/if}
    <div class="video-container">
      <video src={project.video} autoplay loop muted playsinline />
    </div>
    {#if project.imagesMobile}
      <h2 class="mobile-header">MOBILE</h2>
      <div class="mobile-container">
        {#each project.imagesMobile as image}
          <div transition:fade={{ delay: 250, duration: 400 }} class="mobile">
            <img src={image.src} alt={image.alt} />
          </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}
<Footer />

<style lang="scss">
  @import "../../../styles/global.scss";

  .base {
    padding: 1rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .project-title {
    font-weight: 200;
    font-size: 10vw;
  }

  .labels-container {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }

  .label {
    width: 15rem;
  }

  .description-container {
    margin-bottom: 1rem;
  }

  .description {
    font-weight: 200;
  }

  .line {
    border-bottom: 0.05rem solid black;
    width: 100%;
  }

  .type {
    font-weight: 200;
    margin: 0.5rem;
  }

  .role-title {
    font-weight: 300;
    margin: 0.5rem;
  }

  .img-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .img {
    width: 45%;
  }

  .img:nth-child(1) {
    flex-grow: 1;
  }

  .video-container {
    padding: 2rem 5rem 5rem 5rem;
  }

  .mobile-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 4rem;
  }

  .mobile-header {
    font-weight: 200;
    color: #bbbbbb;
    text-align: center;
  }

  .mobile {
    width: 14rem;
  }
</style>
