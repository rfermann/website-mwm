<script lang="ts">
	import { CONTACT_INFO, SERVICES } from '$lib/constants';
</script>

<section id="services" class="bg-gray-50 py-16 md:py-24">
	<div class="container mx-auto px-4 md:px-6">
		<div class="mb-16 text-center">
			<h2 class="mt-12 mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
				Unsere Wellness-Dienstleistungen
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				<!-- Experience authentic Thai massage techniques and wellness treatments delivered by our
				skilled therapists in a tranquil environment. -->
				Exquisite Botanische Thai- & Wellnessmassage — Premium, Ruhige Erholung
			</p>
			<br />
			<p class="mx-auto max-w-2xl text-gray-600 italic">
				Erlebe eine luxuriöse, botanisch inspirierte Massage-Erfahrung: traditionelle Thai-Techniken
				vereint mit feinen Wellness- und Sportmassage-Elementen — ausgeführt von erfahrenen
				Massage-Spezialisten in einem warmen, kerzenbeleuchteten Raum. Wir setzen auf sorgfältig
				ausgewählte botanische Öle, dezente Düfte und individuell abgestimmten Druck, damit du dich
				rundum betreut und entspannt fühlst. Für Reisende und Einheimische, die hohe Ansprüche an
				Ruhe, Diskretion und Qualität stellen — nicht vergleichbar mit gewöhnlichen Thai-Massagen.
			</p>
		</div>

		<div
			class="grid auto-rows-fr grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
		>
			{#each SERVICES as service, index (service.id)}
				<div
					class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 {index >=
						Math.floor(SERVICES.length / 3) * 3 && SERVICES.length % 3 === 1
						? 'lg:col-start-2'
						: ''}"
				>
					<div class="h-64 overflow-hidden">
						<img
							src={service.image}
							alt={service.name}
							class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						/>
					</div>
					<div class="flex flex-grow flex-col justify-between p-6">
						<div>
							<h3 class="mb-2 font-serif text-xl font-bold text-gray-900">
								{service.name}
							</h3>
							<p class="mb-4 min-h-[80px] text-gray-600">
								{service.description}
							</p>
						</div>
						<div class="flex items-center justify-between">
							<div>
								<p>
									<span class="text-primary-700 text-lg font-bold">{service.price_1} €</span>
									<span class="text-gray-500">/ {service.duration_1} min</span>
								</p>
								{#if service.price_2}
									<p>
										<span class="text-primary-700 text-lg font-bold">{service.price_2} €</span>
										<span class="text-gray-500">/ {service.duration_2} min</span>
									</p>
								{/if}
								{#if service.price_3}
									<p>
										<span class="text-primary-700 text-lg font-bold">{service.price_3} €</span>
										<span class="text-gray-500">/ {service.duration_3} min</span>
									</p>
								{/if}
								{#if service.note}
									<p class="text-sm">({service.note})</p>
								{/if}
							</div>
							<!-- TODO: replace button after booking service has been added -->
							<!-- <a
								href="#booking"
								class="rounded bg-primary-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-800"
							>
								Book Now
							</a> -->
							<a
								href="https://wa.me/{CONTACT_INFO.phone.replace(/\s/g, '')}"
								class="bg-primary-700 hover:bg-primary-800 rounded px-4 py-2 text-sm font-medium text-white transition-colors duration-300"
							>
								Jetzt buchen
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
