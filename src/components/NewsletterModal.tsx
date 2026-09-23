import React, { useState } from 'react';
import { X, Check, Mail } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Tech & IA', 'Liderança']);

  if (!isOpen) return null;

  const topics = ['Tech & IA', 'Liderança', 'Design & Inovação', 'Sustentabilidade (ESG)', 'Money'];

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white text-neutral-900 w-full max-w-lg rounded-none shadow-2xl relative p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1 transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-4">
              <Mail size={20} />
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d63031] font-poppins block mb-1">
              NEWSLETTER EXCLUSIVA
            </span>

            <h2 className="text-2xl font-extrabold text-neutral-950 font-poppins leading-tight mb-2">
              O futuro dos negócios na sua caixa de entrada
            </h2>

            <p className="text-sm text-neutral-600 font-poppins leading-relaxed mb-5">
              Receba diariamente nossa curadoria com as notícias mais relevantes sobre inovação, liderança, tecnologia e design.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-poppins">
                  Selecione seus interesses
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => {
                    const isChecked = selectedTopics.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTopic(t)}
                        className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all cursor-pointer font-poppins ${
                          isChecked 
                            ? 'bg-black text-white border-black' 
                            : 'bg-neutral-100 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-poppins">
                  Seu e-mail corporativo
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@suaempresa.com.br"
                  className="w-full px-4 py-2.5 border border-neutral-300 rounded-none focus:outline-none focus:border-black font-poppins text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b1b1b] hover:bg-black text-white py-3 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer font-poppins"
              >
                ASSINAR GRATUITAMENTE
              </button>

              <p className="text-[10px] text-neutral-400 text-center font-poppins">
                Ao se inscrever, você concorda com nossos Termos de Uso e Política de Privacidade.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Check size={28} className="stroke-[3]" />
            </div>
            <h3 className="text-xl font-extrabold text-neutral-950 font-poppins mb-2">
              Inscrição confirmada!
            </h3>
            <p className="text-sm text-neutral-600 font-poppins mb-6">
              Enviamos um e-mail de confirmação para <strong>{email}</strong>. Fique atento às próximas edições da Fast Company Brasil.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider font-poppins"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
