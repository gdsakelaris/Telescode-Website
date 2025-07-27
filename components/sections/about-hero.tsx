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
		<section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
							About Me
						</h1>

						<p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
							Daniel Sakelaris - Software Engineer & Entrepreneur
						</p>

						<div className="mt-8 prose prose-lg text-gray-600 dark:text-gray-300">
							<p>
								Hey there! I'm Daniel, a software engineer driven by curiosity and a passion for turning 
								complex ideas into elegant solutions. My journey started with a Computer Science degree 
								from DePaul University and has taken me through everything from machine learning models 
								that predict UFC fights to building enterprise applications.
							</p>

							<p>
								What really drives me is the intersection of technology and real-world impact. Whether 
								I'm developing a machine learning model with 77% accuracy or architecting cloud solutions, 
								I'm always asking: "How can this make a meaningful difference?" Outside of coding, 
								you'll find me on the mats training Brazilian Jiu-Jitsu or diving deep into sports analytics.
							</p>
							
							<p>
								I founded Telescode LLC to combine my technical expertise with my entrepreneurial spirit - 
								creating solutions that don't just work, but truly solve problems. Every project is a 
								chance to learn something new and push the boundaries of what's possible.
							</p>
						</div>

						<div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
							{personalStats.map((stat, index) => (
								<motion.div
									key={stat.label}
									className="text-center"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
										<stat.icon className="h-6 w-6" />
									</div>
									<p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
										{stat.value}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="relative mx-auto h-96 w-96 overflow-hidden rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-400 p-1">
							<div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900">
								<div className="text-center">
									<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400" />
									<p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
										Daniel Sakelaris
									</p>
									<p className="text-primary-600 dark:text-primary-400">
										Software Engineer
									</p>
								</div>
							</div>
						</div>

						{/* Floating badges */}
						<motion.div
							className="absolute -right-4 top-8 rounded-lg bg-white px-3 py-2 shadow-lg dark:bg-gray-800"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<p className="text-sm font-medium text-gray-900 dark:text-white">
								🥋 BJJ Practitioner
							</p>
						</motion.div>

						<motion.div
							className="absolute -left-4 bottom-8 rounded-lg bg-white px-3 py-2 shadow-lg dark:bg-gray-800"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity, delay: 1 }}
						>
							<p className="text-sm font-medium text-gray-900 dark:text-white">
								🤖 ML Engineer
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
