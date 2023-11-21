<script>
  import CenterLayout from "../../components/layouts/CenterLayout.svelte";
  import Navigation from "../../components/Navigation.svelte";
  import Footer from "../../components/Footer.svelte";
  import Fade from "../../components/transitions/Fade.svelte";
  import Icon from "../../components/Icon.svelte";
</script>

<svelte:head>
  <title>About - Russell Numo</title>
</svelte:head>

<Navigation />
<CenterLayout hasMinimum={true} isColumn={true} allignStart={true} gap="5rem">
  <Fade>
    <div class="about">
      <p class="description">
        Hello my name is Russell Numo An aspiring full stack developer with a
        passion for creating innovative and user-friendly web applications.
        Currently attending Amsterdam University of Applied Sciences following
        the course Communication Multimedia Design.
      </p>
    </div>
  </Fade>
  <div class="skills-container about">
    <div class="frontend-skills">
      <h2 class="skills-heading">Frontend</h2>
      <ul class="skills">
        <li class="icon">
          <Icon name="html" width="4rem" />
          <span class="title">Html</span>
        </li>
        <li class="icon">
          <Icon name="css" width="4rem" />
          <span class="title">Css</span>
        </li>
        <li class="icon">
          <Icon name="javascript" width="4rem" />
          <span class="title">Javascript</span>
        </li>
        <li class="icon">
          <Icon name="react" width="4rem" />
          <span class="title">React</span>
        </li>
        <li class="icon">
          <Icon name="svelte" width="4rem" />
          <span class="title">Svelte</span>
        </li>
        <li class="icon">
          <Icon name="sass" width="4rem" />
          <span class="title">Sass</span>
        </li>
      </ul>
    </div>
    <div class="backend-skills">
      <h2 class="skills-heading">Backend</h2>
      <ul class="skills">
        <li class="icon">
          <Icon name="nodeJs" width="4rem" />
          <span class="title">Node.js</span>
        </li>
        <li class="icon">
          <Icon name="nextJs" width="4rem" />
          <span class="title">Next.js</span>
        </li>
        <li class="icon">
          <Icon name="firebase" width="4rem" />
          <span class="title">Firebase</span>
        </li>
        <li class="icon">
          <Icon name="mongodb" width="4rem" />
          <span class="title">MongoDB</span>
        </li>
        <li class="icon">
          <Icon name="laravel" width="4rem" />
          <span class="title">Laravel</span>
        </li>
      </ul>
    </div>
    <div class="general-skills">
      <h2 class="skills-heading">General</h2>
      <ul class="skills">
        <li class="icon">
          <Icon name="git" width="4rem" />
          <span class="title">Git</span>
        </li>
        <li class="icon">
          <Icon name="adobexd" width="4rem" />
          <span class="title">AdobeXD</span>
        </li>
        <li class="icon">
          <Icon name="agile" width="4rem" />
          <span class="title">Agile</span>
        </li>
        <li class="icon">
          <Icon name="problem" width="4rem" />
          <span class="title">Problem solving</span>
        </li>
      </ul>
    </div>
  </div>
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

  .skills {
    display: flex;
    gap: 2rem;
  }

  .skills-heading {
    font-size: 2rem;
    font-weight: 200;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 0.05rem solid black;
  }

  .skills-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .title {
    font-weight: 100;
  }
</style>
