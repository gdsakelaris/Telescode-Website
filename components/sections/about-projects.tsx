"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
	{
		id: 1,
		title: "Starscreen.net",
		description: "Production-ready multi-tenant SaaS for AI-powered resume screening. Features async Celery pipelines, GPT-4o scoring, Stripe subscriptions (up to 15k candidates), JWT/Row-Level Security, and CI/CD to AWS EC2 via GitHub Actions.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/starcreen-logo.png",
		tags: ["FastAPI", "PostgreSQL", "Celery", "Redis", "GPT-4o", "AWS", "Stripe", "Docker"],
		githubUrl: "https://github.com/gdsakelaris/Resume-Analyzer",
		liveUrl: "https://starscreen.net",
	},
	{
		id: 2,
		title: "UFC Fight Predictor",
		description: "Stacked ensemble model (XGBoost, LightGBM, CatBoost) with a neural network meta-learner achieving 68% winner accuracy. Scraped 6,000+ fights and engineered 200+ features including momentum indicators and statistical differentials.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/wyb-logo.png",
		tags: ["Python", "XGBoost", "LightGBM", "CatBoost", "scikit-learn", "NLP"],
		githubUrl: "https://github.com/gdsakelaris/UFC-Machine-Learning-Model",
		liveUrl: "https://discord.gg/X3tc8vYx27",
	},
	{
		id: 3,
		title: "SumTube AI",
		description: "Django web app that generates AI-powered YouTube video summaries using yt-dlp, Google Speech Recognition, and OpenAI GPT-4. Implemented DB caching that cut API costs by 70% and reduced response time from 45s to 2s for cached videos.",
		gradient: "from-purple-400 to-pink-500",
		image: "/images/sumtube-logo.png",
		tags: ["Python", "Django", "OpenAI GPT-4", "PostgreSQL", "Nginx", "AWS EC2"],
		githubUrl: "https://github.com/gdsakelaris/SumTube",
		liveUrl: null,
	},
	{
		id: 4,
		title: "Digital Marketplace",
		description: "E-commerce platform for digital product sales using React and AWS serverless architecture. Stripe payments and S3 automation reduced fulfillment time by 99%.",
		gradient: "from-green-400 to-blue-500",
		image: "/images/softwaresack-logo.png",
		tags: ["React", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Stripe"],
		githubUrl: "https://github.com/gdsakelaris/software-marketplace-v2",
		liveUrl: "https://main.d1zt2kmu7kdbjp.amplifyapp.com/",
	},
	{
		id: 5,
		title: "Rustext",
		description: "High-performance command-line text editor built from scratch in Rust. Custom data structures for efficient memory usage, low-level I/O via Crossterm for cross-platform terminal compatibility, and dirty-flag state management.",
		gradient: "from-cyan-400 to-teal-500",
		image: "/images/rust-image.png",
		tags: ["Rust", "Crossterm", "Systems Programming"],
		githubUrl: "https://github.com/gdsakelaris/Rustext",
		liveUrl: null,
	},
	{
		id: 6,
		title: "MMA Warriors",
		description: "Browser-based Pokemon-style MMA card game built in vanilla JavaScript. Features fighter stat cards, turn-based combat logic, and dynamic DOM rendering with no frameworks.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/mmawarriors-logo.png",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/gdsakelaris/MMA-Card-Game",
		liveUrl: "https://mma-warriors.com/",
	},
];

export function AboutProjects() {
	return (
		<section
			id="projects"
			className="py-20 bg-white dark:bg-zinc-950"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="mb-14"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Work</p>
					<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
						Featured Projects
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="group"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.07 }}
							viewport={{ once: true }}
							whileHover={{ y: -4 }}
						>
							<div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 h-full flex flex-col hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
								<div className="aspect-video bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
									{project.image && (
										<Image
											src={project.image}
											alt={project.title}
											fill
											quality={100}
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover"
										/>
									)}
								</div>

								<div className="p-5 flex flex-col flex-1">
									<h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
										{project.title}
									</h3>

									<p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed flex-1">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-1.5 mb-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded text-xs font-mono"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex gap-2">
										{project.liveUrl ? (
											<Link href={project.liveUrl} className="flex-1" target="_blank" rel="noopener noreferrer">
												<Button className="w-full h-8 bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-xs rounded-md">
													<ExternalLink className="w-3 h-3 mr-1.5" />
													Live Demo
												</Button>
											</Link>
										) : (
											<Button disabled className="flex-1 h-8 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 text-xs rounded-md cursor-not-allowed">
												Live Demo
											</Button>
										)}

										<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
											<Button variant="outline" className="h-8 px-3 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-zinc-900 dark:hover:border-white rounded-md">
												<Github className="w-3.5 h-3.5" />
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
