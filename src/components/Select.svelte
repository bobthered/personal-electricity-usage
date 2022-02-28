<!-- TODO convert to Listbox style -->
<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { Icon, ChevronDown } from 'svelte-hero-icons';

  // props (external)
  export let options = [];
  export let value = '';
</script>

<div class="relative flex">
  <select
    bind:value
    class={twMerge(
      'bg-transparent appearance-none rounded px-[1rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-gray-500 hover:ring-offset-green-500 focus:ring-offset-green-500 cursor-pointer w-full focus:ring-green-500/[.3]',
      $$props.class,
    )}
  >
    {#each options as option}
      <option class="bg-gray-900 py-[.5rem]" selected={options.value === value} value={option.value}
        >{option.value}</option
      >
    {/each}
  </select>
  <Icon
    src={ChevronDown}
    class="w-[1rem] h-[1rem] pointer-events-none absolute right-[.5rem] top-1/2 transform translate-y-[-50%]"
  />
</div>
