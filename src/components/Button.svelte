<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { typeAction } from '@actions';

  // props (external)
  export let type = 'button'
</script>

<button 
  class={twMerge('bg-green-500 hover:bg-green-600 focus:bg-green-600 px-[1rem] py-[.5rem] rounded text-white transition duration-200 outline-none ring ring-transparent focus:ring-green-500/30', $$props.class)}
  on:click
  use:typeAction={type}
>
  <slot />
</button>