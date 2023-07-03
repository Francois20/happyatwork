<script>
  import { IconChevronLeft, IconClockHour3 } from '@tabler/icons-svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import PortableText from '$lib/portableText/PortableText.svelte';
	import TwitterIcon from '$lib/components/TwitterIcon.svelte';
	import FacebookIcon from '$lib/components/FacebookIcon.svelte';
	import Author from '$lib/components/Author.svelte';

  export let data;
  const lang = $page.data.page.__i18n_lang
  const {title, description, ogTitle, ogDescription, ogImage} = data.page.seo
  const {body, category, author, publishedAt, estimatedReadingTime} = data.page;
  const {estimatedReadTimeText, returnText, shareText} = $page.data.post

  let previousPage = '';
  let facebookUrl = '';
  let twitterUrl = '';

  onMount(() => {
    facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&t=${document.title}`
    twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(window.location.href)}&t=${document.title}`
  })

  afterNavigate(({from}) => {
    previousPage = from?.url.pathname
  })
  
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content="{title}">
  <meta name="description" content="{description}">
  <meta property="og:title" content="{ogTitle}">
  <meta property="og:description" content="{ogDescription}">
  <meta property="og:image" content="{ogImage}">
</svelte:head>

<section class="relative bg-light justify-center flex w-full lg:w-max ml-0 mr-0 pt-28 pb-12 md:pt-40 lg:pt-52 lg:pb-36">
  <aside class="absolute w-52 top-28 bottom-0 left-0 py-24 hidden lg:block">
    <div class="sticky top-28">
      <a href={previousPage} class="flex items-center gap-2 font-bold">
        <IconChevronLeft size={16} />
        {returnText}
      </a>
      <div class="flex flex-col text-sm mt-24">
        <Author {author} {publishedAt} vertical />
        <span class="flex mt-12 mb-12 items-center gap-2">
          <IconClockHour3 size={16}/>
          {estimatedReadingTime + ' ' + estimatedReadTimeText} 
        </span>
        <span>{shareText}</span>
        <div class="flex gap-2 mt-2">
          <a href={facebookUrl} target="_blank" rel="noreferrer"><FacebookIcon color="#003553"/></a>
          <a href={twitterUrl} target="_blank" rel="noreferrer"><TwitterIcon color="#003553" /></a>
        </div>
      </div>
    </div>
  </aside>

  <article class="w-full lg:w-[1000px] px-sm-padding md:px-md-padding lg:pl-52">
    <span class="block text-yellow text-base lg:text-xl font-bold w-min leading-5 lg:leading-6 mb-4 whitespace-nowrap">{lang === 'en-us' ? category.title.en : category.title.sv}</span>
    <h1 class="text-3xl lg:text-6xl uppercase font-extrabold mb-6 lg:mb-20 mt-4 lg:mt-6 lg:!leading-[4rem]">{data.page.title}</h1>
    <Author {author} {publishedAt} style="block lg:hidden md:mb-4 lg:mb-0" />
    <PortableText data={body}/>
  </article>

    <div class="fixed bottom-4 right-4 lg:hidden">
      <a href={facebookUrl} target="_blank" rel="noreferrer" class="block mb-2">
        <div class="h-12 w-12 rounded-full bg-blue flex justify-center items-center p-1">
          <FacebookIcon color="#FFFFFF"/>
        </div>
      </a>
      <a href={twitterUrl} target="_blank" rel="noreferrer">
        <div class="h-12 w-12 rounded-full bg-blue flex justify-center items-center p-2">
        <TwitterIcon color="#FFFFFF"/>
      </div>
      </a>
    </div>
</section>