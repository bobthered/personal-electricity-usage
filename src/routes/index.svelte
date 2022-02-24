<script>
  // imports
  import moment from 'moment';
  import { onMount } from 'svelte';
  import { Icon, Plus } from 'svelte-hero-icons'
  import { OverflowContainer, Table, Th, Thead } from '@components';

  // handlers
  const toggleModal = () => showModal = !showModal;

  // props (internal)
  const columns = [
    'Month',
    'Year',
    'Usage (kWh)',
    'Charge',
  ]
  let docs = [];
  let month = moment().format('M');
  let showModal = false;

  // lifecycle
  onMount(async() => {
    const response = await fetch('./api');
    const data = await response.json();
    docs = data.docs;
  })
</script>

<svelte:head>
  <title>Personal Electricy Usage</title>
</svelte:head>

<OverflowContainer>
  <Table>
    <Thead>
      {#each columns as column}
        <Th>{column}</Th>
      {/each}
    </Thead>
  </Table>
</OverflowContainer>

<button 
  class="absolute bottom-[1rem] right-[1rem] p-[1rem] rounded-full bg-blue-500"
  on:click={toggleModal}
>
  <Icon src={Plus} class="w-[1.5rem] h-[1.5rem]" />
</button>

<div class="fixed top-0 left-0 h-full w-full transition duration-200 {showModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}">
  <div 
    class="absolute top-0 left-0 h-full w-full bg-black/90"
    on:click={toggleModal}
  />
  <form class="relative p-[1rem] flex flex-col space-y-[1rem]">
    <input class="bg-transparent appearance-none border-b border-white" type="number" min="1" max="12" bind:value={month} />
  </form>
</div>