<script>
  import { PortableText } from '@portabletext/svelte';
  import PortableLink from './PortableLink.svelte';
  import PortableParagraph from './PortableParagraph.svelte';
  import PortableBulletList from './PortableBulletList.svelte';
  import PortableNumberList from './PortableNumberList.svelte';
  import PortableImage from './PortableImage.svelte';
  import PortableHeading from './PortableHeading.svelte';

  export let data
</script>

<PortableText
  value={data}
  components={{
    types: {
      image: PortableImage,
    },
    block: {
      normal: PortableParagraph,
      h1: PortableHeading,
      h2: PortableHeading,
      h3: PortableHeading,
    },
    marks: {
      internalLink: PortableLink,
      link: PortableLink,
    },
    list: {
      bullet: PortableBulletList,
      number: PortableNumberList,
    },
  }}
/>