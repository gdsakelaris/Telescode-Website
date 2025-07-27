export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription?: string;
	image: string;
	images?: string[];
	tags: string[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured: boolean;
	status: "completed" | "in-progress" | "planning";
	startDate: string;
	endDate?: string;
	caseStudy?: string;
}

export interface BlogPost {
	id: string;
	title: string;
	description: string;
	content: string;
	image?: string;
	tags: string[];
	publishedAt: string;
	updatedAt?: string;
	featured: boolean;
	readingTime: number;
}

export interface SEOData {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
}

export interface ContactForm {
	name: string;
	email: string;
	company?: string;
	message: string;
	type: "general" | "project" | "collaboration";
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	content: string;
	image?: string;
	rating: number;
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
	features: string[];
	pricing?: {
		starting: number;
		type: "project" | "hourly" | "monthly";
	};
}
