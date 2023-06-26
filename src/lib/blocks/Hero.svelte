<script>
	import Button from "$lib/components/Button.svelte";
	import Image from "$lib/components/Image.svelte";

  export let data;
  $: orientation = data.orientation
  $: heading = data.heading
  $: image = data.image
  $: tagline = data.tagline
  $: link = data.link
  $: backgroundColor = data.backgroundColor

</script>

<section
  style="background: {backgroundColor};"
  class="relative h-[100vh] md:h-[96vh] w-full flex flex-col-reverse {orientation === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} !justify-end px-sm-padding lg:px-lg-padding pt-28 md:pt-48 mb-32"
>
<div>
  <Image 
    style="absolute z-30 md:h-auto translate-y-[1rem] -bottom-32 {orientation === 'right' ? 'left-4 rotate-[4deg]' : 'right-[2.2rem] rotate-[-4deg]'}"
    imageStyle="image-contain w-[90vw] lg:w-[660px] xl:w-[860px]"
    source={image}
    width={{ mobile: 360, tablet: 600, desktop: 900 }}
  />
</div>

  <div class="flex flex-col md:max-w-[600px] xl:max-w-[760px] {orientation === 'right' ? 'md:items-end' : 'md:items-start'}">
    <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold text-light uppercase leading-none mb-8 {orientation === 'right' ? 'md:text-right' : 'md:text-left'}">
     {heading}
    </h1>
  
    {#if tagline}
      <p class="text-gray mb-12 {orientation === 'right' ? 'md:text-right' : 'md:text-left'}">
        {tagline}
      </p>
    {/if}

    {#if link && (link.internalLink || link.externalLink)}
      <Button data={link}/>
    {/if}
  </div>  


  <div class="shape-color">
    <svg class="h-[80px] md:h-[136px] {orientation === 'right' ? 'rotate-y' : ''}" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={backgroundColor}></path>
    </svg>
  </div>

  <div class="shape-blue -bottom-[4.4rem] md:-bottom-[7.4rem]">
    <svg class="h-[100px] md:h-[200px] transform {orientation === 'left' ? 'rotate-y' : ''}" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#4497d3"></path>
    </svg>
</div>

	
</section>

<div class="w-full h-16 md:h-24"/>

<style>
  .shape-color {
    position: absolute;
    bottom:-3rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 4;
}

.shape-color svg,
.shape-blue svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
}

.shape-blue {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.rotate-y {
  transform: rotateY(180deg);
}

</style>