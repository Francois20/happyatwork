<script>
	import PortableText from "$lib/portableText/PortableText.svelte";
	import { IconChevronDown, IconChevronUp, IconPlus, IconSearch, IconX } from "@tabler/icons-svelte";
	import FilterTabs from "../components/FilterTabs.svelte";
  import { page } from '$app/stores'

  export let data;
  const {faqList} = data

  $: title = data.title
  $: searchPlaceholder = data.searchPlaceholder

  let openFaqIndex = -1
  let topItems = []
  let otherItems = []
  let filteredItems = [...faqList]
  let filteredByInput = [...faqList]
  let activeTab = ''
  let value = ''
  let numberOfItems = 16

  const lang = $page.data.page.__i18n_lang
  const tags = faqList.map(item => item.tags).flat()
  const uniqueTags = lang === 'en-us'
    ? [...new Set(tags.map((item) => item.tag.title.en))]
    : [...new Set(tags.map((item) => item.tag.title.sv))]

  $: filteredItems = activeTab 
    ? lang === 'en-us'
      ? faqList.filter(x => x.tags.some((tag) => tag.tag.title.en === activeTab))
      : faqList.filter(x => x.tags.some((tag) => tag.tag.title.sv === activeTab))
    : faqList

  $: filteredByInput = value.length > 0
    ? filteredItems.filter(x => x.question.toLowerCase().includes(value.toLowerCase()))
    : filteredItems
  
  $: topItems = filteredByInput.slice(0, 3)
  $: otherItems = filteredByInput.slice(3, numberOfItems)

  const setOpenFaqIndex = (index) => {
    openFaqIndex === index 
    ? openFaqIndex = -1 
    : openFaqIndex = index
  }

  const setSelectedTag = (item) => {
    activeTab === item
    ? activeTab = ''
    : activeTab = item
  }
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding w-full py-12 lg:py-16 max-w-content">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16">{title}</h2>
    <div class="relative w-full md:max-w-[540px] mx-auto mb-12">
      <div class="flex absolute inset-y-0 items-center text-dark left-0 pl-2.5 pointer-events-none">
        <IconSearch />
      </div>
      <input
        bind:value
        placeholder={searchPlaceholder || ''}
        type="text"
        class="block w-full disabled:cursor-not-allowed disabled:opacity-50 pl-11 pr-11 focus:border-blue focus:ring-blue bg-light text-dark border border-dark p-4 sm:text-base rounded-full"
      />
      <div class="flex absolute inset-y-0 items-center right-0 pr-1.5">
        {#if value}
          <button
            class="text-center font-semibold uppercase font focus:outline-none inline-flex items-center justify-center px-3 py-3 text-sm text-light bg-blue hover:bg-green focus:ring-blue rounded-full"
            on:click={() => {
              value = ''
       
            }}>
            <IconX />
          </button>
        {/if}
      </div>
    </div>

    <FilterTabs
      items={uniqueTags}
      onClick={(item) => setSelectedTag(item)}
      selectedItem={activeTab}
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
      <ul class="flex flex-col gap-y-8">
        {#each topItems as item, i}
          <li class="shadow-xl rounded-xl bg-light p-6 lg:p-12">
            <h4 class="font-semibold text-xl mb-2">{item.question}</h4>
            <PortableText data={item.answer}/>
          </li>
        {/each}
      </ul>
      <ul class="flex flex-col gap-y-8 mt-12">
        {#each otherItems as item, i}
          <li class="cursor-pointer" on:click={() => setOpenFaqIndex('col2'+ i)} on:keydown>
            <div class="flex justify-between items-start">
              <h4 class="font-semibold text-xl w-10/12 md:w-5/6 mb-2">{item.question}</h4>
              {#if openFaqIndex === 'col2' +i}
                <IconChevronUp color="#fac600" size={32} />
                {:else}
                <IconChevronDown color="#fac600" size={32} />
              {/if}
            </div>
            <div class="w-10/12 md:w-5/6 overflow-hidden {openFaqIndex === 'col2'+ i ? 'h-auto' : 'h-0'}">
              <PortableText data={item.answer}/>
            </div>
          </li>
        {/each}
        
        {#if otherItems.length > 12 && numberOfItems === 16}
          <button class="flex gap-4 items-center" on:click={() => numberOfItems = filteredByInput.length}>
            <IconPlus color="#fac600" size={32} />
            {lang === "en-us" ? 'See all' : 'Visa alla'}
          </button>
        {/if}
       
      </ul>
    </div>
</section>
