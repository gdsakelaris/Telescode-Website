"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex items-center">
						<Link
							href="/"
							className="flex items-center space-x-2"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center space-x-2"
							>
								<div className="h-8 w-8 rounded bg-gradient-to-tr from-primary-600 to-primary-400" />
								<span className="text-xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
									Telescode
								</span>
							</motion.div>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary-600",
									pathname === item.href
										? "text-primary-600"
										: "text-gray-600 dark:text-gray-300"
								)}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
										layoutId="navbar-indicator"
										initial={false}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 30,
										}}
									/>
								)}
							</Link>
						))}
						<ThemeToggle />
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
						<ThemeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
							className="ml-2"
						>
							{isOpen ? (
								<X className="h-4 w-4" />
							) : (
								<Menu className="h-4 w-4" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.2 }}
					className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
				>
					<div className="space-y-1 px-4 pb-3 pt-2">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"
								onClick={(e) => {
									e.preventDefault();
									const target = document.querySelector(item.href);
									if (target) {
										target.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									}
									setIsOpen(false);
								}}
							>
								{item.name}
							</a>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	);
}
