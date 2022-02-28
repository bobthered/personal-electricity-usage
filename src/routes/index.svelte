<script>
  // imports
  import moment from 'moment';
  import { onMount } from 'svelte';
  import { Plus, X } from 'svelte-hero-icons';
  import {
    Button,
    Card,
    Chart,
    Fieldset,
    Form,
    Icon,
    Input,
    Modal,
    OverflowContainer,
    Overlay,
    SafeArea,
    Select,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '@components';

  // handlers
  const post = async () => {
    // initiate body
    const body = { charge, month, usage, waterHeater, year };

    // initiate fetch options
    const options = {
      body: JSON.stringify(body),
      method: 'POST',
    };

    // send fetch
    await fetch('./api', options);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // post to ./api endpoint
    await post();

    // toggle modal
    toggleModal();
  };
  const toggleModal = () => (show = !show);

  // utilities
  const mapDocs = (row, i, arr) => {
    row.rolling12MonthUsage =
      i < 11
        ? undefined
        : [...arr]
            .filter((_, j) => i - j >= 0 && j > i - 12)
            .reduce((acc, cur) => acc + +cur.usage, 0);
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
  let charge = '0.00';
  const columns = [
    'Month',
    'Year',
    'Usage (kWh)',
    'Charge',
    'Water Heater',
    'Rolling 12 Month Usage (kWh)',
  ];
  const currency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });
  let docs = [];
  let month = moment().format('M');
  let show = false;
  let usage = 0;
  let waterHeater = 'Electric Heat Pump - 2020';
  let waterHeaterOptions = [
    { label: 'Electric - 1995', value: 'Electric - 1995' },
    { label: 'Electric Heat Pump - 2020', value: 'Electric Heat Pump - 2020' },
  ];
  let year = moment().format('YYYY');

  // props (dynamic)
  $: rows = [...docs].sort(sortDocs).map(mapDocs);

  // lifecycle
  onMount(async () => {
    const response = await fetch('./api');
    const data = await response.json();
    docs = data.docs;
  });
</script>

<svelte:head>
  <title>Personal Electricy Usage</title>
</svelte:head>

<SafeArea class="relative p-[1rem]">
  <OverflowContainer class="pb-[3.5rem]">
    <Table>
      <Thead>
        {#each columns as column}
          <Th>{column}</Th>
        {/each}
      </Thead>
      <Tbody>
        {#each rows as row, i}
          <Tr>
            <Td class="text-right">{row.month}</Td>
            <Td class="text-right">{row.year}</Td>
            <Td class="text-right">{(+row.usage).toLocaleString('en-US')}</Td>
            <Td class="text-right">{currency.format(row.charge)}</Td>
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

  <Button class="absolute bottom-[1rem] right-[1rem] p-[1rem] rounded-full" on:click={toggleModal}>
    <Icon src={Plus} />
  </Button>
</SafeArea>

<Modal bind:show class="p-[1rem]">
  <Overlay on:click={toggleModal} />
  <Card
    class="relative transition duration-500 w-full max-w-md transform {show
      ? 'scale-[1]'
      : 'scale-[.975]'}"
  >
    <div class="flex justify-between items-center mb-[1rem]">
      <h6 class="font-bold text-[1.5rem]">Add Data</h6>
      <Button
        class="bg-transparent hover:bg-transparent focus:bg-transparent px-0 py-0 focus:ring-white/30"
        on:click={toggleModal}
      >
        <Icon src={X} />
      </Button>
    </div>
    <Form on:submit={submitHandler}>
      <Fieldset legend="Month">
        <Input bind:value={month} class="text-right" max="12" min="1" type="number" />
      </Fieldset>
      <Fieldset legend="Year">
        <Input bind:value={year} class="text-right" type="number" />
      </Fieldset>
      <Fieldset legend="Usage (kWh)">
        <Input bind:value={usage} class="text-right" type="number" />
      </Fieldset>
      <Fieldset legend="Charge">
        <Input bind:value={charge} class="text-right" step="0.01" type="number" />
      </Fieldset>
      <Fieldset legend="Water Heater Heater">
        <Select bind:value={waterHeater} options={waterHeaterOptions} />
      </Fieldset>
      <Button type="submit">Submit</Button>
    </Form>
  </Card>
</Modal>
