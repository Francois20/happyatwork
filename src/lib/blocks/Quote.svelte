<script>
  export let data;
</script>

<section class="px-sm-padding md:px-md-padding xl:px-lg-padding w-full">
  <div class="flex flex-col py-12 lg:py-16">
    <p class="uppercase text-3xl md:text-4xl xl:text-6xl mb-8"> "{data.text}"</p>
    <span>{data.name}</span>
    <span>{data.title}</span>
    <span>{data.company}</span>
  </div>
</section>
