// app/solutions/page.tsx
'use client';
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { GlassCard } from "@/app/components/ui/GlassCard";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { ShaderBackground } from "@/app/components/hero/ShaderBackground"; // Import the shared background
import { motion, useScroll, useTransform } from "framer-motion";

import {
    FiCheckCircle,
    FiLayers,
    FiGlobe,
    FiActivity,
    FiCpu,
    FiTrendingUp,
    FiArrowRight,
    FiZap
} from "react-icons/fi";
import { SiSap } from "react-icons/si";
import Link from "next/link";

// --- Reusable Components ---

const SolutionSection = ({
    id,
    title,
    subtitle,
    icon,
    children,
    index
}: {
    id: string,
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    children: React.ReactNode,
    index: number
}) => {
    return (
        <section id={id} className="relative min-h-[80vh] flex flex-col md:flex-row gap-12 md:gap-24 py-24 border-t border-white/5">
            {/* Sticky Header */}
            <div className="md:w-1/3 flex flex-col justify-start">
                <div className="sticky top-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative"
                    >
                        <span className="absolute -top-10 -left-6 text-9xl font-bold text-white/5 select-none pointer-events-none -z-10">
                            0{index}
                        </span>

                        <div className="w-16 h-16 bg-sap-900/50 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl text-sap-400 mb-6 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            {icon}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
                        <p className="text-lg text-slate-400 font-mono leading-relaxed">{subtitle}</p>

                        <div className="absolute left-8 top-full h-[50vh] w-px bg-gradient-to-b from-sap-500/50 to-transparent mt-8 hidden md:block"></div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

const ProcessCard = ({ title, desc, stepNum }: { title: string, desc: string, stepNum: string }) => (
    <div className="group relative pl-8 pb-8 border-l border-white/10 last:border-0 hover:border-sap-500/50 transition-colors duration-300">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-sap-950 border border-white/30 rounded-full group-hover:bg-sap-500 group-hover:border-sap-400 group-hover:shadow-[0_0_10px_theme('colors.sap.500')] transition-all duration-300"></div>

        <GlassCard className="p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-sap-900/60">
            <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-bold text-white group-hover:text-sap-300 transition-colors">{title}</h4>
                <span className="text-xs font-mono text-white/20">STEP {stepNum}</span>
            </div>
            <p className="text-sm text-slate-400 font-mono leading-relaxed">{desc}</p>
        </GlassCard>
    </div>
);

// --- Main Page Component ---

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-sap-950 text-white selection:bg-accent-purple/30">
            <ShaderBackground />

            {/* HERO SECTION UPDATED */}
            <section className="pt-48 pb-24 px-4 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-sap-300 mb-8"
                    >
                        <FiZap className="text-yellow-400" />
                        ENGINEERED FOR VELOCITY
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-none"
                    >
                        OUR<br />
                        {/* FIXED: Used standard Tailwind gradient classes instead of custom one */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 pb-2">
                            SOLUTIONS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-mono text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Comprehensive SAP ecosystems designed for scale.
                        From initial blueprint to 24/7 automation support.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-32 relative z-10">

                {/* 1. Implementation */}
                <SolutionSection
                    id="implementation"
                    index={1}
                    title="SAP Implementation"
                    subtitle="Leading Practices methodology for zero-friction deployment."
                    icon={<SiSap />}
                >
                    <div className="space-y-2">
                        <ProcessCard stepNum="01" title="Project Analysis" desc="Deep-dive auditing of existing infrastructure to design a bespoke S/4HANA roadmap." />
                        <ProcessCard stepNum="02" title="Blueprint & Testing" desc="Iterative configuration and integration testing using automated validation tools." />
                        <ProcessCard stepNum="03" title="End-User Training" desc="Role-based enablement workshops to maximize system adoption from Day 1." />
                        <ProcessCard stepNum="04" title="Go-Live & Hypercare" desc="24/7 command center support during the critical cutover phase." />
                    </div>
                </SolutionSection>

                {/* 2. Migrations */}
                <SolutionSection
                    id="migrations"
                    index={2}
                    title="Migrations"
                    subtitle="Risk-free transition from ECC to S/4HANA."
                    icon={<FiLayers />}
                >
                    <div className="grid grid-cols-1 gap-6">
                        <GlassCard className="p-8 border-l-4 border-l-accent-purple">
                            <h3 className="text-2xl font-bold mb-4">Why Migrate with Sharvi?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Zero Data Loss Guarantee",
                                    "Minimized Downtime",
                                    "Cloud & On-Premise Hybrid",
                                    "Legacy Archiving"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-mono text-sm text-slate-300">
                                        <FiCheckCircle className="text-accent-purple" /> {item}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <div className="mt-8 space-y-2">
                            <ProcessCard stepNum="01" title="Data Extraction" desc="Automated ETL pipelines to sanitize and move critical business data." />
                            <ProcessCard stepNum="02" title="Application Integration" desc="Re-connecting third-party APIs (Salesforce, Ariba) to the new core." />
                        </div>
                    </div>
                </SolutionSection>

                {/* 3. Rollouts */}
                <SolutionSection
                    id="rollouts"
                    index={3}
                    title="Global Rollouts"
                    subtitle="Standardization across borders."
                    icon={<FiGlobe />}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <GlassCard className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h4 className="text-lg font-bold text-accent-cyan mb-2">Global Template</h4>
                                <p className="text-sm text-slate-400 font-mono">We build a "Master Kernel" configuration that ensures 80% standardization across all units.</p>
                            </div>
                            <div className="mt-4 h-1 w-full bg-accent-cyan/20 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-accent-cyan"></div>
                            </div>
                        </GlassCard>
                        <GlassCard className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h4 className="text-lg font-bold text-yellow-400 mb-2">Local Compliance</h4>
                                <p className="text-sm text-slate-400 font-mono">Adapting the remaining 20% for local tax, legal, and language requirements.</p>
                            </div>
                            <div className="mt-4 h-1 w-full bg-yellow-400/20 rounded-full overflow-hidden">
                                <div className="h-full w-1/4 bg-yellow-400"></div>
                            </div>
                        </GlassCard>
                    </div>
                </SolutionSection>

                {/* 4. AMS */}
                <SolutionSection
                    id="ams"
                    index={4}
                    title="AMS Support"
                    subtitle="24/7 Mission Control for your SAP Landscape."
                    icon={<FiActivity />}
                >
                    <GlassCard className="p-8">
                        <div className="flex flex-wrap gap-3 mb-8">
                            {["Incident Mgmt", "Change Mgmt", "Performance Tuning", "Security Patching"].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sap-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="bg-sap-950/50 rounded-xl p-6 border border-white/5 flex items-center justify-between">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">99.9%</h4>
                                <p className="text-xs font-mono text-slate-500 uppercase">SLA Compliance Rate</p>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">&lt;15m</h4>
                                <p className="text-xs font-mono text-slate-500 uppercase">Avg Response Time</p>
                            </div>
                        </div>
                    </GlassCard>
                </SolutionSection>

            </div>

            {/* Footer */}
            <footer className="relative bg-sap-950 pt-32 pb-12 overflow-hidden border-t border-white/10">
                <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03]">
                    <div className="text-[10rem] font-bold leading-none tracking-tighter text-white">
                        SHARVI INFOTECH SOLUTIONS
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
                            Ready to modernize your mission-critical systems?
                        </h2>
                        <MagneticButton onClick={() => window.location.href = 'mailto:sales@sharviinfotech.com'}>
                            Initiate Engagement <FiArrowRight className="inline ml-2" />
                        </MagneticButton>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} Sharvi Infotech. Enterprise Grade.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <Link href="mailto:careers@sharviinfotech.com" className="hover:text-white transition-colors">Careers</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}