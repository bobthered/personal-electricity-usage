<script>
  // imports
  import { twMerge } from 'tailwind-merge'
</script>

<h6 class={twMerge('font-bold text-[1.5rem]', $$props.class)}>
  <slot />
</h6>