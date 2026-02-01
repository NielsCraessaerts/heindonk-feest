"use client";

import { useState } from "react";

const linksLeft = [
    { href: "/vrijdag", label: "Vrijdag" },
    { href: "/zaterdag", label: "Zaterdag" },
    { href: "/zondag", label: "Zondag" },
];

const linksRight = [
    { href: "/sponsorpakketten", label: "Sponsorpakketten" },
    { href: "/praktisch", label: "Praktisch" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-secondary/50 bg-surface/90 text-textdark backdrop-blur">
            <div className="mx-auto w-full max-w-6xl px-6">
                {/* Desktop */}
                <div className="hidden grid-cols-3 items-center py-6 md:grid">
                    <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em]">
                        {linksLeft.map((link) => (
                            <a key={link.href} href={link.href} className="transition hover:text-secondary">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex justify-center">
                        <a href="/" aria-label="Naar de homepage">
                            <img
                                src="/images/logos/logo_Heindonk_feest.png"
                                alt="Heindonk Feest logo"
                                className="h-16 w-auto md:h-20"
                            />
                        </a>
                    </div>

                    <nav className="flex items-center justify-end gap-6 text-sm font-semibold uppercase tracking-[0.2em]">
                        {linksRight.map((link) => (
                            <a key={link.href} href={link.href} className="transition hover:text-secondary">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Mobile */}
                <div className="flex items-center justify-between py-4 md:hidden">
                    <button
                        type="button"
                        aria-label="Menu"
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 text-textdark transition hover:bg-secondary/10"
                    >
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
                            />
                            <span
                                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition ${open ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`absolute left-0 bottom-0 h-0.5 w-full bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                            />
                        </span>
                    </button>

                    <a href="/" aria-label="Naar de homepage" className="flex items-center">
                        <img
                            src="/images/logos/logo_Heindonk_feest.png"
                            alt="Heindonk Feest logo"
                            className="h-12 w-auto"
                        />
                    </a>

                    <span className="h-10 w-10" aria-hidden="true" />
                </div>
            </div>

            <div
                className={`overflow-hidden border-t border-secondary/30 bg-surface/95 transition-all duration-300 md:hidden ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm font-semibold uppercase tracking-[0.2em]">
                    {linksLeft.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-3 py-2 transition hover:bg-secondary/10"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="h-px bg-secondary/20" />
                    {linksRight.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-3 py-2 transition hover:bg-secondary/10"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
