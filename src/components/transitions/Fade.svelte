<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade={{ delay: 250, duration: 300 }} out:fade={{ duration: 300 }}>
  <slot />
</div>
