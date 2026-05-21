import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Indigo didn't just build a home; they curated a lifestyle. The attention to material detail at Meridiana Blue Oak is unmatched anywhere in Lagos.",
    client: "Chief O. Adebayo",
    role: "Resident, Meridiana Blue Oak"
  },
  {
    quote: "An exceptional investment vehicle. Their proactive property management team ensures our luxury apartments retain their premium yield year after year.",
    client: "A. Ndubuisi",
    role: "Private Equity Investor"
  },
  {
    quote: "The architectural intelligence of Ivory Grove completely redefined my expectations for gated estates. It is a truly world-class living experience.",
    client: "Dr. E. Okafor",
    role: "Homeowner, Ivory Grove"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#05070a] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500/50"></div>
              <p className="text-gold-400 tracking-[0.2em] text-xs md:text-sm font-sans uppercase font-medium">
                Client Voices
              </p>
            </div>
            <h2 className="text-[2.5rem] md:text-5xl font-serif text-white leading-tight">
              Words of <br className="hidden sm:block"/>
              <span className="text-gradient-gold italic pr-2">appreciation.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-indigo-950/40 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between hover:border-gold-500/20 hover:bg-indigo-950/60 transition-colors duration-500"
            >
              <div>
                <Quote className="w-10 h-10 text-gold-500/20 mb-6 group-hover:text-gold-500/40 transition-colors" />
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-white/5 pt-6 mt-auto">
                <p className="text-white font-medium mb-1 tracking-wide">{testimonial.client}</p>
                <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase font-light">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
