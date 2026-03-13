"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		company: "LK Small",
		position: "Software Engineer & Technical Consultant",
		period: "Nov 2025 – Present",
		type: "Contract",
		achievements: [
			"Built and maintained multiple websites including a donation platform with Stripe integration to process online contributions",
			"Provided ongoing technical consulting to the founder/president, evaluating and implementing technology solutions to support organizational goals",
			"Contributed to development of a mobile application to support the organization's initiatives",
			"Created professional presentations for leadership, including a partnership pitch between LK Small and Dollar General for a literacy program, and a funding presentation for financing discussions",
		],
		technologies: ["React", "Stripe", "React Native", "TypeScript", "Node.js"],
	},
	{
		company: "Telescode LLC",
		position: "Founder & Full-Stack Software Engineer",
		period: "Jul 2023 – Present",
		type: "Full-time",
		achievements: [
			"Founded a software consultancy and SaaS incubator; launched Starscreen.net, an AI-powered recruiting platform, while delivering bespoke web solutions for small business clients",
			"Architected a production-ready multi-tenant backend using FastAPI, PostgreSQL, and Celery, handling asynchronous resume parsing and AI scoring (OpenAI GPT-4o) for high-volume recruitment workflows",
			"Designed scalable cloud infrastructure on AWS (EC2, S3) with Docker; implemented cost-optimization strategies that reduced projected storage costs by ~60% for enterprise-tier data",
			"Integrated Stripe for subscription management (Free to Enterprise tiers) with enterprise-grade security (JWT, Row-Level Security) to meet B2B compliance requirements",
			"Built e-commerce platform using React and AWS serverless architecture (Lambda, API Gateway, DynamoDB) with Stripe payments and S3 automation reducing fulfillment time by 99%",
			"Commercialized 3 Windows applications and data products serving 120+ users, including ML prediction systems and automated data tools",
		],
		technologies: ["FastAPI", "PostgreSQL", "Celery", "Redis", "AWS", "Docker", "React", "Stripe", "OpenAI GPT-4o", "GitHub Actions"],
	},
	{
		company: "Resilience, Inc.",
		position: "Backend Software Engineer",
		period: "Jan 2023 – Jul 2023",
		type: "Full-time",
		achievements: [
			"Led end-to-end development of a mobile application from inception, architecting the full backend infrastructure from scratch",
			"Architected Oracle database and Node.js/Express backend while prototyping React Native frontend components",
			"Engineered 15+ RESTful API endpoints supporting 1,000+ daily API requests",
			"Implemented core security features including bcrypt password encryption, JWT-based session persistence, and user registration/verification systems",
		],
		technologies: ["Node.js", "Express", "Oracle", "React Native", "JWT", "bcrypt", "REST API"],
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
		<section className="py-20 bg-zinc-50 dark:bg-zinc-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-14"
				>
					<p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">Experience</p>
					<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
						Professional Journey
					</h2>
				</motion.div>

				<motion.div
					className="space-y-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{experiences.map((exp, index) => (
						<motion.div
							key={`${exp.company}-${exp.position}`}
							variants={cardVariants}
						>
							<div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 md:p-8">
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
									<div>
										<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
											{exp.position}
										</h3>
										<p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
											{exp.company}
										</p>
									</div>
									<div className="flex items-center gap-1.5 mt-2 sm:mt-0 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
										<Calendar className="h-3 w-3" />
										{exp.period}
									</div>
								</div>

								<ul className="space-y-2 mb-5">
									{exp.achievements.map((achievement, i) => (
										<li key={i} className="flex items-start text-sm text-zinc-600 dark:text-zinc-300">
											<span className="mr-2.5 mt-2 h-1 w-1 rounded-full bg-zinc-400 flex-shrink-0" />
											{achievement}
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-1.5">
									{exp.technologies.map((tech) => (
										<span
											key={tech}
											className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded text-xs font-mono"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
