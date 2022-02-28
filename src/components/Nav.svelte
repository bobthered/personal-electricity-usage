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

  $:console.log($page.url.pathname)
</script>

<nav class={twMerge('flex justify-between items-center bg-gray-800 text-gray-500', $$props.class)}>
  {#each links as { href, src }}
    <a class="flex flex-col items-center p-[1rem] flex-grow relative {href === $page.url.pathname ? 'text-white' : ''}" {href}>
      <div class="absolute top-0 left-1/2 transform transition duration-200 h-[2px] bg-green-500 -translate-x-1/2 {href === $page.url.pathname ? 'w-[3rem]' : 'w-0'}"/>
      <Icon class="w-[2rem] h-[2rem]" {src} />
    </a>
  {/each}
</nav>
