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
		description: "AI-powered resume screening.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/LogoText.png",
		tags: ["Python", "FastAPI", "GPT-4o", "AWS S3", "Stripe", "Docker"],
		githubUrl: "https://github.com/gdsakelaris/Resume-Analyzer",
		liveUrl: "https://starscreen.net",
	},
	{
		id: 2,
		title: "UFC Fight Prediction Model",
		description: "Machine learning model that predicts UFC fight outcomes.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/Win Your Belt.png",
		tags: ["Python", "XGBoost", "ML"],
		githubUrl: "https://github.com/gdsakelaris/UFC-Machine-Learning-Model",
		liveUrl: "https://discord.gg/X3tc8vYx27",
	},
	{
		id: 3,
		title: "Digital Marketplace 2.0",
		description: "Online software/file marketplace with AWS backend.",
		gradient: "from-green-400 to-blue-500",
		image: "/images/SS Logo.png",
		tags: ["React", "AWS", "Stripe"],
		githubUrl: "https://github.com/gdsakelaris/software-marketplace-v2",
		liveUrl: "https://main.d1zt2kmu7kdbjp.amplifyapp.com/",
	},
	{
		id: 4,
		title: "SumTube AI",
		description: "AI-powered YouTube video summarizer.",
		gradient: "from-purple-400 to-pink-500",
		image: "/images/sumtube.png",
		tags: ["Python", "OpenAI", "Django"],
		githubUrl: "https://github.com/gdsakelaris/SumTube",
		liveUrl: null,
	},
	{
		id: 5,
		title: "Rustext",
		description: "Keyboard-oriented command-line text editor built with Rust.",
		gradient: "from-cyan-400 to-teal-500",
		image: "/images/Rust.png",
		tags: ["Rust"],
		githubUrl: "https://github.com/gdsakelaris/Rustext",
		liveUrl: null,
	},
	{
		id: 6,
		title: "MMA Warriors",
		description: "Pokemon-like MMA card game.",
		gradient: "from-primary-500 to-purple-600",
		image: "/images/MMA-Warriors.png",
		tags: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/gdsakelaris/MMA-Card-Game",
		liveUrl: "https://mma-warriors.com/",
	},
	
];

export function MinimalistProjects() {
	return (
		<section
			id="projects"
			className="py-20 bg-gray-50 dark:bg-gray-900/50"
		>
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
						Featured Projects
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="group relative"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.02 }}
						>
							<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-xl p-3 h-full shadow-lg hover:shadow-xl transition-all duration-300">
								<div
									className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg mb-2 flex items-center justify-center relative overflow-hidden`}
								>
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

								<h3 className="text-base font-bold mb-1.5 text-gray-900 dark:text-white">
									{project.title}
								</h3>

								<p className="text-gray-600 dark:text-gray-300 mb-2 text-sm leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex space-x-3">
									{project.liveUrl ? (
										<Link
											href={project.liveUrl}
											className="flex-1"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm">
												<ExternalLink className="w-4 h-4 mr-2" />
												Live Demo
											</Button>
										</Link>
									) : (
										<Button
											disabled
											className="flex-1 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg text-sm cursor-not-allowed"
										>
											Live Demo
										</Button>
									)}

									<Link
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button
											variant="outline"
											className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
										>
											<Github className="w-4 h-4" />
										</Button>
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
