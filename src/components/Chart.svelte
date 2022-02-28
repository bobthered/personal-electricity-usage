<script>
  // imports
  import { onMount } from 'svelte';
  import { chart } from 'svelte-apexcharts';
  import { twMerge } from 'tailwind-merge';

  // props (internal)
  let loaded = false;

  // props (external)
  export let colors = ['rgba(34,197,94,1)'];
  export let series = [];
  export let toolbar = {
    show: false
  };
  export let type = 'line';
  export let xaxis = {}

  // props (dynamic)
  $: options = {
    chart : {
      toolbar,
      type
    },
    colors,
    series,
    xaxis
  }

  // lifecycle
  onMount(() => {
    loaded = true;
  })
</script>

{#if loaded}
  <div use:chart={options} />
{/if}