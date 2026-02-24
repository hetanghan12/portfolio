import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Code2 } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Projects", href: "#projects" },
        {
            label: "GitHub",
            href: "https://github.com/hetanghan12",
            external: true,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/het-anghan-84416834b/",
            external: true,
        },
    ];

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "glass shadow-premium border-b border-border-light py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 group"
                    aria-label="HetAnghan Home"
                >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                        <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-text-primary">
                        Het<span className="text-gradient">Anghan</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-surface-hover transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="w-5 h-5 text-text-primary" />
                    ) : (
                        <Menu className="w-5 h-5 text-text-primary" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden animate-slide-down border-t border-border-light glass mt-2">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                onClick={() => setMobileOpen(false)}
                                className="px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
