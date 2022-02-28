<script>
  // imports
  import { onMount } from 'svelte';
  import { Main, Nav } from '@components';
  import { data } from '@stores';
  import '../app.css';

  // lifecycle
  onMount(async () => {
    const response = await fetch('./api');
    const { docs } = await response.json();
    $data = docs;
  });
</script>

<Main>
  <div class="flex flex-col flex-grow safe-area pb-0 overflow-hidden">
    <div class="flex flex-col flex-grow overflow-hidden">
      <slot />
    </div>
  </div>
  <Nav />
</Main>
