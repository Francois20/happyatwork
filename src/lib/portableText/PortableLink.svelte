<script lang="ts">
	export let portableText;
  
  const getInternalLink = ({lang, slug}) => {
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