import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-white tracking-wider uppercase mb-6">
              <span className="text-gradient-gold">Indigo</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md leading-relaxed mb-8">
              Boutique real estate development firm in Lagos, exploring innovation, excellence, and sustainability.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Offices</h3>
            <ul className="space-y-6 text-sm text-gray-400 font-light">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-gold-500" />
                <span>
                  <strong className="text-gray-200 font-medium block mb-1">Lekki Business Office</strong>
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-gold-500" />
                <span>
                  <strong className="text-gray-200 font-medium block mb-1">Mainland Business Office</strong>
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Contact</h3>
            <ul className="space-y-6 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-4 hover:text-gold-400 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-gold-500" />
                invest@indigodevelopments.com
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold-500" />
                +234 (0) 800 INDIGO
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest uppercase text-gray-600">
          <p>&copy; {new Date().getFullYear()} INDIGO HOMES & DEVELOPMENTS LIMITED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
