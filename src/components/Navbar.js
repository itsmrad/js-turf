"use client";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full flex items-center justify-between px-6 lg:px-12 py-8 bg-black">
			<Link
				href="/"
				className="flex items-center gap-4 group">
				<div className="w-3.5 h-3.5 bg-white rounded-sm group-hover:-rotate-12 transition-transform duration-500 ease-out" />
				<span className="text-xl font-bold tracking-tighter text-white">
					JS TURF
				</span>
			</Link>
			<div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest flex items-center gap-2">
				<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
				Execution Engine Live
			</div>
		</nav>
	);
}
