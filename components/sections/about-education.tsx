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
		period: "2020 - 2023",
		gpa: "3.715",
		honors: "Magna Cum Laude",
		achievements: [
			"Dean's List: 2020-2021 Winter, 2021-2022 Autumn, 2022-2023 Autumn, Winter, Spring, 2023-2024 Autumn",
			"Student Representative on CDM Personnel Committee for faculty tenure/promotion evaluations",
			"Co-founded DePaul Martial Arts Club, serving as Vice President and Treasurer",
		],
		relevantCourses: [
			"Object-Oriented Enterprise Application Development",
			"Database Systems & Programming",
			"Data Analysis",
			"Software Testing & Agile Development",
			"Distributed Systems",
			"Safe Systems Programming (Rust)",
			"Mobile App Development for iOS",
			"Web Development",
			"Interactive Web Scripting",
		],
	},
];

export function AboutEducation() {
	return (
		<section className="py-20 bg-white dark:bg-zinc-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-14"
				>
					<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Education</p>
					<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
						Academic Background
					</h2>
				</motion.div>

				<div className="space-y-6">
					{education.map((edu, index) => (
						<motion.div
							key={edu.institution}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8">
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
									<div className="flex-1">
										<div className="flex items-start gap-3 mb-4">
											<GraduationCap className="h-5 w-5 text-zinc-400 mt-0.5 flex-shrink-0" />
											<div>
												<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
													{edu.institution}
												</h3>
												<p className="text-sm text-zinc-500 dark:text-zinc-400">
													{edu.degree} · {edu.major}
													{edu.concentration && ` · ${edu.concentration}`}
												</p>
												<div className="flex gap-3 mt-1 text-xs text-zinc-400 font-mono">
													<span>{edu.period}</span>
													<span>·</span>
													<span>{edu.location}</span>
												</div>
											</div>
										</div>

										<div className="mb-4">
											<p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">Achievements</p>
											<ul className="space-y-1.5">
												{edu.achievements.map((a, i) => (
													<li key={i} className="flex items-start text-sm text-zinc-600 dark:text-zinc-300">
														<span className="mr-2.5 mt-2 h-1 w-1 rounded-full bg-zinc-400 flex-shrink-0" />
														{a}
													</li>
												))}
											</ul>
										</div>

										{edu.relevantCourses && (
											<div>
												<p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">Coursework</p>
												<div className="flex flex-wrap gap-1.5">
													{edu.relevantCourses.map((course) => (
														<span
															key={course}
															className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded text-xs font-mono"
														>
															{course}
														</span>
													))}
												</div>
											</div>
										)}
									</div>

									{edu.gpa && (
										<div className="lg:text-right">
											<div className="inline-block rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 text-center min-w-[100px]">
												<div className="flex items-center justify-center gap-1.5 mb-1">
													<Award className="h-3.5 w-3.5 text-zinc-400" />
													<span className="text-xs text-zinc-400 uppercase tracking-wide font-mono">GPA</span>
												</div>
												<div className="text-2xl font-bold text-zinc-900 dark:text-white">
													{edu.gpa}
												</div>
												{edu.honors && (
													<div className="text-xs text-zinc-400 mt-1">{edu.honors}</div>
												)}
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
