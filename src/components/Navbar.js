"use client";
import { BsTwitterX } from "react-icons/bs";
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
			<div className="flex flex-col items-end gap-3">
				<div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest flex items-center gap-2">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
					Execution Engine Live
				</div>
				<a
					href="https://x.com/anupamio"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative flex items-center gap-3 px-4 py-2 rounded-full bg-[#030303] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden">
					<div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
					<span className="relative z-10 text-[11px] font-semibold text-neutral-400 uppercase tracking-widest group-hover:text-neutral-200 transition-colors">
						Created by <span className="text-white">itsmrad</span>
					</span>
					<div className="relative z-10 flex items-center justify-center p-1.5 rounded-full bg-white text-black group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
						<BsTwitterX />
					</div>
				</a>
			</div>
		</nav>
	);
}
