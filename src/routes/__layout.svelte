<script>
  // imports
  import { Main, Nav } from '@components';
  import '../app.css';
</script>

<Main>
  <div class="flex flex-col flex-grow safe-area overflow-hidden">
    <div class="flex flex-col flex-grow overflow-y-auto">
      <slot />
    </div>
  </div>
  <Nav />
</Main>
