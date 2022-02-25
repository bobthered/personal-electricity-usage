<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<div 
  class={twMerge("absolute top-0 left-0 h-full w-full bg-black/30", $$props.class)} 
  on:click
  />
