'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Featured Telescode projects
const featuredProjects = [
  {
    id: 1,
    title: 'UFC Fight Prediction System',
    description: 'Machine learning model achieving 77% accuracy in predicting UFC fight outcomes using XGBoost and neural networks.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'XGBoost', 'Machine Learning', 'Web Scraping', 'Data Science'],
    githubUrl: 'https://github.com/gdsakelaris',
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Software Sack',
    description: 'Online software marketplace with React frontend and AWS backend for purchasing and downloading applications.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'AWS', 'Stripe', 'Lambda', 'S3'],
    githubUrl: 'https://github.com/gdsakelaris',
    liveUrl: 'https://softwaresack.com',
    featured: true,
  },
  {
    id: 3,
    title: 'SumTube - AI Video Summarizer',
    description: 'AI-driven web application that generates concise summaries of YouTube videos using OpenAI GPT models.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'Django', 'OpenAI', 'YouTube API', 'PostgreSQL'],
    githubUrl: 'https://github.com/gdsakelaris',
    liveUrl: null,
    featured: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function FeaturedProjects() {
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
            Featured Projects
          </h2>
                     <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
             Showcasing innovative projects in machine learning, web development, and enterprise software solutions.
           </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                        aria-label="View source code"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 