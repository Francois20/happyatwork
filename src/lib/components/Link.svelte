<script>
	import { IconChevronRight } from '@tabler/icons-svelte';

	export let link, alt = null;
</script>

<a
	class="font-bold hover:text-blue mt-4 flex items-center gap-1 hover:gap-2 duration-200"
  alt={alt ? alt : "Read more button" }
	href={link.type === 'external'
		? link.externalLink
		: '/' + link.internalLink.lang + '/' + link.internalLink.slug}
>
	{link.title}
	<IconChevronRight />
</a>
