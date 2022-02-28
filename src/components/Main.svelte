<script>
  // imports
  import { twMerge } from 'tailwind-merge';
</script>

<main
  class={twMerge(
    'flex flex-col h-screen relative overflow-hidden lg:flex-row-reverse',
    $$props.class,
  )}
>
  <slot />
</main>
