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
							George Sakelaris - Software Engineer
						</p>

						<div className="mt-8 prose prose-lg text-gray-600 dark:text-gray-300">
							<p>
								Hey there! I'm George (Daniel), a software engineer driven by
								curiosity and a passion for turning complex ideas into real-world
								solutions. My journey started with a Computer Science degree
								from DePaul University and has taken me through everything from
								machine learning models that predict fights to building
								enterprise applications.
							</p>

							<p>
								What drives me is a genuine love for building software. My projects range from 
								practical tools to fun experiments - each one teaching me something new. Whether 
								it's machine learning, web development, or systems programming, I'm always eager 
								to dive into the next technical challenge.
							</p>

							<p>
								Through Telescode LLC, I channel this passion into creating solutions for clients 
								while continuing to experiment with personal projects. It's this blend of 
								professional work and creative exploration that keeps me excited about software 
								engineering.
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
							<div className="relative h-full w-full overflow-hidden rounded-xl">
								<Image
									src="/images/Headshot.jpg"
									alt="Daniel Sakelaris"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
