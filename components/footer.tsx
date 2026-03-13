import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
	{ name: "GitHub", href: "https://github.com/gdsakelaris", icon: Github },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/danielsakelaris/", icon: Linkedin },
	{ name: "Email", href: "mailto:gdsakelaris6@gmail.com", icon: Mail },
];

export function Footer() {
	return (
		<footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center text-center space-y-5">
					<div className="flex items-center justify-center space-x-2">
						<Image
							src="/images/telescode-logo.png"
							alt="Telescode Logo"
							width={28}
							height={28}
							className="h-7 w-7 rounded"
						/>
						<span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Telescode</span>
					</div>

					<div className="flex space-x-5">
						{socialLinks.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
								aria-label={item.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								<item.icon className="h-5 w-5" />
							</Link>
						))}
					</div>

					<p className="text-xs text-zinc-400 dark:text-zinc-600">
						© {new Date().getFullYear()} Telescode LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
