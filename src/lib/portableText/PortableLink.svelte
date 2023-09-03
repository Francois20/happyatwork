<script>
  import { page } from '$app/stores';
	export let portableText;
  const blogPage = $page.data.post.parentPage.slug
  
  const getInternalLink = ({lang, slug, type}) => {
    if(type === 'post')
    return `/${lang}/${blogPage}/${slug}`;
    else
    return `/${lang}/${slug}`;
    }
</script>

{#if portableText.markType === 'internalLink'}
	<a href={getInternalLink(portableText.value.item)} class="underline text-blue">
		<slot />
	</a>
{:else if portableText.markType === 'link'}
	<a href={portableText.value.href} target="_blank" rel="noreferrer" class="underline text-blue">
		<slot />
	</a>
{/if}