<script>
  // imports
  import moment from 'moment';
  import { Button, Fieldset, Form, Input, Select } from '@components';
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
    await fetch('./api', options);

    // update store
    $data = [...$data, body]
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // post to ./api endpoint
    await post();
  };

  // props (internal)
  let charge = '0.00';
  let month = moment().format('M');
  let usage = 0;
  let waterHeater = 'Electric Heat Pump - 2020';
  let waterHeaterOptions = [
    { label: 'Electric - 1995', value: 'Electric - 1995' },
    { label: 'Electric Heat Pump - 2020', value: 'Electric Heat Pump - 2020' },
  ];
  let year = moment().format('YYYY');
</script>

<div class="flex flex-col p-[1rem] flex-grow max-w-lg">
  <div class="flex justify-between items-center mb-[1rem]">
    <h6 class="font-bold text-[1.5rem]">Add Data</h6>
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
</div>