import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
	title: "About Daniel Sakelaris",
	description:
		"Learn about Daniel Sakelaris, founder of Telescode LLC and software engineer specializing in machine learning and web development.",
};

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<Experience />
			<Education />
			<Skills />
		</>
	);
}
