import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const categoryColors = {
    "Cloud Storage / SaaS": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
    "AI / NLP": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
    "Automation / AI": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    "Machine Learning": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
};

export default function ProjectCard({ project, index }) {
    const colors = categoryColors[project.category] || {
        bg: "bg-primary-50",
        text: "text-primary-700",
        border: "border-primary-200",
    };

    return (
        <article
            className={`animate-fade-in-up stagger-${(index % 6) + 1
                } group relative bg-surface rounded-2xl border border-border overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300`}
        >
            {/* Gradient accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-6">
                {/* Header: Badge + Arrow */}
                <div className="flex items-start justify-between mb-4">
                    <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                        {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-surface-alt border border-border-light text-xs font-medium text-text-secondary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary text-white text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                        aria-label={`View ${project.title} repository`}
                    >
                        <Github className="w-4 h-4" />
                        Repo
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-300 text-primary-600 text-sm font-medium hover:bg-primary-50 transition-colors duration-200"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
