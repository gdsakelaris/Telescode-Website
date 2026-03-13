"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center border-b border-zinc-100 dark:border-zinc-900"
		>
			<div className="container mx-auto px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="flex justify-center mb-10"
					>
						<Image
							src="/images/telescode-logo.png"
							alt="Telescode"
							width={140}
							height={140}
							className="h-36 w-36 rounded-3xl shadow-sm"
						/>
					</motion.div>

					<h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
						Telescode
					</h1>

					<motion.p
						className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mb-16 whitespace-nowrap tracking-wide"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Production SaaS · AI/ML Integration · Cloud Infrastructure · End-to-End Development
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
					>
						<Link href="/about">
							<Button
								size="lg"
								className="px-8 py-4 text-base bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 rounded-md font-medium transition-colors"
							>
								About Me
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
						<Link href="#contact">
							<Button
								variant="outline"
								size="lg"
								className="px-8 py-4 text-base border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white rounded-md font-medium transition-colors"
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
