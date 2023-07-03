<script>
	import Image from '$lib/components/Image.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  export let data;
  
  let {locales} = data;
  $: logo = data.logo
  $: links = data.links
  $: secondaryLinks = data.secondaryLinks
  $: locales = data.locales
  $: soMeLinks = data.soMeLinks

  delete locales._type
  const localesArray = Object.values(locales)

  const setLocale = (lang) => {
    goto(`/${lang}`, { invalidateAll: true })
  }

</script>

<footer class="flex flex-col bg-marine py-12 md:pt-16 md:pb-12 w-full px-sm-padding md:px-md-padding xl:px-lg-padding">
  <div class="flex flex-col lg:flex-row justify-between pb-6 lg:pb-36"> 
    <a href="/" class="w-40 md:w-48 mb-6 md:mb-0">
      <Image 
        source={logo}
        width={{ mobile: 80, tablet: 100, desktop: 200 }}
      />
    </a>

    <div class="flex flex-col lg:flex-row lg:gap-8">
      <div class="flex gap-x-4 lg:mr-4 xl:mr-24 my-6 lg:my-0">
        {#each soMeLinks as link}
          <a href={link.externalLink ? link.externalLink : '/' + link.internalLink.slug} class="w-6 text-left lg:text-right">
            <Image 
              source={link.image}
              width={{ mobile: 24, tablet: 24, desktop: 24 }}
            />
          </a>
        {/each}
      </div>
      
    
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4 xl:gap-x-16">
        {#each links as link}
          <a href={link.type === 'external'
          ? link.externalLink
            : $page.url.pathname === '/'
            ? link.internalLink.lang + '/' + link.internalLink.slug
          : link.internalLink.slug}
          class="text-left lg:text-right text-light hover:text-blue"
          >
            {link.title}
          </a>
        {/each}
      </div>
    </div>
  </div>  

  <div class="flex justify-between lg:items-center flex-col-reverse lg:flex-row">
    <ul class="flex flex-col lg:flex-row gap-4 lg:gap-12">
      {#each secondaryLinks as link}
        <li class="text-sm">
          <a href={link.type === 'external'
          ? link.externalLink
            : $page.url.pathname === '/'
            ? link.internalLink.lang + '/' + link.internalLink.slug
          : link.internalLink.slug}
          class="text-light hover:text-blue"
          >
            {link.title}
          </a>
        </li>
      {/each}
      <li class="text-sm text-light">© 2023 Interactive Happiness Survey AB</li>
    </ul>

    <div class="flex mb-4 lg:mb-0 gap-2">
      {#each localesArray as locale}
        <button
          on:click={() => setLocale(locale.code)}
          class="h-9 w-9 {$page.data.page.__i18n_lang === locale.code ? 'brightness-75' : 'brightness-1 hover:brightness-75'}"
        >
          <Image
            source={locale.image}
            width={{ mobile: 24, tablet: 28, desktop: 28 }}
            style="min-h-[28px] min-w-[28px] h-[28px] w-[28px]"
          />
        </button>
      {/each}
    </div>
  </div>
</footer>
