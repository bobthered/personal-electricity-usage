<script>
  // imports
  import { twMerge } from 'tailwind-merge';

  // props (external)
  export let show = false;
</script>

<div
  class={twMerge(
    'fixed z-[1] top-0 left-0 h-full w-full transition duration-200 flex items-center justify-center',
    show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    $$props.class,
  )}
>
  <slot />
</div>
