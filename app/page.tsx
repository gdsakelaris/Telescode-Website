import { HomeHero } from "@/components/sections/home-hero";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<HomeAbout />
			<HomeContact />
		</>
	);
}
