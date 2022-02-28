<script>
  // imports
  import {
    OverflowContainer,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '@components';
  import { data } from '@stores';

  // utilities
  const mapDocs = (row, i, arr) => {
    row.rolling12MonthUsage =
      i < 11
        ? undefined
        : [...arr]
            .filter((_, j) => i - j >= 0 && j > i - 12)
            .reduce((acc, cur) => acc + +cur.usage, 0);
    row.chargePerUsage = Math.round(row.charge * 100000 / row.usage) / 100000;
    return row;
  };
  const sortDocs = (a, b) => {
    if (+a.year < +b.year) return -1;
    if (+a.year > +b.year) return 1;
    if (+a.month < +b.month) return -1;
    if (+a.month > +b.month) return 1;
    return 0;
  };

  // props (internal)
  const columns = [
    'Month',
    'Year',
    'Usage (kWh)',
    'Charge',
    'Charge / Usage (kWh)',
    'Water Heater',
    'Rolling 12 Month Usage (kWh)',
  ];
  const currency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });

  // props (dynamic)
  $: rows = [...$data].sort(sortDocs).map(mapDocs);
</script>

<svelte:head>
  <title>Personal Electricy Usage</title>
</svelte:head>

<OverflowContainer class="p-[1rem]">
  <Table>
    <Thead>
      {#each columns as column}
        <Th class='top-[-1rem]'>{column}</Th>
      {/each}
    </Thead>
    <Tbody>
      {#each rows as row, i}
        <Tr>
          <Td class="text-right">{row.month}</Td>
          <Td class="text-right">{row.year}</Td>
          <Td class="text-right">{(+row.usage).toLocaleString('en-US')}</Td>
          <Td class="text-right">{currency.format(row.charge)}</Td>
          <Td class="text-right">${row.chargePerUsage}</Td>
          <Td>{row.waterHeater}</Td>
          <Td class="text-right">
            {row.rolling12MonthUsage === undefined
              ? 'N/A'
              : row.rolling12MonthUsage.toLocaleString('en-US')}
          </Td>
        </Tr>
      {/each}
    </Tbody>
  </Table>
</OverflowContainer>