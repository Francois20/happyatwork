<script>
	import { page } from '$app/stores';
	import Image from '$lib/components/Image.svelte';
	import { IconMenu } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import Button from '../lib/components/Button.svelte';

  export let data;

  $: logo = data.logo
  $: links = data.links
  $: cta = data.cta
  let isScrolling = false
  let lastScrollTop = 0
  let scrollDown = false
  let showMobileMenu = false

  $: hasHero = $page.data.page?.pageBuilder?.some((x) => x._type === 'hero') || false
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > lastScrollTop) {
      scrollDown = true
    } else if (window.scrollY < lastScrollTop) {
      scrollDown = false
    } 
    lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY;

    if (window.scrollY > 560) {
      if(!isScrolling){
        isScrolling = true
      }
    } else {
      if(isScrolling){
        isScrolling = false
      }
    }
  }

</script>

<header class="flex fixed top-0 left-0 w-full lg:h-24 z-40 md:px-sm-padding pt-2 md:pt-8">
	<div class="hidden lg:block w-48">
		<a href="/">
			<Image 
        source={logo}
        width={{ mobile: 80, tablet: 100, desktop: 200 }}
        style={(isScrolling || !hasHero || showMobileMenu) && 'brightness-0'}
      />
		</a>
	</div>

	<nav class="hidden lg:flex flex-1 justify-center pr-24">
		<ul class="flex gap-8 xl:gap-12 items-center rounded-full py-6 px-12 {isScrolling ? 'bg-light shadow-lg' : 'bg-transparent'} {scrollDown ? '-translate-y-32' : 'translate-y-0'} duration-500">
      {#each links as link, i}
        {#if i !== 0}
          <div class="min-w-px max-w-px w-px h-6 border-r border-dashed {hasHero ? isScrolling ? 'border-marine' : 'border-light' : 'border-marine'}" />
        {/if}
        <li 
          aria-current={link.internalLink && ($page.params.page === link.internalLink?.slug) ? 'page' : undefined}
          class="relative {link.internalLink && ($page.params.page === link.internalLink?.slug) ? 'opacity-50 pointer-events-none' : 'opacity-100'}"
        >
          <a
            href={
              link.externalLink
              ? link.externalLink
              : '/' + link.internalLink.lang + '/' + link.internalLink.slug
            }
            class={`relative uppercase lg:text-sm xl:text-base ${hasHero ? isScrolling ? 'text-dark' : 'text-light' : 'text-dark'} duration-500 hover:opacity-50 hover:duration-150`}
          >
            {link.title}
          </a>
        </li>
      {/each}
		</ul>
	</nav>


  <div class="lg:hidden w-full rounded-3xl mx-3 px-3 {!showMobileMenu && !isScrolling ? 'bg-transparent' : 'bg-light shadow-lg'} {!showMobileMenu && scrollDown ? '-translate-y-32' : 'translate-y-0'} duration-500">
    <div class="flex justify-between items-center w-full h-16">
      <a class="w-16" href="/">
        <Image 
          source={logo}
          width={{ mobile: 80, tablet: 100, desktop: 200 }}
          style={(isScrolling || !hasHero || showMobileMenu) && 'brightness-0'}
        />
      </a>
      <button on:click={() => showMobileMenu = !showMobileMenu}>
        <IconMenu size={40} stroke={1.5} color={!hasHero || isScrolling || showMobileMenu ? "#000000" : "#FFFEFB"}/>
      </button>
    </div>

    <nav class="flex flex-col items-center text-center {isScrolling ? 'bg-light' : 'bg-transparent'}">
      {#if showMobileMenu}
        <ul class="flex flex-col gap-8 rounded-full py-6 px-12">
          {#each links as link}
            <li aria-current={$page.url.pathname === '/' + link.internalLink?.slug ? 'page' : undefined} class="relative">
              <a href={link.externalLink ? link.externalLink : $page.url.pathname === '/' ? link.internalLink.lang + '/' + link.internalLink.slug : link.internalLink.slug}
                class='relative uppercase'
              >
                {link.title}
              </a>
            </li>
          {/each}
        </ul>
        <Button data={cta} secondary style="mb-6"/>
      {/if}
    </nav>
  </div>

  <div class="hidden lg:block group">
    <a href={cta.type === 'internal' ? cta.internalLink.lang + '/' + cta.internalLink.slug : cta.externalLink}>
      <button class={` ${isScrolling || !hasHero ? 'text-dark bg-light' : 'text-light bg-marine'} border border-dashed border-blue w-20 h-20 group-hover:bg-green group-hover:text-light group-hover:border-green duration-200 rounded-full flex items-center justify-center`}>
        <span class='leading-5 text-base uppercase font-semibold w-32'>
          {cta.title}
        </span>
      </button>
    </a>
	</div>
</header>
