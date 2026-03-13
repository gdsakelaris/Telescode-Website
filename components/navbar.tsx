"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const pathname = usePathname();

	// Dynamic navigation based on current page
	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About Me", href: "/about" },
	];

	React.useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-14 justify-between">
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="flex items-center space-x-2"
							>
								<Image
									src="/images/telescode-logo.png"
									alt="Telescode Logo"
									width={28}
									height={28}
									className="h-7 w-7 rounded"
								/>
								<span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
									Telescode
								</span>
							</motion.div>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:items-center md:space-x-1">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"relative px-4 py-2 text-sm font-medium transition-colors",
									pathname === item.href
										? "text-zinc-900 dark:text-white"
										: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								)}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 dark:bg-white"
										layoutId="navbar-indicator"
										initial={false}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
							className="text-zinc-600 dark:text-zinc-400"
						>
							{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
					transition={{ duration: 0.15 }}
					className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
				>
					<div className="space-y-1 px-4 pb-3 pt-2">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="block px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	);
}
