<script>
  export let data, small;
  const { type, internalLink, externalLink } = data;

  const url = type === 'internal' ? internalLink.lang + '/' + internalLink.slug : externalLink;
</script>

<a href={url} alt={data.title}>
  <button class='bg-blue {small ? 'w-20 h-20' : 'w-36 h-24'} group-hover:bg-green duration-200 rounded-full text-light flex items-center justify-center'>
    <span class='{small ? 'leading-5 text-base' : 'leading-6 text-xl'} uppercase font-semibold w-32'>
      {data.title}
    </span>
  </button>
</a>
