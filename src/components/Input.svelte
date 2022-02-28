<script>
  // imports
  import { twMerge } from 'tailwind-merge';
  import { typeAction } from '@actions';

  // props (external)
  export let placeholder = '';
  export let type = 'text';
  export let value = '';
</script>

<input
  {...$$props}
  bind:value
  class={twMerge(
    'bg-transparent appearance-none rounded px-[1rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-gray-500 hover:ring-offset-green-500 focus:ring-offset-green-500 focus:ring-green-500/[.3]',
    $$props.class,
  )}
  {placeholder}
  use:typeAction={type}
/>
