import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-space)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            colors: {
                sap: {
                    950: '#0a0e17',
                    900: '#111827',
                    800: '#1f2937',
                    500: '#3b82f6',
                    400: '#60a5fa',
                    300: '#93c5fd',
                },
                accent: {
                    purple: '#8b5cf6',
                    cyan: '#06b6d4'
                }
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.1))',
                'metro-gradient': 'linear-gradient(90deg, theme("colors.sap.500"), theme("colors.accent.purple"))',
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'neon': '0 0 20px theme("colors.sap.500"), 0 0 60px theme("colors.accent.purple")',
            },
            // --- ANIMATION SETTINGS ADDED HERE ---
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;