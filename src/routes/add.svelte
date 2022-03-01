<script>
  // imports
  import moment from 'moment';
  import { X } from 'svelte-hero-icons';
  import { Button, Card, Fieldset, Form, H6, Icon, Input, Modal, OverflowContainer, Overlay, Select } from '@components';
  import { data } from '@stores';

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
    const response = await fetch('./api', options);
    const { doc } = await response.json();

    // update store
    $data = [...$data, doc]
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // post to ./api endpoint
    await post();

    // toggle modal
    toggleModal();
  };

  // utilities
  const toggleModal = () => show = !show;

  // props (internal)
  let charge = '0.00';
  let month = moment().format('M');
  let show = false;
  let usage = 0;
  let waterHeater = 'Electric Heat Pump - 2020';
  let waterHeaterOptions = [
    { label: 'Electric - 1995', value: 'Electric - 1995' },
    { label: 'Electric Heat Pump - 2020', value: 'Electric Heat Pump - 2020' },
  ];
  let year = moment().format('YYYY');
</script>

<OverflowContainer class="flex flex-col p-[1rem] flex-grow max-w-lg">
  <div class="flex justify-between items-center mb-[1rem]">
    <H6>Add Data</H6>
  </div>
  <Form class="flex-grow" on:submit={submitHandler}>
    <div class="flex flex-col flex-grow space-y-[1rem] lg:flex-grow-0">
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
      <Fieldset legend="Water Heater">
        <Select bind:value={waterHeater} options={waterHeaterOptions} />
      </Fieldset>
    </div>
    <Button type="submit">Submit</Button>
  </Form>
</OverflowContainer>

<Modal class="p-[1rem]" {show}>
  <Overlay on:click={toggleModal} />
  <Card class="relative w-full items-center max-w-lg">
    <div class="flex justify-end items-center w-full">
      <Button class='px-[.5rem] bg-transparent hover:bg-transparent focus:bg-transparent focus:ring-white/30' on:click={toggleModal}><Icon src={X} /></Button>
    </div>
    <H6>Successfully added data!</H6>
    <div class="flex space-x-[1rem] mt-[2rem] w-full justify-end">
      <Button class="flex-grow lg:flex-grow-0" on:click={toggleModal}>Continue</Button>
    </div>
  </Card>
</Modal>