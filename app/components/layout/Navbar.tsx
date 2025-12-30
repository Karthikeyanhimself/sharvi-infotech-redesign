'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import Link from 'next/link';

export const Navbar = () => {
    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Expertise', href: '#expertise' }, // Points to Bento Grid
        { name: 'Solutions', href: '#solutions' }, // Points to Deep Dive
        { name: 'Industries', href: '#industries' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <GlassCard className="pointer-events-auto flex items-center justify-between px-8 py-4 w-full max-w-5xl !rounded-full !bg-sap-950/50 !border-white/5 shadow-2xl backdrop-blur-xl">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-metro-gradient rounded-md grid place-items-center shadow-neon group-hover:shadow-[0_0_30px_theme('colors.sap.500')] transition-shadow duration-500">
                        <div className="w-4 h-4 bg-sap-950 rotate-45"></div>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">SHARVI INFOTECH</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-slate-300">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-sap-400 transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sap-400 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <a
                    href="mailto:sales@sharviinfotech.com"
                    className="hidden md:block px-6 py-2 text-sm font-mono border border-sap-500/30 rounded-full text-sap-300 hover:bg-sap-500/10 transition-colors"
                >
                    Contact Us
                </a>
            </GlassCard>
        </motion.header>
    );
};