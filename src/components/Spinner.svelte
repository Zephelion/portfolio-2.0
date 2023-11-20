<script>
  import Links from "../data/Link";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let loaderElement;
  let wordsGroupElement;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      gsap.to(wordsGroupElement, {
        yPercent: -4,
        duration: 1,
        ease: "power4.out",
      });
    } else if (e.key === "ArrowUp") {
      gsap.to(wordsGroupElement, {
        yPercent: 4,
        duration: 1,
        ease: "power4.out",
      });
    }
  });

  const transformToLink = (link) => {
    return link.toLowerCase().replace(" ", "-");
  };
</script>

<div class="loader-wrapper" bind:this={loaderElement}>
  <div class="loader">
    <h2 class="loader-title">What would you like to know?</h2>
    <div class="loader-wordsGroup" bind:this={wordsGroupElement}>
      {#each Links as link, index}
        <a href={transformToLink(link)} key={index} class="spinner-word">
          {link}
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/global.scss";

  .loader {
    height: 100%;
    width: 100%;
    gap: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    overflow: hidden;
    z-index: 2;
  }

  .loader-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  .loader-title {
    font-weight: 200;
    font-size: 3vw;
  }

  .spinner-word {
    display: block;
    font-weight: 200;
    font-size: 1.2rem;
    transition: 0.4s;
    color: #bbbbbb;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      color: black;
    }
  }
</style>
