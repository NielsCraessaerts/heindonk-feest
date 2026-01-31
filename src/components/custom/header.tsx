export default function Header() {
    return (
        <header className="w-full border-b border-secondary/50 bg-surface/90 text-textdark backdrop-blur">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center px-6 py-6">
                
                {/* LEFT NAV */}
                <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em]">
                    <a href="/vrijdag" className="transition hover:text-secondary">
                        Vrijdag
                    </a>
                    <a href="/zaterdag" className="transition hover:text-secondary">
                        Zaterdag
                    </a>
                    <a href="/zondag" className="transition hover:text-secondary">
                        Zondag
                    </a>
                </nav>

                {/* CENTER LOGO */}
                <div className="flex justify-center">
                    <a href="/" aria-label="Naar de homepage">
                        <img
                            src="/images/logos/logo_Heindonk_feest.png"
                            alt="Heindonk Feest logo"
                            className="h-16 w-auto md:h-20"
                        />
                    </a>
                </div>

                {/* RIGHT NAV */}
                <nav className="flex items-center justify-end gap-6 text-sm font-semibold uppercase tracking-[0.2em]">
                    <a href="/sponsorpakketten" className="transition hover:text-secondary">
                        Sponsorpakketten
                    </a>
                    <a href="/praktisch" className="transition hover:text-secondary">
                        Praktisch
                    </a>
                </nav>

            </div>
        </header>
    );
}
