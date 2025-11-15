<script>
	import { page } from '$app/state';
	import { NAV_LINKS, SITE_NAME } from '$lib/constants';
	import { MenuIcon, XIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);

	console.log();

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white shadow-md'
		: page.route.id !== '/'
			? 'bg-white shadow-md'
			: 'bg-transparent'}"
>
	<div class="relative bg-emerald-700 py-2 text-center text-white">
		<div class="container mx-auto px-4">
			<p class="font-medium">🌟 Willkommen bei M Wellness & Massage! 🌟</p>
			<p class="font-medium">
				Erleben Sie eine 90 min, Massage für nur ab 79 EUR! Gönnen Sie sich eine Auszeit mit warmen
				Handtüchern.
			</p>
			<p class="font-medium">
				Jetzt Termin sichern! Kontaktieren Sie uns unkompliziert über WhatsApp/SMS!
			</p>
		</div>
	</div>

	<div class="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
		<a
			href="/"
			class="font-serif text-2xl font-bold transition-colors duration-300 md:text-3xl {isScrolled
				? ''
				: page.route.id !== '/'
					? 'text-emerald-800'
					: 'text-white'}"
		>
			{SITE_NAME}
		</a>

		<nav class="hidden md:block">
			<ul class="flex items-center space-x-8">
				{#each NAV_LINKS as link}
					{#if link.cta}
						<!-- <li>
							<button
								class="rounded-md px-4 py-2 font-bold hover:opacity-90 {isScrolled
									? 'bg-emerald-700 text-white'
									: 'bg-white  text-emerald-700'}">{link.name}</button
							>
						</li> -->
					{:else}
						<li>
							<a
								href={link.href}
								class="text-sm font-medium transition-colors duration-300 hover:text-emerald-500 {isScrolled
									? 'text-gray-800'
									: page.route.id !== '/'
										? 'text-gray-800'
										: 'text-white'}"
							>
								{link.name}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>

		<button
			class="text-2xl focus:outline-none md:hidden"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			><div class="relative h-6 w-6">
				{#if isMobileMenuOpen}
					<div
						transition:fade={{ duration: 200 }}
						class="absolute inset-0 items-center justify-center"
					>
						<XIcon class={isScrolled ? 'text-gray-800' : 'text-white'} />
					</div>
				{:else}
					<div
						transition:fade={{ duration: 200 }}
						class="absolute inset-0 items-center justify-center"
					>
						<MenuIcon class={isScrolled ? 'text-gray-800' : 'text-white'} />
					</div>
				{/if}
			</div>
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="absolute top-full left-0 w-full origin-top bg-white/75 shadow-lg md:hidden"
			transition:slide={{ duration: 400 }}
		>
			<ul class="py-4">
				{#each NAV_LINKS as link, index (link.href)}
					<li class="px-6 py-2">
						<a
							href={link.href}
							class="block text-gray-800 hover:text-emerald-600 {link.cta
								? 'font-bold text-emerald-700'
								: ''}"
							onclick={() => (isMobileMenuOpen = false)}
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
