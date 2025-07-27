"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
	{
		institution: "DePaul University",
		degree: "Bachelor of Science",
		major: "Computer Science",
		concentration: "Software Development",
		location: "Chicago, IL",
		period: "2019 - 2023",
		gpa: "3.715",
		honors: "Magna Cum Laude",
		achievements: [
			"Dean's List: 2020-2021 Winter, 2021-2022 Autumn, 2022-2023 Autumn, Winter, Spring, 2023-2024 Autumn",
			"Student Representative on CDM Personnel Committee for faculty tenure/promotion evaluations",
			"Co-founded DePaul Martial Arts Club, serving as Vice President and Treasurer",
			"Conducted surveys and data analysis for faculty evaluation processes",
		],
		relevantCourses: [
			"Data Analysis",
			"Distributed Systems",
			"Object-Oriented Enterprise Application Development",
			"Database Systems & Programming",
			"Software Testing & Agile Development",
			"Mobile App Development for iOS",
			"Safe Systems Programming (Rust)",
			"Interactive Web Scripting",
		],
	},
	{
		institution: "Purdue University Northwest",
		degree: "Master of Business Administration",
		major: "Finance",
		location: "Hammond, IN",
		period: "Accepted, Enrollment Deferred",
		status: "Deferred to focus on Telescode LLC",
		potentialStart: "Fall 2025",
		achievements: [
			"Accepted into MBA program with Finance concentration",
			"Strategically deferred to pursue entrepreneurial opportunities",
			"Considering other graduate programs in Chicago area",
		],
	},
];

export function Education() {
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
						My Educational Background
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						How my academic journey shaped my technical foundation and
						leadership skills.
					</p>
				</motion.div>

				<div className="mt-16 space-y-12">
					{education.map((edu, index) => (
						<motion.div
							key={edu.institution}
							className="relative"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
									{/* Left Column */}
									<div className="flex-1">
										<div className="flex items-start">
											<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
												<GraduationCap className="h-6 w-6" />
											</div>

											<div className="ml-4 flex-1">
												<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
													{edu.institution}
												</h3>
												<p className="text-lg text-primary-600 dark:text-primary-400">
													{edu.degree} - {edu.major}
												</p>
												{edu.concentration && (
													<p className="text-gray-600 dark:text-gray-300">
														Concentration: {edu.concentration}
													</p>
												)}

												<div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
													<div className="flex items-center">
														<Calendar className="mr-1 h-4 w-4" />
														{edu.period}
													</div>
													<div className="flex items-center">
														<MapPin className="mr-1 h-4 w-4" />
														{edu.location}
													</div>
												</div>
											</div>
										</div>

										{/* Achievements */}
										<div className="mt-6">
											<h4 className="font-medium text-gray-900 dark:text-white">
												Key Achievements
											</h4>
											<ul className="mt-2 space-y-1">
												{edu.achievements.map(
													(achievement, achievementIndex) => (
														<li
															key={achievementIndex}
															className="flex items-start text-sm text-gray-600 dark:text-gray-300"
														>
															<div className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary-600 flex-shrink-0" />
															{achievement}
														</li>
													)
												)}
											</ul>
										</div>

										{/* Relevant Courses */}
										{edu.relevantCourses && (
											<div className="mt-6">
												<h4 className="font-medium text-gray-900 dark:text-white">
													Relevant Coursework
												</h4>
												<div className="mt-3 flex flex-wrap gap-2">
													{edu.relevantCourses.map((course) => (
														<span
															key={course}
															className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
														>
															{course}
														</span>
													))}
												</div>
											</div>
										)}
									</div>

									{/* Right Column - Stats */}
									<div className="mt-6 lg:mt-0 lg:ml-8">
										<div className="space-y-4">
											{edu.gpa && (
												<div className="rounded-lg bg-primary-50 p-4 text-center dark:bg-primary-900/20">
													<div className="flex items-center justify-center">
														<Award className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
														<span className="text-sm font-medium text-primary-600 dark:text-primary-400">
															GPA
														</span>
													</div>
													<div className="mt-1 text-2xl font-bold text-primary-600 dark:text-primary-400">
														{edu.gpa}
													</div>
													{edu.honors && (
														<div className="mt-1 text-xs text-primary-700 dark:text-primary-300">
															{edu.honors}
														</div>
													)}
												</div>
											)}

											{edu.status && (
												<div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
													<div className="text-sm font-medium text-blue-600 dark:text-blue-400">
														Status
													</div>
													<div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
														{edu.status}
													</div>
													{edu.potentialStart && (
														<div className="mt-1 text-xs text-blue-600 dark:text-blue-400">
															Potential start: {edu.potentialStart}
														</div>
													)}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
