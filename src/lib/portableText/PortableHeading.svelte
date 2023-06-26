<script>
  export let portableText
  const {style} = portableText.value

</script>

{#if style === 'h1'}
  <h1 class="text-4xl md:text-6xl uppercase font-extrabold mt-4 mb-8 md:mb-16"><slot /></h1>
{:else if style === 'h2'}
  <h2 class="font-bold text-2xl md:text-3xl mt-12 mb-4"><slot /></h2>
{:else if style === 'h3'}
  <h3 class="text-lg md:text-2xl mt-6 mb-4 font-bold"><slot /></h3>
{/if}
