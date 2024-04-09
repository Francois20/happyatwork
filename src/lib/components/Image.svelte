<script>
  import { urlFor } from "../../sanityClient";
  export let width, height = undefined, source, style = '', imageStyle = '', alt = null;
</script>

<picture class="flex items-center {style}">
	<source
		srcSet={urlFor(source)
			.width(width && width.mobile)
			.height(height && height.mobile)
			.url()}
		alt={source.alt}
		media="(max-width:425px)"
	/>
	<source
		srcSet={urlFor(source)
			.width(width && width.tablet)
			.height(height && height.tablet)
			.url()}
		alt={source.alt}
		media="(max-width:1023px)"
	/>
	<img
		src={urlFor(source)
			.width(width && width.desktop)
			.height(height && height.desktop)
			.url()}
		alt={alt ? alt : source.alt}
    class={imageStyle}
	/>
</picture>
