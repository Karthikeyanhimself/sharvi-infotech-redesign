'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Industries', href: '#industries' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 300, damping: 30 }
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 md:top-6 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none"
        >
            <GlassCard className="pointer-events-auto relative z-50 flex items-center justify-between px-6 py-3 md:px-8 md:py-4 w-full max-w-5xl !rounded-full !bg-sap-950/80 !border-white/10 shadow-2xl backdrop-blur-xl">

                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-metro-gradient rounded-md grid place-items-center shadow-neon group-hover:shadow-[0_0_30px_theme('colors.sap.500')] transition-shadow duration-500">
                        <div className="w-4 h-4 bg-sap-950 rotate-45"></div>
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-white">SHARVI INFOTECH</span>
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

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </GlassCard>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="pointer-events-auto absolute top-full mt-4 w-[95%] max-w-md"
                    >
                        <GlassCard className="flex flex-col p-4 !bg-sap-950/95 !border-white/10 backdrop-blur-2xl">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="p-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white font-mono text-sm transition-all flex items-center justify-between group"
                                    >
                                        {item.name}
                                        <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-sap-400" />
                                    </Link>
                                ))}

                                <div className="h-px bg-white/10 my-2"></div>

                                <a
                                    href="mailto:sales@sharviinfotech.com"
                                    onClick={() => setIsOpen(false)}
                                    className="p-4 rounded-xl bg-sap-500/10 text-sap-300 hover:bg-sap-500/20 font-bold text-center transition-colors"
                                >
                                    Contact Sales Team
                                </a>
                            </nav>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};