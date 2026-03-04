"use client";

import { useCallback, useState, useEffect, useMemo, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";
import { vim } from "@replit/codemirror-vim";
import { EditorView } from "@codemirror/view";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

// Themes
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubDark } from "@uiw/codemirror-theme-github";
import { materialDark } from "@uiw/codemirror-theme-material";
import { nord } from "@uiw/codemirror-theme-nord";
import { solarizedDark } from "@uiw/codemirror-theme-solarized";
import { aura } from "@uiw/codemirror-theme-aura";

const THEMES = {
	Transparent: tokyoNight,
	"Tokyo Night": tokyoNight,
	"VS Code Dark": vscodeDark,
	Dracula: dracula,
	"GitHub Dark": githubDark,
	"Material Dark": materialDark,
	Nord: nord,
	"Solarized Dark": solarizedDark,
	Aura: aura,
};

const FONT_SIZES = [11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24];

const DEFAULT_SETTINGS = {
	theme: "Transparent",
	fontSize: 14,
	tabSize: 2,
	keymap: "default",
	wordWrap: false,
	lineNumbers: true,
	fontFamily: "JetBrains Mono",
};

const FONT_FAMILIES = [
	"JetBrains Mono",
	"Fira Code",
	"Cascadia Code",
	"monospace",
];

function loadSettings() {
	if (typeof window === "undefined") return DEFAULT_SETTINGS;
	try {
		const saved = localStorage.getItem("js-turf-editor-settings");
		return saved
			? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
			: DEFAULT_SETTINGS;
	} catch {
		return DEFAULT_SETTINGS;
	}
}

export default function CodeEditor({ value, onChange }) {
	const [settings, setSettings] = useState(DEFAULT_SETTINGS);
	const [settingsOpen, setSettingsOpen] = useState(false);
	// `hydrated` gates rendering to avoid SSR/client mismatch
	const [hydrated, setHydrated] = useState(false);

	// On mount, load persisted settings from localStorage (cannot use lazy initializer because localStorage is not SSR-safe)
	const didLoad = useRef(false);
	useEffect(() => {
		if (didLoad.current) return;
		didLoad.current = true;
		const saved = localStorage.getItem("js-turf-editor-settings");
		const loaded = saved
			? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
			: DEFAULT_SETTINGS;
		setSettings(loaded);
		setHydrated(true);
	}, []);

	const updateSetting = useCallback((key, val) => {
		setSettings((prev) => {
			const next = { ...prev, [key]: val };
			localStorage.setItem("js-turf-editor-settings", JSON.stringify(next));
			return next;
		});
	}, []);

	const handleChange = useCallback((val) => onChange(val), [onChange]);

	const extensions = useMemo(() => {
		const exts = [
			javascript(),
			autocompletion(),
			// Apply font size and family directly into the editor content
			EditorView.theme({
				"&": {
					fontSize: `${settings.fontSize}px`,
					fontFamily: settings.fontFamily,
				},
				".cm-content": {
					fontSize: `${settings.fontSize}px`,
					fontFamily: settings.fontFamily,
				},
				".cm-gutters": {
					fontSize: `${settings.fontSize}px`,
					fontFamily: settings.fontFamily,
				},
			}),
		];
		if (settings.theme === "Transparent") {
			exts.push(
				EditorView.theme({
					"&": { backgroundColor: "transparent !important" },
					".cm-gutters": { backgroundColor: "transparent !important" },
				}),
			);
		}
		if (settings.wordWrap) exts.push(EditorView.lineWrapping);
		if (settings.keymap === "vim") exts.push(vim());
		return exts;
	}, [
		settings.theme,
		settings.wordWrap,
		settings.keymap,
		settings.fontSize,
		settings.fontFamily,
	]);

	if (!hydrated) return null;

	const theme = THEMES[settings.theme] ?? tokyoNight;

	return (
		<div className="h-full w-full flex flex-col overflow-hidden relative">
			{/* Editor toolbar */}
			<div
				className="shrink-0 flex items-center justify-between px-4 border-b border-neutral-900 bg-black"
				style={{ height: 36 }}>
				<div className="flex items-center gap-2">
					<span className="text-[9px] font-mono text-neutral-700 uppercase tracking-widest">
						{settings.theme}
					</span>
					{settings.keymap === "vim" && (
						<span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest bg-amber-950/30 px-1.5 py-0.5 rounded">
							VIM
						</span>
					)}
				</div>
				<button
					onClick={() => setSettingsOpen((o) => !o)}
					className={`flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest transition-colors px-2.5 py-1 rounded-md ${
						settingsOpen
							? "text-white bg-neutral-800"
							: "text-neutral-600 hover:text-neutral-300 hover:bg-neutral-900"
					}`}>
					<svg
						width="11"
						height="11"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2">
						<circle
							cx="12"
							cy="12"
							r="3"
						/>
						<path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
					</svg>
					Settings
				</button>
			</div>

			{/* Settings panel */}
			{settingsOpen && (
				<div
					className="absolute top-9 right-0 z-50 w-72 bg-[#0d0d0d] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
					style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.8)" }}>
					<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-900">
						<span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
							Editor Settings
						</span>
						<button
							onClick={() => setSettingsOpen(false)}
							className="text-neutral-600 hover:text-white text-lg leading-none transition-colors">
							×
						</button>
					</div>
					<div className="flex flex-col divide-y divide-neutral-900">
						{/* Theme */}
						<SettingRow label="Theme">
							<DropdownMenu>
								<DropdownMenuTrigger className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-neutral-600 hover:border-neutral-600 transition-colors cursor-pointer flex items-center justify-between gap-3 min-w-[140px]">
									<span>{settings.theme}</span>
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="opacity-50">
										<path d="m6 9 6 6 6-6" />
									</svg>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-56 bg-neutral-900 border-neutral-800 text-white p-1 rounded-xl shadow-2xl"
									align="end">
									<DropdownMenuRadioGroup
										value={settings.theme}
										onValueChange={(t) => updateSetting("theme", t)}>
										{Object.keys(THEMES).map((t) => (
											<DropdownMenuRadioItem
												key={t}
												value={t}
												className="text-xs font-mono tracking-widest uppercase cursor-pointer py-1.5 rounded-lg data-[highlighted]:bg-neutral-800 data-[highlighted]:text-white data-[state=checked]:text-emerald-500">
												{t}
											</DropdownMenuRadioItem>
										))}
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</SettingRow>

						{/* Font size */}
						<SettingRow label={`Font Size — ${settings.fontSize}px`}>
							<div className="flex items-center gap-2">
								<input
									type="range"
									min={11}
									max={24}
									step={1}
									value={settings.fontSize}
									onChange={(e) =>
										updateSetting("fontSize", Number(e.target.value))
									}
									className="w-28 accent-emerald-500 cursor-pointer"
								/>
								<span className="text-xs font-mono text-neutral-500 w-6 text-right">
									{settings.fontSize}
								</span>
							</div>
						</SettingRow>

						{/* Tab size */}
						<SettingRow label="Tab Size">
							<div className="flex gap-1">
								{[2, 4].map((n) => (
									<button
										key={n}
										onClick={() => updateSetting("tabSize", n)}
										className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
											settings.tabSize === n
												? "bg-emerald-500 border-emerald-500 text-black font-bold"
												: "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-600"
										}`}>
										{n}
									</button>
								))}
							</div>
						</SettingRow>

						{/* Key bindings */}
						<SettingRow label="Key Bindings">
							<div className="flex gap-1">
								{["default", "vim"].map((k) => (
									<button
										key={k}
										onClick={() => updateSetting("keymap", k)}
										className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors capitalize ${
											settings.keymap === k
												? "bg-emerald-500 border-emerald-500 text-black font-bold"
												: "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-600"
										}`}>
										{k === "default" ? "Normal" : "Vim"}
									</button>
								))}
							</div>
						</SettingRow>

						{/* Font family */}
						<SettingRow label="Font Family">
							<DropdownMenu>
								<DropdownMenuTrigger className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-neutral-600 hover:border-neutral-600 transition-colors cursor-pointer flex items-center justify-between gap-3 min-w-[140px]">
									<span className="truncate">{settings.fontFamily}</span>
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
									align="end">
									<DropdownMenuRadioGroup
										value={settings.fontFamily}
										onValueChange={(f) => updateSetting("fontFamily", f)}>
										{FONT_FAMILIES.map((f) => (
											<DropdownMenuRadioItem
												key={f}
												value={f}
												className="text-xs font-mono tracking-widest uppercase cursor-pointer py-1.5 rounded-lg data-[highlighted]:bg-neutral-800 data-[highlighted]:text-white data-[state=checked]:text-emerald-500">
												{f}
											</DropdownMenuRadioItem>
										))}
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</SettingRow>

						{/* Toggles */}
						<SettingRow label="Word Wrap">
							<Toggle
								value={settings.wordWrap}
								onChange={(v) => updateSetting("wordWrap", v)}
							/>
						</SettingRow>

						<SettingRow label="Line Numbers">
							<Toggle
								value={settings.lineNumbers}
								onChange={(v) => updateSetting("lineNumbers", v)}
							/>
						</SettingRow>

						{/* Reset */}
						<div className="px-4 py-3">
							<button
								onClick={() => {
									setSettings(DEFAULT_SETTINGS);
									localStorage.setItem(
										"js-turf-editor-settings",
										JSON.stringify(DEFAULT_SETTINGS),
									);
								}}
								className="w-full text-[10px] font-mono uppercase tracking-widest text-neutral-600 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-lg py-2 transition-colors">
								Reset to Defaults
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Click-away to close settings */}
			{settingsOpen && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setSettingsOpen(false)}
				/>
			)}

			{/* Code editor */}
			<div className="flex-1 overflow-hidden">
				<CodeMirror
					value={value}
					onChange={handleChange}
					theme={theme}
					extensions={extensions}
					basicSetup={{
						lineNumbers: settings.lineNumbers,
						highlightActiveLineGutter: true,
						highlightActiveLine: true,
						bracketMatching: true,
						closeBrackets: true,
						autocompletion: true,
						foldGutter: true,
						indentOnInput: true,
						tabSize: settings.tabSize,
					}}
					style={{ height: "100%" }}
				/>
			</div>
		</div>
	);
}

function SettingRow({ label, children }) {
	return (
		<div className="flex items-center justify-between px-4 py-3 gap-3">
			<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest shrink-0">
				{label}
			</span>
			{children}
		</div>
	);
}

function Toggle({ value, onChange }) {
	return (
		<button
			onClick={() => onChange(!value)}
			style={{
				width: 40,
				height: 22,
				borderRadius: 11,
				border: "none",
				background: value ? "#10b981" : "#262626",
				position: "relative",
				cursor: "pointer",
				padding: 0,
				transition: "background 0.2s",
				flexShrink: 0,
			}}>
			<span
				style={{
					position: "absolute",
					top: 3,
					left: value ? 21 : 3,
					width: 16,
					height: 16,
					borderRadius: "50%",
					background: "#fff",
					transition: "left 0.2s",
					display: "block",
				}}
			/>
		</button>
	);
}
