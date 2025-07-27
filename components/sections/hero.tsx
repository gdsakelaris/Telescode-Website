"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const floatingIcons = [
	{ icon: Code, delay: 0, position: "top-20 left-20" },
	{ icon: Zap, delay: 1, position: "top-40 right-32" },
	{ icon: Globe, delay: 2, position: "bottom-32 left-32" },
];

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

			{/* Floating Icons */}
			{floatingIcons.map((item, index) => (
				<motion.div
					key={index}
					className={`absolute hidden lg:block ${item.position} text-primary-200 dark:text-primary-800`}
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						delay: item.delay,
						ease: "easeInOut",
					}}
				>
					<item.icon className="h-12 w-12" />
				</motion.div>
			))}

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={itemVariants}>
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
							<span className="block">Innovative Software</span>
							<span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
								Solutions
							</span>
						</h1>
					</motion.div>

					<motion.div variants={itemVariants}>
						<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
							Founded by Daniel Sakelaris, Telescode LLC specializes in machine
							learning, web development, and custom software solutions. From UFC
							fight prediction models to enterprise applications, we turn
							complex ideas into powerful, real-world solutions.
						</p>
					</motion.div>

					<motion.div variants={itemVariants}>
						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Link href="/projects">
								<Button
									size="xl"
									className="group"
								>
									View Our Work
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									variant="outline"
									size="xl"
								>
									Start a Project
								</Button>
							</Link>
						</div>
					</motion.div>

					<motion.div variants={itemVariants}>
						<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
							{[
								{ label: "Projects Completed", value: "10+" },
								{ label: "Technologies Mastered", value: "30+" },
								{ label: "ML Model Accuracy", value: "77%" },
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									className="text-center"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<div className="text-3xl font-bold text-primary-600 dark:text-primary-400 sm:text-4xl">
										{stat.value}
									</div>
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			>
				<div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600">
					<span className="text-sm">Scroll to explore</span>
					<div className="h-6 w-4 rounded-full border-2 border-current">
						<motion.div
							className="mx-auto mt-1 h-2 w-1 rounded-full bg-current"
							animate={{ y: [0, 8, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
