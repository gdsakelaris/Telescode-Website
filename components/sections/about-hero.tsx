"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

const personalStats = [
	{ icon: MapPin, label: "Based in", value: "Chicago, IL" },
	{ icon: GraduationCap, label: "Education", value: "DePaul University" },
	{ icon: Briefcase, label: "Company", value: "Telescode LLC" },
	{ icon: Heart, label: "Passion", value: "Machine Learning & UFC" },
];

export function AboutHero() {
	return (
		<section className="py-20 bg-white dark:bg-zinc-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
							About Me
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
							George Sakelaris
						</h1>
						<p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
							Full-Stack Software Engineer
						</p>

						<div className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
							<p>
								I'm a full-stack software engineer with a B.S. in Computer Science from DePaul University (Magna Cum Laude, 3.72 GPA). I specialize in building and operating production B2B SaaS — multi-tenant backends, async processing pipelines, cloud infrastructure, and subscription billing.
							</p>
							<p>
								As the founder of Telescode LLC, I launched Starscreen.net — an AI-powered recruiting platform built on FastAPI, PostgreSQL, Celery/Redis, and AWS. I've handled everything from architecture and code to product demos for HR stakeholders and translating feedback into roadmaps.
							</p>
							<p>
								I'm driven by the end-to-end challenge: taking a product from idea to production, optimizing for performance and cost, and delivering real value. Whether it's ML prediction models, serverless e-commerce, or CLI tools in Rust — I'm always building.
							</p>
						</div>

						<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
							{personalStats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
								>
									<div className="flex items-center gap-2 mb-1">
										<stat.icon className="h-3.5 w-3.5 text-zinc-400" />
										<p className="text-xs text-zinc-400 dark:text-zinc-500">{stat.label}</p>
									</div>
									<p className="text-sm font-medium text-zinc-900 dark:text-white pl-5">
										{stat.value}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						className="relative flex justify-center lg:justify-end"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="relative h-80 w-80 lg:h-96 lg:w-96 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
							<Image
								src="/images/headshot.jpg"
								alt="George Sakelaris"
								fill
								className="object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
