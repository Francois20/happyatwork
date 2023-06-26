<script>
  import Image from '$lib/components/Image.svelte';
  export let author, publishedAt, vertical, style
</script>

<div class="flex items-center mb-4 md:mb-0 {vertical ? 'md:flex-col md:items-start' : ''} {style && style}">
  <Image 
    imageStyle="object-cover rounded-full shadow-xl h-12 min-h-12 w-12 min-w-12 md:h-16 md:w-16 {vertical && 'md:mb-4'}"
    source={author.image}
    width={{ mobile: 64, tablet: 116, desktop: 116 }}
  />
  <div class="flex flex-col text-sm ml-4  {vertical ? 'md:ml-0' : ''}">
    <span>{author.name}</span>
    <span>{publishedAt}</span>
  </div>
</div>