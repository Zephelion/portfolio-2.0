<script context="module">
  import icons from "../icons";
</script>

<script>
  export let name;
  export let width;
  export let height = "auto";
  export let noAllign = false;

  $: html = generateSVG(name, width, height);
  function generateSVG(icon, w, h) {
    let svg = icons[icon];

    const style = `${
      noAllign ? "" : "display: inline-block; vertical-align: middle;"
    } width: ${w}; height: ${h === "auto" ? w : h}`;
    svg = svg.replace("<svg ", `<svg style="${style}" `);
    return svg;
  }
</script>

{@html html}
