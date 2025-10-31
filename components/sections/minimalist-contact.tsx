"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MinimalistContact() {
	return (
		<section
			id="contact"
			className="py-16 bg-gray-50 dark:bg-gray-900/50"
		>
			<div className="container mx-auto px-6">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
						Let's Connect
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
						Interested in working together or just want to chat about tech? Feel free to reach out!
					</p>

					<motion.div
						className="max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
									<Mail className="w-8 h-8 text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-lg">Email</h4>
									<p className="text-gray-600 dark:text-gray-300">
										gdsakelaris6@gmail.com
									</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center">
									<Linkedin className="w-8 h-8 text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-lg">LinkedIn</h4>
									<p className="text-gray-600 dark:text-gray-300">
										linkedin.com/in/danielsakelaris
									</p>
								</div>
							</div>
							
							<div className="flex flex-col items-center space-y-4">
								<div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
									<Github className="w-8 h-8 text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-lg">GitHub</h4>
									<p className="text-gray-600 dark:text-gray-300">
										github.com/gdsakelaris
									</p>
								</div>
							</div>

						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
