<script>
	import { page } from '$app/state';
	import { NAV_LINKS, SITE_NAME } from '$lib/constants';
	import { MenuIcon, XIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let showBanner = $state(false);

	const getCookie = (name) => {
		if (typeof document === 'undefined') return null;
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
		return null;
	};

	const setCookie = (name, value, days) => {
		if (typeof document === 'undefined') return;

		// Calculate expiration: 7 days from now OR April 1st, 2026, whichever is sooner
		const sevenDaysFromNow = new Date();
		sevenDaysFromNow.setTime(sevenDaysFromNow.getTime() + days * 24 * 60 * 60 * 1000);

		const aprilFirst2026 = new Date('2026-04-01T00:00:00');
		const expires = sevenDaysFromNow < aprilFirst2026 ? sevenDaysFromNow : aprilFirst2026;

		document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
	};

	const checkBannerStatus = () => {
		if (typeof window === 'undefined') return true;

		// Check if current date is before April 1st, 2026
		const currentDate = new Date();
		const expirationDate = new Date('2026-04-01T00:00:00');
		if (currentDate >= expirationDate) return false;

		// Check if user closed the banner
		const bannerClosed = getCookie('bannerClosed');
		return bannerClosed !== 'true';
	};

	const closeBanner = () => {
		showBanner = false;
		setCookie('bannerClosed', 'true', 7); //
	};

	onMount(() => {
		showBanner = checkBannerStatus();
		console.log(showBanner);

		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-primary-300 shadow-md'
		: page.route.id !== '/'
			? 'bg-primary-300 shadow-md'
			: 'bg-transparent'}"
>
	{#if showBanner}
		<div
			class="bg-primary-500 relative py-2 text-center text-white"
			transition:slide={{ duration: 300 }}
		>
			<button
				onclick={closeBanner}
				class="absolute top-2 right-4 text-white transition-colors duration-200 hover:text-gray-200"
				aria-label="Promotion schließen"
			>
				<svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor">
					<path
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					/>
				</svg>
			</button>
			<div class="container mx-auto flex flex-col gap-2">
				<p class="mb-2 text-xl font-medium">
					🌟 Stille Luxusmomente — 20% RABATT auf Massagen ab 60 Min 🌟
				</p>
				<p class="font-medium">
					Botanisches Premium-Erlebnis — Thai, Wellness oder Sportmassage mit warmem Öl, beheiztem
					Raum und Kerzenambiente.
				</p>
				<p class="font-medium">
					Jetzt per WhatsApp buchen: <a
						href="https://wa.me/4915901413451"
						class="text-white underline">+49 159 014 134 51</a
					>
					— Antwort in Kürze
					<br />
				</p>
				<p class="text-sm font-medium">Keine Anrufe während der Massage. Gültig bis 31. März</p>
			</div>
		</div>
	{/if}

	<div class="container mx-auto flex items-center justify-between px-4 py-6 md:px-6">
		<a
			href="/"
			class="hover:text-primary-500 font-serif text-2xl font-bold transition-colors duration-300 md:text-3xl {isScrolled
				? 'text-primary-800'
				: page.route.id !== '/'
					? 'text-primary-800'
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
										? 'bg-primary-700 text-white'
										: 'bg-white  text-primary-700'}">{link.name}</button
								>
							</li> -->
					{:else}
						<li>
							<a
								href={link.href}
								class="hover:text-primary-500 text-sm font-medium transition-colors duration-300 {isScrolled
									? 'text-primary-800'
									: page.route.id !== '/'
										? 'text-primary-800'
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
						<XIcon class={isScrolled ? 'text-primary-800' : 'text-white'} />
					</div>
				{:else}
					<div
						transition:fade={{ duration: 200 }}
						class="absolute inset-0 items-center justify-center"
					>
						<MenuIcon class={isScrolled ? 'text-primary-800' : 'text-white'} />
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
							class="text-primary-800 hover:text-primary-600 block {link.cta
								? 'text-primary-700 font-bold'
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
