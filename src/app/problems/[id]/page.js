"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { questions, getQuestionById } from "@/data/questions";
import ResultsPanel from "@/components/ResultsPanel";

const CodeEditor = dynamic(() => import("@/components/CodeEditor"), {
	ssr: false,
	loading: () => (
		<div className="h-full flex items-center justify-center bg-[#0a0a0a]">
			<span className="text-neutral-600 text-[10px] font-mono tracking-widest uppercase animate-pulse">
				Initializing Env_
			</span>
		</div>
	),
});

export default function ProblemPage() {
	const params = useParams();
	const question = getQuestionById(params.id);

	const [code, setCode] = useState("");
	const [results, setResults] = useState(null);
	const [isRunning, setIsRunning] = useState(false);
	const [mobileTab, setMobileTab] = useState("problem");

	useEffect(() => {
		if (question) {
			const saved = localStorage.getItem(`js-turf-code-${question.id}`);
			setCode(saved || question.starterCode);
			setResults(null);
		}
	}, [question]);

	const handleCodeChange = useCallback(
		(val) => {
			setCode(val);
			if (question) localStorage.setItem(`js-turf-code-${question.id}`, val);
		},
		[question],
	);

	const handleRun = useCallback(async () => {
		if (!question || isRunning) return;
		setIsRunning(true);
		setResults(null);
		if (window.innerWidth < 1024) setMobileTab("editor");
		try {
			const res = await fetch("/api/execute", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(
					question.testCode
						? { code, testCode: question.testCode }
						: {
								code,
								testCases: question.testCases,
								functionName: question.functionName,
							},
				),
			});
			const data = await res.json();
			if (!res.ok) {
				setResults({ error: data.error || "Execution failed" });
			} else {
				setResults(data);
				if (data.allPassed) {
					const solved = JSON.parse(
						localStorage.getItem("js-turf-solved") || "{}",
					);
					solved[question.id] = true;
					localStorage.setItem("js-turf-solved", JSON.stringify(solved));
				}
			}
		} catch {
			setResults({ error: "Network error." });
		} finally {
			setIsRunning(false);
		}
	}, [code, question, isRunning]);

	const handleReset = useCallback(() => {
		if (question && window.confirm("Reset to starter code?")) {
			setCode(question.starterCode);
			localStorage.removeItem(`js-turf-code-${question.id}`);
			setResults(null);
		}
	}, [question]);

	useEffect(() => {
		const handler = (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
				e.preventDefault();
				handleRun();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [handleRun]);

	if (!question) {
		return (
			<div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
				<h2 className="text-4xl font-bold text-white">404</h2>
				<Link
					href="/"
					className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase hover:text-white transition-colors">
					Return to Index
				</Link>
			</div>
		);
	}

	return (
		<div
			className="h-screen w-full bg-[#0a0a0a] flex font-sans"
			style={{ padding: "clamp(6px, 1vw, 20px)" }}>
			{/* Floating container */}
			<div
				className="flex-1 flex flex-col border border-neutral-800/80 rounded-xl overflow-hidden bg-black"
				style={{
					boxShadow:
						"0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.8)",
				}}>
				{/* ── Header ── */}
				<header
					className="shrink-0 flex items-center justify-between border-b border-neutral-900 bg-black"
					style={{
						height: 60,
						paddingLeft: "clamp(12px,1.5vw,32px)",
						paddingRight: "clamp(12px,1.5vw,32px)",
					}}>
					<div className="flex items-center gap-4 min-w-0">
						<Link
							href="/"
							className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors shrink-0">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className="group-hover:-translate-x-0.5 transition-transform">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 12H5M12 19l-7-7 7-7"
								/>
							</svg>
							<span className="hidden md:block text-[10px] font-mono uppercase tracking-widest">
								Index
							</span>
						</Link>
						<div className="h-4 w-px bg-neutral-800 hidden md:block shrink-0" />
						<div className="flex items-center gap-2.5 min-w-0">
							<span className="text-[11px] font-mono text-neutral-600 shrink-0 tabular-nums">
								{String(question.number).padStart(2, "0")}
							</span>
							<span className="font-semibold tracking-tight truncate text-sm md:text-base">
								{question.title}
							</span>
							<span
								className={`hidden lg:inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest border ${
									question.difficulty === "basic"
										? "text-emerald-400 border-emerald-800/60 bg-emerald-950/40"
										: "text-amber-400 border-amber-800/60 bg-amber-950/40"
								}`}>
								{question.difficulty}
							</span>
						</div>
					</div>

					{/* Mobile tab switcher */}
					<div className="flex lg:hidden gap-5 mx-4 shrink-0">
						<button
							onClick={() => setMobileTab("problem")}
							className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${mobileTab === "problem" ? "text-white" : "text-neutral-600"}`}>
							Spec
						</button>
						<button
							onClick={() => setMobileTab("editor")}
							className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${mobileTab === "editor" ? "text-white" : "text-neutral-600"}`}>
							Env
						</button>
					</div>

					<div className="flex items-center gap-3 shrink-0">
						<button
							onClick={handleReset}
							className="hidden sm:block text-[10px] font-mono text-neutral-600 hover:text-white uppercase tracking-widest transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-900">
							Reset
						</button>
						<button
							onClick={handleRun}
							disabled={isRunning}
							className="flex items-center gap-2 font-mono font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed rounded-full"
							style={{
								padding: "9px 20px",
								background: isRunning
									? "linear-gradient(135deg, #059669, #047857)"
									: "linear-gradient(135deg, #10b981, #059669)",
								color: "#000",
								boxShadow: isRunning
									? "none"
									: "0 0 18px rgba(16,185,129,0.35)",
							}}>
							{isRunning && (
								<span className="w-1.5 h-1.5 rounded-full bg-black/50 animate-pulse shrink-0" />
							)}
							<span>{isRunning ? "Running…" : "▶ Run Sequence"}</span>
						</button>
					</div>
				</header>

				{/* ── Desktop: 3-pane allotment layout ── */}
				<div className="flex-1 overflow-hidden hidden lg:block">
					<Allotment>
						{/* LEFT: Spec panel */}
						<Allotment.Pane
							minSize={200}
							preferredSize="34%">
							<div className="h-full overflow-y-auto bg-[#050505]">
								<SpecContent question={question} />
							</div>
						</Allotment.Pane>

						{/* RIGHT: Code + Output stacked */}
						<Allotment.Pane minSize={300}>
							<Allotment vertical>
								{/* Code editor */}
								<Allotment.Pane
									minSize={100}
									preferredSize="60%">
									<div className="h-full overflow-hidden">
										<CodeEditor
											value={code}
											onChange={handleCodeChange}
										/>
									</div>
								</Allotment.Pane>

								{/* Output terminal */}
								<Allotment.Pane minSize={80}>
									<div className="h-full flex flex-col bg-black overflow-hidden">
										<div
											className="shrink-0 flex items-center justify-between px-5 border-b border-neutral-900 bg-black"
											style={{ height: 44 }}>
											<div className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
												<span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
													Output Terminal
												</span>
											</div>
											{results?.results && (
												<span
													className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
														results.allPassed
															? "text-emerald-400"
															: "text-amber-400"
													}`}>
													{results.passedTests}/{results.totalTests} passed
												</span>
											)}
										</div>
										<div className="flex-1 min-h-0 overflow-hidden">
											<ResultsPanel
												results={results}
												isRunning={isRunning}
											/>
										</div>
									</div>
								</Allotment.Pane>
							</Allotment>
						</Allotment.Pane>
					</Allotment>
				</div>

				{/* ── Mobile layout (no Allotment — tabs) ── */}
				<div className="flex-1 flex flex-col overflow-hidden lg:hidden">
					<div
						className={`${mobileTab === "problem" ? "flex" : "hidden"} flex-1 flex-col overflow-y-auto bg-[#050505]`}>
						<SpecContent question={question} />
					</div>
					<div
						className={`${mobileTab === "editor" ? "flex" : "hidden"} flex-1 flex-col overflow-hidden`}>
						<div className="flex-1 overflow-hidden border-b border-neutral-900">
							<CodeEditor
								value={code}
								onChange={handleCodeChange}
							/>
						</div>
						<div className="h-[42%] min-h-40 flex flex-col">
							<div
								className="shrink-0 flex items-center justify-between px-5 border-b border-neutral-900 bg-black"
								style={{ height: 44 }}>
								<span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
									Output Terminal
								</span>
								{results?.results && (
									<span
										className={`text-[10px] font-mono uppercase tracking-widest font-bold ${results.allPassed ? "text-emerald-400" : "text-amber-400"}`}>
										{results.passedTests}/{results.totalTests} passed
									</span>
								)}
							</div>
							<div className="flex-1 min-h-0 overflow-hidden">
								<ResultsPanel
									results={results}
									isRunning={isRunning}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function SpecContent({ question }) {
	return (
		<div className="flex flex-col gap-8 p-6 lg:p-8">
			{/* Title + description */}
			<div className="flex flex-col gap-2.5">
				<div className="flex items-center gap-3">
					<span className="w-1.5 h-6 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
					<h1 className="text-xl font-bold tracking-tight leading-snug text-white">
						{question.title}
					</h1>
				</div>
				<p className="text-sm leading-relaxed text-neutral-400 pl-[18px]">
					{question.description}
				</p>
			</div>

			{/* Constraints card */}
			<div className="flex flex-col gap-2">
				<p className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
					Constraints & Protocol
				</p>
				<div className="rounded-xl border border-neutral-800 overflow-hidden">
					<div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-900 gap-3">
						<span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
							Signature
						</span>
						<code className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-900/40 px-2.5 py-1 rounded-lg break-all">
							{question.functionName}({question.paramNames.join(", ")})
						</code>
					</div>
					<div className="flex items-center justify-between px-4 py-3 bg-neutral-950 gap-3">
						<span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
							Test Matrix
						</span>
						<span className="text-xs font-mono text-white bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-lg">
							<span className="text-amber-400 font-bold">
								{question.testCases ? question.testCases.length : "Jest"}
							</span>
							<span className="text-neutral-500 ml-1">conditions</span>
						</span>
					</div>
				</div>
			</div>

			{/* Examples */}
			{question.examples && question.examples.length > 0 && (
				<div className="flex flex-col gap-2">
					<p className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
						Examples
					</p>
					<div className="flex flex-col gap-3">
						{question.examples.map((ex, i) => (
							<div
								key={i}
								className="rounded-xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all group">
								<div className="px-4 py-2 bg-neutral-950 border-b border-neutral-900 flex items-center gap-2">
									<span className="w-2 h-0.5 bg-neutral-700 group-hover:bg-neutral-400 transition-colors rounded-full" />
									<span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.2em]">
										Exhibit {String(i + 1).padStart(2, "0")}
									</span>
								</div>
								<div className="flex flex-col divide-y divide-neutral-900 bg-[#070707]">
									<div className="px-4 py-3 flex flex-col gap-1.5">
										<span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
											Input
										</span>
										<code className="font-mono text-xs text-neutral-300 break-all leading-relaxed">
											{ex.input}
										</code>
									</div>
									<div className="px-4 py-3 flex flex-col gap-1.5">
										<span className="text-[9px] font-mono text-emerald-600 uppercase tracking-widest">
											Yields
										</span>
										<code className="font-mono text-xs text-white break-all leading-relaxed">
											{ex.output}
										</code>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
