<script>
	import { SITE_DESCRIPTION, SITE_NAME } from '$lib/constants';
</script>

<section id="home" class="relative flex h-screen items-center justify-center overflow-hidden">
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
		<img
			src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
			alt="Thai massage spa setting"
			class="h-full w-full object-cover"
		/>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 pt-32 text-center md:px-6 md:pt-24 xl:pt-0">
		<h1
			class="font-playfair mb-4 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
		>
			{SITE_NAME}
		</h1>
		<p class="mb-8 text-xl text-white md:text-2xl">{SITE_DESCRIPTION}</p>
		<p class="mb-8 text-xl text-white md:text-2xl">
			Ganzheitliche Entspannung für Körper und Geist
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="#services"
				class="rounded-md bg-emerald-700 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-emerald-800"
				>Anwendung buchen</a
			>
			<a
				href="#services"
				class="rounded-md bg-white px-8 py-3 font-medium text-emerald-800 transition-colors duration-300 hover:bg-gray-200"
				>Dienstleistungen erkunden</a
			>
		</div>
	</div>

	<div class="absolute right-0 bottom-8 left-0 flex justify-center">
		<a href="#services" class="animate-bounce text-white" aria-label="Scroll down">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</a>
	</div>
</section>
