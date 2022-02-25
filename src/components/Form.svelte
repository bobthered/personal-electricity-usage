<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<form 
  class={twMerge('flex flex-col space-y-[1rem]', $$props.class)}
  on:submit
>
  <slot />
</form>