<script>
  // imports
  import { Table, Th, Thead } from '@components';

  // props (internal)
  const columns = [
    'Date',
    'Usage (kWh)',
    'Charge',
  ]
</script>

<Table>
  <Thead>
    {#each columns as column}
      <Th>{column}</Th>
    {/each}
  </Thead>
</Table>