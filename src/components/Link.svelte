<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let title = "";

  const dispatch = createEventDispatcher();

  let buttonElement;
  let isVisible = true;

  const handleClick = () => {
    dispatch("clickLanding");
  };

  onMount(() => {
    gsap.to(buttonElement, {});
  });
</script>

{#if isVisible}
  <button bind:this={buttonElement} class="button" on:click={handleClick}>
    {title}
  </button>
{/if}

<style lang="scss">
  .button {
    border: none;
    outline: none;
    background-color: white;
    padding: 1rem;
    border: 0.05rem solid black;
    transition: 0.4s;
    cursor: pointer;
    display: block;
    font-weight: 200;
    text-align: center;

    &:hover {
      transform: scale(1.2);
    }
  }
</style>
