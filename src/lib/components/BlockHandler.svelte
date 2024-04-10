<script>
	import Hero from '$lib/blocks/Hero.svelte';
	import ContentBasic from '$lib/blocks/ContentBasic.svelte';
	import Logos from '$lib/blocks/Logos.svelte';
	import CTABanner from '$lib/blocks/CTABanner.svelte';
	import ContentExtended from '$lib/blocks/ContentExtended.svelte';
	import TwoLatestPosts from '$lib/blocks/TwoLatestPosts.svelte';
	import LatestPost from '$lib/blocks/LatestPost.svelte';
	import Posts from '$lib/blocks/Posts.svelte';
	import Usps from '$lib/blocks/Usps.svelte';
	import Pricing from '$lib/blocks/Pricing.svelte';
	import CustomerStories from '$lib/blocks/CustomerStories.svelte';
	import Quote from '$lib/blocks/Quote.svelte';
	import FAQ from '$lib/blocks/FAQ.svelte';
	import Form from '$lib/blocks/Form.svelte';
	import ContentMulti from '$lib/blocks/ContentMulti.svelte';
	import FreeText from '$lib/blocks/FreeText.svelte';
	import PipedriveForm from '$lib/blocks/PipedriveForm.svelte';
	export let data;

	const component = {
		hero: Hero,
		contentBasic: ContentBasic,
		logos: Logos,
		ctaBanner: CTABanner,
		contentExtended: ContentExtended,
		latestPost: LatestPost,
		twoLatestPosts: TwoLatestPosts,
		posts: Posts,
		usps: Usps,
		pricing: Pricing,
		customerStories: CustomerStories,
		quote: Quote,
		faq: FAQ,
		form: Form,
		contentMulti: ContentMulti,
		freeText: FreeText,
		pipedriveForm: PipedriveForm
	};
</script>

<div class="bg-light w-full flex flex-col items-center">
	{#each data.page.pageBuilder as item}
		<svelte:component
			this={component[item._type]}
			data={item}
			posts={data.posts}
			twoPosts={data.latestPosts}
			post={data.latestPost}
		/>
	{/each}
</div>
