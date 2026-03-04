"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { questions } from "@/data/questions";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export default function HomePage() {
	const [filter, setFilter] = useState("all");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [search, setSearch] = useState("");
	const [solvedMap, setSolvedMap] = useState({});

	const categories = ["all", ...new Set(questions.map((q) => q.category))];

	// Compute dynamic difficulty tabs based on selected category
	const difficultyTabs = (() => {
		if (categoryFilter === "all") return [];
		const relevantQuestions = questions.filter(
			(q) => q.category === categoryFilter,
		);
		const uniqueDiffs = [
			...new Set(relevantQuestions.map((q) => q.difficulty)),
		];
		if (uniqueDiffs.length <= 1) return []; // no filter needed if only 1 difficulty
		return [
			{ id: "all", label: "All" },
			...uniqueDiffs.map((d) => ({ id: d, label: d })),
		];
	})();

	// Reset difficulty filter when category changes
	const handleCategoryChange = (cat) => {
		setCategoryFilter(cat);
		setFilter("all");
	};

	const handleResetProgress = () => {
		if (
			window.confirm(
				"Reset all progress? This will mark all problems as unsolved.",
			)
		) {
			localStorage.removeItem("js-turf-solved");
			setSolvedMap({});
		}
	};

	useEffect(() => {
		const saved = localStorage.getItem("js-turf-solved");
		if (saved) setSolvedMap(JSON.parse(saved));
	}, []);

	const filtered = questions.filter((q) => {
		const matchDiff = filter === "all" || q.difficulty === filter;
		const matchCategory =
			categoryFilter === "all" || q.category === categoryFilter;
		const matchSearch =
			!search ||
			q.title.toLowerCase().includes(search.toLowerCase()) ||
			String(q.number).includes(search);
		return matchDiff && matchCategory && matchSearch;
	});

	const totalSolved = Object.keys(solvedMap).length;
	const progressPercent = questions.length
		? Math.round((totalSolved / questions.length) * 100)
		: 0;

	return (
		<div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center">
			<div className="max-w-6xl w-[90%] md:w-[85%] lg:w-[75%] flex flex-col min-h-screen relative mx-auto">
				<Navbar />

				<main className="flex-1 w-full mt-12 lg:mt-16 mb-16 flex flex-col">
					{/* Header */}
					<header>
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-8">
							Problems.
						</h1>

						<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
							<p className="text-sm text-neutral-500 tracking-tight font-light max-w-xl leading-relaxed">
								Master JavaScript fundamentals through deliberate practice.
								Extreme minimalism, functional precision.
							</p>

							<div className="w-full xl:w-72 shrink-0">
								<div className="flex justify-between items-center text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
									<span>Completion Status</span>
									<div className="flex items-center gap-4">
										<span className="text-white">{progressPercent}%</span>
										{totalSolved > 0 && (
											<button
												onClick={handleResetProgress}
												className="text-[9px] text-neutral-700 hover:text-red-400 transition-colors tracking-widest uppercase">
												Reset
											</button>
										)}
									</div>
								</div>
								<div className="h-px w-full bg-neutral-900 overflow-hidden">
									<div
										className="h-full bg-white transition-all duration-1000 ease-out"
										style={{ width: `${progressPercent}%` }}
									/>
								</div>
							</div>
						</div>
					</header>

					{/* Controls */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 mt-8">
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full sm:w-auto">
							<div className="flex items-center gap-3">
								<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
									List
								</span>
								<DropdownMenu>
									<DropdownMenuTrigger className="text-xs font-mono tracking-widest bg-transparent border border-neutral-800 hover:border-neutral-600 text-white rounded-lg px-3 py-2 cursor-pointer focus:outline-none transition-colors uppercase shrink-0 flex items-center justify-between gap-4 min-w-[160px]">
										<span className="truncate">
											{categoryFilter === "all"
												? "All Categories"
												: categoryFilter}
										</span>
										<svg
											width="12"
											height="12"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="opacity-50 shrink-0">
											<path d="m6 9 6 6 6-6" />
										</svg>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-56 bg-neutral-900 border-neutral-800 text-white p-1 rounded-xl shadow-2xl"
										align="start">
										<DropdownMenuRadioGroup
											value={categoryFilter}
											onValueChange={handleCategoryChange}>
											{categories.map((cat) => (
												<DropdownMenuRadioItem
													key={cat}
													value={cat}
													className="text-xs font-mono tracking-widest uppercase cursor-pointer py-2 rounded-lg data-[highlighted]:bg-neutral-800 data-[highlighted]:text-white data-[state=checked]:text-emerald-500">
													{cat === "all" ? "All Categories" : cat}
												</DropdownMenuRadioItem>
											))}
										</DropdownMenuRadioGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>

							{difficultyTabs.length > 0 && (
								<>
									<div className="h-4 w-px bg-neutral-800 hidden sm:block shrink-0" />

									<div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto custom-scrollbar">
										{difficultyTabs.map((tab) => (
											<button
												key={tab.id}
												onClick={() => setFilter(tab.id)}
												className={`text-xs tracking-widest uppercase transition-all duration-300 shrink-0 ${
													filter === tab.id
														? "text-white font-medium"
														: "text-neutral-600 hover:text-neutral-300"
												}`}>
												{tab.label}
											</button>
										))}
									</div>
								</>
							)}
						</div>

						<div className="w-full sm:w-auto sm:min-w-[320px]">
							<input
								type="text"
								placeholder="Search directory..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full bg-transparent border-b border-neutral-800 py-3 text-lg text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors rounded-none"
							/>
						</div>
					</div>

					{/* Architecturally Clean List */}
					<div className="border-t border-neutral-900">
						{filtered.length === 0 ? (
							<div className="py-24 text-center">
								<p className="text-neutral-600 text-lg tracking-tight">
									No protocols exactly match your query.
								</p>
							</div>
						) : (
							<div className="divide-y divide-neutral-900 group/list">
								{filtered.map((q) => {
									const isSolved = solvedMap[q.id];
									return (
										<Link
											key={q.id}
											href={`/problems/${q.id}`}
											className="flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-5 lg:hover:px-6 lg:-mx-6 transition-all duration-300 group hover:bg-neutral-950">
											<div className="flex items-start sm:items-center gap-6 md:gap-10 min-w-0">
												<div className="w-12 shrink-0">
													<span className="text-sm lg:text-base font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
														{String(q.number).padStart(2, "0")}
													</span>
												</div>

												<div className="flex flex-col min-w-0">
													<span className="text-base sm:text-lg font-medium tracking-tight text-neutral-400 group-hover:text-white transition-colors truncate">
														{q.title}
													</span>
												</div>
											</div>

											<div className="flex items-center gap-8 shrink-0 mt-6 sm:mt-0 lg:ml-6 pl-18 sm:pl-0">
												<span
													className={`text-[10px] font-mono tracking-[0.2em] uppercase w-28 sm:text-right ${
														q.difficulty === "basic" || q.difficulty === "easy"
															? "text-emerald-500"
															: q.difficulty === "hard"
																? "text-red-500"
																: "text-amber-500"
													}`}>
													{q.difficulty}
												</span>

												<div className="w-8 flex justify-end">
													{isSolved ? (
														<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
													) : (
														<div className="w-2.5 h-2.5 border border-neutral-700 rounded-full group-hover:border-neutral-500 transition-colors" />
													)}
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						)}
					</div>

					{/* Footer padding equivalent */}
					<div className="h-40 w-full" />
				</main>
			</div>
		</div>
	);
}
