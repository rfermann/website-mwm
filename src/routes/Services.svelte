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
				Erlebe authentische Thai-Massagetechniken und Wellnessbehandlungen, die von unseren geschulten
				Therapeuten in einer ruhigen Umgebung durchgeführt werden.
			</p>
			<br />
			<p class="mx-auto max-w-2xl text-gray-600 italic">
				Bei M Wellness & Massage haben unsere Kunden die Möglichkeit, bei einer Buchung einer
				Behandlungsdauer von über 60 Minuten ein kostenloses Fußbad und Hot Stone zu genießen, dies
				ist abhängig von der gewählten Behandlung.
			</p>
		</div>

		<div class="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each SERVICES as service (service.id)}
				<div
					class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2"
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
								<span class="text-lg font-bold text-emerald-700">ab €{service.price}</span>
								<span class="ml-2 text-gray-500">/ {service.duration} min</span>
								<p class="text-sm">({service.note})</p>
							</div>
							<!-- TODO: replace button after booking service has been added -->
							<!-- <a
								href="#booking"
								class="rounded bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-800"
							>
								Book Now
							</a> -->
							<a
								href="https://wa.me/{CONTACT_INFO.phone.replace(/\s/g, '')}"
								class="rounded bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-800"
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
