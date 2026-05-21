import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState<{role: 'user'|'ai', content: string}[]>([]);
  const [loading, setLoading] = useState(false);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation, loading]);

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
      setConversation(prev => [...prev, { role: 'ai', content: "Our systems are currently unavailable. Please connect via WhatsApp or the contact form." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.5, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 text-indigo-950 rounded-full shadow-lg shadow-gold-500/30 hover:-translate-y-1 hover:shadow-xl transition-all"
        aria-label="Toggle AI Consultant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, pointerEvents: 'none' }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 md:right-8 z-[60] w-[calc(100vw-2rem)] md:w-[400px] h-[500px] max-h-[calc(100vh-8rem)] bg-indigo-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-indigo-900/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">AI Architect</h3>
                  <p className="text-gold-500 text-[10px] tracking-wider uppercase font-medium mt-0.5">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 custom-scrollbar">
              {conversation.length === 0 && (
                <div className="text-center py-8 px-4">
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Hello. I am the Indigo AI Consultant. Briefly share your investment goals, budget, or architectural vision.
                  </p>
                </div>
              )}
              
              {conversation.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3.5 text-[13px] md:text-sm ${
                      msg.role === 'user' 
                        ? 'bg-gold-500/90 text-indigo-950 rounded-br-none font-medium shadow-sm' 
                        : 'bg-indigo-800/60 border border-white/5 text-gray-200 rounded-bl-none backdrop-blur-md shadow-sm'
                    }`}
                  >
                    {msg.role === 'ai' ? (
                      <div className="prose prose-invert prose-p:leading-relaxed prose-sm max-w-none text-[13.5px] md:text-sm">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-indigo-800/40 border border-white/5 rounded-2xl rounded-bl-none p-3.5 flex gap-1.5 w-14 justify-center">
                    <div className="w-1 h-1 bg-gold-500/80 rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-gold-500/80 rounded-full animate-bounce delay-100" />
                    <div className="w-1 h-1 bg-gold-500/80 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 md:p-4 bg-indigo-950/80 border-t border-white/5">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={loading}
                  className="w-full bg-indigo-900/40 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/40 transition-colors disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={!prompt.trim() || loading}
                  className="absolute right-1 p-2 bg-gradient-to-br from-gold-400 to-gold-600 text-indigo-950 rounded-full disabled:opacity-40 disabled:from-gray-700 disabled:to-gray-800 disabled:text-gray-400 transition-all"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
