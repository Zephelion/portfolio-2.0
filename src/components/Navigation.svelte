<script>
  import { onMount } from "svelte";
  import { isActive } from "./../lib/routeHelper.js";

  let isProjects;
  let isAbout;
  let isContact;

  onMount(() => {
    isProjects = isActive("/projects");
    isAbout = isActive("/about-me");
    isContact = isActive("/contact");
  });
</script>

<div class="nav-bar">
  <div class="logo">
    <a href="/">RN</a>
  </div>
  <div>
    <ul class="links-container">
      <li>
        <a class="link" class:active={isProjects} href="/projects">Projects</a>
      </li>
      <li>
        <a class="link" class:active={isAbout} href="/about-me">About</a>
      </li>
      <li>
        <a class="link" class:active={isContact} href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  @import "../styles/global.scss";

  .nav-bar {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .links-container {
    display: flex;
    gap: 1rem;
  }

  .link {
    color: #bbbbbb;
    font-weight: 200;
    transition: 0.4s;

    &.active {
      color: black;
    }

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.05rem;
      background-color: black;
      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  }
</style>
