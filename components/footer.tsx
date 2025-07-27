import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/gdsakelaris",
		icon: Github,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/danielsakelaris/",
		icon: Linkedin,
	},
	{
		name: "Email",
		href: "mailto:gdsakelaris@gmail.com",
		icon: Mail,
	},
];

const footerLinks = {
	Company: [
		{ name: "About", href: "/#about" },
		{ name: "Projects", href: "/#projects" },
		{ name: "Blog", href: "/#blog" },
		{ name: "Contact", href: "/#contact" },
	],
	Services: [
		{ name: "Web Development", href: "/#contact" },
		{ name: "Mobile Apps", href: "/#contact" },
		{ name: "Consulting", href: "/#contact" },
		{ name: "Maintenance", href: "/#contact" },
	],
	// Services: [
	// 	{ name: "Web Development", href: "/services/web" },
	// 	{ name: "Mobile Apps", href: "/services/mobile" },
	// 	{ name: "Consulting", href: "/services/consulting" },
	// 	{ name: "Maintenance", href: "/services/maintenance" },
	// ],
	// Resources: [
	// 	{ name: "Documentation", href: "/docs" },
	// 	{ name: "Blog", href: "/blog" },
	// 	{ name: "Case Studies", href: "/case-studies" },
	// 	{ name: "Open Source", href: "/open-source" },
	// ],
};

export function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<div className="flex items-center space-x-2">
							<div className="h-8 w-8 rounded bg-gradient-to-tr from-primary-600 to-primary-400" />
							<span className="text-xl font-bold">Telescode</span>
						</div>
						<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
							Custom Software Solutions.
						</p>
						<div className="mt-6 flex space-x-4">
							{socialLinks.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-400 hover:text-primary-600 transition-colors"
									aria-label={item.name}
								>
									<item.icon className="h-5 w-5" />
								</Link>
							))}
						</div>
					</div>

					{/* Footer Links */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
								{category}
							</h3>
							<ul className="mt-4 space-y-2">
								{links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
					<div className="flex flex-col items-center justify-between sm:flex-row">
						<p className="text-sm text-gray-500 dark:text-gray-400">
							© {new Date().getFullYear()} Telescode LLC. All rights reserved.
						</p>
						<div className="mt-4 flex space-x-6 sm:mt-0">
							<Link
								href="/privacy"
								className="text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
