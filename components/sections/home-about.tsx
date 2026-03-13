"use client";

import { motion } from "framer-motion";

export function HomeAbout() {
	return (
		<motion.section
			id="about"
			className="min-h-screen flex items-center border-b border-zinc-100 dark:border-zinc-900"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="container mx-auto px-6 py-24 max-w-5xl">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
						What I Build
					</h2>
					<p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
						End-to-end software across the full stack — from infrastructure to interfaces.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
					{[
						{
							title: "Production SaaS",
							desc: "Multi-tenant backends with FastAPI, PostgreSQL, Celery/Redis, async pipelines, and Stripe billing. Built to scale from day one.",
							tags: ["FastAPI", "PostgreSQL", "Redis", "Stripe"],
							delay: 0.1,
						},
						{
							title: "Full-Stack Web",
							desc: "End-to-end applications with React, Next.js, TypeScript, and Node.js — from polished UI to robust REST APIs.",
							tags: ["React", "Next.js", "TypeScript", "Node.js"],
							delay: 0.2,
						},
						{
							title: "AI & Cloud",
							desc: "OpenAI GPT-4o integrations, ML models, AWS (EC2/S3/Lambda), Docker, and GitHub Actions CI/CD pipelines.",
							tags: ["OpenAI", "AWS", "Docker", "CI/CD"],
							delay: 0.3,
						},
					].map((card) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: card.delay }}
							viewport={{ once: true }}
							className="bg-zinc-50 dark:bg-zinc-900 p-10 flex flex-col"
						>
							<h3 className="text-xs font-mono font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-widest">{card.title}</h3>
							<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-1">{card.desc}</p>
							<div className="flex flex-wrap gap-2">
								{card.tags.map((tag) => (
									<span key={tag} className="text-xs font-mono px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 rounded">
										{tag}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
