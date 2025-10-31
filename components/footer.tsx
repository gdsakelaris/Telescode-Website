import Link from "next/link";
import Image from "next/image";
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
		href: "mailto:gdsakelari6@gmail.com",
		icon: Mail,
	},
];

const footerLinks = {};

export function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center text-center space-y-6">
					{/* Company Info */}
					<div>
						<div className="flex items-center justify-center space-x-2">
							<Image
								src="/images/telescode logo.png"
								alt="Telescode Logo"
								width={32}
								height={32}
								className="h-8 w-8 rounded"
							/>
							<span className="text-xl font-bold">Telescode</span>
						</div>
						<p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
							Custom Software Solutions.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex space-x-6">
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

					{/* Copyright */}
					<p className="text-sm text-gray-500 dark:text-gray-400">
						© {new Date().getFullYear()} Telescode LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
