import React, { useState } from 'react';
import { EditorialImage } from './EditorialImage';
import { Story } from '../data/storiesData';

interface StoriesForYouProps {
  onSelectStory: (story: Story) => void;
}

interface EditoriaShortsVideo {
  youtubeId: string;
  youtubeUrl: string;
}

interface EditoriaData {
  id: string;
  label: string;
  stories: Story[];
  video: EditoriaShortsVideo;
}

const EDITORIAS_DATA: EditoriaData[] = [
  {
    id: 'ia',
    label: 'INTELIGÊNCIA ARTIFICIAL',
    video: {
      youtubeId: 'Lz4-R31q8h0',
      youtubeUrl: 'https://www.youtube.com/shorts/Lz4-R31q8h0'
    },
    stories: [
      {
        id: 'ia-1',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: 'Não importa se a identidade visual da sua marca parece boa',
        imageType: 'brand-identity-cards',
        snippet: 'Por que a coerência estratégica e a percepção do consumidor superam o apelo estético superficial.'
      },
      {
        id: 'ia-2',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: 'As confusas reformulações de marca da Paramount e WBD revelam uma indústria em crise',
        imageType: 'paramount-wbd',
        snippet: 'As sucessivas mudanças de identidade revelam as tensões estruturais da guerra do streaming.'
      },
      {
        id: 'ia-3',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: 'O novo rebranding minimalista da Novo Nordisk sinaliza uma nova era do consumo direto?',
        imageType: 'novo-nordisk',
        snippet: 'A gigante farmacêutica aposta em um posicionamento direto e minimalista no mercado global.'
      },
      {
        id: 'ia-4',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: "'Eu queria algo cru': Paula Scher explica seu logotipo com mapa distorcido",
        imageType: 'paula-scher-map',
        snippet: 'A lendária designer discute a imperfeição intencional e a potência visual de romper com a simetria.'
      },
      {
        id: 'ia-5',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: 'O propósito da sua marca não é o que os consumidores realmente lembram',
        imageType: 'thought-bubble-purpose',
        snippet: 'Estudos comportamentais mostram que a utilidade real supera discursos vazios de propósito.'
      },
      {
        id: 'ia-6',
        tag: 'INTELIGÊNCIA ARTIFICIAL',
        title: 'Time Lake Ontario ou time Lake America? Há um boné para ambos os lados',
        imageType: 'lake-ontario-cap',
        snippet: 'Como o vestuário e os símbolos de pertencimento comunitário estão redefinindo o varejo cultural.'
      }
    ]
  },
  {
    id: 'worklife',
    label: 'WORKLIFE',
    video: {
      youtubeId: 'wSCDc8nnnC4',
      youtubeUrl: 'https://www.youtube.com/shorts/wSCDc8nnnC4'
    },
    stories: [
      {
        id: 'wl-1',
        tag: 'WORKLIFE',
        title: 'A armadilha da hiperconexão: por que trabalhar mais horas não gera inovação real',
        imageType: 'trophy-award',
        snippet: 'Líderes de tecnologia repensam a rotina para evitar o burnout de suas equipes essenciais.'
      },
      {
        id: 'wl-2',
        tag: 'WORKLIFE',
        title: 'Estes 7 livros sobre rotina e felicidade vão mudar sua forma de trabalhar em 2026',
        imageType: 'books-happiness',
        snippet: 'Uma curadoria de obras fundamentais para manter a sanidade e a eficiência profissional.'
      },
      {
        id: 'wl-3',
        tag: 'WORKLIFE',
        title: 'Reuniões que poderiam ser memorandos: o custo invisível no orçamento das empresas',
        imageType: 'meeting-faking',
        snippet: 'Metodologias assíncronas comprovam ganho de até 40% em produtividade e criatividade.'
      },
      {
        id: 'wl-4',
        tag: 'WORKLIFE',
        title: 'Segurança psicológica: o pilar central dos times mais inovadores e resilientes',
        imageType: 'thought-bubble-purpose',
        snippet: 'Como criar ambientes seguros onde o erro seja visto como parte vital do aprendizado.'
      },
      {
        id: 'wl-5',
        tag: 'WORKLIFE',
        title: 'Trabalho híbrido inteligente: o que os dados das maiores capitais revelam',
        imageType: 'retro-terminal',
        snippet: 'Flexibilidade aliada a metas claras substitui o controle presencial tradicional.'
      },
      {
        id: 'wl-6',
        tag: 'WORKLIFE',
        title: 'Gestão de energia mental: o método dos executivos que tomam decisões difíceis',
        imageType: 'lake-ontario-cap',
        snippet: 'Pausas estratégicas e foco pontual superam o modelo esgotante de multitarefas.'
      }
    ]
  },
  {
    id: 'impacto',
    label: 'IMPACTO',
    video: {
      youtubeId: 'f2enoZgHX64',
      youtubeUrl: 'https://www.youtube.com/shorts/f2enoZgHX64'
    },
    stories: [
      {
        id: 'imp-1',
        tag: 'IMPACTO',
        title: 'Cidades esponja: a engenharia urbana contra enchentes e eventos climáticos',
        imageType: 'climate-cities-map',
        snippet: 'Projetos inovadores de drenagem natural e parques inundáveis salvam vidas e economias.'
      },
      {
        id: 'imp-2',
        tag: 'IMPACTO',
        title: 'Agricultura regenerativa: o agronegócio pode liderar a recuperação do solo',
        imageType: 'regenerative-agri',
        snippet: 'Técnicas ancestrais combinadas com sensores modernos sequestram carbono em larga escala.'
      },
      {
        id: 'imp-3',
        tag: 'IMPACTO',
        title: 'Descarbonização industrial: os setores que mais investem rumo ao Net Zero',
        imageType: 'ai-transformation-wave',
        snippet: 'Cimento, aço e logística aceleram a transição para combustíveis limpos e renováveis.'
      },
      {
        id: 'imp-4',
        tag: 'IMPACTO',
        title: 'Créditos de biodiversidade: a nova fronteira do mercado de capitais verde',
        imageType: 'scale-lightbulb',
        snippet: 'Como precificar e valorizar a preservação das florestas tropicais de forma sustentável.'
      },
      {
        id: 'imp-5',
        tag: 'IMPACTO',
        title: 'Logística reversa e embalagens circulares: o que realmente funciona em escala',
        imageType: 'brand-identity-cards',
        snippet: 'Consumidores exigem responsabilidade ponta a ponta dos grandes fabricantes.'
      },
      {
        id: 'imp-6',
        tag: 'IMPACTO',
        title: 'Energia solar nas periferias: autonomia energética gera empregos e renda local',
        imageType: 'measles-map',
        snippet: 'Cooperativas solares transformam comunidades urbanas e descentralizam a matriz.'
      }
    ]
  },
  {
    id: 'design',
    label: 'DESIGN',
    video: {
      youtubeId: 'ksSICAxq5ag',
      youtubeUrl: 'https://www.youtube.com/shorts/ksSICAxq5ag'
    },
    stories: [
      {
        id: 'des-1',
        tag: 'DESIGN',
        title: 'Os princípios de design que tornaram a Apple a marca mais valiosa do planeta',
        imageType: 'brand-identity-cards',
        snippet: 'Simplicidade, ergonomia e a obsessão por materiais no cerne da engenharia de produto.'
      },
      {
        id: 'des-2',
        tag: 'DESIGN',
        title: 'Por que o redesign de logos consagrados gera tanta controvérsia inicial nas redes',
        imageType: 'paramount-wbd',
        snippet: 'O apego nostálgico dos consumidores e a necessidade de adaptação às telas reduzidas.'
      },
      {
        id: 'des-3',
        tag: 'DESIGN',
        title: 'Tipografia, cores e espaço negativo: a psicologia por trás das interfaces modernas',
        imageType: 'keyboard-keys',
        snippet: 'Como decisões sutis de layout aumentam a retenção e diminuem o atrito cognitivo.'
      },
      {
        id: 'des-4',
        tag: 'DESIGN',
        title: 'Design circular: criando produtos planejados para desmontagem e reciclagem total',
        imageType: 'regenerative-agri',
        snippet: 'Engenheiros e designers redesenham eletrodomésticos para durar mais de uma década.'
      },
      {
        id: 'des-5',
        tag: 'DESIGN',
        title: 'Design espacial e interfaces imersivas: o que vem após a era dos smartphones',
        imageType: 'paula-scher-map',
        snippet: 'Computação espacial exige uma nova linguagem visual livre de botões convencionais.'
      },
      {
        id: 'des-6',
        tag: 'DESIGN',
        title: 'Identidade sonora e tátil: quando a marca é sentida sem precisar de nenhuma tela',
        imageType: 'thought-bubble-purpose',
        snippet: 'Assinaturas acústicas e feedbacks hápticos constroem lembrança instantânea.'
      }
    ]
  },
  {
    id: 'money',
    label: 'MONEY',
    video: {
      youtubeId: 'ssjMkh8Cafc',
      youtubeUrl: 'https://www.youtube.com/shorts/ssjMkh8Cafc'
    },
    stories: [
      {
        id: 'mon-1',
        tag: 'MONEY',
        title: 'O fim do capital subsidiado e a nova disciplina de caixa nas empresas de tecnologia',
        imageType: 'scale-lightbulb',
        snippet: 'Startups trocam crescimento a qualquer custo por margens saudáveis e governança.'
      },
      {
        id: 'mon-2',
        tag: 'MONEY',
        title: 'Venture Capital em 2026: as áreas que atraem os maiores cheques dos investidores',
        imageType: 'ai-transformation-wave',
        snippet: 'Deep tech, energia limpa e inteligência artificial lideram as rodadas da temporada.'
      },
      {
        id: 'mon-3',
        tag: 'MONEY',
        title: 'A corrida de IPOs: companhias brasileiras preparam abertura de capital em NY',
        imageType: 'trophy-award',
        snippet: 'Liquidez externa e visibilidade internacional motivam a busca por listagem global.'
      },
      {
        id: 'mon-4',
        tag: 'MONEY',
        title: 'Fintechs de crédito corporativo desafiam os spreads dos grandes conglomerados',
        imageType: 'retro-terminal',
        snippet: 'Análise algorítmica de recebíveis reduz taxas e dinamiza o financiamento a PMEs.'
      },
      {
        id: 'mon-5',
        tag: 'MONEY',
        title: 'Tokenização de ativos físicos: como imóveis e commodities ganham liquidez digital',
        imageType: 'keyboard-keys',
        snippet: 'A tecnologia blockchain democratiza investimentos antes restritos a ultra-ricos.'
      },
      {
        id: 'mon-6',
        tag: 'MONEY',
        title: 'Gestão de riscos geopolíticos e cambiais na carteira de multinacionais latino-americanas',
        imageType: 'lake-ontario-cap',
        snippet: 'Estratégias de hedge protegem margens frente à volatilidade das moedas globais.'
      }
    ]
  },
  {
    id: 'news',
    label: 'NEWS',
    video: {
      youtubeId: '5HN-tnwvfpU',
      youtubeUrl: 'https://www.youtube.com/shorts/5HN-tnwvfpU'
    },
    stories: [
      {
        id: 'new-1',
        tag: 'NEWS',
        title: 'A corrida dos semicondutores quânticos e os novos anúncios que mexem com Wall Street',
        imageType: 'navy-laser',
        snippet: 'Avanços em coerência quântica aceleram a computação aplicada a fármacos e criptografia.'
      },
      {
        id: 'new-2',
        tag: 'NEWS',
        title: 'Regulamentação global da IA generativa entra em fase de conformidade obrigatória',
        imageType: 'ai-correct-target',
        snippet: 'Empresas aceleram auditorias algorítmicas para evitar multas bilionárias na Europa.'
      },
      {
        id: 'new-3',
        tag: 'NEWS',
        title: 'Tráfego de bots automatizados cresce 9 vezes mais rápido que o tráfego humano',
        imageType: 'bot-traffic',
        snippet: 'Relatório global alerta para ataques de raspagem de dados e impacto na infraestrutura.'
      },
      {
        id: 'new-4',
        tag: 'NEWS',
        title: 'Grandes fusões na mídia e streaming remodelam o mapa de direitos esportivos',
        imageType: 'paramount-wbd',
        snippet: 'Consolidação de plataformas busca conter a perda de assinantes e elevar rentabilidade.'
      },
      {
        id: 'new-5',
        tag: 'NEWS',
        title: 'Nvidia e fornecedores de chips anunciam data centers hiper-eficientes em energia',
        imageType: 'jensen-huang',
        snippet: 'Nova arquitetura térmica reduz em até 45% o consumo de eletricidade para IA.'
      },
      {
        id: 'new-6',
        tag: 'NEWS',
        title: 'Cúpula global de inovação define as tecnologias críticas para a próxima década',
        imageType: 'novo-nordisk',
        snippet: 'Líderes de mais de 80 países assinam termo de cooperação em biossegurança e IA.'
      }
    ]
  }
];

export const StoriesForYou: React.FC<StoriesForYouProps> = ({ onSelectStory }) => {
  const [activeEditoriaId, setActiveEditoriaId] = useState('ia');

  const currentEditoria = EDITORIAS_DATA.find(e => e.id === activeEditoriaId) || EDITORIAS_DATA[0];

  const handleSelectEditoria = (id: string) => {
    setActiveEditoriaId(id);
  };

  return (
    <section className="w-full bg-white py-10 lg:py-14 border-b border-neutral-200 font-poppins">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Concentric Target Icon + Title */}
        <div className="flex items-center space-x-2.5 mb-5">
          <div className="text-neutral-950 shrink-0">
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-neutral-950 font-poppins">
            Editorias em Destaque
          </h2>
        </div>

        {/* Filter Pills: Active has solid black + minus '—', inactive has outline + '+' */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {EDITORIAS_DATA.map((editoria) => {
            const isActive = activeEditoriaId === editoria.id;
            return (
              <button
                key={editoria.id}
                onClick={() => handleSelectEditoria(editoria.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer font-poppins shrink-0 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-neutral-900 text-white border border-neutral-900 shadow-xs'
                    : 'bg-white text-neutral-800 border border-neutral-300 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                <span>{editoria.label}</span>
                <span className="font-mono text-sm leading-none ml-1">
                  {isActive ? '—' : '+'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: 6 stories on the left (9 cols) + Clean Direct YouTube Shorts Embed on the right (3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          
          {/* Left Column: 6 Cards in 3 cols x 2 rows */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentEditoria.stories.map((story) => (
              <article
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="flex flex-col group cursor-pointer"
              >
                {/* Editoria Tag above Thumbnail */}
                <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5 font-poppins">
                  {story.tag}
                </span>

                {/* Aspect 16:10 Thumbnail */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-xs bg-neutral-100 mb-2.5 group-hover:opacity-90 transition-opacity">
                  <EditorialImage 
                    type={story.imageType} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title in bold Poppins */}
                <h3 className="text-[14px] sm:text-[15px] font-bold leading-[1.3] text-neutral-950 group-hover:text-neutral-700 transition-colors font-poppins">
                  {story.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Right Column: Clean Direct YouTube Shorts Embed (No template overlay, exact 9:16 player) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div className="w-full max-w-[340px] mx-auto lg:max-w-none aspect-[9/16] rounded-xs bg-black overflow-hidden shadow-sm border border-neutral-200">
              <iframe
                key={currentEditoria.video.youtubeId}
                className="w-full h-full border-0"
                src={`https://www.youtube.com/embed/${currentEditoria.video.youtubeId}?rel=0&playsinline=1`}
                title={`Shorts ${currentEditoria.label}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
