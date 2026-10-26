import React, { useState } from 'react';
import { ArrowLeft, Check, Copy } from 'lucide-react';
import selenaRareBeautyImg from '../assets/selena-gomez-rare-beauty.jpg';
import { Story, MOST_READ_STORIES } from '../data/storiesData';

interface ArticlePageProps {
  story: Story;
  onBack: () => void;
  onSelectStory: (story: Story) => void;
  onOpenNewsletter: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  story,
  onBack,
  onSelectStory,
  onOpenNewsletter
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900 pb-16">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50/70">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#eb5724] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Voltar para a página inicial</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-neutral-400 text-[11px]">
            <span>Fast Company Brasil</span>
            <span>/</span>
            <span className="text-neutral-700 font-semibold uppercase">{story.tag || 'CREATORS & TECH'}</span>
          </div>
        </div>
      </div>

      {/* Main Article Container matching attached reference layout */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= LEFT / MAIN ARTICLE COLUMN (8 Cols) ================= */}
          <div className="lg:col-span-8">
            
            {/* 1. Date & Category Kicker */}
            <div className="mb-2.5">
              <span className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-neutral-800 font-poppins">
                23-09-2026 | {story.tag || 'CREATORS & TECH'}
              </span>
            </div>

            {/* 2. Main Title (Merriweather Bold, No period) */}
            <h1 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-[1.16] text-neutral-950 font-merriweather mb-4 tracking-tight">
              {story.title}
            </h1>

            {/* 3. Subtitle / Linha Fina (Deck) */}
            <p className="text-[16px] sm:text-[18px] text-neutral-600 leading-relaxed font-poppins font-normal mb-6">
              {story.snippet || 
                "Da prevenção ao suicídio ao desenho das embalagens, a experiência pessoal da artista ajuda a explicar como a marca transforma saúde mental em decisões de negócio"}
            </p>

            {/* 4. Featured Hero Image */}
            <div className="w-full overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-2 shadow-xs">
              <img
                src={selenaRareBeautyImg}
                alt={story.title}
                className="w-full h-auto object-cover object-center max-h-[580px]"
                loading="eager"
              />
            </div>

            {/* Image Credit */}
            <div className="text-[11.5px] text-neutral-500 font-poppins mb-6">
              Créditos: Unsplash, Rare Beauty
            </div>

            {/* 5. Author Bar & Floating Social Bar Row */}
            <div className="flex items-start gap-4 sm:gap-6 mb-8 pb-6 border-b border-neutral-200">
              
              {/* Vertical Stacked Circular Social Buttons (Exactly matching image) */}
              <div className="flex flex-col gap-2.5 shrink-0 pt-0.5">
                {/* Facebook */}
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#eb5724] transition-colors cursor-pointer shadow-xs"
                  title="Compartilhar no Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#eb5724] transition-colors cursor-pointer shadow-xs"
                  title="Compartilhar no LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(story.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#eb5724] transition-colors cursor-pointer shadow-xs"
                  title="Compartilhar no WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </button>

                {/* Email */}
                <button
                  onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(story.title)}&body=${encodeURIComponent(window.location.href)}`}
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#eb5724] transition-colors cursor-pointer shadow-xs"
                  title="Compartilhar por E-mail"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </button>

                {/* Copy Link */}
                <button
                  onClick={handleCopyLink}
                  className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer border border-neutral-300"
                  title="Copiar link"
                >
                  {copiedLink ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Byline + Reading Time + Google Banner */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[#eb5724] font-bold text-[13px] uppercase tracking-wider font-poppins">
                    CAMILA DE LIRA
                  </span>
                  <span className="text-neutral-500 font-medium text-[12px] uppercase tracking-wider font-poppins">
                    8 MINUTOS DE LEITURA
                  </span>
                </div>

                {/* Google "Favorite nosso conteúdo no Google >" */}
                <div className="mt-3.5">
                  <a
                    href="https://news.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#f8f9fa] hover:bg-[#eff1f3] text-neutral-800 text-[13px] font-medium rounded-full border border-neutral-200 transition-all shadow-2xs group"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Favorite nosso conteúdo no <strong className="font-semibold text-neutral-900">Google</strong></span>
                    <span className="text-neutral-400 group-hover:text-neutral-700 transition-colors">›</span>
                  </a>
                </div>
              </div>

            </div>

            {/* 6. Full Editorial Body Text */}
            <div className="space-y-6 text-[17px] sm:text-[18px] text-neutral-800 leading-[1.8] font-merriweather">
              
              <p>
                No palco da 12ª edição do <strong>Fast Company Innovation Festival</strong>, Selena Gomez fala baixo e em tom tranquilo. Ela se emociona ao relatar a jornada por trás da criação da <strong>Rare Beauty</strong>, marca de cosméticos fundada em setembro de 2020 que se consolidou rapidamente como um dos maiores cases recentes da indústria global de beleza, ultrapassando US$ 300 milhões em faturamento anual.
              </p>

              <p>
                A proposta que parecia contraintuitiva para a indústria tradicional — que historicamente construiu suas fortunas alimentando inseguranças e prometendo padrões estéticos inalcançáveis — foi justamente fazer o oposto: transformar a vulnerabilidade, a conversa franca sobre saúde mental e a aceitação pessoal no próprio núcleo estratégico do negócio.
              </p>

              {/* In-article Pull Quote */}
              <div className="my-8 py-5 px-6 border-l-4 border-[#eb5724] bg-neutral-50/80">
                <blockquote className="text-[20px] sm:text-[22px] font-bold text-neutral-950 leading-snug italic font-merriweather">
                  "Não criei a Rare Beauty para ser apenas mais uma marca de maquiagem de celebridade. Eu queria que as pessoas sentissem que pertencem a um espaço onde não precisam ser perfeitas para serem valorizadas."
                </blockquote>
                <cite className="block mt-3 text-xs uppercase tracking-wider font-bold text-neutral-600 font-poppins not-italic">
                  — Selena Gomez, fundadora e presidente do conselho da Rare Beauty
                </cite>
              </div>

              <h2 className="text-[24px] sm:text-[28px] font-bold text-neutral-950 font-merriweather pt-4">
                A escuta ativa como vantagem competitiva
              </h2>

              <p>
                Durante o painel <em>"Purpose That Performs: Inside the Rare Beauty Blueprint"</em>, ao lado de Elyse Cohen, vice-presidente de impacto social da marca, Selena destacou que a escuta atenta não é um adorno de relações públicas, mas sim o método operacional primário da companhia.
              </p>

              <p>
                Desde os primeiros protótipos, a equipe reuniu comunidades de fãs, profissionais de saúde e consumidores com diferentes históricos clínicos para testar formulações e usabilidade. O diagnóstico de lúpus recebido por Selena em 2015, acompanhado posteriormente pela revelação pública de seu transtorno bipolar, moldou uma liderança orientada pela empatia radical e pela rejeição de falsas promessas de rejuvenescimento ou perfeição.
              </p>

              <h2 className="text-[24px] sm:text-[28px] font-bold text-neutral-950 font-merriweather pt-4">
                Design com propósito: das embalagens ao Rare Impact Fund
              </h2>

              <p>
                Essa escuta se manifesta nos menores detalhes de engenharia de produto. Quem tem limitações de mobilidade ou fraqueza nas mãos — sintoma frequente enfrentado pela própria artista decorrente das crises de lúpus e artrite — frequentemente relata dor ao tentar desrosquear frascos apertados ou segurar aplicadores finos.
              </p>

              <p>
                A tampa esférica exclusiva dos blushes líquidos <em>Soft Pinch</em> e dos iluminadores foi desenvolvida para oferecer uma pega ergonômica e firme, permitindo que pessoas com artrite ou mobilidade reduzida consigam aplicar maquiagem com autonomia. O que começou como uma solução de acessibilidade virou também a assinatura visual mais reconhecível e compartilhada da marca nas redes sociais.
              </p>

              <p>
                Paralelamente, a marca estabeleceu desde o primeiro dia o <strong>Rare Impact Fund</strong>, comprometendo-se a doar 1% de todas as vendas globais para expandir o acesso a serviços de saúde mental para jovens e comunidades marginalizadas. A meta audaciosa de arrecadar US$ 100 milhões ao longo de uma década já ultrapassou dezenas de milhões repassados a ONGs globais e programas em escolas públicas.
              </p>

              <h2 className="text-[24px] sm:text-[28px] font-bold text-neutral-950 font-merriweather pt-4">
                A revolução dos 'creators' nos negócios corporativos
              </h2>

              <p>
                Para analistas de mercado, o sucesso sustentável da Rare Beauty desafia os conglomerados multinacionais porque não se apoia em uma mera associação de licenciamento. Selena Gomez participa diretamente do conselho, do desenvolvimento de produtos e da comunicação com os mais de 400 milhões de seguidores que acompanham sua rotina sem filtros.
              </p>

              <p>
                "O público atual é extremamente perspicaz. As pessoas sabem identificar quando um projeto tem alma ou quando é apenas uma tentativa corporativa de monetizar a atenção", concluiu a fundadora no encerramento de sua apresentação no festival. "Nossa meta nunca foi vender ilusão; foi oferecer ferramentas para que cada pessoa celebre quem realmente é."
              </p>

            </div>

            {/* Tags section */}
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <span className="text-[12px] font-bold text-neutral-400 uppercase tracking-wider block mb-3 font-poppins">
                TÓPICOS RELACIONADOS
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-800 font-poppins">
                {['SELENA GOMEZ', 'RARE BEAUTY', 'CREATORS & TECH', 'SAÚDE MENTAL', 'INOVAÇÃO', 'EMPREENDEDORISMO'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 transition-colors border border-neutral-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back to Home CTA button */}
            <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center justify-between">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-[#eb5724] transition-colors text-sm font-bold uppercase tracking-wider font-poppins cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Voltar ao feed de notícias</span>
              </button>
            </div>

          </div>

          {/* ================= RIGHT / SIDEBAR COLUMN (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Fast Company Brasil Apresenta Ad Banner (Matching attached image) */}
            <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-200 shadow-xs group">
              {/* Ad badge at top right */}
              <div className="absolute top-2 right-2 z-20 flex items-center bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded-xs text-[9px] font-semibold text-neutral-600">
                <span className="mr-0.5">ⓘ</span>
                <span>Anúncio</span>
              </div>

              {/* Architectural dark background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

              {/* Center Content */}
              <div className="relative z-10 w-full h-full p-6 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 font-poppins mb-1">
                  FAST COMPANY
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#eb5724] font-poppins mb-3">
                  BRASIL
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider font-poppins">
                  APRESENTA
                </h4>
                <p className="text-xs text-neutral-300 font-poppins mt-2 max-w-[220px]">
                  Séries exclusivas sobre a vanguarda dos negócios globais
                </p>
              </div>
            </div>

            {/* Widget 2: Newsletter Signup Card (Matching exact colors and layout in image) */}
            <div className="bg-[#15181d] text-white p-6 sm:p-7 rounded-sm shadow-md">
              <h3 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-white font-poppins mb-4">
                INSCREVA-SE EM NOSSA NEWSLETTER
              </h3>

              {newsletterSubmitted ? (
                <div className="bg-[#eb5724]/20 border border-[#eb5724] text-[#eb5724] p-3 text-xs font-semibold rounded-xs">
                  ✓ Inscrição confirmada! Você receberá nossos destaques editoriais.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="EMAIL*"
                      className="w-full bg-white text-neutral-900 px-3.5 py-3 text-xs sm:text-sm font-medium placeholder:text-neutral-400 placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-[#eb5724] rounded-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#eb5724] hover:bg-[#d64818] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-4 rounded-xs transition-colors cursor-pointer"
                  >
                    INSCREVA-SE
                  </button>
                </form>
              )}
            </div>

            {/* Widget 3: Mais Lidas / Trending Stories */}
            <div className="border border-neutral-200 bg-white p-5">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-neutral-900 font-poppins pb-3 mb-4 border-b border-neutral-200">
                MAIS LIDAS
              </h4>
              <div className="space-y-4">
                {MOST_READ_STORIES.slice(0, 4).map((item, index) => (
                  <article
                    key={item.id}
                    onClick={() => onSelectStory(item)}
                    className="flex items-start gap-3 cursor-pointer group pb-3 last:pb-0 border-b border-neutral-100 last:border-none"
                  >
                    <span className="text-2xl font-extrabold text-neutral-300 group-hover:text-neutral-800 leading-none shrink-0 w-5 font-poppins">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-poppins">
                        {item.tag}
                      </span>
                      <h5 className="text-[13px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-snug font-merriweather">
                        {item.title}
                      </h5>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
