<script>
  // imports
  import { Chart } from '@components';
  import { data } from '@stores';

  // props (dynamic)
  $: options = {
    chart: {
      type: 'line'
    },
    colors: [
      '#22c55e'
    ],
    series: [
      { name: 'Usage', data: [...$data].map(({usage}) => +usage)},
      { name: 'Charge', data: [...$data].map(({charge}) => +charge)},
      { name: 'Charge / Usage', data: [...$data].map(({charge, usage}) => Math.round(charge * 100000 / usage) / 100000)},
      { name: 'Rolling 12 Month Usage', data: [...$data].map((row, i, arr) =>
        i < 11
          ? null
          : [...arr].filter((_, j) => i - j >= 0 && j > i - 12).reduce((acc, cur) => acc + +cur.usage, 0))},
    ],
    stroke: {
      curve: 'smooth',
      lineCap: 'round',
      width: 2
    },
    xaxis: {
      categories: [...$data].map(({month, year}) => `${month}/${year}`),
    }
  }
</script>

<div class="flex flex-col p-[1rem] flex-grow">
  <Chart {options} />
</div>