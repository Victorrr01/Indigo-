import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2, Sparkles, Building2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function AIConsultant() {
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState<{role: 'user'|'ai', content: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    const userMessage = prompt.trim();
    setPrompt("");
    setConversation(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setConversation(prev => [...prev, { role: 'ai', content: data.result }]);
    } catch (err) {
      setConversation(prev => [...prev, { role: 'ai', content: "Our systems are currently unavailable. Please contact our mainland or Lekki office for direct consultation." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 md:py-32 bg-indigo-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative z-20">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-gold-500/10">
              <Sparkles className="text-indigo-950 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-[2.5rem] md:text-5xl font-serif text-white mb-4 md:mb-6 leading-tight">
              Indigo AI <br className="hidden sm:block"/> <span className="text-gradient-gold italic pr-2">Architect.</span>
            </h2>
            <p className="text-gray-300/80 leading-relaxed mb-8 text-sm md:text-base font-light">
              Discuss your budget, timeline, and architectural preferences with our AI consultant. Let us pair you with the perfect Indigo property in Lagos, or outline the roadmap for your custom development.
            </p>
            <ul className="space-y-4 mb-8 lg:mb-0 hidden sm:block">
              <li className="flex items-center gap-3 text-sm text-gray-400 font-light tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Instant property matching
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 font-light tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Architectural insights
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 font-light tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Investment guidance
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            {/* The Chat Interface Box */}
            <div className="bg-indigo-900/30 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-[600px] w-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              
              {/* Chat Window */}
              <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 flex flex-col custom-scrollbar z-10 scroll-smooth">
                {conversation.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
                    <Building2 className="w-12 h-12 md:w-16 md:h-16 text-gold-500/20 mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Welcome to Indigo</h3>
                    <p className="text-gray-400/80 text-sm md:text-base font-light max-w-sm italic">
                      "I am looking for a luxury 4-bedroom villa in Lagos under ₦500M."
                    </p>
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {conversation.map((msg, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[90%] md:max-w-[80%] rounded-2xl p-4 md:p-5 shadow-sm ${
                            msg.role === 'user' 
                              ? 'bg-gold-500/90 text-indigo-950 rounded-br-none font-medium' 
                              : 'bg-indigo-800/60 backdrop-blur-md border border-white/5 text-gray-200 rounded-bl-none'
                          }`}
                        >
                          {msg.role === 'ai' ? (
                            <div className="prose prose-invert prose-p:leading-relaxed prose-sm max-w-none text-[15px]">
                              <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                          ) : (
                            <span className="text-[15px]">{msg.content}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-indigo-800/40 backdrop-blur-md border border-white/5 rounded-2xl rounded-bl-none p-4 flex gap-2 w-16 justify-center">
                      <div className="w-1.5 h-1.5 bg-gold-500/80 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-gold-500/80 rounded-full animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 bg-gold-500/80 rounded-full animate-bounce delay-200" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 md:p-4 bg-indigo-950/80 border-t border-white/5 z-10 transform-gpu translate-z-0">
                <form onSubmit={handleSubmit} className="relative flex items-center max-w-full">
                  <input 
                    type="text" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your vision..."
                    disabled={loading}
                    className="w-full bg-indigo-900/50 backdrop-blur-md border border-white/10 rounded-full py-3 md:py-4 pl-5 pr-14 md:pl-6 md:pr-16 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/40 transition-all disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={!prompt.trim() || loading}
                    className="absolute right-1.5 md:right-2 p-2.5 md:p-3 bg-gradient-to-br from-gold-400 to-gold-600 text-indigo-950 rounded-full disabled:opacity-40 disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-400 transition-all duration-300"
                  >
                    {loading ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : <Send className="w-4 h-4 md:w-5 md:h-5" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
