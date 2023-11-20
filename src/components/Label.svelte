<script>
  export let role;
  export let title;
</script>

<div class="label">
  <h5 class="type">{role}</h5>
  <div class="line" />
  <p class="role-title">{title}</p>
</div>

<style lang="scss">
  @import "../styles/global.scss";

  .label {
    width: 13rem;
    transform: scale(0.7);
    /* border-bottom: 0.05rem solid black; */
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
</style>
