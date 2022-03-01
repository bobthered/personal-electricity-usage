<script>
  // imports
  import { Trash, X } from 'svelte-hero-icons';
  import {
    Button,
    Card,
    H6,
    Icon,
    Modal,
    OverflowContainer,
    Overlay,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '@components';
  import { data } from '@stores';

  // handlers
  const deleteHandler = async () => {
    // initiate body
    const body = { _id };

    // initiate fetch options
    const options = {
      body: JSON.stringify(body),
      method: 'DELETE'
    }

    // send fetch
    const response = await fetch('./api', options);
    const { doc } = await response.json();

    // update store
    $data = [...$data].filter(({_id}) => _id !== doc._id);

    // toggle modal
    toggleModal();
  }

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
  const toggleModal = () => show = !show;

  // props (internal)
  let _id = undefined;
  const columns = [
    '',
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
  let show = false;

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
          <Td class='px-0 py-0'><Button on:click={() => {_id = row._id; toggleModal()}} class='bg-transparent hover:bg-transparent focus:bg-transparent p-[.5rem] text-red-500 hover:text-red-600 focus:text-red-600 focus:ring-red-500/30'><Icon src={Trash} /></Button></Td>
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

<Modal class="p-[1rem]" {show}>
  <Overlay on:click={toggleModal} />
  <Card class="relative w-full items-center max-w-lg">
    <div class="flex justify-end items-center w-full">
      <Button class='px-[.5rem] bg-transparent hover:bg-transparent focus:bg-transparent focus:ring-white/30' on:click={toggleModal}><Icon src={X} /></Button>
    </div>
    <H6>Are you sure?</H6>
    <div class="flex space-x-[1rem] mt-[2rem] w-full">
      <Button on:click={toggleModal} class="flex-grow bg-transparent hover:bg-transparent focus:bg-transparent ring-offset-2 ring-offset-white">Cancel</Button>
      <Button on:click={deleteHandler} class="flex-grow bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-500/30">Delete</Button>
    </div>
  </Card>
</Modal>