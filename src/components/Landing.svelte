<script>
  import Link from "./Link.svelte";
  import CenterLayout from "../components/layouts/CenterLayout.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let myElement;

  onMount(() => {
    gsap.from(myElement, {
      "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      duration: 1,
      ease: "expo.inOut",
    });
  });

  const HandleOnClick = () => {
    dispatch("clickLanding");
  };
</script>

<CenterLayout>
  <section class="center-landing">
    <h1 bind:this={myElement} class="title">Russell Numo</h1>
    <Link title="Start" on:clickLanding={HandleOnClick} />
  </section>
</CenterLayout>

<style lang="scss">
  .title {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    font-weight: 100;
    font-size: 3rem;
    letter-spacing: -0.03em;
  }

  .center-landing {
    display: flex;
    flex-direction: column;
  }
</style>
