import { Heart, Code2 } from "lucide-react";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-border bg-surface"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left: Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-text-primary">
                            Het<span className="text-gradient">Anghan</span>
                        </span>
                    </div>

                    {/* Center: Copyright */}
                    <p className="text-sm text-text-secondary flex items-center gap-1.5">
                        &copy; {new Date().getFullYear()} Het Anghan. Built with
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
                        precision and passion.
                    </p>

                    {/* Right: Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/hetanghan12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text-muted hover:text-primary-600 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/het-anghan-84416834b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text-muted hover:text-primary-600 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
