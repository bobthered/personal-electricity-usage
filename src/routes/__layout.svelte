<script>
  // imports
  import { onMount } from 'svelte';
  import { Main, Nav, SafeArea } from '@components';
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
  <SafeArea>
    <div class="flex flex-col flex-grow overflow-hidden">
      <slot />
    </div>
  </SafeArea>
  <Nav />
</Main>
