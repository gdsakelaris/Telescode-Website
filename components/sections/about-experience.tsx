"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		company: "Telescode",
		position: "Full-Stack Software Engineer",
		period: "July 2023 - Present",
		type: "Full-time",
		achievements: [
			"Developed e-commerce platform for digital product sales using React and AWS serverless architecture",
			"Implemented payment processing with Stripe API and automated file delivery via S3 signed URLs",
			"Deployed serverless backend using AWS Lambda, API Gateway, and DynamoDB with Infrastructure as Code",
			"Developed and commercialized portfolio of Windows applications and data products, ranging from automated data collection tools to machine learning prediction systems",
		],
		technologies: ["React", "AWS", "Lambda", "API Gateway", "DynamoDB", "S3", "Stripe"],
	},
	{
		company: "Resilience, Inc.",
		position: "Backend Software Engineer",
		period: "January 2023 - July 2023",
		type: "Full-time",
		achievements: [
			"Led end-to-end development of a mobile application from inception to production",
			"Architected Oracle database and Node.js/Express backend while prototyping React Native frontend components",
			"Engineered complete backend infrastructure from scratch, including database design, RESTful APIs, and secure authentication",
			"Implemented core security features including password encryption, JWT-based session persistence, and user registration/verification systems",
		],
		technologies: ["Node.js", "Express", "Oracle", "React Native", "JWT", "REST API"],
	},
	{
		company: "Ray Meyer Fitness and Recreation Center",
		position: "Lead Sports and Recreation Supervisor",
		period: "August 2021 - June 2023",
		type: "Part-time",
		achievements: [
			"Promoted to Lead Sports Supervisor in August 2022, becoming the first person in facility history to achieve this position, demonstrating exceptional leadership",
			"Authored comprehensive Sports Supervisor handbook and training manual, then planned and led formal training sessions for 15+ new hires",
			"Supervised diverse sporting activities across basketball courts, tracks, and recreational areas while maintaining high safety standards and patron experience",
			"Served as primary liaison between patrons, club sports participants, building managers, and staff, earning recognition for strong interpersonal skills and ability to handle stressful situations with professionalism",
		],
		technologies: ["Leadership", "Communication", "Training", "Conflict Resolution", "Organization"],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export function AboutExperience() {
	return (
		<section className="py-24 bg-white dark:bg-gray-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						My Professional Journey
					</h2>
				</motion.div>

				<motion.div
					className="mt-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{experiences.map((exp, index) => (
						<motion.div
							key={`${exp.company}-${exp.position}`}
							variants={cardVariants}
							className={`relative ${
								index !== experiences.length - 1 ? "pb-12" : ""
							}`}
						>
							{/* Timeline line */}
							{index !== experiences.length - 1 && (
								<div className="absolute left-8 top-16 h-full w-px bg-gray-200 dark:bg-gray-700" />
							)}

							<div className="relative flex items-start">
								{/* Timeline dot */}
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
									<Building className="h-6 w-6" />
								</div>

								{/* Content */}
								<div className="ml-8 flex-1">
									<div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
											<div>
												<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
													{exp.position}
												</h3>
												<p className="text-lg text-primary-600 dark:text-primary-400">
													{exp.company}
												</p>
											</div>

											<div className="mt-2 flex flex-col text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
												<div className="flex items-center">
													<Calendar className="mr-1 h-4 w-4" />
													{exp.period}
												</div>

											</div>
										</div>
										<ul className="mt-4 space-y-2">
											{exp.achievements.map((achievement, achievementIndex) => (
												<li
													key={achievementIndex}
													className="flex items-start text-sm text-gray-600 dark:text-gray-300"
												>
													<div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary-600 flex-shrink-0" />
													{achievement}
												</li>
											))}
										</ul>

										{exp.technologies.length > 0 && (
											<div className="mt-6 flex flex-wrap gap-2">
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
													>
														{tech}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
