<script>
  import Image from "../components/Image.svelte";
  import { IconChevronRight } from '@tabler/icons-svelte'
  import { page } from '$app/stores'
	import FilterTabs from "../components/FilterTabs.svelte"

  export let data, posts

  $: postLink = data.postLink

  const lang = $page.data.page.__i18n_lang
  const pageName = $page.params.page

  posts.shift()

  const categories = lang === 'en-us'
    ? [...new Set(posts.map((item) => item.category.title.en))]
    : [...new Set(posts.map((item) => item.category.title.sv))]
  
  let selectedCategory = ''
  let filteredPosts = posts

  $: filteredPosts = selectedCategory 
    ? lang === 'en-us'
      ? posts.filter((post) => post.category.title.en === selectedCategory)
      : posts.filter((post) => post.category.title.sv === selectedCategory)
    : posts

  const setSelectedCategory = (category) => {
    selectedCategory === category
    ? selectedCategory = ''
    : selectedCategory = category
  }

</script>

<section class="flex flex-col py-12 md:pt-16 pb-24 px-sm-padding md:px-md-padding xl:px-lg-padding max-w-content">
  <FilterTabs
    items={categories}
    selectedItem={selectedCategory}
    onClick={(item) => setSelectedCategory(item)}
  />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {#each filteredPosts as post}
    <div class="flex flex-col">
      <a href={pageName + '/' + post.seo.slug.current} class="shadow-xl mb-12 w-full aspect-[5/3] overflow-hidden rounded-3xl">
        <Image 
          imageStyle="relative object-cover h-[240px] w-[380px] hover:scale-105 duration-200"
          source={post.image}
          width={{ mobile: 340, tablet: 300, desktop: 600 }}
        />
      </a>
      <span class="text-marine opacity-50 text-xs md:text-sm uppercase font-bold">{lang === 'en-us' ? post.category.title.en : post.category.title.sv}</span>
      <span class="font-bold text-2xl mt-2 mb-4">{post.title}</span>
      <span>{post.summary}</span>
      <a href={pageName + '/' + post.seo.slug.current} class="hover:text-blue font-semibold  mt-4 flex items-center gap-1 hover:gap-2 duration-200">
        {postLink}
        <IconChevronRight  />
      </a>
    </div>
  {/each}
  </div>
</section>
