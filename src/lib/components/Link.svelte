<script>
  import { page } from '$app/stores';
  import { IconChevronRight } from '@tabler/icons-svelte';

  export let link
</script>

<a
  class="font-bold hover:text-blue mt-4 flex items-center gap-1 hover:gap-2 duration-200"
  href={link.type === 'external'
  ? link.externalLink
    : $page.url.pathname === '/'
    ? link.internalLink.lang + '/' + link.internalLink.slug
  : link.internalLink.slug}
>
  {link.title}
  <IconChevronRight />
</a>

