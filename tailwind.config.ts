import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary))',
                secondary: 'hsl(var(--color-secondary))',
                accent: 'hsl(var(--color-accent))',
                bg: 'hsl(var(--color-bg))',
                surface: 'hsl(var(--color-surface))',
                text: 'hsl(var(--color-text))',
                muted: 'hsl(var(--color-muted))',
                textdark: 'hsl(var(--color-textdark))',
                textlight: 'hsl(var(--color-textlight))',
                jstackgradient: 'hsl(var(--color-jstackgradient))',
                jstackgradientvertical: 'hsl(var(--color-jstackgradient-vertical))',
            },
            fontFamily: {
                sans: ['var(--font-libre-baskerville)', 'serif'],
                heading: ['var(--font-libre-baskerville)', 'serif'],
                alt: ['var(--font-oswald)', 'sans-serif'],
            },
        },
    },
};

export default config;
