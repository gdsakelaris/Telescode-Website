import { MinimalistHero } from "@/components/sections/minimalist-hero";
import { MinimalistAbout } from "@/components/sections/minimalist-about";
import { MinimalistContact } from "@/components/sections/minimalist-contact";

export default function HomePage() {
	return (
		<>
			<MinimalistHero />
			<MinimalistAbout />
			<MinimalistContact />
		</>
	);
}
