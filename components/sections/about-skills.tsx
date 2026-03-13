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
			"C#",
			"JavaScript",
			"TypeScript",
			"SQL",
			"HTML/CSS",
			"Java",
			"Swift",
			"Rust",
			"Scala",
			"C",
			"C++",
		],
	},
	{
		icon: Smartphone,
		title: "Web & API Development",
		skills: [
			"FastAPI",
			"Django",
			"ASP.NET Core",
			"Node.js",
			"Express.js",
			"React",
			"Next.js",
			"Alpine.js",
			"Tailwind CSS",
			"GraphQL",
			"RESTful APIs",
			"Spring Boot",
			"Pydantic",
		],
	},
	{
		icon: Settings,
		title: "Backend & Architecture",
		skills: [
			"Celery",
			"Redis",
			"Asynchronous Processing",
			"Microservices",
			"Event-Driven Architecture",
			"JWT Authentication",
			"bcrypt",
			"Stripe API",
		],
	},
	{
		icon: Database,
		title: "Database & Storage",
		skills: [
			"PostgreSQL",
			"SQLAlchemy ORM",
			"Alembic Migrations",
			"Redis (Broker & Cache)",
			"MongoDB",
			"AWS S3",
			"boto3",
			"Vector Databases",
		],
	},
	{
		icon: Cloud,
		title: "Cloud & DevOps",
		skills: [
			"AWS EC2",
			"AWS Lambda",
			"AWS S3",
			"AWS RDS",
			"Docker Compose",
			"GitHub Actions",
			"CI/CD Pipelines",
			"Kubernetes",
			"Nginx",
			"Linux/Unix",
			"SSH Automation",
			"Jenkins",
		],
	},
	{
		icon: Brain,
		title: "Machine Learning & AI",
		skills: [
			"ChatGPT",
			"Claude (Code)",
			"Gemini",
			"Grok",
			"Prompt Engineering",
			"XGBoost",
			"scikit-learn",
			"PyTorch",
			"NLP",
		],
	},
	{
		icon: CheckCircle,
		title: "Professional",
		skills: [
			"Technical Discovery",
			"Requirements Gathering",
			"Agile/Scrum",
			"Stakeholder Management",
			"Product Demos",
			"Full-Cycle Development",
		],
	},
	{
		icon: BarChart3,
		title: "Data & Analysis",
		skills: [
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Scikit-learn Pipelines",
			"Web Scraping",
			"Jupyter Notebooks",
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

export function AboutSkills() {
	return (
		<section className="py-20 bg-zinc-50 dark:bg-zinc-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-14"
				>
					<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Skills</p>
					<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
						What I Work With
					</h2>
				</motion.div>

				<motion.div
					className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{skillCategories.map((category) => (
						<motion.div key={category.title} variants={cardVariants}>
							<div className="h-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
								<div className="flex items-center gap-2.5 mb-4">
									<category.icon className="h-4 w-4 text-zinc-400" />
									<h3 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
										{category.title}
									</h3>
								</div>
								<div className="flex flex-wrap gap-1.5">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded text-xs font-mono hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-12 grid gap-4 md:grid-cols-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
						<h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wide mb-3">
							MBTI — Commander (ENTJ-T)
						</h4>
						<p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
							Bold and decisive, always finding a way — or making one. Strong drive for momentum and accomplishment.
						</p>
						<div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
							{[["Extraverted", "65%"], ["Intuitive", "60%"], ["Thinking", "54%"], ["Judging", "74%"]].map(([trait, pct]) => (
								<div key={trait} className="flex justify-between text-xs">
									<span className="text-zinc-500 dark:text-zinc-400">{trait}</span>
									<span className="font-mono text-zinc-900 dark:text-white">{pct}</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
						<h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wide mb-4">
							HIGH5 Strengths
						</h4>
						<div className="space-y-2.5">
							{["Philomath", "Time Keeper", "Deliverer", "Strategist", "Coach"].map((s, i) => (
								<div key={s} className="flex items-center gap-2.5">
									<span className="text-xs font-mono text-zinc-400">0{i + 1}</span>
									<span className="text-sm text-zinc-700 dark:text-zinc-300">{s}</span>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
