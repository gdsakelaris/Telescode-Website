"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MinimalistHero() {
	return (
		<section
			id="home"
			className="min-h-[60vh] md:min-h-[65vh] flex items-center justify-center pt-12 pb-6 relative overflow-hidden"
		>
			{/* Background Effects */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-gray-950 dark:via-blue-950/50 dark:to-purple-950/30"></div>
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 text-center relative">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
						<span className="bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
							Telescode
						</span>
					</h1>

					<motion.p
						className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Software engineer specializing in full-stack development
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Link href="/about">
							<Button
								size="xl"
								className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
							>
								About Me
							</Button>
						</Link>
						<Link href="#contact">
							<Button
								variant="outline"
								size="xl"
								className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-full transition-all duration-300"
							>
								Get In Touch
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
