<script>
  import Image from "$lib/components/Image.svelte";
  export let portableText
</script>

<Image
  style="w-full md:w-max my-8 md:my-12"
  imageStyle="rounded-xl shadow-xl"
  source={portableText.value.asset}
  width={{ mobile: 400, tablet: 500, desktop: 600 }}
/>