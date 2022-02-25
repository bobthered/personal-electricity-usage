<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<div
  class={twMerge(
    'rounded-[1rem] flex flex-col bg-gray-900 p-[1.5rem] ring-1 ring-white/[.1]',
    $$props.class,
  )}
>
  <slot />
</div>
