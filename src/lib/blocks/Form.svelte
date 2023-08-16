<script>
  import PortableText from "$lib/portableText/PortableText.svelte";
	import { IconMailForward} from "@tabler/icons-svelte";
  import axios from 'axios';
  export let data;

  $: text = data.text
  $: title = data.title
  $: nameLabel = data.nameLabel
  $: emailLabel = data.emailLabel
  $: messageLabel = data.messageLabel
  $: submitText = data.submitText
  $: confirmationTitle = data.confirmationTitle
  $: confirmationText = data.confirmationText

  let name = ''
  let email = ''
  let message = ''
  let sentMessage = false

  const sendMessage = async () => {
    sentMessage = false
    const baseUrl = "https://prod-deprecated-api-haw.azurewebsites.net"
    try {
    const res = await axios.post(baseUrl + '/api/email/website', ''.concat(
        'Sender=',
        window.encodeURI(email),
        '&Name=',
        window.encodeURI(name),
        '&Subject=',
        window.encodeURI(message),
        '&Body=',
        window.encodeURI('')
    ), {
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    sentMessage = true
  } catch (e){
     console.log(e)
    };
  }

</script>

<section class="flex flex-col lg:flex-row flex-1 gap-16 px-0 lg:px-md-padding xl:px-lg-padding my-24 lg:my-40 max-w-content">
  <div class="px-sm-padding md:px-md-padding lg:px-0">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 uppercase">{title}</h2>
    <PortableText data={text}/>
  </div>
  
  {#if !sentMessage}
  <form on:submit|preventDefault={sendMessage} class="px-0 md:px-md-padding lg:px-0">
    <div class="w-full md:min-w-[540px] md:rounded-xl shadow-xl bg-marine py-12 px-sm-padding md:px-12">
      <div class="pb-4">
        <label class="font-semibold block text-light mb-2" for="name">{nameLabel}</label>
        <input class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 text-marine border border-marine p-4 rounded-full bg-light" id="name" placeholder={nameLabel} type="text" on:change={(e) => name = e.target.value} />
      </div>
      <div class="pb-4">
        <label class="font-semibold block text-light mb-2" for="email">{emailLabel}</label>
        <input class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 text-marine border border-marine p-4 rounded-full bg-light" id="email" placeholder={emailLabel} type="email" on:change={(e) => email = e.target.value}/>
      </div>
      <div class="pb-4">
        <label class="font-semibold block text-light mb-2" for="message">{messageLabel}</label>
        <textarea class="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 text-marine border border-marine p-4 rounded-xl bg-light" id="message" placeholder={messageLabel} rows={8} on:change={(e) => message = e.target.value}/>
      </div>
      <button class='bg-blue text-light text-sm md:text-base h-10 md:h-14 rounded-full flex items-center justify-center px-8 md:px-16 uppercase font-semibold tracking-widest mt-6'>
        {submitText}
      </button>
    </div>
  </form>
  {:else}
  <div class="flex justify-center items-center w-full md:min-w-[540px] h-[662px] lg:rounded-xl shadow-xl bg-marine py-16 px-sm-padding lg:px-8">
    <div class="flex flex-col justify-center items-center bg-light h-[380px] w-[380px] rounded-full">
      <IconMailForward size={82} stroke={1.3} color="#fac600"/>
      <p class="font-bold text-3xl uppercase">{confirmationTitle}</p>
      <p class="px-5 text-center">{confirmationText}</p>
    </div>
  </div>
  {/if}

</section>
