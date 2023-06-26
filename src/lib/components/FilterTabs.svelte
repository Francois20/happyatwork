<script>
  export let items, selectedItem, onClick
</script>

<div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-8 font-semibold lg:text-lg mt-8 mb-12 md:mb-24">
  {#each items as item, i}
    {#if i !== 0}
      <div class="min-w-px max-w-px w-px h-6 bg-marine hidden md:block" />
    {/if}
    <button 
      on:click={() => onClick(item)}
      class="text-start md:text-center px-5 hover:text-yellow {selectedItem === item && 'text-yellow'}"
    >
      {item}
    </button>
  {/each}
</div>