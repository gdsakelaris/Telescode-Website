import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutEducation } from "@/components/sections/about-education";
import { AboutExperience } from "@/components/sections/about-experience";
import { AboutSkills } from "@/components/sections/about-skills";
import { AboutProjects } from "@/components/sections/about-projects";

export const metadata: Metadata = {
	title: "About Me - Daniel Sakelaris",
	description:
		"Get to know Daniel Sakelaris personally - my journey, passions, background, and what drives me as a software engineer and entrepreneur.",
};

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<AboutProjects />
			<AboutExperience />
			<AboutEducation />
			<AboutSkills />
		</>
	);
}
