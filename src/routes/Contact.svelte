<script>
	import { CONTACT_INFO, OPENING_HOURS } from '$lib/constants';
	import { m } from '$lib/paraglide/messages';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';
</script>

<section id="contact" class="bg-white py-16 md:py-24">
	<div class="container mx-auto px-4 md:px-6">
		<div class="mb-16 text-center">
			<h2 class="mt-12 mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
				{m.bland_mad_quail_commend()}
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
							<MapPinIcon class="mr-4 h-6 w-6 flex-shrink-0 text-emerald-700" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Adresse</p>
								<p class="text-gray-600">{CONTACT_INFO.address}</p>
							</div>
						</div>

						<div class="flex items-start">
							<PhoneIcon class="mr-4 h-6 w-6 flex-shrink-0 text-emerald-700" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Telefon</p>
								<p class="text-gray-600">{CONTACT_INFO.phone}</p>
							</div>
						</div>

						<div class="flex items-start">
							<MailIcon class="mr-4 h-6 w-6 flex-shrink-0 text-emerald-700" />
							<div>
								<p class="mb-1 font-medium text-gray-900">Email</p>
								<p class="text-gray-600">{CONTACT_INFO.email}</p>
							</div>
						</div>

						<div class="flex items-start">
							<ClockIcon class="mr-4 h-6 w-6 flex-shrink-0 text-emerald-700" />
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

				<div class="rounded-lg border border-emerald-100 bg-emerald-50 p-6 md:p-8">
					<h3 class="mb-4 font-serif text-xl font-bold text-gray-900">Buche deinen Besuch</h3>
					<p class="mb-6 text-gray-700">
						Bist du bereit für authentische Thai-Massagen und Wellnessbehandlungen? Buche deinen
						Termin online oder kontaktiere uns direkt.
					</p>
					<div class="flex flex-col gap-4 sm:flex-row">
						<!-- TODO: replace button after booking service has been added -->
						<!-- <a
							href="#booking"
							class="rounded-md bg-emerald-700 px-6 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-emerald-800"
						>
							Jetzt online buchen
						</a> -->
						<a
							href="https://wa.me/{CONTACT_INFO.phone.replace(/\s/g, '')}"
							class="rounded-md bg-emerald-700 px-6 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-emerald-800"
						>
							Jetzt buchen
						</a>
						<a
							href="tel:{CONTACT_INFO.phone.replace(/\s/g, '')}"
							class="rounded-md border border-emerald-600 bg-white px-6 py-3 text-center font-medium text-emerald-700 transition-colors duration-300 hover:bg-emerald-50"
						>
							Rufe uns an
						</a>
					</div>
				</div>
			</div>

			<div class="h-[400px] overflow-hidden rounded-lg shadow-md md:h-[500px]">
				<iframe
					src={CONTACT_INFO.mapUrl}
					class="h-full w-full border-0"
					allowfullscreen
					loading="lazy"
					title="Location map"
				></iframe>
			</div>
		</div>
	</div>
</section>
