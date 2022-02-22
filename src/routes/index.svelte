<script>
  // imports
  import { OverflowContainer, Table, Th, Thead } from '@components';

  // props (internal)
  const columns = [
    'Date',
    'Usage (kWh)',
    'Charge',
  ]
</script>

<OverflowContainer>
<Table>
  <Thead>
    {#each columns as column}
      <Th>{column}</Th>
    {/each}
  </Thead>
</Table>
</OverflowContainer>
