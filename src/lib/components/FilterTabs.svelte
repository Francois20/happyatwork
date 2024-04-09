<script>
  export let items, selectedItem, onClick
</script>

<div class="grid grid-cols-2 w-full md:w-unset md:flex md:flex-row md:flex-wrap justify-center gap-4 md:gap-8 font-semibold lg:text-lg mt-8 mb-12 md:mb-24">
  {#each items as item, i}
    {#if i !== 0}
      <li class="min-w-px max-w-px w-px h-6 border-r border-dashed border-marine hidden md:block" />
    {/if}
    <button
      on:click={() => onClick(item)}
      class="border border-dashed border-marine rounded-full py-2 md:py-0 md:border-none text-center text-marine md:px-5 hover:opacity-50 uppercase {selectedItem === item && 'opacity-50'}"
      aria-label="Filter button"
    >
      {item}
    </button>
  {/each}
</div>
