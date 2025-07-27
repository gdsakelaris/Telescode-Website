"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		company: "Telescode LLC",
		position: "Founder and Software Engineer",
		location: "Hybrid",
		period: "July 2023 - Present",
		type: "Full-time",
		description:
			"Founded the company to monetize personal software projects and create websites for local businesses.",
		achievements: [
			'Developed and launched "Software Sack," a direct-to-consumer platform for purchasing and installing software applications',
			'Created "Code2Text," a development tool for large-scale source code documentation',
			"Conduct full-stack web development projects using JavaScript, React, and HTML/CSS with AWS deployment",
			"Provide tailored solutions including website development and SEO optimization for clients",
			"Oversee all business aspects including planning, operations, software engineering, and client outreach",
		],
		technologies: ["React", "JavaScript", "AWS", "Python", "Node.js"],
	},
	{
		company: "Resilience Inc.",
		position: "Full Stack Software Engineering Intern",
		location: "Remote",
		period: "January 2023 - July 2023",
		type: "Internship",
		description:
			'Led backend development for "Unite," a mobile application connecting refugees with vital resource providers.',
		achievements: [
			"Engineered the backend architecture from scratch, including database design and development",
			"Selected Oracle for database management and utilized Node.js with Express for server APIs",
			"Implemented core features including user registration, login verification, and password encryption",
			"Collaborated with UI/UX team to create intuitive front-end using React Native",
			"Actively participated in Scrum meetings with cross-functional teams",
			"Recognized by management for exceptional communication and technical proficiency",
		],
		technologies: ["Node.js", "React Native", "Oracle", "Express", "JWT"],
	},
	{
		company: "Ray Meyer Fitness and Recreation Center",
		position: "Lead Sports and Recreation Supervisor",
		location: "Chicago, IL",
		period: "August 2021 - June 2023",
		type: "Part-time",
		description:
			"Promoted to Lead Sports Supervisor, becoming the first in the facility's history.",
		achievements: [
			"Supervised diverse sporting activities and events while maintaining facility standards",
			"Authored comprehensive Sports Supervisor handbook and training manual",
			"Trained 10+ new hires and conducted first-round interviews for job applicants",
			"Assisted the Assistant Director of Club Sports with staff management",
			"Served as liaison between patrons, club sports participants, and staff",
			"Recognized for strong interpersonal skills and professionalism",
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
						Professional Experience
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						A journey through software engineering, entrepreneurship, and
						leadership roles.
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
