import { Button } from "@/components/ui/button";
import { Globe2Icon, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                <Image src="/logo.svg" alt="Logo" width={32} height={32} className="relative opacity-90" />
              </div>
              <span className="font-bold text-xl text-white font-['Outfit'] tracking-tight">
                Course's <span className="text-heat">Academy</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of builders, creators, and innovators. Forge your path to mastery with our premium courses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></Link>
              <Link href="https://github.com/nik-100xdevz/" className="hover:text-amber-500 transition-colors"><Github size={20} /></Link>
              <Link href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6 font-['Outfit']">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/courses" className="hover:text-amber-500 transition-colors">Browse Courses</Link></li>
              <li><Link href="/mentors" className="hover:text-amber-500 transition-colors">Mentors</Link></li>
              <li><Link href="/pricing" className="hover:text-amber-500 transition-colors">Pricing</Link></li>
              <li><Link href="/for-business" className="hover:text-amber-500 transition-colors">For Business</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6 font-['Outfit']">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-amber-500 transition-colors">Careers</Link></li>
              <li><Link href="/help" className="hover:text-amber-500 transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6 font-['Outfit']">Language</h3>
            <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-amber-500 w-full justify-start gap-2">
              <Globe2Icon size={16} />
              <span>English (US)</span>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Nikhil Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Forged with <span className="text-red-500">❤️</span> by Nikhil Rai
          </p>
        </div>
      </div>
    </footer>
  );
}
