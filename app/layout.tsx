import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Telescode LLC - Professional Software Development",
		template: "%s | Telescode LLC",
	},
	description:
		"Telescode LLC specializes in cutting-edge software development, showcasing innovative projects and professional solutions.",
	keywords: [
		"software development",
		"web development",
		"mobile apps",
		"typescript",
		"react",
		"next.js",
	],
	authors: [{ name: "Telescode LLC" }],
	creator: "Telescode LLC",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://telescode.com",
		title: "Telescode LLC - Professional Software Development",
		description:
			"Telescode LLC specializes in cutting-edge software development, showcasing innovative projects and professional solutions.",
		siteName: "Telescode LLC",
	},
	twitter: {
		card: "summary_large_image",
		title: "Telescode LLC - Professional Software Development",
		description:
			"Telescode LLC specializes in cutting-edge software development, showcasing innovative projects and professional solutions.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange={false}
				>
					<div className="flex min-h-screen flex-col">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
