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
					<div className="grid md:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold mb-6">
								Let's Build Something Amazing
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-8">
								Whether you have a specific project in mind or want to explore
								possibilities, I'm always excited to discuss new opportunities
								and challenges.
							</p>

							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
										<Mail className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold">Email</h4>
										<p className="text-gray-600 dark:text-gray-300">
											gdsakelaris@gmail.com
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
										<Github className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold">GitHub</h4>
										<p className="text-gray-600 dark:text-gray-300">
											github.com/gdsakelaris
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
										<Linkedin className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold">LinkedIn</h4>
										<p className="text-gray-600 dark:text-gray-300">
											linkedin.com/in/danielsakelaris
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<form className="space-y-6">
								<div>
									<label className="block text-sm font-medium mb-2">Name</label>
									<input
										type="text"
										className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
										placeholder="Your name"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
										placeholder="your.email@example.com"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium mb-2">
										Message
									</label>
									<textarea
										rows={5}
										className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
										placeholder="Tell me about your project..."
									/>
								</div>

								<Button
									type="submit"
									className="w-full py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
								>
									Send Message
								</Button>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
