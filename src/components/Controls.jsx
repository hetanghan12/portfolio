import { Search, SlidersHorizontal } from "lucide-react";
import { categories } from "../data/projects";

export default function Controls({ search, setSearch, category, setCategory }) {
    return (
        <div
            id="controls"
            className="animate-fade-in-up max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
        >
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-muted pointer-events-none" />
                    <input
                        id="search-input"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search projects, tech stack..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted shadow-premium focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all duration-200"
                    />
                </div>

                {/* Category Filter */}
                <div className="relative">
                    <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    <select
                        id="category-filter"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="appearance-none w-full sm:w-52 pl-11 pr-10 py-3 rounded-xl bg-surface border border-border text-sm text-text-primary shadow-premium focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 cursor-pointer transition-all duration-200"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    {/* Custom arrow */}
                    <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
