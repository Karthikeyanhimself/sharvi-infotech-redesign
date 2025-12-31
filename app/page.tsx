'use client';

import { ShaderBackground } from "@/app/components/hero/ShaderBackground";
import { Navbar } from "@/app/components/layout/Navbar";
import { GlassCard } from "@/app/components/ui/GlassCard";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  FiZap
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
    <section id={id} className="scroll-mt-28 relative flex flex-col lg:flex-row gap-8 lg:gap-24 py-12 lg:py-24 border-t border-white/5">
      <div className="lg:w-1/3 flex flex-col justify-start">
        <div className="relative lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="absolute -top-6 -left-4 text-6xl lg:text-9xl font-heading italic font-bold text-white/5 select-none pointer-events-none -z-10">
              0{index}
            </span>

            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-sap-900/50 backdrop-blur-xl rounded-2xl flex items-center justify-center text-2xl lg:text-3xl text-sap-400 mb-4 lg:mb-6 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              {icon}
            </div>
            <h2 className="font-heading italic text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 tracking-tight text-white leading-tight">{title}</h2>
            <p className="font-body font-medium text-base lg:text-lg text-slate-400 leading-relaxed">{subtitle}</p>

            <div className="absolute left-6 lg:left-8 top-full h-[50vh] w-px bg-gradient-to-b from-sap-500/50 to-transparent mt-8 hidden lg:block"></div>
          </motion.div>
        </div>
      </div>

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
        <h4 className="font-heading font-bold text-xl lg:text-2xl text-white group-hover:text-sap-300 transition-colors">{title}</h4>
        <span className="text-xs font-body font-bold text-white/20 uppercase tracking-widest">Step {stepNum}</span>
      </div>
      <p className="font-body text-sm text-slate-400 leading-relaxed">{desc}</p>
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* BADGE */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-body font-bold text-emerald-400 uppercase tracking-wider">
            EST. 2020 • HYDERABAD • GLOBAL SAP PARTNER
          </div>

          <h1 className="leading-[1.1] mb-6 text-white text-center">
            {/* TOP LINE */}
            <span className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter block mb-4 md:mb-6 uppercase">
              Accelerating
            </span>

            {/* BOTTOM LINE: STATIC & ALIGNED */}
            <div className="flex flex-wrap justify-center items-baseline gap-x-3 sm:gap-x-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">

              {/* 1. SAP (Heading Font) */}
              {/* Added 'pr-2' to prevent the letter P from being cut off */}
              <span className="font-heading font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400 pr-2">
                SAP
              </span>

              {/* 2. TRANSFORMATION (Italianno Font) */}
              <span className="font-italianno text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400 pr-2 pb-1">
                Transformation
              </span>

            </div>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
        >
          We empower organizations with agile, customer-centric SAP ERP solutions.
          From <strong className="text-white">S/4HANA migrations</strong> to <strong className="text-white">Global Rollouts</strong>,
          we engineer success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        >
          <Link href="#solutions">
            <MagneticButton className="mx-auto font-body font-bold tracking-wide">
              Explore Solutions
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
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
      href: "#impl-deep-dive",
      cols: "md:col-span-2",
      rows: "md:row-span-2"
    },
    {
      title: "Migrations",
      icon: <FiLayers className="w-8 h-8 text-accent-purple" />,
      desc: "Seamless transition from ECC to S/4HANA.",
      features: ["Data Migration", "Zero Data Loss"],
      href: "#mig-deep-dive",
      cols: "",
      rows: "md:row-span-2"
    },
    {
      title: "Global Rollouts",
      icon: <FiGlobe className="w-8 h-8 text-accent-cyan" />,
      desc: "Standardizing processes across borders.",
      features: ["Global Template", "Local Compliance"],
      href: "#roll-deep-dive",
      cols: "",
      rows: ""
    },
    {
      title: "SAP AMS",
      icon: <FiActivity className="w-8 h-8 text-sap-400" />,
      desc: "24/7 Application Management & Support.",
      features: ["Incident Mgmt", "Optimization"],
      href: "#ams-deep-dive",
      cols: "md:col-span-2",
      rows: ""
    },
    {
      title: "Advisory",
      icon: <FiTrendingUp className="w-8 h-8 text-emerald-400" />,
      desc: "Strategic integration for long-term goals.",
      features: ["Strategy", "Roadmaps"],
      href: "#solutions",
      cols: "md:col-span-3",
      rows: ""
    },
  ]

  return (
    <section id="expertise" className="scroll-mt-28 py-20 lg:py-32 px-4 relative z-20 bg-sap-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-20 text-center md:text-left">
          <h2 className="font-heading italic text-5xl lg:text-7xl font-bold mb-4 text-white">Our Expertise</h2>
          <p className="font-body text-base lg:text-lg text-sap-300">Precision engineering and strategic insight.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className={cn(service.cols, service.rows, "h-full relative z-30")}>
              <Link href={service.href} className="block h-full cursor-pointer">
                <GlassCard hoverEffect className="h-full flex flex-col justify-between group relative overflow-hidden p-6 lg:p-8">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 w-fit rounded-xl backdrop-blur-md border border-white/10">{service.icon}</div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                        <FiArrowRight size={24} />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-3 text-white">{service.title}</h3>
                    <p className="font-body text-sm text-slate-400 mb-6 leading-relaxed">{service.desc}</p>

                    {service.features && (
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] lg:text-xs font-body font-medium text-sap-300">
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
    <div id="solutions" className="scroll-mt-28 bg-sap-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-body font-bold text-sap-300 mb-6"
        >
          <FiZap className="text-yellow-400" />
          ENGINEERED FOR VELOCITY
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* HEADING CONTAINER */}
          <h2 className="leading-[1.1] mb-8 text-center">

            {/* FLEX ROW: Aligns both words on the same baseline */}
            <div className="flex flex-wrap justify-center items-baseline gap-x-3 sm:gap-x-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">

              {/* 1. DETAILED (Serif Italic) 
          - pr-2: prevents the italic 'D' from being cut on the right
      */}
              <span className="font-heading font-bold italic tracking-tighter text-white pr-2">
                DETAILED
              </span>

              {/* 2. METHODOLOGIES (Script)
          - pr-2: prevents the 's' tail from being cut
          - pb-2: adds padding at the bottom so the loops of 'g' and 'y' aren't chopped
      */}
              <span className="font-italianno text-yellow-400 pr-2 pb-2">
                Methodologies
              </span>

            </div>
          </h2>

          {/* CAPTION
      - Added 'mt-2' for a little extra breathing room if needed
  */}
          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mt-2">
            Comprehensive SAP ecosystems designed for scale. From initial blueprint to 24/7 automation support.
          </p>
        </div>
        <p className="text-slate-400 font-body font-medium text-sm md:text-base max-w-2xl mx-auto">
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
              <h3 className="font-heading italic font-bold text-2xl mb-4 text-white">Why Migrate?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Zero Data Loss", "Minimized Downtime", "Hybrid Cloud", "Legacy Archiving"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-body font-medium text-xs text-slate-300">
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
              <h4 className="font-heading font-bold text-xl text-accent-cyan mb-2">Global Template</h4>
              <p className="text-xs text-slate-400 font-body">"Master Kernel" configuration ensuring 80% standardization.</p>
              <div className="mt-4 h-1 w-full bg-accent-cyan/20 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-accent-cyan"></div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h4 className="font-heading font-bold text-xl text-yellow-400 mb-2">Local Compliance</h4>
              <p className="text-xs text-slate-400 font-body">Adapting 20% for local tax & legal requirements.</p>
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
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-body font-bold text-sap-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-sap-950/50 rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-heading text-3xl font-bold text-white mb-1">99.9%</h4>
                <p className="text-[10px] font-body font-bold text-slate-500 uppercase">SLA Compliance</p>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <h4 className="font-heading text-3xl font-bold text-white mb-1">&lt;15m</h4>
                <p className="text-[10px] font-body font-bold text-slate-500 uppercase">Response Time</p>
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

  const content = [...industries, ...industries, ...industries, ...industries];

  return (
    <section id="industries" className="scroll-mt-32 py-12 bg-sap-900 border-y border-white/5 overflow-hidden relative">
      <div className="flex max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap pr-16">
          {content.map((ind, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-4 text-3xl sm:text-5xl md:text-7xl font-heading font-bold italic text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/50">
              {ind} <span className="text-sap-500 not-italic">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-infinite-scroll {
          animation: scroll 60s linear infinite;
          will-change: transform;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const WhyUsComparer = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  const dividerX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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
            <div className="font-heading italic text-6xl lg:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              17+
            </div>
            <p className="font-body font-bold text-xs lg:text-sm text-slate-400 uppercase tracking-wider">Years Team Experience</p>
          </div>

          <div className="text-center">
            <div className="font-heading italic text-6xl lg:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              24/7
            </div>
            <p className="font-body font-bold text-xs lg:text-sm text-slate-400 uppercase tracking-wider">AMS Support Coverage</p>
          </div>

          <div className="lg:col-span-2">
            <GlassCard className="flex flex-col sm:flex-row items-center gap-6 !bg-gradient-to-r !from-yellow-900/20 !to-transparent !border-yellow-500/20 text-center sm:text-left p-6">
              <div className="p-4 bg-yellow-500/10 rounded-full text-yellow-500 flex-shrink-0">
                <FiAward className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl lg:text-2xl text-yellow-100">Telangana's Biggest Brand 2024</h4>
                <p className="text-xs lg:text-sm text-yellow-200/60 font-body font-medium mt-1">Recognized as "Trendsetter" in SAP Services</p>
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
          className="font-heading italic text-[4rem] md:text-[8rem] font-bold leading-none tracking-tighter text-transparent -webkit-text-stroke-1 md:-webkit-text-stroke-2 text-stroke-white"
        >
          INTEGRITY • TEAMWORK • EMPOWERMENT • SHARVI INFOTECH •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div>
            <h2 className="font-heading italic text-3xl lg:text-5xl font-bold mb-8 text-white">Ready for your Digital Transformation?</h2>
            <MagneticButton onClick={() => window.location.href = 'mailto:careers@sharviinfotech.com'}>
              Contact Our Experts
            </MagneticButton>
          </div>
          <div className="grid grid-cols-2 gap-8 font-body text-sm text-slate-400">
            <div>
              <h4 className="text-white mb-4 uppercase tracking-wider font-bold">Company</h4>
              <ul className="space-y-2 font-medium">
                <li><a href="#overview" className="hover:text-white">About Us</a></li>
                <li><Link href="#solutions" className="hover:text-white">Solutions</Link></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#awards" className="hover:text-white">Awards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 uppercase tracking-wider font-bold">Contact</h4>
              <ul className="space-y-2 font-medium">
                <li>Hyderabad, Telangana</li>
                <li><a href="mailto:careers@sharviinfotech.com" className="text-sap-400 hover:underline">careers@sharviinfotech.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center font-body text-xs text-slate-500 gap-4 text-center">
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