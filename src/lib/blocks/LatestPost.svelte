<script>
  import Image from "../components/Image.svelte";
  import { page } from '$app/stores'
  import { IconChevronRight } from '@tabler/icons-svelte';

  export let data, post;
  
  $: title = post.title
  $: publishedAt = post.publishedAt
  $: seo = post.seo
  $: category = post.category
  $: author = post.author
  $: image = post.image
  $: summary = post.summary
  $: linkText = data.linkText
  $: labelText = data.labelText

  const lang = $page.data.page.__i18n_lang
  const parentPage = $page.data.post.parentPage

</script>

<section class="flex flex-col bg-light py-14 md:mt-12 px-sm-padding md:px-md-padding xl:px-lg-padding max-w-content">
  <div class="flex flex-col items-end w-full text-sm mb-4">
    <span class="font-bold">{publishedAt}</span>
    <span>{author.name}</span>
  </div>

  <div class="flex flex-col-reverse md:flex-row">
    <div class="flex flex-col md:w-1/2 md:pr-24">
      <span class="text-marine opacity-50 text-sm md:text-lg uppercase font-bold">{lang === 'en-us' ? category.title.en : category.title.sv}</span>
      <span class="font-bold text-4xl mt-4 mb-4">{title}</span>
      <span>{summary}</span>
      <a href={parentPage.slug + '/' + seo.slug.current} class="font-bold hover:text-blue mt-6 flex items-center gap-1 hover:gap-2 duration-200">
        {linkText}
        <IconChevronRight />
      </a>
    </div>

    <a href={parentPage.slug + '/' + seo.slug.current} class="relative md:w-1/2 group">
      <div class="absolute -left-5 -top-8 z-20 bg-blue group-hover:bg-green rounded-full w-20 h-20 md:w-24 md:h-24 text-light flex items-center justify-center">
        <span class="uppercase !leading-5 text-base md:text-lg text-center font-semibold w-min">{labelText}</span>
      </div>
      <div class="relative w-full shadow-xl mb-12 md:mb-16 overflow-hidden rounded-3xl">
        <Image 
          imageStyle="object-cover md:h-[400px] md:w-[600px] group-hover:scale-105 duration-200"
          source={image}
          width={{ mobile: 340, tablet: 300, desktop: 800 }}
        />
      </div>
    </a>
  </div>
</section>
