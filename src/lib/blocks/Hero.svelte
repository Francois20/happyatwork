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
  class="relative flex justify-center h-[100vh] md:h-[100.5vh] bg-marine w-full px-sm-padding md:px-md-padding xl:px-lg-padding pt-28 md:pt-48 mb-8 lg:mb-32"
>
<div class="max-w-[1800px] flex items-center lg:items-start flex-col-reverse !justify-end lg:justify-between  {orientation === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}">
  <div
    style="background: {backgroundColor};"
    class="min-w-[250px] max-w-[250px] h-[330px] md:min-w-[350px] md:max-w-[350px] md:h-[460px] xl:min-w-[500px] xl:max-w-[500px] xl:h-[650px] rounded-3xl translate-y-[5rem] bottom-0 z-10
    {orientation === 'left' ? 'left-4 rotate-[8deg]' : 'xl:right-[2.2rem] rotate-[-8deg] relative'}"
  >
    <Image 
      style="absolute bottom-0 md:h-auto w-max left-1/2 transform -translate-x-1/2"
      imageStyle="h-[330px] md:h-[460px] xl:h-[650px] w-full"
      source={image}
      width={{ mobile: 340, tablet: 500, desktop: 700 }}
    />
  </div>

  <div class="flex flex-col md:max-w-[600px] xl:max-w-[760px] {orientation === 'right' ? 'lg:items-end' : 'lg:items-start'}">
    <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold text-light uppercase leading-none mb-8 {orientation === 'right' ? 'lg:text-right' : 'lg:text-left'}">
     {heading}
    </h1>
  
    {#if tagline}
      <p class="text-gray mb-12 lg:max-w-[80%] {orientation === 'right' ? 'lg:text-right' : 'lg:text-left'}">
        {tagline}
      </p>
    {/if}

    {#if link && (link.internalLink || link.externalLink)}
      <Button data={link}/>
    {/if}
  </div>
</div>
  <div class="custom-shape-divider-bottom-1688501387">
    <svg class="transform {orientation === 'left' ? 'rotate-y' : ''}" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 220" preserveAspectRatio="none">
      <path d="M1146.85 212.712C592 194.5 0 117.481 0 0V227.284H1544V220.5C1313.81 217.5 1458.33 222.936 1146.85 212.712Z" fill="white"/>
    </svg>
  </div>
</section>

<div class="h-24 w-full md:hidden"/>


<style>

.custom-shape-divider-bottom-1688501387 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1688501387 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 224px;
}

.rotate-y {
  transform: rotateY(180deg);
}

</style>