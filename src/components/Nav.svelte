<script>
  // imports
  import { Plus, PresentationChartLine, ViewList } from 'svelte-hero-icons';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  import { Icon } from '@components';

  // props (internal)
  const links = [
    { href: '/list', src: ViewList },
    { href: '/add', src: Plus },
    { href: '/chart', src: PresentationChartLine },
  ];

  // props (dynamic)
  $: currentTranslate = ['left-[16.67%] lg:left-auto lg:top-[16.67%]', 'left-[50%] lg:left-auto lg:top-[50%]', 'left-[83.33%] lg:left-auto lg:top-[83.33%]'][links.findIndex(item => item.href === $page.url.pathname)]
</script>

<nav class={twMerge('flex justify-start items-center bg-gray-800 text-gray-500 lg:flex-col', $$props.class)}>
  <div class="relative flex flex-grow justify-between lg:flex-col lg:flex-grow-0">
    <div class="absolute top-0 transform -translate-x-1/2 transition-all duration-200 h-[2px] bg-green-500 w-[3rem] lg:translate-x-0 lg:-translate-y-1/2 lg:h-[3rem] lg:w-[2px] lg:right-0 {currentTranslate}"/>
    {#each links as { href, src }}
      <a class="flex flex-col items-center p-[1rem] flex-grow lg:flex-grow-0 transition duration-200 hover:text-white {href === $page.url.pathname ? 'text-white' : ''}" {href}>
        <Icon class="w-[2rem] h-[2rem]" {src} />
      </a>
    {/each}
  </div>
</nav>
