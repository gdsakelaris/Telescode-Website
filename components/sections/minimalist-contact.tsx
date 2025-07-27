"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MinimalistContact() {
	return (
		<section
			id="contact"
			className="py-20"
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
						Get In Touch
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Ready to collaborate on your next project?
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<motion.div
						className="max-w-2xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold mb-6">
							Let's Build Something Amazing
						</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-12">
							Whether you have a specific project in mind or want to explore
							possibilities, I'm always excited to discuss new opportunities and
							challenges.
						</p>

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
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
