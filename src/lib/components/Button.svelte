<script>
  import { page } from '$app/stores';
  export let data, style = '', secondary = false;
  const { type, internalLink, externalLink } = data;

  const url = type === 'external'
  ? externalLink
    : $page.url.pathname === '/'
    ? internalLink.lang + '/' + internalLink.slug
  : internalLink.slug
</script>

<a href={url} class='flex {style}'>
  <button class='{secondary ? 'bg-blue' : 'bg-green'} z-40 text-light text-sm md:text-base h-10 md:h-14 rounded-full flex items-center justify-center px-8 md:px-12 uppercase font-semibold tracking-widest'>
    {data.title}
  </button>
</a>
