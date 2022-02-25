<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<div class={twMerge("overflow-y-auto overflow-x-auto", $$props.class)}>
  <slot />
</div>