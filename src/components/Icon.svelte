<script>
  // imports
  import { Icon } from 'svelte-hero-icons';
  import { twMerge } from 'tailwind-merge';

  // props (external)
  export let src;
</script>

<Icon {src} class={twMerge('w-[1.5rem] h-[1.5rem]', $$props.class)} />