<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<div class={twMerge('flex flex-col flex-grow safe-area pb-0 overflow-hidden', $$props.class)}>
  <slot />
</div>