type Service = {
	id: string;
	name: string;
	description: string;
	note?: string;
	duration_1: number; // in minutes
	duration_2?: number; // in minutes
	duration_3?: number;
	price_1: number;
	price_2?: number;
	price_3?: number;
	image: string;
};

export type { Service };
