import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Controls from "./components/Controls";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = useMemo(() => {
        return projects.filter((p) => {
            const q = search.toLowerCase();
            const matchesSearch =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.stack.some((t) => t.toLowerCase().includes(q));

            const matchesCategory =
                category === "All" || p.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                <Hero />
                <Controls
                    search={search}
                    setSearch={setSearch}
                    category={category}
                    setCategory={setCategory}
                />
                <ProjectsGrid projects={filtered} />
            </main>

            <Footer />
        </div>
    );
}
