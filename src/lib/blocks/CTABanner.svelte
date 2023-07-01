<script>
	import ButtonCircle from "../components/ButtonCircle.svelte";
  import { IconSend } from '@tabler/icons-svelte';
	import Button from "../components/Button.svelte";

  export let data;
  const {text1, text2, link} = data;
</script>

<section class="w-full flex justify-center px-sm-padding md:px-md-padding lg:px-0 my-12 md:my-16">
  <div class="relative group flex flex-col md:flex-row justify-center items-center bg-yellow h-[90vw] md:h-40 w-[90vw] md:w-max rounded-full md:pr-8 md:pl-0 overflow-hidden">
    <div class="hidden md:block rotate-45 -translate-x-10 translate-y-0.5">
      <IconSend size={240} stroke={0.8} color="#FED568" />
    </div>
    <div class="block md:hidden absolute rotate-45 -translate-x-20 translate-y-20">
      <IconSend size={360} stroke={0.5} color="#FED568" />
    </div>
    <div class="flex flex-col md:flex-row items-center z-10">
      <div class="flex flex-col items-center md:items-end mb-6 md:mb-0 md:mr-2 lg:mr-12 lg:ml-24 uppercase text-marine font-bold text-xl lg:text-2xl leading-6 md:leading-7">
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
    <Button data={link} />
    </div>
  </div>
</section>
