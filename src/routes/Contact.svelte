<script>
	import { CONTACT_INFO, OPENING_HOURS } from '$lib/constants';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';

	let mapConsent = $state(false);
</script>

<section id="contact" class="bg-white py-16 md:py-24">
	<div class="container mx-auto px-4 md:px-6">
		<div class="mb-16 text-center">
			<h2 class="mt-12 mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
				Besuche uns
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Wir befinden uns in günstiger Lage im Herzen Nürnbergs.
			</p>
			<p class="mx-auto max-w-xl text-gray-600">
				Bitte reserviere deinen Platz für das beste Erlebnis.
			</p>
			<p class="mx-auto max-w-xl text-gray-600">Wir freuen uns über Voranmeldungen.</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
			<div>
				<div class="mb-8 rounded-lg bg-gray-50 p-6 shadow-sm md:p-8">
					<h3 class="mb-6 font-serif text-xl font-bold text-gray-900">Kontakt-Informationen</h3>

					<div class="space-y-6">
						<div class="flex items-start">
							<MapPinIcon class="text-primary-800 mr-4 h-6 w-6 flex-shrink-0" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Adresse</p>
								<p class="text-gray-600">{CONTACT_INFO.address}</p>
							</div>
						</div>

						<div class="flex items-start">
							<PhoneIcon class="text-primary-800 mr-4 h-6 w-6 flex-shrink-0" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Telefon</p>
								<p class="text-gray-600">
									<a href="tel:{CONTACT_INFO.phone}" class="text-gray-600 underline"
										>{CONTACT_INFO.phone}</a
									>
								</p>
							</div>
						</div>

						<div class="flex items-start">
							<MailIcon class="text-primary-800 mr-4 h-6 w-6 flex-shrink-0" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Email</p>
								<p class="text-gray-600">
									<a href="mailto:{CONTACT_INFO.email}" class="text-gray-600 underline"
										>{CONTACT_INFO.email}</a
									>
								</p>
							</div>
						</div>

						<div class="flex items-start">
							<ClockIcon class="text-primary-800 mr-4 h-6 w-6 flex-shrink-0" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Öffnungszeiten</p>
								<ul class="space-y-1 text-gray-600">
									{#each OPENING_HOURS as openingHours}
										<li class="grid grid-cols-2 gap-3">
											<span>{openingHours.day}:</span>
											<span>{openingHours.hours}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-primary-300 border-primary-400 rounded-lg border p-6 md:p-8">
					<h3 class="mb-4 font-serif text-xl font-bold text-gray-900">Buche deinen Besuch</h3>
					<p class="mb-6 text-gray-700">
						Bist du bereit für authentische Thai-Massagen und Wellnessanwendungen? Buche deinen
						Termin online oder kontaktiere uns direkt.
					</p>
					<p
						class="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800"
					>
						Wichtiger Hinweis: Wir bieten bei M Wellness & Massage ausschließlich qualifizierte
						Massagen an, KEINE EROTISCHEN Dienstleistungen.
					</p>
					<div class="flex flex-col gap-4 sm:flex-row">
						<!-- TODO: replace button after booking service has been added -->
						<!-- <a
							href="#booking"
							class="rounded-md bg-primary-700 px-6 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-primary-800"
						>
							Jetzt online buchen
						</a> -->
						<a
							href="https://wa.me/{CONTACT_INFO.phone.replace(/\s/g, '')}"
							class="bg-primary-700 hover:bg-primary-800 rounded-md px-6 py-3 text-center font-medium text-white transition-colors duration-300"
						>
							Jetzt buchen
						</a>
						<a
							href="tel:{CONTACT_INFO.phone.replace(/\s/g, '')}"
							class="border-primary-600 text-primary-700 hover:bg-primary-300 rounded-md border bg-white px-6 py-3 text-center font-medium transition-colors duration-300"
						>
							Rufe uns an
						</a>
					</div>
				</div>
			</div>

			{#if !mapConsent}
				<div
					class="flex h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center md:h-[500px]"
				>
					<h3 class="mb-4 font-serif text-xl font-medium text-gray-900">
						Kartenansicht aktivieren
					</h3>
					<p class="mb-6 max-w-md text-gray-600">
						Um die Kartenansicht zu sehen, müssen Sie der Nutzung von Google Maps zustimmen.
					</p>
					<button
						onclick={() => (mapConsent = true)}
						class="bg-primary-700 hover:bg-primary-800 rounded-md px-6 py-3 font-medium text-white transition-colors duration-300"
					>
						Karte anzeigen
					</button>
				</div>
			{:else}
				<div class="h-[400px] overflow-hidden rounded-lg shadow-md md:h-[500px]">
					<iframe
						src={CONTACT_INFO.mapUrl}
						class="h-full w-full border-0"
						allowfullscreen
						loading="lazy"
						title="Location map"
					></iframe>
				</div>
			{/if}
		</div>
	</div>
</section>
