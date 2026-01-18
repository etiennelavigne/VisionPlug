export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-400 py-12 px-6 border-t border-neutral-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} VISION. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="https://www.instagram.com/_vision_plug/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Vimeo</a>
                    <a href="mailto:vision.production34000@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
