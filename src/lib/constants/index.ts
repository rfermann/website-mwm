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
		name: 'M Relaxing Ölmassage',
		id: 'relaxing-oelmassage',
		duration: 60,
		price: 58,
		note: 'mit Fußbad und Hotstone',
		image:
			'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'M Relaxing Ölmassage bietet ein ganzheitliches Erlebnis, das sowohl das körperliche als auch das emotionale Wohlbefinden anspricht. Sie stellt eine hervorragende Möglichkeit dar, sich abzuschalten, Stress abzubauen und die Gesundheit und das Wohlbefinden insgesamt zu verbessern.'
	},
	{
		name: 'M Kombi THAIdruck + Ölmassage',
		id: 'kombi-thaidruck-oelmassage',
		duration: 60,
		price: 58,
		note: 'mit Fußbad und Hotstone',
		image: '/1000030752.jpg',
		description:
			'Die M Kombi THAI Ölmassage ist eine Massagetechnik, die traditionelle Thai-Massage-Prinzipien beinhaltet und gleichzeitig Öle verwendet, um das Erlebnis zu verbessern und die Entspannung zu fördern. Es beinhaltet die Anwendung von Ölen auf die Haut und die Verwendung einer Vielzahl von Massagebewegungen, einschließlich Gleiten, Rollen und Dehnen, um Stress zu lindern, die Durchblutung zu verbessern und die Flexibilität zu erhöhen.'
	},
	{
		name: 'Traditionelle Thai-Massage',
		id: 'traditionelle-thai-massage',
		duration: 60,
		price: 58,
		note: 'mit Fußbad',
		image:
			'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Die traditionelle Thai-Massage ist eine umfassende Körpermassage, die eine Kombination aus Tiefengewebsdruck, Muskel- und Gelenkdehnung sowie sanfter Körperbewegung in yogaähnliche Positionen nutzt. Diese Methode wird seit Jahrtausenden praktiziert und zählt zu den am weitesten verbreiteten Formen der Alternativmedizin in Thailand.'
	},
	{
		name: 'Kopf-Nacken-Schulter-Rückenmassage',
		id: 'kopf-nacken-schulter-rueckenmassage',
		duration: 30,
		price: 35,
		note: 'ab 60 Min. mit Hotstone',
		image:
			'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		// image:
		// ',
		description:
			'Rücken-, Nacken- und Schultermassage beinhaltet eine Vielzahl von therapeutischen Strategien, die speziell entwickelt wurden, um Beschwerden zu lindern und Stress in diesen Bereichen zu lindern. Techniken wie die schwedische Massage, die sich durch lange, fließende Striche auszeichnet, helfen bei der Förderung der Entspannung und der Verbesserung der Durchblutung.'
	},
	{
		name: 'Relax&Go Massage',
		id: 'relax-go',
		duration: 20,
		price: 27,
		note: 'mit / ohne Öl',
		image: '/1000030746.jpg',
		description:
			'Die Massagestrategie konzentriert sich auf den Oberkörper und zielt speziell auf Bereiche ab, die zu Verspannungen und Stress neigen. Diese Anwendung zielt darauf ab, Beschwerden zu lindern, Muskelverspannungen zu lindern und die Entspannung zu erleichtern, indem sie sich auf die Kopf-, Rücken-, Nacken- und Schultermuskulatur konzentriert.'
	},
	{
		name: 'M FIT- Extra starke THAIdruck + Ölmassage',
		id: 'm-fit-extra-starke-thaidruck-oelmassage',
		duration: 60,
		price: 64,
		note: 'mit Fußbad und Hotstone',
		image:
			'https://images.pexels.com/photos/5240696/pexels-photo-5240696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'M FIT-Massage ist eine spezialisierte Form der Massage-Therapie, entwickelt, um Sportler und aktive Personen vor, während und nach der körperlichen Aktivität zu unterstützen. Es verwendet eine Vielzahl von Techniken, um bestimmte Muskelgruppen und Weichgewebe anzusprechen, mit dem Ziel, die Leistung zu verbessern, die Genesung zu unterstützen und Verletzungen zu verhindern. Im Gegensatz zur herkömmlichen Entspannungsmassage konzentriert sich M FIT oder auch Sportmassage, Tiefengewebsmassage (Deep Tissue Massage) auf die einzigartigen Anforderungen, die durch körperliche Aktivität an den Körper gestellt werden, wie Muskelkater, Steifheit und Ungleichgewichte.'
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
