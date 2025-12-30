'use client';

import { ShaderBackground } from "@/app/components/hero/ShaderBackground";
import { Navbar } from "@/app/components/layout/Navbar";
import { GlassCard } from "@/app/components/ui/GlassCard";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiActivity,
  FiGlobe,
  FiAward,
  FiLayers,
  FiTrendingUp,
  FiCheckCircle,
  FiZap,
  FiX
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

// --- SUB-COMPONENTS ---

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
    <section id={id} className="relative flex flex-col lg:flex-row gap-8 lg:gap-24 py-12 lg:py-24 border-t border-white/5">
      {/* Header: Sticky on Desktop, Static on Mobile */}
      <div className="lg:w-1/3 flex flex-col justify-start">
        <div className="relative lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Huge Number */}
            <span className="absolute -top-6 -left-4 text-6xl lg:text-9xl font-bold text-white/5 select-none pointer-events-none -z-10">
              0{index}
            </span>

            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-sap-900/50 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl lg:text-3xl text-sap-400 mb-4 lg:mb-6 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              {icon}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 tracking-tight text-white leading-tight">{title}</h2>
            <p className="text-base lg:text-lg text-slate-400 font-mono leading-relaxed">{subtitle}</p>

            {/* Connector Line (Desktop Only) */}
            <div className="absolute left-6 lg:left-8 top-full h-[50vh] w-px bg-gradient-to-b from-sap-500/50 to-transparent mt-8 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>

      {/* Content: Scrollable */}
      <div className="lg:w-2/3 pt-4 lg:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

const ProcessCard = ({ title, desc, stepNum }: { title: string, desc: string, stepNum: string }) => (
  <div className="group relative pl-6 lg:pl-8 pb-8 border-l border-white/10 last:border-0 hover:border-sap-500/50 transition-colors duration-300">
    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-sap-950 border border-white/30 rounded-full group-hover:bg-sap-500 group-hover:border-sap-400 group-hover:shadow-[0_0_10px_theme('colors.sap.500')] transition-all duration-300"></div>

    <GlassCard className="p-5 lg:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-sap-900/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
        <h4 className="text-lg lg:text-xl font-bold text-white group-hover:text-sap-300 transition-colors">{title}</h4>
        <span className="text-xs font-mono text-white/20 uppercase tracking-widest">Step {stepNum}</span>
      </div>
      <p className="text-sm text-slate-400 font-mono leading-relaxed">{desc}</p>
    </GlassCard>
  </div>
);

// --- MAIN SECTIONS ---

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <ShaderBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-sap-300 uppercase tracking-wider">
            Est. 2020 • Global SAP Partner
          </div>
          {/* FLUID TYPOGRAPHY FIX: text-4xl on mobile -> text-8xl on desktop */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-white">
            ACCELERATING<br />
            <span className="text-transparent bg-clip-text bg-metro-gradient">SAP TRANSFORMATION</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-mono text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
        >
          We empower organizations with agile, customer-centric SAP ERP solutions.
          From <strong>S/4HANA migrations</strong> to <strong>Global Rollouts</strong>,
          we engineer success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        >
          <Link href="#solutions">
            <MagneticButton className="mx-auto">
              Explore Solutions
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] sm:text-xs text-sap-300 tracking-widest uppercase opacity-80 whitespace-nowrap"
      >
        Scroll for Capabilities
      </motion.div>
    </section>
  );
}

const ServicesBento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
  };

  const services = [
    {
      title: "SAP Implementation",
      icon: <SiSap className="w-8 h-8 text-[#008FD3]" />,
      desc: "Integrating SAP ERP with Leading Practices methodology.",
      features: ["Project Analysis", "Implementation", "Training"],
      cols: "md:col-span-2",
      rows: "md:row-span-2"
    },
    {
      title: "Migrations",
      icon: <FiLayers className="w-8 h-8 text-accent-purple" />,
      desc: "Seamless transition from ECC to S/4HANA.",
      features: ["Data Migration", "Zero Data Loss"],
      cols: "",
      rows: "md:row-span-2"
    },
    {
      title: "Global Rollouts",
      icon: <FiGlobe className="w-8 h-8 text-accent-cyan" />,
      desc: "Standardizing processes across borders.",
      features: ["Global Template", "Local Compliance"],
      cols: "",
      rows: ""
    },
    {
      title: "SAP AMS",
      icon: <FiActivity className="w-8 h-8 text-sap-400" />,
      desc: "24/7 Application Management & Support.",
      features: ["Incident Mgmt", "Optimization"],
      cols: "md:col-span-2",
      rows: ""
    },
    {
      title: "Advisory",
      icon: <FiTrendingUp className="w-8 h-8 text-emerald-400" />,
      desc: "Strategic integration for long-term goals.",
      features: ["Strategy", "Roadmaps"],
      cols: "md:col-span-3",
      rows: ""
    },
  ]

  return (
    <section id="expertise" className="py-20 lg:py-32 px-4 relative z-20 bg-sap-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-20 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Our Expertise</h2>
          <p className="font-mono text-sm lg:text-base text-sap-300">Precision engineering and strategic insight.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className={cn(service.cols, service.rows, "h-full")}>
              <Link href="#solutions" className="block h-full">
                <GlassCard hoverEffect className="h-full flex flex-col justify-between group relative overflow-hidden p-6 lg:p-8">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 w-fit rounded-xl backdrop-blur-md border border-white/10">{service.icon}</div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                        <FiArrowRight size={24} />
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="font-mono text-xs lg:text-sm text-slate-400 mb-6 leading-relaxed">{service.desc}</p>

                    {service.features && (
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] lg:text-xs font-mono text-sap-300">
                            <FiCheckCircle className="text-sap-500 text-[10px]" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const SolutionsDeepDive = () => {
  return (
    <div id="solutions" className="bg-sap-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-sap-300 mb-6"
        >
          <FiZap className="text-yellow-400" />
          ENGINEERED FOR VELOCITY
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          DETAILED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">METHODOLOGIES</span>
        </h2>
        <p className="text-slate-400 font-mono text-sm md:text-base max-w-2xl mx-auto">
          Comprehensive SAP ecosystems designed for scale. From initial blueprint to 24/7 automation support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* 1. Implementation */}
        <SolutionSection
          id="impl-deep-dive"
          index={1}
          title="SAP Implementation"
          subtitle="Leading Practices methodology for zero-friction deployment."
          icon={<SiSap />}
        >
          <div className="space-y-2">
            <ProcessCard stepNum="01" title="Project Analysis" desc="Deep-dive auditing of existing infrastructure." />
            <ProcessCard stepNum="02" title="Blueprint & Testing" desc="Iterative configuration and integration testing." />
            <ProcessCard stepNum="03" title="Training" desc="Role-based enablement workshops." />
            <ProcessCard stepNum="04" title="Go-Live" desc="24/7 command center support." />
          </div>
        </SolutionSection>

        {/* 2. Migrations */}
        <SolutionSection
          id="mig-deep-dive"
          index={2}
          title="Migrations"
          subtitle="Risk-free transition from ECC to S/4HANA."
          icon={<FiLayers />}
        >
          <div className="grid grid-cols-1 gap-6">
            <GlassCard className="p-6 border-l-4 border-l-accent-purple">
              <h3 className="text-xl font-bold mb-4 text-white">Why Migrate?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Zero Data Loss", "Minimized Downtime", "Hybrid Cloud", "Legacy Archiving"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-mono text-xs text-slate-300">
                    <FiCheckCircle className="text-accent-purple flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="mt-4 space-y-2">
              <ProcessCard stepNum="01" title="Data Extraction" desc="Automated ETL pipelines." />
              <ProcessCard stepNum="02" title="Integration" desc="Re-connecting third-party APIs." />
            </div>
          </div>
        </SolutionSection>

        {/* 3. Rollouts */}
        <SolutionSection
          id="roll-deep-dive"
          index={3}
          title="Global Rollouts"
          subtitle="Standardization across borders."
          icon={<FiGlobe />}
        >
          <div className="grid grid-cols-1 gap-4">
            <GlassCard className="p-6">
              <h4 className="text-lg font-bold text-accent-cyan mb-2">Global Template</h4>
              <p className="text-xs text-slate-400 font-mono">"Master Kernel" configuration ensuring 80% standardization.</p>
              <div className="mt-4 h-1 w-full bg-accent-cyan/20 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-accent-cyan"></div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Local Compliance</h4>
              <p className="text-xs text-slate-400 font-mono">Adapting 20% for local tax & legal requirements.</p>
              <div className="mt-4 h-1 w-full bg-yellow-400/20 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-yellow-400"></div>
              </div>
            </GlassCard>
          </div>
        </SolutionSection>

        {/* 4. AMS */}
        <SolutionSection
          id="ams-deep-dive"
          index={4}
          title="AMS Support"
          subtitle="24/7 Mission Control for your SAP Landscape."
          icon={<FiActivity />}
        >
          <GlassCard className="p-6">
            <div className="flex flex-wrap gap-2 mb-8">
              {["Incident Mgmt", "Change Mgmt", "Performance Tuning"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-sap-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-sap-950/50 rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">99.9%</h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase">SLA Compliance</p>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">&lt;15m</h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase">Response Time</p>
              </div>
            </div>
          </GlassCard>
        </SolutionSection>
      </div>
    </div>
  )
}

const IndustryTicker = () => {
  const industries = [
    "AUTOMOTIVE", "CHEMICALS", "INDUSTRIAL MANUFACTURING", "STEEL & CEMENT", "MINING", "E-MOBILITY"
  ];

  return (
    <section id="industries" className="py-12 bg-sap-900 border-y border-white/5 overflow-hidden">
      <div className="flex max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          className="flex gap-8 sm:gap-16 whitespace-nowrap pr-16"
        >
          {[...industries, ...industries].map((ind, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/50">
              {ind} <span className="text-sap-500">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUsComparer = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const dividerX = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="overview" ref={targetRef} className="py-20 lg:py-32 relative z-20 bg-sap-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">Why Partner with Sharvi?</h2>
        <p className="font-mono text-sm text-sap-300">Experience makes the difference.</p>
      </div>

      {/* MOBILE: Stacked Cards View */}
      <div className="lg:hidden px-4 flex flex-col gap-6">
        <GlassCard className="p-8 border-l-4 border-red-900/50 bg-slate-950/80">
          <h3 className="text-xl font-bold text-slate-500 mb-4">Standard Vendors</h3>
          <ul className="font-mono text-slate-600 space-y-4 text-sm">
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Generalist teams</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Basic support</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Fragmented accountability</li>
          </ul>
        </GlassCard>

        <div className="relative p-8 rounded-2xl bg-metro-gradient overflow-hidden shadow-neon">
          <div className="relative z-10 text-white">
            <h3 className="text-xl font-bold mb-4">The Sharvi Advantage</h3>
            <ul className="font-mono font-bold space-y-4 text-sm">
              <li className="flex items-center gap-2">17+ Years Experience<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
              <li className="flex items-center gap-2">SAP-Accredited AMS<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
              <li className="flex items-center gap-2">Strategic Roadmaps<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
            </ul>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
      </div>

      {/* DESKTOP: Interactive Slider View */}
      <div className="hidden lg:block relative h-[600px] max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Layer 1: Standard Approach */}
        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center p-12 grayscale brightness-50">
          <div className="text-left max-w-lg mr-auto">
            <h3 className="text-3xl font-bold text-slate-500 mb-4">Standard Vendors</h3>
            <ul className="font-mono text-slate-600 space-y-4">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Generalist teams.</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Basic implementation support.</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-900 rounded-full"></div>Fragmented accountability.</li>
            </ul>
          </div>
        </div>

        {/* Layer 2: Sharvi Approach */}
        <motion.div
          className="absolute inset-0 bg-metro-gradient flex items-center justify-center p-12"
          style={{ clipPath: useTransform(dividerX, (x) => `polygon(${x} 0, 100% 0, 100% 100%, ${x} 100%)`) }}
        >
          <div className="text-right max-w-lg ml-auto text-white">
            <h3 className="text-3xl font-bold mb-4">The Sharvi Advantage</h3>
            <ul className="font-mono font-bold space-y-4">
              <li className="flex items-center gap-2 justify-end">17+ Years Avg. Industry Experience.<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
              <li className="flex items-center gap-2 justify-end">SAP-Accredited AMS & Support.<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
              <li className="flex items-center gap-2 justify-end">Strategic Roadmaps & Assessments.<div className="w-2 h-2 bg-white rounded-full shadow-neon"></div></li>
            </ul>
          </div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </motion.div>

        {/* Divider */}
        <motion.div
          style={{ left: dividerX }}
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)] z-30"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white grid place-items-center">
            <FiArrowRight className="text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetricsAndAwards = () => {
  return (
    <section className="py-20 relative z-20 bg-sap-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              17+
            </div>
            <p className="font-mono text-xs lg:text-sm text-slate-400 uppercase tracking-wider">Years Team Experience</p>
          </div>

          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              24/7
            </div>
            <p className="font-mono text-xs lg:text-sm text-slate-400 uppercase tracking-wider">AMS Support Coverage</p>
          </div>

          <div className="lg:col-span-2">
            <GlassCard className="flex flex-col sm:flex-row items-center gap-6 !bg-gradient-to-r !from-yellow-900/20 !to-transparent !border-yellow-500/20 text-center sm:text-left p-6">
              <div className="p-4 bg-yellow-500/10 rounded-full text-yellow-500 flex-shrink-0">
                <FiAward className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-bold text-yellow-100">Telangana's Biggest Brand 2024</h4>
                <p className="text-xs lg:text-sm text-yellow-200/60 font-mono mt-1">Recognized as "Trendsetter" in SAP Services</p>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-sap-950 pt-20 lg:pt-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="text-[4rem] md:text-[8rem] font-bold leading-none tracking-tighter text-transparent -webkit-text-stroke-1 md:-webkit-text-stroke-2 text-stroke-white"
        >
          INTEGRITY • TEAMWORK • EMPOWERMENT • SHARVI INFOTECH •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">Ready for your Digital Transformation?</h2>
            <MagneticButton onClick={() => window.location.href = 'mailto:careers@sharviinfotech.com'}>
              Contact Our Experts
            </MagneticButton>
          </div>
          <div className="grid grid-cols-2 gap-8 font-mono text-sm text-slate-400">
            <div>
              <h4 className="text-white mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><a href="#overview" className="hover:text-white">About Us</a></li>
                <li><Link href="#solutions" className="hover:text-white">Solutions</Link></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#awards" className="hover:text-white">Awards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li>Vadlamudi, Andhra Pradesh</li>
                <li><a href="mailto:careers@sharviinfotech.com" className="text-sap-400 hover:underline">careers@sharviinfotech.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-slate-500 gap-4 text-center">
          <p>© {new Date().getFullYear()} Sharvi Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// --- MAIN PAGE ASSEMBLY ---

export default function Home() {
  return (
    <main className="min-h-screen bg-sap-950 text-white selection:bg-accent-purple/30 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesBento />
      <SolutionsDeepDive />
      <IndustryTicker />
      <WhyUsComparer />
      <MetricsAndAwards />
      <Footer />
    </main>
  );
}