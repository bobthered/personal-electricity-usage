<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<th class={twMerge("px-[1rem] py-[.5rem] border-b border-white whitespace-nowrap sticky top-0 bg-gray-900", $$props.class)}>
  <slot />
</th>