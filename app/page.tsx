import { MinimalistHero } from "@/components/sections/minimalist-hero";
import { MinimalistAbout } from "@/components/sections/minimalist-about";
import { MinimalistProjects } from "@/components/sections/minimalist-projects";
import { MinimalistContact } from "@/components/sections/minimalist-contact";

export default function HomePage() {
	return (
		<>
			<MinimalistHero />
			<MinimalistAbout />
			<MinimalistProjects />
			<MinimalistContact />
		</>
	);
}
