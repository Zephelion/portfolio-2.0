<script>
  export let title;
  export let link;

  const handleMouseOver = () => {
    console.log("mouse over");
  };
</script>

<li>
  <a on:mouseover={handleMouseOver} on:focus class="item" href={link}>{title}</a
  >
</li>

<style lang="scss">
  @import "../styles/global.scss";

  .item {
    display: block;
    width: 100%;
    padding: 4rem 0 4rem 0;
    border-bottom: 0.05rem solid rgb(28 29 32 / 18%);
    transition: 0.4s;
    color: #bbbbbb;
    font-weight: 200;
    font-size: 1.5rem;

    &:hover {
      color: black;
    }
  }
</style>
