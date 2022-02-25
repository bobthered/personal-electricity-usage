<script>
  // imports
  import { twMerge } from 'tailwind-merge';

  // props (external)
  export let legend = '';
</script>

<fieldset class={twMerge('flex flex-col', $$props.class)}>
  <legend>{legend}</legend>
  <slot />
</fieldset>