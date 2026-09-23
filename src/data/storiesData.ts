export interface Story {
  id: string;
  tag: string;
  title: string;
  snippet?: string;
  imageType: string;
  author?: string;
  readTime?: string;
  number?: number;
}

export const LATEST_TOPICS = [
  "MUDANÇAS CLIMÁTICAS",
  "GEMINI",
  "IPHONE 17",
  "INTELIGÊNCIA ARTIFICIAL",
  "STARTUPS & TECH",
  "LIDERANÇA",
  "ESG & CLIMA",
  "FUTURO DO TRABALHO",
  "INOVAÇÃO"
];

export const HERO_FEATURE: Story = {
  id: "hero-selena-rare-beauty",
  tag: "CREATORS & TECH",
  title: "Selena Gomez fez da escuta a estratégia da Rare Beauty.",
  snippet: "Da prevenção ao suicídio ao desenho das embalagens, a experiência pessoal da artista ajuda a explicar como a marca transforma saúde mental em decisões de negócio.",
  imageType: "rare-beauty-hero"
};

export const HERO_LEFT_STORIES: Story[] = [
  {
    id: "hero-left-1",
    tag: "NEWS",
    title: "Fingir que trabalhou em algum lugar no LinkedIn está prestes a ficar mais difícil",
    snippet: "A rede social da Microsoft lança recurso que permitirá a empresas verificadas remover funcionários impostores de seus perfis corporativos.",
    imageType: "linkedin-verify"
  },
  {
    id: "hero-left-2",
    tag: "DESIGN",
    title: "Mercy Corps agora é Prosper Global. A CEO explica os motivos",
    snippet: "Tjada McKenna fala sobre rebranding durante crise de financiamento humanitário, escassez de alimentos e o novo cenário de ajuda internacional.",
    imageType: "mercy-corps"
  },
  {
    id: "hero-left-3",
    tag: "WORKLIFE",
    title: "5 estratégias comprovadas pela ciência para ser um líder melhor",
    snippet: "Como a ciência comportamental pode aprimorar nossas habilidades de gestão, empatia e tomada de decisões sob pressão.",
    imageType: "boss-strategies"
  }
];

export const HERO_MOBILE_EXTRA: Story = {
  id: "hero-mobile-amazon",
  tag: "DESIGN",
  title: "Amazon cria coalizão para tornar a moda sustentável mais acessível",
  snippet: "Mais de 60 marcas, de Stella McCartney a Brooks Running, unem forças em prol de materiais de baixo carbono para reduzir custos globais.",
  imageType: "sustainable-fashion"
};

export const MOST_READ_STORIES: Story[] = [
  {
    id: "mr-1",
    number: 1,
    tag: "TECH",
    title: "Comandante da Marinha detalha plano de armas a laser em todos os navios",
    snippet: "O almirante Daryl Caudle explica como armas de energia dirigida ampliam arsenais, barateiam a defesa e alcançam potência de megawatts.",
    imageType: "navy-laser"
  },
  {
    id: "mr-2",
    number: 2,
    tag: "WORKLIFE",
    title: "Como identificar quem parece brilhante em reuniões, mas está apenas fingindo",
    snippet: "E um guia simples para replicar essas técnicas de presença caso você realmente precise.",
    imageType: "meeting-faking"
  },
  {
    id: "mr-3",
    number: 3,
    tag: "WORKLIFE",
    title: "Pare de pedir criatividade à IA. Peça precisão e exatidão",
    snippet: "Estamos usando a IA ao contrário: em vez de pedir criação artística, deveríamos delegar tarefas analíticas e checagens exatas.",
    imageType: "ai-correct-target"
  },
  {
    id: "mr-4",
    number: 4,
    tag: "NEWS",
    title: "Retrocesso climático de Trump: 157 cidades avançam na direção oposta",
    snippet: "Pesquisadores mapearam mais de 1.400 políticas municipais de energia limpa, eficiência predial e combate a ondas de calor.",
    imageType: "climate-cities-map"
  }
];

export const FOR_YOU_STORIES: Story[] = [
  {
    id: "fy-1",
    number: 1,
    tag: "IMPACTO",
    title: "Quem é o verdadeiro dono da transformação por IA nas empresas?",
    snippet: "Liderança e equipes de tecnologia são vitais, mas os maiores avanços partem dos colaboradores que estão na linha de frente.",
    imageType: "ai-transformation-wave"
  },
  {
    id: "fy-2",
    number: 2,
    tag: "LIDERANÇA",
    title: "Os velhos modelos de liderança não funcionam na era da IA. Mude estas 5 atitudes",
    snippet: "O que acontece com a gestão executiva quando a ideia mais brilhante da sala não vem de você?",
    imageType: "retro-terminal"
  },
  {
    id: "fy-3",
    number: 3,
    tag: "TECH",
    title: "Por que os lançamentos de modelos de IA parecem nunca parar",
    snippet: "OpenAI e Anthropic aceleram o ritmo, mas boa parte das novidades decorre da reembalagem de avanços já consolidados.",
    imageType: "keyboard-keys"
  },
  {
    id: "fy-4",
    number: 4,
    tag: "DESIGN",
    title: "Não importa se a identidade visual da sua marca parece boa",
    snippet: "A verdadeira vantagem pertence às marcas que constroem relevância autêntica e dão motivos reais para o público se importar.",
    imageType: "brand-identity-cards"
  }
];

export const HERO_HORIZONTAL_CARDS: Story[] = [
  {
    id: "hh-1",
    tag: "IMPACTO",
    title: "Como a agricultura regenerativa constrói sistemas alimentares mais resilientes",
    snippet: "A PepsiCo entende que o futuro do campo está na nova geração de produtores. Conheça como uma operação familiar multigeracional utiliza tecnologia e dados para fortalecer a produção sustentável.",
    imageType: "regenerative-agri"
  },
  {
    id: "hh-2",
    tag: "INTELIGÊNCIA ARTIFICIAL",
    title: "Os velhos modelos de liderança não funcionam na era da IA. Mude estas 5 atitudes",
    snippet: "O que acontece com a gestão executiva quando a ideia mais brilhante da sala não vem de você?",
    imageType: "retro-terminal"
  },
  {
    id: "hh-3",
    tag: "TECH",
    title: "Tráfego de bots maliciosos cresce 9 vezes mais rápido que o tráfego humano",
    snippet: "Nova análise de mais de 1 trilhão de requisições revela que acessos automatizados maliciosos saltaram 124% em um ano.",
    imageType: "bot-traffic"
  }
];

export const SUBSCRIBER_EXCLUSIVES: Story[] = [
  {
    id: "col-1",
    tag: "FRED GELLI",
    author: "FRED GELLI",
    title: "Biomimética: a natureza como conselheira definitiva para a inovação",
    imageType: "colunista-fred-gelli",
    snippet: "Como os ecossistemas naturais ensinam empresas a criar soluções circulares, regenerativas e infinitamente mais eficientes."
  },
  {
    id: "col-2",
    tag: "ANA BAVON",
    author: "ANA BAVON",
    title: "Diversidade não é métrica de vaidade: é inteligência de mercado",
    imageType: "colunista-ana-bavon",
    snippet: "Empresas que ignoram a pluralidade cultural e social estão perdendo relevância e deixando dinheiro sobre a mesa."
  },
  {
    id: "col-3",
    tag: "M.M. IZIDORO",
    author: "M.M. IZIDORO",
    title: "O que a cultura de rua ensina sobre branding que nenhuma universidade explica",
    imageType: "colunista-mm-izidoro",
    snippet: "Marcas autênticas nascem do pertencimento e da escuta ativa das comunidades, e não de manuais fechados de agências."
  },
  {
    id: "col-4",
    tag: "SILVANA BAHIA",
    author: "SILVANA BAHIA",
    title: "Tecnologia ancestral e futuro digital: novos horizontes para o Brasil",
    imageType: "colunista-silvana-bahia",
    snippet: "Como a democratização do conhecimento computacional na periferia cria a vanguarda tecnológica mais criativa do país."
  },
  {
    id: "col-5",
    tag: "M.M. IZIDORO",
    author: "M.M. IZIDORO",
    title: "Identidade sonora: quando a marca é reconhecida sem precisar ser vista",
    imageType: "colunista-brasilidade-gringa",
    snippet: "O impacto invisível dos acordes acústicos na lealdade e memória afetiva do consumidor contemporâneo."
  },
  {
    id: "col-6",
    tag: "SILVANA BAHIA",
    author: "SILVANA BAHIA",
    title: "Inovação de verdade: por que o futuro da tecnologia precisa da favela",
    imageType: "colunista-cadeira-maternidade",
    snippet: "Por que as margens continuam sendo o laboratório mais fértil de criatividade e resiliência."
  },
  {
    id: "col-7",
    tag: "ANA BAVON",
    author: "ANA BAVON",
    title: "A coragem de liderar com vulnerabilidade em tempos de hipercompetitividade",
    imageType: "colunista-rock-in-rio",
    snippet: "Desmistificando o mito da liderança infalível na era da inteligência artificial."
  },
  {
    id: "col-8",
    tag: "FRED GELLI",
    author: "FRED GELLI",
    title: "Design com a natureza: lições da biomimética para salvar a economia",
    imageType: "colunista-desinvencao-pobreza",
    snippet: "Modelos biológicos milenares aplicados aos maiores gargalos de sustentabilidade e logística."
  }
];

export const STORIES_FOR_YOU: Story[] = [
  {
    id: "sfy-1",
    tag: "IMPACTO",
    title: "Quem é o verdadeiro dono da transformação por IA nas empresas?",
    imageType: "ai-transformation-wave"
  },
  {
    id: "sfy-2",
    tag: "IMPACTO",
    title: "A importância da escala aliada à inovação contínua",
    imageType: "scale-lightbulb"
  },
  {
    id: "sfy-3",
    tag: "DESIGN",
    title: "Não importa se a identidade visual da sua marca parece boa",
    imageType: "brand-identity-cards"
  },
  {
    id: "sfy-4",
    tag: "TECH",
    title: "Por que os lançamentos de modelos de IA parecem nunca parar",
    imageType: "keyboard-keys"
  },
  {
    id: "sfy-5",
    tag: "TECH",
    title: "Tráfego de bots maliciosos cresce 9 vezes mais rápido que o tráfego humano",
    imageType: "bot-traffic"
  },
  {
    id: "sfy-6",
    tag: "LIDERANÇA",
    title: "O abismo da inteligência senciente e o discernimento humano",
    imageType: "sentient-gap-bust"
  }
];

export const LATEST_STORIES_FEED: Story[] = [
  {
    id: "feed-amazon-fashion",
    tag: "DESIGN",
    title: "Amazon cria coalizão para tornar a moda sustentável mais acessível",
    snippet: "Mais de 60 marcas, de Stella McCartney a Brooks Running, unem forças em prol de materiais de baixo carbono para reduzir custos globais.",
    imageType: "sustainable-fashion"
  },
  {
    id: "feed-linkedin-verify",
    tag: "NEWS",
    title: "Fingir que trabalhou em algum lugar no LinkedIn está prestes a ficar mais difícil",
    snippet: "A rede social da Microsoft lança recurso que permitirá a empresas verificadas remover funcionários impostores de seus perfis corporativos.",
    imageType: "linkedin-verify"
  },
  {
    id: "feed-1",
    tag: "NEWS",
    title: "Surtos de sarampo superam 3.500 casos no ano: mapas mostram as regiões mais impactadas",
    snippet: "Casos em 2026 já ultrapassaram o total do ano passado. Mais alarmante: 10% deles ocorreram apenas nas últimas duas semanas.",
    imageType: "measles-map"
  },
  {
    id: "feed-2",
    tag: "CONSELHO EXECUTIVO",
    title: "O erro mais comum que a maioria dos CEOs comete sobre IA",
    snippet: "E essa única falha de percepção está separando os verdadeiros líderes de IA de todos os outros concorrentes.",
    imageType: "exec-ceos-ai"
  },
  {
    id: "feed-3",
    tag: "CONSELHO EXECUTIVO",
    title: "Usuários recorrem à inteligência artificial para lidar com o luto",
    snippet: "Quando uma em cada quatro pessoas adota chatbots para superar perdas, a tecnologia precisa estar à altura ética do desafio.",
    imageType: "ai-grief"
  },
  {
    id: "feed-4",
    tag: "IMPACTO",
    title: "A vivência prática das pessoas também é dado científico",
    snippet: "O que é mais simples de mensurar estatisticamente nem sempre é o fator que gera maior impacto na vida real.",
    imageType: "lived-experience"
  },
  {
    id: "feed-5",
    tag: "DESIGN",
    title: "Não importa se a identidade visual da sua marca parece boa",
    snippet: "A verdadeira vantagem agora pertence às marcas autênticas que dão motivos concretos para as pessoas se importarem.",
    imageType: "brand-identity-cards"
  },
  {
    id: "feed-6",
    tag: "IMPACTO",
    title: "A importância da escala aliada à inovação contínua",
    snippet: "A escala adequada fortalece a capacidade estrutural de uma organização inovar e resistir a choques de mercado.",
    imageType: "scale-lightbulb"
  },
  {
    id: "feed-7",
    tag: "IMPACTO",
    title: "A independência da cadeia de suprimentos deve começar pela construção civil",
    snippet: "Materiais locais, econômicos e com pegada sustentável comprovada tornam-se a melhor estratégia de segurança industrial.",
    imageType: "supply-chain-home"
  },
  {
    id: "feed-8",
    tag: "IMPACTO",
    title: "Quem é o verdadeiro dono da transformação por IA nas empresas?",
    snippet: "Liderança e equipes de engenharia são vitais, mas os maiores avanços partem dos colaboradores mais próximos do trabalho.",
    imageType: "ai-transformation-wave"
  },
  {
    id: "feed-9",
    tag: "DESIGN",
    title: "Michiel Steur não tem medo de ousar na elegância no trabalho",
    snippet: "O novo CEO da revista i-D é um dos destaques dos Mais Bem Vestidos dos Negócios 2026 da Fast Company.",
    imageType: "bd-michiel-steur"
  },
  {
    id: "feed-10",
    tag: "DESIGN",
    title: "John Imah sabe exatamente como evitar a armadilha do visual genérico dos fundadores de tech",
    snippet: "O CEO da SpreeAI integra o ranking dos Mais Bem Vestidos dos Negócios 2026 da Fast Company.",
    imageType: "bd-john-imah"
  },
  {
    id: "feed-11",
    tag: "DESIGN",
    title: "Dee Poku sempre escolhe peças que transmitem autoridade e autenticidade",
    snippet: "A fundadora e CEO do The WIE Suite é uma das homenageadas dos Mais Bem Vestidos dos Negócios 2026.",
    imageType: "bd-dee-poku"
  },
  {
    id: "feed-12",
    tag: "DESIGN",
    title: "O truque de estilo executivo de Gregg Renfrew que qualquer pessoa pode adotar",
    snippet: "A fundadora da marca de cosméticos Counter integra a lista anual dos Mais Bem Vestidos dos Negócios 2026.",
    imageType: "bd-gregg-renfrew"
  },
  {
    id: "feed-13",
    tag: "DESIGN",
    title: "Amrit Tietz dispensa regras rígidas quando o assunto é se vestir para o trabalho",
    snippet: "O cofundador da Spread the Jelly compõe a prestigiada lista dos Mais Bem Vestidos dos Negócios 2026.",
    imageType: "bd-amrit-tietz"
  },
  {
    id: "feed-14",
    tag: "DESIGN",
    title: "Alysa Liu cria suas próprias regras de estilo e presença pública",
    snippet: "A campeã olímpica de patinação no gelo é destaque dos Mais Bem Vestidos dos Negócios 2026.",
    imageType: "bd-alysa-liu"
  },
  {
    id: "feed-15",
    tag: "DESIGN",
    title: "Kyle Krause comprova o valor inestimável de uma boa alfaiataria",
    snippet: "O CEO do Krause Group figura entre os Mais Bem Vestidos dos Negócios 2026 da Fast Company.",
    imageType: "bd-kyle-krause"
  },
  {
    id: "feed-16",
    tag: "TECH",
    title: "Por que os lançamentos de modelos de IA parecem nunca parar",
    snippet: "OpenAI e Anthropic lançam mais modelos, mas grande parte da aceleração vem de reembalar avanços para novos preços.",
    imageType: "keyboard-keys"
  },
  {
    id: "feed-17",
    tag: "DESIGN",
    title: "As confusas reformulações de marca da Paramount e WBD revelam uma indústria em crise",
    snippet: "Warner Media, WBD, HBO, HBO Max, Paramount Skydance, Paramount+: você também já se perdeu nessa dança das cadeiras?",
    imageType: "paramount-wbd"
  },
  {
    id: "feed-18",
    tag: "TECH",
    title: "Comandante da Marinha detalha plano de armas a laser em todos os navios",
    snippet: "O almirante Daryl Caudle explica como energia dirigida amplia arsenais, barateia a defesa e alcança megawatt de potência.",
    imageType: "navy-laser"
  },
  {
    id: "feed-19",
    tag: "WORKLIFE",
    title: "Como identificar quem parece brilhante em reuniões, mas está apenas fingindo",
    snippet: "E um guia bem-humorado para emular esses mesmos truques de oratória caso você se encontre em apuros.",
    imageType: "meeting-faking"
  },
  {
    id: "feed-20",
    tag: "WORKLIFE",
    title: "Como líderes devem desenhar políticas de trabalho remoto antes da próxima crise",
    snippet: "O método e a transparência usados para definir a rotina importam tanto quanto a decisão geográfica final.",
    imageType: "remote-work"
  },
  {
    id: "feed-21",
    tag: "LIDERANÇA",
    title: "O lado oculto e perigoso dos funcionários de hiperdesempenho",
    snippet: "Será que colaboradores estelares estão tornando sua organização mais vulnerável e menos colaborativa?",
    imageType: "high-performing"
  },
  {
    id: "feed-22",
    tag: "WORKLIFE",
    title: "Pare de pedir criatividade à IA. Peça precisão e exatidão",
    snippet: "Estamos usando a IA ao contrário: em vez de pedir criação de texto, deveríamos usá-la para checagens mundanas e precisas.",
    imageType: "ai-correct-target"
  },
  {
    id: "feed-23",
    tag: "NEWS",
    title: "Retrocesso climático de Trump: 157 cidades avançam na direção oposta",
    snippet: "Pesquisadores mapearam mais de 1.400 legislações municipais sobre energia limpa, eficiência energética e ilhas de calor.",
    imageType: "climate-cities-map"
  },
  {
    id: "feed-24",
    tag: "NEWS",
    title: "Pessoas estão bloqueando seus próprios celulares de propósito para frear o consumo compulsivo",
    snippet: "Você pagaria US$ 60 por um cubo plástico que tranca seu smartphone para forçar momentos de desconexão?",
    imageType: "phone-bricking"
  },
  {
    id: "feed-25",
    tag: "NEWS",
    title: "Atrasos e cancelamentos em massa atingem a Icelandair por greve de mecânicos",
    snippet: "A paralisação iniciada nesta manhã afetou milhares de passageiros internacionais na rota transatlântica.",
    imageType: "icelandair-plane"
  },
  {
    id: "feed-26",
    tag: "NEWS",
    title: "264 mil entregadores do DoorDash receberão indenizações em acordo histórico de US$ 131,5 milhões",
    snippet: "A plataforma firmou acordo após denúncias de repasses atrasados e valores abaixo do piso aos trabalhadores de Nova York.",
    imageType: "doordash-settlement"
  },
  {
    id: "feed-27",
    tag: "IMPACTO",
    title: "20 maneiras pragmáticas de medir o ROI real de iniciativas de IA",
    snippet: "Como executivos sérios definem valor além da mera taxa de adoção, velocidade ou experimentação superficial.",
    imageType: "ai-roi-cube"
  },
  {
    id: "feed-28",
    tag: "LIDERANÇA",
    title: "O abismo da inteligência senciente e o discernimento humano",
    snippet: "Embora a IA sintetize dados e amplifique conceitos, ela não detecta os sinais sutis e emocionais da experiência humana.",
    imageType: "sentient-gap-bust"
  },
  {
    id: "feed-29",
    tag: "CONSELHO EXECUTIVO",
    title: "29 líderes compartilham as tendências que avaliaram errado",
    snippet: "O que fez esses executivos mudarem de ideia e as lições fundamentais que essas reviravoltas proporcionaram.",
    imageType: "exec-misjudged"
  },
  {
    id: "feed-30",
    tag: "LIDERANÇA",
    title: "Jensen Huang, CEO da Nvidia: 'Líderes de IA irresponsáveis assustam o público por segundas intenções'",
    snippet: "Grandes laboratórios podem estar pedindo regulação preventiva para desviar o foco de leis que já estão violando, diz Huang.",
    imageType: "jensen-huang"
  },
  {
    id: "feed-31",
    tag: "NEWS",
    title: "A inteligência artificial pode estar destruindo o poder dos influenciadores digitais",
    snippet: "Conteúdos sintéticos diminuem a confiança nas redes sociais, e os criadores de conteúdo estão sentindo o impacto direto.",
    imageType: "influencer-strings"
  },
  {
    id: "feed-32",
    tag: "WORKLIFE",
    title: "5 pontos cruciais sobre a idade mínima e planejamento de aposentadoria em 2026",
    snippet: "A boa notícia é que as novas regras previdenciárias ampliam incentivos para transição gradual e renda sustentável.",
    imageType: "social-security"
  },
  {
    id: "feed-33",
    tag: "NEWS",
    title: "AMD torna-se a mais nova empresa de semicondutores a alcançar US$ 1 trilhão em valor de mercado",
    snippet: "As ações da fabricante dispararam com o otimismo dos investidores em IA. Ela agora se junta a Nvidia, Apple e Microsoft no clube do trilhão.",
    imageType: "amd-trillion"
  },
  {
    id: "feed-34",
    tag: "NEWS",
    title: "Famosa fabricante transforma doce tradicional em perfume excêntrico que viralizou",
    snippet: "A fragrância de edição limitada de US$ 22 promete fazer você cheirar como um dos doces mais controversos do mundo.",
    imageType: "candy-corn-perfume"
  }
];

export const LISTS_DATA = [
  {
    id: "list-1",
    title: "Empresas Mais Inovadoras",
    description: "O ranking anual definitivo da Fast Company com os negócios que geram impacto extraordinário no mundo.",
    icon: "lightbulb",
    color: "#06b6d4" // cyan
  },
  {
    id: "list-2",
    title: "Innovation By Design",
    description: "Os melhores produtos, serviços, interfaces e conceitos de design aplicados aos negócios contemporâneos.",
    icon: "quadrant",
    color: "#0284c7" // blue
  },
  {
    id: "list-3",
    title: "Ideias que Mudam o Mundo",
    description: "Produtos, projetos, conceitos e políticas pioneiras que utilizam a inovação tecnológica para o bem comum.",
    icon: "dots-sphere",
    color: "#ec4899" // magenta/pink
  },
  {
    id: "list-4",
    title: "Melhores Lugares para Inovadores",
    description: "Empresas e instituições que cultivam uma cultura genuína de criatividade, autonomia e inovação no trabalho.",
    icon: "building",
    color: "#1e293b" // dark slate
  }
];

export const FOOTER_NAV = [
  {
    category: "TECH",
    items: [
      "Inteligência Artificial",
      "Creators & Tech",
      "Games",
      "Auto Tech",
      "Gadgets",
      "Redes Sociais"
    ]
  },
  {
    category: "WORKLIFE",
    items: [
      "Bem-Estar",
      "Futuro do Trabalho",
      "Liderança",
      "Carreira",
      "Neurociência",
      "50+"
    ]
  },
  {
    category: "DESIGN",
    items: [
      "Branding",
      "Arquitetura",
      "Moda",
      "Marketing",
      "User Experience UX",
      "Artes"
    ]
  },
  {
    category: "IMPACTO",
    items: [
      "Mudanças Climáticas",
      "ESG",
      "Meio Ambiente",
      "Energia",
      "Sustentabilidade",
      "Foodtech"
    ]
  },
  {
    category: "MONEY",
    items: [
      "Economia Criativa",
      "Finanças Pessoais",
      "Novos Negócios",
      "Fintech",
      "Varejo",
      "Startup"
    ]
  },
  {
    category: "MAIS",
    items: [
      "Eventos",
      "5 Perguntas",
      "Colunistas",
      "Dicas",
      "Listas",
      "News"
    ]
  }
];
