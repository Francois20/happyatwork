<script>
	import { onMount } from "svelte";
	import PortableText from "$lib/portableText/PortableText.svelte";
  export let data;
  const {formId, title, text} = data

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.defer = true;
    document.body.appendChild(script);
  })
</script>

<section class="flex flex-col lg:flex-row gap-16 xl:gap-24 bg-light py-12 lg:py-24 w-full md:px-md-padding xl:px-lg-padding">
  <div class="flex flex-1 flex-col px-sm-padding md:px-0">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-12 uppercase">{title}</h2>
    <PortableText data={text} />
  </div>
  <div class="flex flex-1">
    <div class="bg-marine shadow-xl md:rounded-xl md:w-[420px] xl:w-[530px] h-auto px-6 md:px-12 py-8">
      <div
        class="pipedriveWebForms"
        data-pd-webforms={`https://webforms.pipedrive.com/f/${formId}`}
      />
    </div>
  </div>
</section>
