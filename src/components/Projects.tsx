import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: "MERIDIANA BLUE OAK",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80",
    category: "Residential Architecture",
    status: "Selling",
    location: "Lagos"
  },
  {
    name: "INSIGNIA",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Luxury Apartments",
    status: "Completed",
    location: "Ikoyi"
  },
  {
    name: "IVORY GROVE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    category: "Gated Estate",
    status: "Completed",
    location: "Lekki Phase 1"
  },
  {
    name: "MERIDIANA GOLD FOLD",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Premium Villas",
    status: "In Development",
    location: "Victoria Island"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-indigo-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] md:text-5xl font-serif text-white mb-4">Featured <span className="text-gradient-gold italic pr-2">Projects.</span></h2>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Curated expressions of our design philosophy. Each project represents a unique approach to structural excellence and affluent living in Nigeria's most premium neighborhoods.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium tracking-wide text-sm transition-colors uppercase border border-gold-500/20 px-6 py-3 rounded-full hover:bg-gold-500/10">
            VIEW ALL PROJECTS <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer relative"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl mb-5 md:mb-6">
                <div className="absolute inset-0 bg-indigo-950/30 group-hover:bg-indigo-950/0 transition-colors duration-700 z-10" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-indigo-950/70 backdrop-blur-md border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gold-400">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <p className="text-gray-400 text-xs md:text-sm tracking-[0.15em] uppercase mb-1.5 md:mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">{project.category} &bull; {project.location}</p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-white group-hover:text-gold-50 transition-colors line-clamp-1">{project.name}</h3>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all text-white shrink-0 mt-1">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-indigo-950" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="inline-flex items-center gap-2 text-gold-400 font-medium tracking-wide text-sm uppercase px-8 py-3.5 rounded-full border border-gold-500/30 bg-gold-500/5">
            VIEW ALL PROJECTS <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
