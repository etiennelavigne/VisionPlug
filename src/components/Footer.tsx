import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-400 py-12 px-6 border-t border-neutral-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xs font-mono tracking-widest uppercase opacity-50">
                    &copy; {new Date().getFullYear()} VISION. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <a href="mailto:vision.production34000@gmail.com" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-xs font-medium uppercase tracking-wider">
                        <Mail size={14} /> <span>Email</span>
                    </a>
                    <a href="https://www.instagram.com/_vision_plug/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-xs font-medium uppercase tracking-wider">
                        <Instagram size={14} /> <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/etienne-lavigne-76024519a/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#E3D5CA] hover:text-neutral-950 hover:border-[#E3D5CA] transition-all duration-300 flex items-center gap-2 group text-xs font-medium uppercase tracking-wider">
                        <Linkedin size={14} /> <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
