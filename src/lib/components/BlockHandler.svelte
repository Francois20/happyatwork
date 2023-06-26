<script>
  import Hero from "$lib/blocks/Hero.svelte";
  import ContentBasic from "$lib/blocks/ContentBasic.svelte";
  import Logos from "$lib/blocks/Logos.svelte";
  import CTABanner from "$lib/blocks/CTABanner.svelte";
	import ContentExtended from "$lib/blocks/ContentExtended.svelte";
	import TwoLatestPosts from "$lib/blocks/TwoLatestPosts.svelte";
	import LatestPost from "$lib/blocks/LatestPost.svelte";
	import Posts from "$lib/blocks/Posts.svelte";
	import Usps from "$lib/blocks/Usps.svelte";
	import Pricing from "$lib/blocks/Pricing.svelte";
	import CustomerStories from "$lib/blocks/CustomerStories.svelte";
	import Quote from "$lib/blocks/Quote.svelte";
	import FAQ from "$lib/blocks/FAQ.svelte";
	import Form from "$lib/blocks/Form.svelte";
	import ContentMulti from "$lib/blocks/ContentMulti.svelte";
	import FreeText from "$lib/blocks/FreeText.svelte";
	import PipedriveForm from "../blocks/PipedriveForm.svelte";
  export let data;
</script>

<div class="bg-light w-full">
  {#each data.page.pageBuilder as item}
    {#if item._type === 'hero'}
      <Hero data={item} />
    {:else if item._type === 'contentBasic'}  
      <ContentBasic data={item} />
    {:else if item._type === 'logos'}  
      <Logos data={item} />
    {:else if item._type === 'ctaBanner'}  
      <CTABanner data={item} />
    {:else if item._type === 'contentExtended'}  
      <ContentExtended data={item} /> 
    {:else if item._type === 'latestPost'}  
      <LatestPost data={item} post={data.latestPost} />
    {:else if item._type === 'twoLatestPosts'}  
      <TwoLatestPosts data={item} posts={data.latestPosts} />
    {:else if item._type === 'posts'}  
      <Posts data={item} posts={data.posts} />   
    {:else if item._type === 'usps'}  
      <Usps data={item} />   
    {:else if item._type === 'pricing'}  
      <Pricing data={item} />   
    {:else if item._type === 'customerStories'}  
      <CustomerStories data={item} />   
    {:else if item._type === 'quote'}  
      <Quote data={item} />   
    {:else if item._type === 'faq'}  
      <FAQ data={item} />   
    {:else if item._type === 'form'}  
      <Form data={item} />   
    {:else if item._type === 'contentMulti'}  
      <ContentMulti data={item} />   
    {:else if item._type === 'freeText'}
      <FreeText data={item} />   
    {:else if item._type === 'pipedriveForm'}
      <PipedriveForm data={item} />   
    {/if}  
  {/each}
</div>