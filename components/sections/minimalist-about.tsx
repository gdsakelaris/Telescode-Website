"use client";

import { motion } from "framer-motion";

export function MinimalistAbout() {
	return (
		<section
			id="about"
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
						About Telescode
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Innovative software development projects built with the latest
						technologies
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold mb-6">Our Approach</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-6">
							At Telescode, we believe in pushing the boundaries of what's
							possible with modern technologies. Every project is an opportunity
							to explore new frameworks, experiment with cutting-edge tools, and
							deliver exceptional user experiences.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-3 h-3 bg-primary-600 rounded-full"></div>
								<span>Modern TypeScript & React Development</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-3 h-3 bg-purple-600 rounded-full"></div>
								<span>AI-Powered Solutions & Machine Learning</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
								<span>Innovation and Performance</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl">
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-3 h-3 bg-red-500 rounded-full"></div>
								<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
								<div className="w-3 h-3 bg-green-500 rounded-full"></div>
							</div>
							<pre className="text-green-400 text-sm overflow-x-auto">
								<code>{`const telescode = {
  mission: "Transform ideas into reality",
  stack: ["TypeScript", "React", "Next.js"],
  focus: "cutting-edge development",
  philosophy: "quality > quantity"
}

export default telescode;`}</code>
							</pre>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
