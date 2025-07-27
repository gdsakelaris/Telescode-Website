import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
	title: "About Me - Daniel Sakelaris",
	description:
		"Get to know Daniel Sakelaris personally - my journey, passions, background, and what drives me as a software engineer and entrepreneur.",
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
