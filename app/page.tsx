import { HomeHero } from "@/components/sections/home-hero";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";

export default function HomePage() {
	return (
		<div className="bg-white dark:bg-zinc-950">
			<HomeHero />
			<HomeAbout />
			<HomeContact />
		</div>
	);
}
