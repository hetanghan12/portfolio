import ProjectCard from "./ProjectCard";
import { FolderSearch } from "lucide-react";

export default function ProjectsGrid({ projects }) {
    if (projects.length === 0) {
        return (
            <div
                id="no-results"
                className="animate-fade-in text-center py-20 max-w-md mx-auto"
            >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-5">
                    <FolderSearch className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                    No projects found
                </h3>
                <p className="text-sm text-text-secondary">
                    Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
            </div>
        );
    }

    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        >
            {/* Section header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
                    <p className="text-sm text-text-secondary mt-1">
                        {projects.length} project{projects.length !== 1 ? "s" : ""} found
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}
