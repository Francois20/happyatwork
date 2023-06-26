<script>
  import { page } from '$app/stores';
  import Image from "$lib/components/Image.svelte"
  const {title, heading, text, buttonText, image} = $page.data.error

</script>

<section class="bg-light pt-24 lg:pt-52 pb-12 lg:pb-24 flex flex-col lg:flex-row-reverse items-center px-sm-padding md:px-md-padding xl:px-lg-padding">
  <Image 
    imageStyle="md:w-[500px]"
    source={image}
    width={{ mobile: 280, tablet: 300, desktop: 500 }}
  />
  <div class="text-center flex flex-col items-center">
    <h1 class="text-5xl md:text-5xl lg:text-8xl xl:text-9xl font-extrabold uppercase mb-8">{title}</h1>
    <p class="text-xl md:text-xl lg:text-2xl font-bold uppercase mb-2 lg:mb-6">{heading}</p>
    <p class="lg:w-2/3">{text}</p>

    <a href="/" class='bg-blue text-light w-max text-sm md:text-base h-10 md:h-14 rounded-full flex items-center justify-center px-8 md:px-12 mt-8 lg:mt-12 uppercase font-semibold tracking-widest'>
      {buttonText}
    </a>
  </div>
</section>
