<script>
  // imports
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('./list', {
      replaceState: true,
    });
  })
</script>

<slot />
