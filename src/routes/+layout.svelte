<script>
  import "../app.css";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
  export let data;

  $: navigation = data.navigation
  $: footer = data.footer

</script>

<div class="app relative">
	<Header data={navigation} />

	<main class="flex flex-col items-center overflow-x-hidden">
		<slot />
	</main>

	<Footer data={footer} />
</div>

