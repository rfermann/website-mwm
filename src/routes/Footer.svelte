<script lang="ts">
	import FacebookIcon from '@lucide/svelte/icons/facebook';
	import InstagramIcon from '@lucide/svelte/icons/instagram';
	import LeafIcon from '@lucide/svelte/icons/leaf';
	import MapPinIcon from '@lucide/svelte/icons/map-pin-check';
	import TwitterIcon from '@lucide/svelte/icons/twitter';
	import {
		NAV_LINKS,
		OPENING_HOURS,
		SERVICES,
		SITE_NAME,
		SOCIAL_MEDIA_LINKS
	} from '../lib/constants';

	// Platzhalter für Öffnungszeiten und Leistungen
	const openingHours = [
		{ day: 'Montag - Freitag', hours: '10:00 - 19:00' },
		{ day: 'Samstag', hours: '10:00 - 16:00' },
		{ day: 'Sonntag', hours: 'Geschlossen' }
	];

	const services = [
		'Traditionelle Thai Massage',
		'Öl Massage',
		'Fußreflexzonen Massage',
		'Kräuterstempel Massage'
	];
</script>

<footer class="bg-gray-900 pt-16 pb-8 text-white">
	<div class="container mx-auto px-4 md:px-6">
		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="mb-4 flex items-center">
					<LeafIcon class="text-primary-500 mr-2 h-8 w-8" />
					<span class="font-playfair text-2xl font-bold">{SITE_NAME}</span>
				</div>
				<p class="mb-6 text-gray-400">
					Authentische Thai-Massage und Wellness im Herzen Nürnbergs. Erleben Sie traditionelle
					Wellness-Techniken in modernem, ruhigem Ambiente.
				</p>
				<div class="flex gap-2">
					<a href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" rel="noopener noreferrer">
						<FacebookIcon />
					</a>
					<a href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer">
						<InstagramIcon />
					</a>
					<a href={SOCIAL_MEDIA_LINKS.twitter} target="_blank" rel="noopener noreferrer">
						<TwitterIcon />
					</a>
					<a href={SOCIAL_MEDIA_LINKS.google} target="_blank" rel="noopener noreferrer">
						<MapPinIcon />
					</a>
				</div>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2">
					{#each NAV_LINKS as link}
						<li>
							<a
								href={link.href}
								class="text-gray-400 transition-colors duration-300 hover:text-white"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-semibold">Services</h3>
				<ul class="space-y-2">
					{#each SERVICES as link}
						<li>
							<a
								href="#{link.id}"
								class="text-gray-400 transition-colors duration-300 hover:text-white"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-lg font-semibold">Opening Hours</h3>
				<ul class="space-y-2 text-gray-400">
					{#each OPENING_HOURS as openingHours}
						<li class="flex justify-between">
							<span>{openingHours.day}:</span>
							<span>{openingHours.hours}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
			<p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
			<br />
			<div class="flex justify-center space-x-4">
				<p><a href="/impressum">Impressum</a></p>
				<p><a href="/datenschutz">Datenschutz</a></p>
			</div>
		</div>
	</div>
</footer>
