"use client";

import React from "react";

export default function ResultsPanel({ results, isRunning }) {
	if (isRunning) {
		return (
			<div className="h-full flex flex-col items-center justify-center bg-black">
				<div className="flex flex-col items-center gap-6">
					<div className="w-px h-16 bg-white animate-[pulse_1.5s_ease-in-out_infinite]" />
					<span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
						Processing
					</span>
				</div>
			</div>
		);
	}

	if (!results) {
		return (
			<div className="h-full flex items-center justify-center px-6 bg-black">
				<p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600 flex items-center gap-4">
					Awaiting Execution{" "}
					<span className="w-1 h-1 bg-neutral-800 rounded-full" /> CMD+ENTER
				</p>
			</div>
		);
	}

	if (results.error) {
		return (
			<div className="h-full overflow-y-auto p-6 lg:p-12 bg-black custom-scrollbar">
				<div className="max-w-4xl">
					<h3 className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-[0.2em] mb-8 pb-4 border-b border-red-900/30">
						Fatal Error
					</h3>
					<pre className="text-sm md:text-base text-neutral-400 font-mono whitespace-pre-wrap leading-relaxed">
						{results.error}
					</pre>
				</div>
			</div>
		);
	}

	const { allPassed, passedTests, totalTests } = results;

	return (
		<div className="h-full overflow-y-auto p-6 lg:p-10 bg-black custom-scrollbar">
			<div className="max-w-5xl space-y-16">
				{/* Status Header */}
				<div className="pb-10 border-b border-neutral-900 flex items-end justify-between">
					<div>
						<span
							className={`block text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${allPassed ? "text-emerald-500" : "text-amber-500"}`}>
							{allPassed ? "Algorithm Verified" : "Algorithm Failed"}
						</span>
						<span className="text-5xl lg:text-7xl font-bold tracking-tighter text-white">
							{passedTests}{" "}
							<span className="text-neutral-700 font-light">
								/ {totalTests}
							</span>
						</span>
					</div>
				</div>

				{/* Matrix */}
				<div className="space-y-12">
					{results.results.map((r, i) => (
						<div
							key={i}
							className="group">
							<div className="flex items-center justify-between py-4 border-b border-neutral-900 group-hover:border-neutral-700 transition-colors">
								<div className="flex items-center gap-8">
									<span className="text-[10px] font-mono text-neutral-600 w-12 tracking-widest">
										T-{String(r.testCase).padStart(2, "0")}
									</span>
									<div className="flex items-center gap-4">
										<div
											className={`w-1.5 h-1.5 rounded-full ${r.passed ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"}`}
										/>
										<span className="text-sm font-medium tracking-tight text-neutral-300">
											{r.passed ? "Pass" : "Fail"}
										</span>
									</div>
								</div>
								<span className="text-[10px] font-mono text-neutral-600">
									{r.time}ms
								</span>
							</div>

							{!r.passed && (
								<div className="py-8 lg:pl-20">
									{r.error ? (
										<pre className="text-sm text-red-400 font-mono whitespace-pre-wrap leading-relaxed bg-[#050505] p-6 border-l border-red-900/50">
											{r.error}
										</pre>
									) : (
										<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
											<div className="space-y-4">
												<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] block border-b border-neutral-900 pb-3">
													Expected
												</span>
												<pre className="text-sm font-mono text-neutral-400 leading-relaxed max-w-full overflow-x-auto custom-scrollbar pt-2">
													{JSON.stringify(r.expected, null, 2)}
												</pre>
											</div>
											<div className="space-y-4">
												<span className="text-[10px] font-mono text-amber-500/70 uppercase tracking-[0.2em] block border-b border-neutral-900 pb-3">
													Actual
												</span>
												<pre className="text-sm font-mono text-white leading-relaxed max-w-full overflow-x-auto custom-scrollbar pt-2">
													{JSON.stringify(r.actual, null, 2)}
												</pre>
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
