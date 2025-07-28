"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		company: "Telescode LLC",
		position: "Full-Stack Software Engineer",
		location: "Hybrid",
		period: "July 2023 - Present",
		type: "Full-time",
		description:
			"Full-stack software development and project management for client solutions and internal products.",
		achievements: [
			"Founded and launched Telescode LLC from concept to operational business, managing all aspects including strategic planning, client acquisition, financial oversight, and business development",
			"Architected and launched Software Sack, a direct-to-consumer platform enabling automated software purchases and installations using AWS services (S3, Lambda, CloudFront) with integrated Stripe payment processing",
			"Developed full-stack web applications for diverse clients using React, Next.js, and Node.js, delivering tailored solutions with responsive design and SEO optimization that enhanced client online presence",
			"Created proprietary development tools including Code2Text for source code documentation, streamlining internal workflows and improving development efficiency across large-scale projects",
		],
		technologies: ["React", "JavaScript", "AWS", "Python", "Node.js"],
	},
	{
		company: "Resilience Inc.",
		position: "Backend Software Engineer",
		location: "Remote",
		period: "January 2023 - July 2023",
		type: "Internship",
		description:
			'Led backend design and development for the mobile application "Unite".',
		achievements: [
			"Led complete backend architecture design and development for 'Unite' mobile application from scratch, creating scalable infrastructure to connect refugees with vital resource providers",
			"Engineered robust database architecture using Oracle and developed comprehensive server APIs with Node.js and Express, ensuring optimal performance and data integrity",
			"Implemented secure authentication system including user registration, login verification, password encryption, and session persistence using JSON Web Tokens for enhanced security",
			"Collaborated effectively in Scrum methodology with cross-functional UI/UX and development teams, contributing to agile problem-solving and receiving management recognition for exceptional technical proficiency",
		],
		technologies: ["Node.js", "Oracle", "Express", "SQL", "REST API"],
	},
	{
		company: "DePaul University",
		position: "Lead Sports Supervisor",
		location: "Chicago, IL",
		period: "July 2021 - June 2023",
		type: "Part-time",
		description:
			"Led sports facility operations and staff management for university athletic programs.",
		achievements: [
			"Promoted to Lead Sports Supervisor in August 2022, becoming the first person in facility history to achieve this position, demonstrating exceptional leadership and operational excellence",
			"Supervised diverse sporting activities and facility operations, maintaining high safety standards while ensuring optimal patron experience across basketball courts, track facilities, and recreational areas",
			"Authored comprehensive Sports Supervisor handbook and training manual, then planned and led formal training sessions for 10+ new hires while conducting first-round interviews for job applicants",
			"Served as primary liaison between patrons, club sports participants, building managers, and staff, earning recognition for strong interpersonal skills and ability to handle stressful situations with professionalism",
		],
		technologies: [],
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

export function Experience() {
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
					<p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						From intern to entrepreneur - here's how my career has shaped who I
						am today.
					</p>
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
												<div className="flex items-center">
													<MapPin className="mr-1 h-4 w-4" />
													{exp.location}
												</div>
											</div>
										</div>

										<p className="mt-4 text-gray-600 dark:text-gray-300">
											{exp.description}
										</p>

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
