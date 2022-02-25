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
    'bg-transparent appearance-none rounded px-[1rem] py-[.5rem] transition duration-200 outline-none ring ring-transparent ring-offset-1 ring-offset-white/[.3] focus:ring-offset-green-500',
    $$props.class,
  )}
  {placeholder}
  use:typeAction={type}
/>
