"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
	return (
		<section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to Start Your Next Project?
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-xl text-primary-100">
						Let's collaborate to turn your ideas into powerful, scalable
						software solutions. Get in touch today and let's discuss how we can
						help your business grow.
					</p>
				</motion.div>

				<motion.div
					className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Link href="/contact">
						<Button
							size="xl"
							variant="secondary"
							className="group bg-white text-primary-600 hover:bg-gray-50"
						>
							<Mail className="mr-2 h-5 w-5" />
							Get In Touch
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</Link>

					<Link href="/projects">
						<Button
							size="xl"
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-primary-600"
						>
							<Calendar className="mr-2 h-5 w-5" />
							View Our Work
						</Button>
					</Link>
				</motion.div>

				<motion.div
					className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
				>
					{[
						{
							title: "Fast Delivery",
							description: "Quick turnaround without compromising quality",
						},
						{
							title: "Modern Tech",
							description: "Latest technologies and best practices",
						},
						{
							title: "Full Support",
							description: "Ongoing maintenance and support included",
						},
					].map((feature, index) => (
						<motion.div
							key={feature.title}
							className="text-center"
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<h3 className="text-lg font-semibold text-white">
								{feature.title}
							</h3>
							<p className="mt-2 text-primary-100">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
