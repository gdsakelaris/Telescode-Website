"use client";

import { motion } from "framer-motion";
import {
	Code,
	Database,
	Cloud,
	Brain,
	Smartphone,
	Settings,
	BarChart3,
	CheckCircle,
} from "lucide-react";

const skillCategories = [
	{
		icon: Code,
		title: "Programming Languages",
		skills: [
			"Python",
			"JavaScript",
			"TypeScript",
			"C#",
			"SQL",
			"HTML/CSS",
			"Java",
			"Go",
			"Swift",
			"Rust",
			"Scala",
			"PHP",
		],
	},
	{
		icon: Smartphone,
		title: "Web & Mobile Development",
		skills: [
			"React",
			"Next.js",
			"Node.js",
			"Express.js",
			"Django",
			"ASP.NET Core",
			"React Native",
			"REST APIs",
			"GraphQL",
			"WebSockets",
			"Tailwind CSS",
			"Vue.js",
			"Responsive Design",
		],
	},
	{
		icon: Cloud,
		title: "Cloud & DevOps",
		skills: [
			"AWS (Lambda, S3, EC2, RDS, CloudFormation)",
			"Azure",
			"GCP",
			"Docker",
			"Kubernetes",
			"Terraform",
			"Git",
			"GitHub Actions",
			"CI/CD Pipelines",
			"Nginx",
			"Microservices Architecture",
		],
	},
	{
		icon: BarChart3,
		title: "Data Analysis & Visualization",
		skills: [
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Seaborn",
			"Jupyter Notebooks",
			"Power BI",
			"Tableau",
			"Excel",
		],
	},
	{
		icon: Database,
		title: "Database Systems",
		skills: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Redis",
			"SQLite",
			"Oracle",
			"Elasticsearch",
			"Vector Databases",
		],
	},
	{
		icon: Brain,
		title: "Machine Learning & AI",
		skills: [
			"XGBoost",
			"LightGBM",
			"CatBoost",
			"scikit-learn",
			"TensorFlow",
			"PyTorch",
			"OpenAI API",
			"LangChain",
			"RAG",
			"Prompt Engineering",
			"NLP",
			"Computer Vision",
			"Model Fine-tuning",
		],
	},
	{
		icon: CheckCircle,
		title: "Testing & Quality",
		skills: [
			"Jest",
			"Pytest",
			"Unit Testing",
			"Integration Testing",
			"Test-Driven Development (TDD)",
		],
	},
	{
		icon: Settings,
		title: "Additional Tools",
		skills: [
			"Linux/Unix",
			"Postman",
			"Swagger",
			"Web Scraping (BeautifulSoup, Selenium)",
			"Agile/Scrum",
			"JIRA",
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
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export function Skills() {
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
						What I Work With
					</h2>
				</motion.div>

				<motion.div
					className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							variants={cardVariants}
							className="group relative"
						>
							<motion.div
								className="relative h-full rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg dark:bg-gray-900"
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="flex items-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
										<category.icon className="h-6 w-6" />
									</div>

									<h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
										{category.title}
									</h3>
								</div>

								<div className="mt-6 flex flex-wrap gap-2">
									{category.skills.map((skill, skillIndex) => (
										<motion.span
											key={skill}
											className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900 dark:hover:text-primary-300"
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
											viewport={{ once: true }}
											whileHover={{ scale: 1.05 }}
										>
											{skill}
										</motion.span>
									))}
								</div>

								{/* Skill count badge */}
								<div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
									{category.skills.length}
								</div>

								{/* Hover effect */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/5 to-primary-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* Personality Profile Section */}
				<motion.div
					className="mt-24"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="text-center">
						<h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Who I Am Beyond Code
						</h3>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
							My personality traits and strengths that shape how I approach
							problems and work with others.
						</p>
					</div>

					<div className="mt-12 grid gap-8 md:grid-cols-2">
						{/* MBTI */}
						<div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-950/50 dark:to-indigo-950/50">
							<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
								MBTI: Commander (ENTJ-T)
							</h4>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
								Bold, imaginative, and strong-willed, always finding a way – or
								making one. Decisive types who love momentum and accomplishment.
							</p>
							<div className="mt-4 grid grid-cols-2 gap-2 text-xs">
								<div className="text-blue-600 dark:text-blue-400">
									Extraverted (65%)
								</div>
								<div className="text-blue-600 dark:text-blue-400">
									Intuitive (60%)
								</div>
								<div className="text-blue-600 dark:text-blue-400">
									Thinking (54%)
								</div>
								<div className="text-blue-600 dark:text-blue-400">
									Judging (74%)
								</div>
							</div>
						</div>

						{/* HIGH5 Strengths */}
						<div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:from-green-950/50 dark:to-emerald-950/50">
							<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
								HIGH5 Strengths
							</h4>
							<div className="mt-4 space-y-2">
								{[
									"Philomath",
									"Time Keeper",
									"Deliverer",
									"Strategist",
									"Coach",
								].map((strength, index) => (
									<div
										key={strength}
										className="flex items-center text-sm"
									>
										<div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-600" />
										<span className="text-gray-700 dark:text-gray-300">
											{strength}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
