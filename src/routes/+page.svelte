<script>
	import { onMount } from 'svelte';
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Services from './Services.svelte';

	onMount(() => {
		if (window.location.hash) {
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
</script>

<Hero />
<Services />
<Contact />
<About />
