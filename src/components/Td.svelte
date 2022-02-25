<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<td class={twMerge("px-[1rem] py-[.5rem] border-b border-white/[.3] whitespace-nowrap", $$props.class)}>
  <slot />
</td>