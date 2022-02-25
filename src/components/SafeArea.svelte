<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<div class={twMerge('safe-area flex flex-col', $$props.class)}>
  <slot />
</div>