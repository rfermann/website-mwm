import type { Service } from '../types';

const SITE_NAME = 'M Wellness & Massage';
const SITE_DESCRIPTION = 'Authentische Thai-Massage und Wellnessanwendungen im Herzen Nürnbergs';

const NAV_LINKS: {
	name: string;
	href: string;
	cta?: boolean;
}[] = [
		{ name: 'Home', href: '/#home' },
		{ name: 'Leistungen', href: '/#services' },
		// { name: 'Über uns', href: '#about' },
		// { name: 'Galerie', href: '#gallery' },
		// { name: 'Testimonials', href: '#testimonials' },
		// { name: 'Jetzt buchen', href: '#booking', cta: true },
		{ name: 'Kontakt', href: '/#contact' },
		{ name: 'Über uns', href: '/#us' }
	];

const OPENING_HOURS: { day: string; hours: string }[] = [
	{ day: 'Montag - Freitag', hours: '09:00 - 19:00' },
	{ day: 'Samstag', hours: '09:00 - 20:00' },
	{ day: 'Sonntag', hours: 'Geschlossen' }
];

const SERVICES: Service[] = [
	{
		name: 'Traditionelle Thai-Massage',
		id: 'traditionelle-thai-massage',
		duration_1: 60,
		duration_2: 90,
		duration_3: 120,
		price_1: 75,
		price_2: 110,
		price_3: 140,
		note: 'mit Fußbad',
		image:
			'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Erleben Sie die Seele Thailands mit unserer traditionellen Thai-Massage. Diese Massage kombiniert sanfte Dehnungen, Druckpunkt-Techniken und beruhigende Berührungen, um Körper und Geist in Einklang zu bringen. Lassen Sie sich in eine Welt der Entspannung entführen.'
	},
	{
		name: 'M Relaxing Massage',
		id: 'relaxing-massage',
		duration_1: 60,
		duration_2: 90,
		duration_3: 120,
		price_1: 75,
		price_2: 110,
		price_3: 140,
		note: 'mit Fußbad und Hotstone',
		image:
			'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Gönnen Sie sich eine Auszeit mit unserer M-Relaxing-Massage, die speziell entwickelt wurde, um Stress abzubauen und die Muskulatur zu entspannen. Warme Öle und eine ruhige Atmosphäre schaffen das perfekte Ambiente für Ihre Erholung.'
	},
	{
		name: 'Thai-Ölmassage',
		id: 'thai-oelmassage',
		duration_1: 60,
		duration_2: 90,
		duration_3: 120,
		price_1: 75,
		price_2: 110,
		price_3: 140,
		note: 'mit Fußbad und Hotstone',
		image: '/1000030752.jpg',
		description:
			'Tauchen Sie ein in ein luxuriöses Erlebnis mit unserer Thai-Ölmassage. Die Kombination aus gezielten Bewegungen und wohlriechenden Ölen fördert das Wohlgefühl und hilft, Verspannungen zu lösen. Ideal für eine harmonisierende Auszeit.'
	},
	// {
	// 	name: 'Kopf-Nacken-Schulter-Rückenmassage',
	// 	id: 'kopf-nacken-schulter-rueckenmassage',
	// 	duration_1: 30,
	// 	duration_2: 60,
	// 	price_1: 35,
	// 	price_2: 60,
	// 	note: 'ab 60 Min. mit Hotstone',
	// 	image:
	// 		'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// 	// image:
	// 	// ',
	// 	description:
	// 		'Rücken-, Nacken- und Schultermassage beinhaltet eine Vielzahl von therapeutischen Strategien, die speziell entwickelt wurden, um Beschwerden zu lindern und Stress in diesen Bereichen zu lindern. Techniken wie die schwedische Massage, die sich durch lange, fließende Striche auszeichnet, helfen bei der Förderung der Entspannung und der Verbesserung der Durchblutung.'
	// },
	{
		name: 'Rücken- oder Fußmassage',
		id: 'ruecken-oder-fussmassage',
		duration_1: 30,
		duration_2: 45,
		price_1: 40,
		price_2: 55,
		note: 'ab 60 Min. mit Hotstone',
		image:
			'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Verwöhnen Sie sich mit einer entspannenden Kopf-Nacken-Schulter-Rücken-Massage, die gezielt Verspannungen löst und für ein vollkommen neues Körpergefühl sorgt. Lassen Sie den Stress hinter sich und kehren Sie revitalisiert zurück.'
	},
	{
		name: 'Fußmassage',
		id: 'fussmassage',
		duration_1: 30,
		duration_2: 45,
		price_1: 40,
		price_2: 55,
		note: 'mit Fußbad und Hotstone',
		image:
			'https://images.pexels.com/photos/9146383/pexels-photo-9146383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Unsere Fußmassage bringt neue Energie und belebt Ihren ganzen Körper. Durch Druckpunkte und entspannende Techniken erfahren Sie eine wohltuende Erleichterung. Perfekt nach einem langen Tag oder beim Sightseeing in Nürnberg.'
	},
	// {
	// 	name: 'Relax&Go Massage',
	// 	id: 'relax-go',
	// 	duration_1: 20,
	// 	duration_2: 40,
	// 	price_1: 27,
	// 	price_2: 40,
	// 	note: 'mit / ohne Öl',
	// 	image: '/1000030746.jpg',
	// 	description:
	// 		'Die Massagestrategie konzentriert sich auf den Oberkörper und zielt speziell auf Bereiche ab, die zu Verspannungen und Stress neigen. Diese Anwendung zielt darauf ab, Beschwerden zu lindern, Muskelverspannungen zu lindern und die Entspannung zu erleichtern, indem sie sich auf die Kopf-, Rücken-, Nacken- und Schultermuskulatur konzentriert.'
	// },
	{
		name: 'Paarmassage',
		id: 'paarmassage',
		duration_1: 60,
		duration_2: 90,
		duration_3: 120,
		price_1: 140,
		price_2: 215,
		price_3: 275,
		image: 'https://images.pexels.com/photos/7365414/pexels-photo-7365414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Genießen Sie eine besondere Zeit zu zweit mit unserer Paarmassage. Ein gemeinsames Erlebnis, das Nähe und Entspannung fördert. Lassen Sie sich von unserem Team verwöhnen und erleben Sie gemeinsam Momente der Ruhe und Besinnung.'
	},
	{
		name: 'MY Signature Massage (früher M-FIT)',
		id: 'my-signature-massage',
		duration_1: 65,
		duration_2: 95,
		duration_3: 125,
		price_1: 85,
		price_2: 120,
		price_3: 160,
		note: 'mit Fußbad und Hotstone',
		image:
			'https://images.pexels.com/photos/5240696/pexels-photo-5240696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Erleben Sie eine personalisierte Massage, die speziell auf Ihre Bedürfnisse abgestimmt ist. Unsere Experten kombinieren verschiedene Techniken zu einem individuellen Erlebnis. Ideal, um Körper und Seele in Einklang zu bringen.'
	}
];

const CONTACT_INFO: { address: string; phone: string; email: string; mapUrl: string } = {
	address: 'Breite Gasse 40, 1. OG, 90402 Nürnberg',
	phone: '+49 159 0141 3451',
	email: 'info@mwellnessmassage.de',
	mapUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30474.709965379705!2d11.075878963153047!3d49.45442152080929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f5772bffa3d49%3A0x3199faa2ee1a2221!2sM%20Wellness%20%26%20ThaiMassage%20City%20Center%20N%C3%BCrnberg!5e1!3m2!1sde!2sth!4v1771057377961!5m2!1sde!2sth'
};

const SOCIAL_MEDIA_LINKS: { facebook: string; instagram: string; twitter: string; google: string } =
{
	facebook: 'https://www.facebook.com/share/1ZSxZDSKAf/',
	instagram: 'https://www.instagram.com/m.wellness.massage.nuernberg',
	twitter: 'https://x.com/mwelln8massage',
	google:
		'https://www.google.com/maps/place/M+Wellness+%26+Massage+City+Center+N%C3%BCrnberg/@49.4492152,11.0729617,1147m/data=!3m2!1e3!5s0x479f57a8f81aef81:0x28613f4941c1346b!4m8!3m7!1s0x479f57b005953917:0x8b3b2e1b7fb48a95!8m2!3d49.4492152!4d11.0729617!9m1!1b1!16s%2Fg%2F11m5yqc9dj?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D'
};

export {
	CONTACT_INFO,
	NAV_LINKS,
	OPENING_HOURS,
	SERVICES,
	SITE_DESCRIPTION,
	SITE_NAME,
	SOCIAL_MEDIA_LINKS
};
