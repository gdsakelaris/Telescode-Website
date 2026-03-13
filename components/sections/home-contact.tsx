"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function HomeContact() {
	return (
		<motion.section
			id="contact"
			className="min-h-screen flex items-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container mx-auto px-6 py-24 max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
						Let's Connect
					</h2>
					<p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
						Open to full-time roles, freelance projects, and technical conversations.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-3 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					viewport={{ once: true }}
				>
					{[
						{ icon: Mail, label: "Email", value: "gdsakelaris6@gmail.com", href: "mailto:gdsakelaris6@gmail.com" },
						{ icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/danielsakelaris", href: "https://www.linkedin.com/in/danielsakelaris/" },
						{ icon: Github, label: "GitHub", value: "github.com/gdsakelaris", href: "https://github.com/gdsakelaris" },
					].map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center p-14 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
						>
							<item.icon className="w-6 h-6 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white mb-5 transition-colors" />
							<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">{item.label}</p>
							<p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{item.value}</p>
						</a>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}
