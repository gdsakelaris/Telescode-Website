"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Zap, Shield, Users } from "lucide-react";

const services = [
	{
		icon: Code,
		title: "Machine Learning & AI",
		description:
			"Custom machine learning models and AI solutions for predictive analytics and data-driven insights.",
		features: [
			"XGBoost Models",
			"Neural Networks",
			"Predictive Analytics",
			"Data Science",
		],
	},
	{
		icon: Smartphone,
		title: "Web Development",
		description:
			"Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
		features: [
			"React/Next.js",
			"TypeScript",
			"Full-Stack Development",
			"E-Commerce Platforms",
		],
	},
	{
		icon: Cloud,
		title: "AWS Cloud Solutions",
		description:
			"Scalable cloud infrastructure and deployment using Amazon Web Services.",
		features: ["AWS Lambda", "S3 Storage", "API Gateway", "CloudFront CDN"],
	},
	{
		icon: Zap,
		title: "Custom Software Development",
		description:
			"Tailored desktop and web applications to solve specific business challenges.",
		features: [
			"Python Applications",
			"Desktop Tools",
			"Automation Scripts",
			"API Development",
		],
	},
	{
		icon: Shield,
		title: "Enterprise Solutions",
		description:
			"Robust backend systems and database solutions for enterprise-level applications.",
		features: [
			"Database Design",
			"REST APIs",
			"System Architecture",
			"Performance Optimization",
		],
	},
	{
		icon: Users,
		title: "Technical Consulting",
		description:
			"Expert guidance on technology choices, architecture design, and development best practices.",
		features: [
			"Technology Assessment",
			"Architecture Planning",
			"Code Reviews",
			"Training",
		],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export function Services() {
	return (
		<section className="py-24 bg-gray-50 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Our Services
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						Comprehensive software development services to bring your ideas to
						life with cutting-edge technology.
					</p>
				</motion.div>

				<motion.div
					className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							variants={cardVariants}
							className="group relative"
						>
							<motion.div
								className="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
									<service.icon className="h-6 w-6" />
								</div>

								<h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
									{service.title}
								</h3>

								<p className="mt-2 text-gray-600 dark:text-gray-300">
									{service.description}
								</p>

								<ul className="mt-6 space-y-2">
									{service.features.map((feature) => (
										<li
											key={feature}
											className="flex items-center text-sm text-gray-500 dark:text-gray-400"
										>
											<div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-600" />
											{feature}
										</li>
									))}
								</ul>

								{/* Hover effect */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/5 to-primary-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
