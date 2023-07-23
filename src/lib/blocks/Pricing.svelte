<script>
  import Button from "$lib/components/Button.svelte";
	import FilterTabs from "../components/FilterTabs.svelte";
  export let data;

  const {items, text, titleEmployees, titleMonthlyFee, titleStartFee} = data

  const prices = items.flatMap((element) => element.prices).flat(2)
  const sizes = prices.map(x => x.organizationSize.title)
  const uniqueSizes = [...new Set(sizes)];

  let currentOrganizationSize = uniqueSizes[0]

  const setNumberOfEmployees = (value) => {
    currentOrganizationSize = value
  }

</script>


<section class="flex flex-col items-center px-sm-padding md:px-md-padding xl:px-lg-padding pt-16 md:pt-32 pb-16 md:pb-32">
  <h3 class="text-2xl text-center md:text-3xl font-bold">{titleEmployees}</h3>
  <FilterTabs
    items={uniqueSizes}
    selectedItem={currentOrganizationSize}
    onClick={(item) => setNumberOfEmployees(item)}
  /> 

  <p class="max-w-4xl text-center">{text}</p>

  <div class="relative grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 max-w-content">
    {#each items as item}
      <div class="flex flex-col items-center bg-light rounded-xl shadow-xl pb-8">
        <div class="relative flex flex-col items-center bg-marine rounded-t-xl px-8 pt-12 pb-6 leading-7 text-light">
          <h3 style="color: {item.color.value};" class="leading-7 text-3xl font-bold uppercase mb-6">{item.title}</h3>
          <p class="text-center mb-10 h-[84px]">{item.description}</p>
          <span class="font-bold text-4xl lg:text-5xl mb-2">{item.prices.find(x => x.organizationSize.title === currentOrganizationSize).monthlyFee}</span>
          <span class="font-bold text-lg mb-2 text-center">{titleMonthlyFee}</span>
          <span class="font-bold text-sm">{item.prices.find(x => x.organizationSize.title === currentOrganizationSize).startFee} {titleStartFee}</span>
          <div class="custom-shape-divider-top-1682627523">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
          <div class="custom-shape-divider-top-1682627521">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={item.color.value}></path>
            </svg>
          </div>
        </div>
        <ul class="flex flex-col list-disc pl-10 pr-6 md:px-12 pb-24 pt-24 gap-4">
          {#each item.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
        <Button data={item.link} style="mb-0 mt-auto"/>
      </div>
    {/each}
  </div>
</section>

<style>

li::marker {
  color: '#003553';
  font-size: 1.5rem;
}

/* bottom */
.custom-shape-divider-top-1682627521 {
    position: absolute;
    bottom: -72px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    
}

.custom-shape-divider-top-1682627521 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 72px;
}


/* blue */
.custom-shape-divider-top-1682627523 {
    position: absolute;
    bottom: -56px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 5;
}

.custom-shape-divider-top-1682627523 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 56px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1682627523 .shape-fill {
    fill: #003553;
}

</style>
