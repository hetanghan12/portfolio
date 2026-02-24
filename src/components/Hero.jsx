import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 dot-pattern opacity-40" />
            <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl" />
            <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-primary-300/20 blur-3xl" />

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
                {/* Badge */}
                <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8">
                    <Sparkles className="w-4 h-4" />
                    <span>Open to Opportunities</span>
                </div>

                {/* Title */}
                <h1 className="animate-fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Full-Stack{" "}
                    <span className="text-gradient">Portfolio</span>
                </h1>

                {/* Subtitle */}
                <p className="animate-fade-in-up stagger-2 mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    A curated collection of my web applications, repositories, and
                    internship work.
                </p>

                {/* CTA */}
                <div className="animate-fade-in-up stagger-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                        View Projects
                        <ArrowDown className="w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com/hetanghan12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-semibold hover:border-primary-300 hover:text-primary-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-premium"
                    >
                        GitHub Profile
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="animate-float mt-16">
                    <ArrowDown className="w-5 h-5 mx-auto text-text-muted" />
                </div>
            </div>
        </section>
    );
}
