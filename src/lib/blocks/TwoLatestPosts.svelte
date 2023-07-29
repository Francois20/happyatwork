<script>
  import Image from "../components/Image.svelte";
  import { IconChevronRight } from '@tabler/icons-svelte';
  import { page } from '$app/stores';

  export let data, posts;
  const {linkText, parentPage, labelText} = data;

  const lang = $page.data.page.__i18n_lang
</script>

<section class="md:grid md:grid-cols-2 flex flex-col gap-24 md:gap-16 xl:gap-32 px-sm-padding md:px-md-padding xl:px-lg-padding py-12 md:py-32 max-w-content">
  {#each posts as post}
    <div class="flex flex-col">
      <a 
        href={
          $page.url.pathname === '/'
          ? parentPage.lang + '/' + parentPage.slug + '/' + post.seo.slug.current
          : parentPage.slug + '/' + post.seo.slug.current
        }
        class="flex flex-col relative group"
      >
        <div class="absolute -right-5 -top-8 z-10 bg-blue group-hover:bg-green duration-300 rounded-full w-20 h-20 text-light flex items-center justify-center">
          <span class="uppercase text text-base font-semibold w-min leading-5">{labelText}</span>
        </div>
        <div class="relative w-full shadow-xl mb-12 md:mb-16 overflow-hidden rounded-3xl">
          <Image 
            imageStyle="object-cover h-[240px] w-[500px] md:h-[360px] md:w-[540px] group-hover:scale-105 duration-200"
            source={post.image}
            width={{ mobile: 500, tablet: 300, desktop: 800 }}
          />
        </div>
      </a>
      <div class="flex flex-col md:px-4">
        <span class="text-marine opacity-50 text-sm md:text-lg uppercase font-bold">{lang === 'en-us' ? post.category.title.en : post.category.title.sv}</span>
        <h3 class="font-bold text-2xl md:text-3xl mt-4 mb-4">{post.title}</h3>
        <p class="leading-7">{post.summary}</p>
        <a 
          href={
            $page.url.pathname === '/'
            ? parentPage.lang + '/' + parentPage.slug + '/' + post.seo.slug.current
            : parentPage.slug + '/' + post.seo.slug.current
          }
          class="flex gap-2 font-semibold mt-4 hover:text-blue hover:gap-3 duration-200"
        >
          {linkText}
          <IconChevronRight />
        </a>
      </div>
    </div>
  {/each}
</section>
