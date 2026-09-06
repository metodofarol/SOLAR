const chakras = [
  {
    id: "coronario",
    name: "Coronário",
    color: "#8f62c7",
    top: "8%",
    represents: "Conexão espiritual, propósito, fé, sentido de vida e integração com o sutil.",
    associations:
      "Quando em desequilíbrio, pode estar associado a desconexão, falta de sentido, isolamento, confusão espiritual, exaustão mental, enxaquecas e alterações do sono.",
    lifeAreas: "Trabalho: propósito. Estudo: visão ampla. Amor/relações: conexão. Saúde geral: equilíbrio espiritual e mental.",
  },
  {
    id: "terceiro-olho",
    name: "Terceiro Olho",
    color: "#4057b8",
    top: "18%",
    represents: "Intuição, percepção, clareza mental, imaginação, discernimento e visão interior.",
    associations:
      "Quando em desequilíbrio, pode estar associado a excesso de pensamentos, dificuldade de foco, ansiedade mental, dores de cabeça, tensão ocular e confusão psíquica.",
    lifeAreas: "Trabalho: estratégia. Estudo: concentração. Amor/relações: percepção clara. Saúde geral: mente e sistema nervoso.",
  },
  {
    id: "laringeo",
    name: "Laríngeo",
    color: "#2c9ec7",
    top: "30%",
    represents: "Comunicação, expressão, verdade pessoal, escuta e capacidade de manifestar ideias.",
    associations:
      "Quando em desequilíbrio, pode estar associado a bloqueio de fala, medo de se posicionar, timidez, rigidez na comunicação, alterações na garganta, tireoide e região cervical.",
    lifeAreas: "Trabalho: expressão profissional. Estudo: comunicação. Amor/relações: diálogo. Saúde geral: garganta e pescoço.",
  },
  {
    id: "cardiaco",
    name: "Cardíaco",
    color: "#3ca96d",
    top: "42%",
    represents: "Amor, vínculo, compaixão, perdão, pertencimento e equilíbrio entre dar e receber.",
    associations:
      "Quando em desequilíbrio, pode estar associado a mágoas, tristeza, fechamento afetivo, dependência, solidão, alterações no peito, pulmões, circulação e imunidade.",
    lifeAreas: "Trabalho: cooperação. Estudo: motivação afetiva. Amor/relações: vínculos. Saúde geral: coração, respiração e imunidade.",
  },
  {
    id: "plexo-solar",
    name: "Plexo Solar",
    color: "#d7a61e",
    top: "54%",
    represents: "Autonomia, autoestima, poder pessoal, ação, decisão e digestão das experiências.",
    associations:
      "Quando em desequilíbrio, pode estar associado a insegurança, necessidade de controle, raiva contida, baixa autoestima, alterações no estômago, fígado, pâncreas e sistema digestivo.",
    lifeAreas: "Trabalho: liderança. Estudo: disciplina. Amor/relações: limites pessoais. Saúde geral: digestão e energia de ação.",
  },
  {
    id: "sacral",
    name: "Sacral",
    color: "#db7b2d",
    top: "67%",
    represents: "Prazer, criatividade, sexualidade, fluidez emocional, fertilidade e movimento da vida.",
    associations:
      "Quando em desequilíbrio, pode estar associado a culpa, bloqueios afetivos, dependência emocional, compulsões, alterações na região pélvica, rins, bexiga e sistema reprodutor.",
    lifeAreas: "Trabalho: criatividade. Estudo: prazer em aprender. Amor/relações: intimidade. Saúde geral: vitalidade pélvica.",
  },
  {
    id: "basico",
    name: "Básico",
    color: "#b6403a",
    top: "80%",
    represents: "Segurança, presença, aterramento, sobrevivência, corpo físico, estabilidade e recursos materiais.",
    associations:
      "Quando em desequilíbrio, pode estar associado a medo, instabilidade, insegurança financeira, apatia, alterações nas pernas, coluna, ossos, intestino e vitalidade física.",
    lifeAreas: "Trabalho: estabilidade. Estudo: constância. Amor/relações: segurança. Saúde geral: estrutura corporal e energia vital.",
  },
];

const fields = [
  { id: "emocional", label: "Emocional" },
  { id: "mental", label: "Mental" },
];

const limitTypes = [
  { id: "rigido", label: "Rígido" },
  { id: "solto", label: "Solto" },
];

const fieldSummaries = {
  emocional:
    "Relaciona-se aos vínculos, afetos, acolhimento, perdas, intimidade e capacidade de reconhecer sentimentos sem perder a própria referência.",
  mental:
    "Relaciona-se a crenças, pensamentos, decisões, clareza, autonomia, identidade e modo de interpretar segurança, controle e pertencimento.",
};

const limitSummaries = {
  rigido:
    "Indica proteção excessiva, fechamento, controle, resistência à vulnerabilidade e dificuldade de receber apoio ou flexibilizar posições.",
  solto:
    "Indica permeabilidade excessiva, dificuldade de dizer não, adaptação ao outro, absorção de estímulos e perda de referência própria.",
};

const causes = [
  {
    id: "emocional-rigido-medo-intimidade",
    field: "emocional",
    limit: "rigido",
    name: "Medo de intimidade",
    description:
      "A intimidade é percebida como ameaça, levando a pessoa a se proteger de vínculos profundos. Essa defesa pode nascer de experiências de invasão, julgamento ou exposição excessiva, bloqueando a troca emocional genuína.",
  },
  {
    id: "emocional-rigido-controle-emocional",
    field: "emocional",
    limit: "rigido",
    name: "Necessidade de manter o controle emocional",
    description:
      "A tentativa constante de não se desestabilizar gera contenção emocional. Sentir ou demonstrar emoções passa a parecer perigoso, o que favorece repressão, endurecimento e dificuldade de expressão afetiva.",
  },
  {
    id: "emocional-rigido-rejeicao-abandono",
    field: "emocional",
    limit: "rigido",
    name: "Rejeição ou abandono",
    description:
      "Experiências de rejeição ou abandono podem criar defesas contra a possibilidade de ser novamente descartado. O padrão aparece como desconfiança, resistência ao afeto e dificuldade de vínculo profundo.",
  },
  {
    id: "emocional-rigido-ressentimento",
    field: "emocional",
    limit: "rigido",
    name: "Ressentimento ou mágoas não liberadas",
    description:
      "Mágoas mantidas ativas deixam o campo emocional em alerta. Dores antigas podem ser projetadas em relações atuais, sustentando feridas não integradas e limitando a entrega emocional.",
  },
  {
    id: "emocional-rigido-traumas",
    field: "emocional",
    limit: "rigido",
    name: "Traumas de abuso, controle ou manipulação",
    description:
      "Violações anteriores de limites podem gerar blindagem emocional. A pessoa pode se isolar, permanecer hiperalerta ou parecer fria para evitar situações associadas à dor original.",
  },
  {
    id: "emocional-solto-carencia",
    field: "emocional",
    limit: "solto",
    name: "Carência afetiva",
    description:
      "A busca por afeto pode levar a aproximação rápida, entrega excessiva e baixa avaliação do vínculo. A pessoa espera que o outro sustente aquilo que ainda não consegue fortalecer internamente.",
  },
  {
    id: "emocional-solto-rejeicao-abandono",
    field: "emocional",
    limit: "solto",
    name: "Rejeição ou abandono",
    description:
      "Neste limite solto, a ferida conduz à abertura excessiva. Para evitar nova rejeição, a pessoa pode adaptar-se demais, tolerar relações prejudiciais e ignorar seus próprios limites.",
  },
  {
    id: "emocional-solto-dependencia",
    field: "emocional",
    limit: "solto",
    name: "Dependência emocional",
    description:
      "O equilíbrio, a autoestima ou a direção pessoal passam a depender fortemente do vínculo. Necessidades próprias ficam pouco reconhecidas enquanto o outro ganha centralidade.",
  },
  {
    id: "emocional-solto-autorregulacao",
    field: "emocional",
    limit: "solto",
    name: "Falta de autorregulação",
    description:
      "O campo emocional fica instável e permeável aos estímulos. A pessoa pode absorver intensamente o ambiente e ter dificuldade de distinguir emoções próprias das externas.",
  },
  {
    id: "emocional-solto-vinculos",
    field: "emocional",
    limit: "solto",
    name: "Vínculos abertos",
    description:
      "Relações antigas não encerradas mantêm conexão emocional com o passado. Memórias, padrões e afetos continuam influenciando o presente, mesmo quando a relação terminou.",
  },
  {
    id: "emocional-solto-culpa",
    field: "emocional",
    limit: "solto",
    name: "Culpa",
    description:
      "A culpa sustenta permissividade excessiva e sensação de dívida. A pessoa pode tolerar cobranças, relações ou ambientes prejudiciais, dificultando dizer não e proteger-se.",
  },
  {
    id: "mental-rigido-autossuficiencia",
    field: "mental",
    limit: "rigido",
    name: "Autossuficiência",
    description:
      "A crença de que precisa dar conta de tudo sozinha funciona como defesa contra troca, apoio e abertura. A autonomia aparente pode produzir isolamento e endurecimento nas relações.",
  },
  {
    id: "mental-rigido-controle-seguro",
    field: "mental",
    limit: "rigido",
    name: "Controle seguro",
    description:
      "A mente associa controle à proteção. Dominar, antecipar ou racionalizar situações parece evitar dor, rejeição ou caos, fazendo a segurança depender do controle em vez da confiança.",
  },
  {
    id: "mental-rigido-rigidez",
    field: "mental",
    limit: "rigido",
    name: "Rigidez",
    description:
      "Há dificuldade de flexibilizar ideias, considerar perspectivas diferentes ou mudar rotas. Crenças absolutas e padrões cristalizados transformam proteção em obstáculo à transformação.",
  },
  {
    id: "mental-rigido-perfeccionismo",
    field: "mental",
    limit: "rigido",
    name: "Perfeccionismo e autoexigência",
    description:
      "A mente estabelece padrões difíceis de alcançar para comportamento, desempenho e controle emocional. O erro vira ameaça à identidade, reduzindo descanso, flexibilidade e acolhimento.",
  },
  {
    id: "mental-rigido-forte-racional",
    field: "mental",
    limit: "rigido",
    name: "Forte e racional",
    description:
      "A identidade se organiza em torno de ser forte e não demonstrar fragilidade. Dores e afetos são processados pela lógica, criando distanciamento do sentir e da abertura emocional.",
  },
  {
    id: "mental-solto-agradadora",
    field: "mental",
    limit: "solto",
    name: "Agradadora",
    description:
      "A busca por aceitação sustenta a crença de que é preciso agradar para ser amada ou validada. Decisões passam a ser moldadas pelo outro e dizer não parece risco de rejeição.",
  },
  {
    id: "mental-solto-sem-identidade",
    field: "mental",
    limit: "solto",
    name: "Sem identidade",
    description:
      "Há dificuldade para reconhecer os próprios limites mentais. Ideias, desejos e opiniões se misturam aos do outro, reduzindo clareza sobre quem se é, o que se quer e o que se pensa.",
  },
  {
    id: "mental-solto-anulacao",
    field: "mental",
    limit: "solto",
    name: "Anulação",
    description:
      "A ausência de posicionamento pode ser justificada como empatia ou busca de paz. A pessoa silencia vontades, aceita o que não corresponde a si e perde força, autonomia e espaço próprio.",
  },
  {
    id: "mental-solto-submissao",
    field: "mental",
    limit: "solto",
    name: "Submissão",
    description:
      "Crenças sobre autoridade, hierarquia ou merecimento sustentam a ideia de obedecer, aceitar ou silenciar. O padrão dificulta impor limites diante de ordens e imposições.",
  },
  {
    id: "mental-solto-salvadora",
    field: "mental",
    limit: "solto",
    name: "Salvadora",
    description:
      "A pessoa assume responsabilidade por resolver ou consertar a vida dos outros. Cuidado e invasão dos próprios limites se confundem, enquanto necessidades pessoais são negligenciadas.",
  },
];

const graphGroups = [
  {
    name: "Harmonia",
    items: [
      "Desembaraçador",
      "Desembaraçador de Relacionamentos",
      "Desembaraçador Material",
      "Justiça Divina",
      "Vesica Piscis",
    ],
  },
  {
    name: "Limpeza",
    items: [
      "Corte Energético",
      "Cruz Ansata",
      "Guedes II",
      "Keiti",
      "Limpeza e Recarga",
      "SCAP",
      "Yoshua",
      "NENAS",
    ],
  },
  {
    name: "Proteção",
    items: ["9 Círculos", "Iavé", "Psicoprotetor", "Tetragrammaton"],
  },
  {
    name: "Psicoemocional",
    items: [
      "Abertura",
      "Aceitar e Soltar",
      "Amor ao Próximo",
      "Amor Universal",
      "Ativação da Vontade",
      "Confiar com Alegria",
      "Coragem",
      "Dependência e Vícios",
      "Mundo Interior",
      "Nervos",
      "Positividade",
      "Pureza Interior",
      "Desilusão Amorosa",
    ],
  },
  {
    name: "Vitalidade",
    items: [
      "ARCHINE",
      "Captador de Energia Solar",
      "Cruz de São Mauro",
      "Forças Universais",
      "Magnetismo Vital e Curativo",
      "Relaxar",
    ],
  },
];

const awakeningItems = [
  "Antahkarana",
  "Cosmos 2000",
  "Cruz Atlante",
  "Energia Divina",
  "Fiat Lux",
  "Gráfico dos Mestres",
  "Cubo de Metatron",
  "Prosperador",
  "Prosperidade Divina",
  "Selo Misterioso do Sol",
  "Sorte e Sucesso",
  "Vórtex",
];

const holisticTreatments = [
  "Aromaterapia",
  "Cromoterapia",
  "Fitoterapia",
  "Florais",
  "Litoterapia",
  "Mantras e orações",
  "Meditação budista (zazen ou daimoku)",
  "Reiki",
  "Tarô",
  "Outros",
];

const graphImageBank = {
  unblocking:
    "https://www.tilguti.com/cdn/shop/files/grafico-radiestesico-desembarcador-material-pvc-iniciante-tilguti.jpg?v=1758821631",
  relationship:
    "https://cdn.awsli.com.br/800x800/1382/1382320/produto/105605481/r12---desembara-ador-de-relacionamentos-7uf1hvbj6o.jpg",
  justice:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/38cdfad-173103-10fd313-194801-justica-divina.jpeg",
  vesica:
    "https://acdn-us.mitiendanube.com/stores/364/436/products/transparent-photoroom-2026-04-06t181847-326-b104a9b341580dab8517755103613770-640-0.webp",
  ansata:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cruz_Ansata_PN_Tilguti_PVC_I.jpg?v=1733870069",
  scap: "https://http2.mlstatic.com/D_NQ_NP_808662-MLB72943461385_112023-O.webp",
  yoshua:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/01e02fc-172102-499b6f3-194803-yoshua.jpeg",
  nineCircles:
    "https://images.tcdn.com.br/img/img_prod/600231/grafico_9_circulos_695_1_55dd87a0fdc8ba1a9f34759bd336561a_20250701115053.jpg",
  iave:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/b5ab6ec-173102-1bdc65c-093454-iave.jpeg",
  psicoprotetor:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Psicoprotetor_I_Tilguti_PVC_I.jpg?v=1734084674",
  tetragrammaton:
    "https://http2.mlstatic.com/D_NQ_NP_763710-MLB74020309322_012024-O-grafico-radiestesia-24x24cm-c2mm-r40-tetragrammaton.webp",
  limpezaRecarga:
    "https://www.tilguti.com/cdn/shop/files/grafico-radiestesico-limpeza-e-recarga-iniciante-pvc-tilguti.jpg?v=1764591777&width=1445",
  corteEnergetico:
    "https://www.subtil.net/store/biometers/0f7d5ec9-6c1c-4141-95c9-7cc259d83bfb.png",
  guedes:
    "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzmah67oxgshf5",
  nenas:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Nenas_P_Tilguti_PVC_I.jpg?v=1737755544&width=1946",
  keiti:
    "https://www.tilguti.com/cdn/shop/files/41.jpg?v=1716666515",
  saoMauro:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cruz_de_Sao_Mauro_P_Tilguti_PVC_I.jpg?v=1734655665&width=600",
  magnetismo:
    "https://cdn.awsli.com.br/800x800/1382/1382320/produto/271505073/r155---magnetismo-vital-e-curativo-k89bn3o2om.jpg",
  antahkarana:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Antahkaran_P_Tilguti_PVC_I.jpg?v=1734651496&width=823",
  metatron:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cubo_de_Metatron_I_Tilguti_PVC_I.jpg?v=1733615053&width=1445",
  abertura:
    "https://www.tilguti.com/cdn/shop/files/grafico-radiestesico-abertura-pvc-tilguti.jpg?v=1760010103",
  archine:
    "https://servranx.com/cdn/shop/files/Graph26r_2023SITE.jpg?v=1697702945",
  captadorSolar:
    "https://imgv2-1-f.scribdassets.com/img/document/768733693/original/831da96480/1?v=1",
  cosmos2000:
    "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcma00lem4vme4",
  cruzAtlante:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Cruz_Atlanta_I_Tilguti_PVC_I.jpg?v=1733870479&width=1445",
  energiaDivina:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/a61cf8b-172502-b48e478-153237-energia-divina.png",
  fiatLux:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Fiat_Lux_PT_PRO_Tilguti_PVC.jpg?v=1754762569&width=1445",
  mestres:
    "https://www.subtil.net/store/biometers/cd003212-3cfc-4d98-a0af-0da519c1512f.png",
  prosperador:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Prosperador_I_Tilguti_PVC_I.jpg?v=1737924481",
  sorteSucesso:
    "https://cdn.lojasonlinectt.pt/usercontent/portaldoequilibrio/media/images/a2fd8fd-171909-eac04e0-155541-sorte-e-sucesso-grafico-radiestesico-para-radiestesia-terapeutica-100.png",
  vortex:
    "https://www.tilguti.com/cdn/shop/files/Grafico_Radionico_Vortex_I_Tilguti_PVC_I.jpg?v=1737411357",
};

const graphInfoOverrides = {
  "Desembaraçador": {
    image: "",
    description:
      "Gráfico voltado a desfazer nós energéticos e situações travadas. É usado como apoio para abrir caminhos quando há sensação de bloqueio, confusão ou ausência de saída imediata.",
    interpretation:
      "A seleção do Desembaraçador sugere foco em liberar emaranhamentos, remover estagnações e favorecer clareza de movimento.",
    readings: "Desobstrução energética, radiestesia aplicada a padrões de bloqueio e organização de intenção terapêutica.",
  },
  "Desembaraçador de Relacionamentos": {
    image: graphImageBank.relationship,
    description:
      "Aplicado a vínculos afetivos, familiares, profissionais ou sociais, buscando dissolver nós relacionais, ruídos de comunicação e padrões de dependência ou afastamento.",
    interpretation:
      "Indica trabalho sobre relações, comunicação, acordos emocionais e campos compartilhados entre pessoas.",
    readings: "Vínculos, limites relacionais, comunicação afetiva e harmonização de relações.",
  },
  "Desembaraçador Material": {
    image: graphImageBank.unblocking,
    description:
      "Focado em bloqueios materiais, financeiros, profissionais ou práticos. A geometria é utilizada como suporte para reorganização de fluxos concretos e abertura de possibilidades.",
    interpretation:
      "Sugere atenção a recursos, trabalho, prosperidade, decisões práticas e circulação material.",
    readings: "Prosperidade, desbloqueio material, crenças sobre recursos e planejamento prático.",
  },
  "Justiça Divina": {
    image: graphImageBank.justice,
    description:
      "Gráfico associado à harmonização de situações que pedem equilíbrio, retidão, reparação simbólica e reposicionamento energético diante de conflitos.",
    interpretation:
      "A seleção sugere busca de equilíbrio, ordenamento, clareza ética e pacificação de conflitos.",
    readings: "Justiça simbólica, equilíbrio kármico, acordos, reparação e resolução de pendências.",
  },
  "Vesica Piscis": {
    image: graphImageBank.vesica,
    description:
      "Geometria sagrada formada pela interseção de dois círculos. Simboliza união de polaridades, integração, criação e encontro entre dimensões complementares.",
    interpretation:
      "Indica processo de integração entre corpo, emoção, mente e espírito, ou harmonização entre forças opostas.",
    readings: "Geometria sagrada, integração de polaridades, criação, vínculo e reconciliação.",
  },
  "Cruz Ansata": {
    image: graphImageBank.ansata,
    description:
      "Inspirada na Ankh egípcia, é descrita em radiestesia como gráfico captador, inversor e reorganizador de frequências, usado em processos de harmonização e equilíbrio.",
    interpretation:
      "Sugere transmutação de padrões, inversão de tendências desfavoráveis e fortalecimento vital.",
    readings: "Ankh, transmutação energética, vitalidade e equilíbrio de pessoas ou ambientes.",
  },
  "Keiti": {
    image: graphImageBank.keiti,
    description:
      "Gráfico de proteção e compensação ambiental, associado à neutralização de emissões nocivas, interferências eletromagnéticas e padrões densos do espaço.",
    interpretation:
      "Indica atenção ao ambiente, à proteção do campo e à limpeza de interferências externas.",
    readings: "Geobiologia, proteção ambiental, compensação de campos e harmonização de espaços.",
  },
  "Limpeza e Recarga": {
    image: graphImageBank.limpezaRecarga,
    description:
      "Gráfico voltado a limpar impregnações energéticas e recarregar o campo sutil, unindo descarga de densidades com recomposição vibracional.",
    interpretation:
      "Sugere necessidade de purificação, recomposição e estabilização da vitalidade após desgaste.",
    readings: "Limpeza energética, recarga vital, higiene vibracional e práticas de proteção.",
  },
  "Corte Energético": {
    image: graphImageBank.corteEnergetico,
    description:
      "Gráfico voltado à investigação e ao corte de laços energéticos, vínculos sutis, bloqueios e perdas de energia associados a relações, padrões emocionais ou campos de influência.",
    interpretation:
      "A seleção de Corte Energético sugere necessidade de delimitação, encerramento simbólico de ligações desgastantes e recuperação da energia pessoal.",
    readings: "Corte de laços energéticos, proteção, vínculos sutis, bloqueios e reorganização do campo.",
  },
  "Guedes II": {
    image: graphImageBank.guedes,
    description:
      "Também conhecido como Triturador II, é associado à desintegração vibracional de cargas densas, cristalizações, bloqueios sutis e padrões que impedem a circulação natural da energia.",
    interpretation:
      "A seleção de Guedes II sugere foco em limpeza profunda, desbloqueio, dissolução de formas-pensamento e restauração do fluxo energético.",
    readings: "Guedes II, Triturador II, limpeza profunda, desbloqueio energético e equilíbrio dos chakras.",
  },
  "NENAS": {
    image: graphImageBank.nenas,
    description:
      "Conhecido como neutralizador de nocividades ambientais e do subsolo, é usado para investigar e equilibrar interferências do espaço, como cargas ambientais, geobiológicas ou vibrações que afetam a vitalidade.",
    interpretation:
      "A seleção de NENAS sugere atenção ao ambiente, à base energética do lugar e à neutralização de influências externas que podem drenar ou desorganizar o campo pessoal.",
    readings: "NENAS, neutralização ambiental, geobiologia, nocividades do subsolo e harmonização de espaços.",
  },
  "SCAP": {
    image: graphImageBank.scap,
    description:
      "Conhecido como SCAP cabalístico, é usado como escudo de proteção, compensação de ambientes e neutralização de energias desarmônicas.",
    interpretation:
      "Indica necessidade de proteção, blindagem energética e organização do campo ambiental.",
    readings: "Proteção cabalística, escudos energéticos, ambiente terapêutico e neutralização.",
  },
  "Yoshua": {
    image: graphImageBank.yoshua,
    description:
      "Gráfico com letras hebraicas e estrutura simbólica voltada à proteção, limpeza espiritual e sustentação vibracional em trabalhos de purificação.",
    interpretation:
      "Sugere suporte espiritual, limpeza de densidades e alinhamento com intenção elevada.",
    readings: "Símbolos hebraicos, proteção espiritual, purificação e oração terapêutica.",
  },
  "9 Círculos": {
    image: graphImageBank.nineCircles,
    description:
      "Estrutura de círculos concêntricos associada à proteção de pessoas, objetos, animais e ambientes contra influências externas indesejadas.",
    interpretation:
      "Indica necessidade de delimitação, defesa energética e fortalecimento do campo de proteção.",
    readings: "Proteção por círculos concêntricos, limites energéticos e campo pessoal.",
  },
  "Iavé": {
    image: graphImageBank.iave,
    description:
      "Gráfico com referência ao tetragrama hebraico, utilizado como símbolo de proteção espiritual, alinhamento e conexão com princípio divino.",
    interpretation:
      "Sugere busca de proteção superior, centramento espiritual e sustentação de fé.",
    readings: "Tetragrama, nomes sagrados, proteção espiritual e tradição simbólica.",
  },
  "Psicoprotetor": {
    image: graphImageBank.psicoprotetor,
    description:
      "Gráfico voltado à proteção psíquica, indicado quando há sensibilidade a influências externas, pensamentos invasivos ou desgaste mental-emocional.",
    interpretation:
      "Indica foco em fronteiras psíquicas, proteção mental e redução de interferências sutis.",
    readings: "Higiene mental, proteção psíquica, limites energéticos e autorregulação.",
  },
  "Tetragrammaton": {
    image: graphImageBank.tetragrammaton,
    description:
      "Símbolo protetivo tradicional que reúne pentagrama, letras hebraicas e signos esotéricos. Em radiestesia, é usado como suporte de proteção e ordenamento espiritual.",
    interpretation:
      "Sugere proteção, alinhamento espiritual e reforço do campo contra influências desarmônicas.",
    readings: "Pentagrama, tetragrama, proteção espiritual e simbologia hermética.",
  },
  "Abertura": {
    image: graphImageBank.abertura,
    description:
      "Gráfico voltado a favorecer abertura interior, receptividade, destravamento emocional e disponibilidade para novos movimentos de vida.",
    interpretation:
      "A seleção de Abertura sugere apoio para flexibilizar resistências, ampliar possibilidades e criar disposição para mudança.",
    readings: "Abertura emocional, receptividade, destravamento e expansão de possibilidades.",
  },
  "Aceitar e Soltar": {
    image: "",
    description:
      "Gráfico psicoemocional voltado ao acolhimento da experiência vivida e à liberação gradual de apego, resistência, culpa ou insistência em padrões esgotados.",
    interpretation:
      "A seleção de Aceitar e Soltar sugere trabalho de desapego, aceitação madura, encerramento de ciclos e recuperação de leveza emocional.",
    readings: "Aceitação, desapego, encerramento de ciclos, perdão e autorregulação emocional.",
  },
  "Amor ao Próximo": {
    image: "",
    description:
      "Gráfico psicoemocional associado à abertura compassiva para vínculos, convivência, cuidado e reconhecimento do outro sem perda dos próprios limites.",
    interpretation:
      "A seleção de Amor ao Próximo sugere atenção à qualidade dos vínculos, empatia, cooperação e equilíbrio entre cuidado e autonomia.",
    readings: "Compaixão, convivência, vínculos, cuidado e limites saudáveis.",
  },
  "Amor Universal": {
    image: "",
    description:
      "Gráfico psicoemocional voltado à expansão afetiva, integração espiritual do amor e percepção de pertencimento para além dos vínculos pessoais imediatos.",
    interpretation:
      "A seleção de Amor Universal sugere trabalho de abertura do coração, reconciliação interna e ampliação da confiança na vida.",
    readings: "Amor universal, coração, reconciliação, pertencimento e expansão afetiva.",
  },
  "Ativação da Vontade": {
    image: "",
    description:
      "Gráfico psicoemocional associado à força de decisão, iniciativa, direção pessoal e capacidade de transformar percepção em ação concreta.",
    interpretation:
      "A seleção de Ativação da Vontade sugere necessidade de fortalecer escolha, foco, disciplina e movimento diante do tema trabalhado.",
    readings: "Vontade, iniciativa, foco, ação, autonomia e direção pessoal.",
  },
  "Confiar com Alegria": {
    image: "",
    description:
      "Gráfico psicoemocional voltado à confiança, abertura positiva, espontaneidade e restauração de uma relação mais leve com o futuro.",
    interpretation:
      "A seleção de Confiar com Alegria sugere apoio para reduzir antecipação ansiosa, recuperar esperança e favorecer entrega consciente.",
    readings: "Confiança, alegria, esperança, leveza, entrega e abertura emocional.",
  },
  "Coragem": {
    image: "",
    description:
      "Gráfico psicoemocional associado à firmeza interna, enfrentamento de medos, sustentação de escolhas e fortalecimento diante de desafios.",
    interpretation:
      "A seleção de Coragem sugere necessidade de sustentar presença, atravessar inseguranças e agir com mais alinhamento interno.",
    readings: "Coragem, medo, firmeza, presença, decisão e enfrentamento.",
  },
  "Dependência e Vícios": {
    image: "",
    description:
      "Gráfico psicoemocional voltado à investigação de vínculos compulsivos, repetições, dependências afetivas, hábitos automáticos e padrões de fuga.",
    interpretation:
      "A seleção de Dependência e Vícios sugere atenção a mecanismos de compensação, compulsão, apego e busca de autonomia emocional.",
    readings: "Dependência, vícios, compulsão, repetição, autonomia e autorregulação.",
  },
  "Mundo Interior": {
    image: "",
    description:
      "Gráfico psicoemocional ligado à escuta interna, imaginação, memória emocional, introspecção e contato com conteúdos subjetivos profundos.",
    interpretation:
      "A seleção de Mundo Interior sugere necessidade de olhar para sentimentos, narrativas pessoais, imagens internas e sentidos ainda não elaborados.",
    readings: "Mundo interior, introspecção, memória emocional, imaginação e autoconhecimento.",
  },
  "Nervos": {
    image: "",
    description:
      "Gráfico psicoemocional associado à tensão nervosa, irritabilidade, sobrecarga mental, hipervigilância e dificuldade de relaxamento.",
    interpretation:
      "A seleção de Nervos sugere necessidade de acalmar o sistema psicoenergético, reduzir tensão e favorecer estabilidade emocional.",
    readings: "Tensão nervosa, ansiedade, irritabilidade, descanso, regulação e estabilidade.",
  },
  "Positividade": {
    image: "",
    description:
      "Gráfico psicoemocional voltado ao fortalecimento de perspectiva, confiança, abertura para possibilidades e reorganização de pensamentos desanimadores.",
    interpretation:
      "A seleção de Positividade sugere apoio para renovar leitura interna do tema, ampliar recursos e favorecer disposição construtiva.",
    readings: "Positividade, esperança, perspectiva, recursos internos e disposição.",
  },
  "Pureza Interior": {
    image: "",
    description:
      "Gráfico psicoemocional associado à limpeza simbólica de culpa, ressentimento, confusão afetiva e cargas internas que dificultam clareza e serenidade.",
    interpretation:
      "A seleção de Pureza Interior sugere trabalho de depuração emocional, honestidade consigo e retorno a uma sensação mais íntegra de presença.",
    readings: "Pureza interior, culpa, serenidade, clareza, depuração emocional e integridade.",
  },
  "Desilusão Amorosa": {
    image: "",
    description:
      "Gráfico psicoemocional voltado a dores afetivas, frustração amorosa, luto relacional, quebra de expectativa e recomposição da autoestima nos vínculos.",
    interpretation:
      "A seleção de Desilusão Amorosa sugere atenção a perdas afetivas, expectativas feridas, recuperação de valor próprio e reorganização do coração.",
    readings: "Desilusão amorosa, luto afetivo, autoestima, vínculos e recomposição emocional.",
  },
  "ARCHINE": {
    image: graphImageBank.archine,
    description:
      "Gráfico ligado a repouso, recomposição e segurança energética durante o descanso, tradicionalmente associado ao sono reparador.",
    interpretation:
      "A seleção de ARCHINE sugere atenção à restauração, ao descanso profundo e à reorganização do campo vital pela pausa.",
    readings: "ARCHINE, repouso, sono reparador, recomposição energética e vitalidade.",
  },
  "Captador de Energia Solar": {
    image: graphImageBank.captadorSolar,
    description:
      "Gráfico receptor e emissor associado à captação de energia solar simbólica, vitalização e redistribuição de energia mental, moral, psíquica e vital.",
    interpretation:
      "A seleção do Captador de Energia Solar sugere necessidade de reabastecimento, clareza e fortalecimento da energia disponível.",
    readings: "Energia solar, vitalização, receptor-emissor, força vital e recomposição.",
  },
  "Forças Universais": {
    image: "",
    description:
      "Gráfico de vitalidade associado à conexão com forças sutis amplas, sustentação energética e alinhamento com recursos universais de equilíbrio.",
    interpretation:
      "A seleção de Forças Universais sugere busca de apoio energético amplo, recomposição de vigor e fortalecimento do campo por fontes sutis.",
    readings: "Forças universais, vitalidade, sustentação energética, equilíbrio e recomposição.",
  },
  "Relaxar": {
    image: "",
    description:
      "Gráfico de vitalidade voltado ao relaxamento, desaceleração, repouso e redução de tensão física, mental e emocional.",
    interpretation:
      "A seleção de Relaxar sugere necessidade de pausa, descanso, soltura corporal e recuperação da energia pela descompressão.",
    readings: "Relaxamento, descanso, tensão, soltura, pausa e recuperação energética.",
  },
  "Cruz de São Mauro": {
    image: graphImageBank.saoMauro,
    description:
      "Geometria em forma de cruz entrelaçada, associada à vitalidade, força, proteção e recomposição do campo energético.",
    interpretation:
      "Indica suporte para fortalecimento, sustentação e reorganização da energia vital.",
    readings: "Cruz, vitalidade, proteção e símbolos de sustentação espiritual.",
  },
  "Magnetismo Vital e Curativo": {
    image: graphImageBank.magnetismo,
    description:
      "Gráfico ligado à emissão de magnetismo vital e intenção curativa, usado para apoiar recomposição energética e vitalização.",
    interpretation:
      "Sugere trabalho de reabastecimento, cura sutil, vitalidade e fortalecimento geral.",
    readings: "Magnetismo curativo, vitalismo, imposição de mãos e energia terapêutica.",
  },
  "Antahkarana": {
    image: graphImageBank.antahkarana,
    description:
      "Símbolo usado em práticas energéticas como ponte de conexão entre planos da consciência, alinhamento espiritual e integração interior.",
    interpretation:
      "Indica despertar de consciência, integração espiritual e fortalecimento do eixo interno.",
    readings: "Antahkarana, meditação, integração de consciência e práticas energéticas.",
  },
  "Cubo de Metatron": {
    image: graphImageBank.metatron,
    description:
      "Geometria sagrada formada por círculos e linhas que contém relações com os sólidos platônicos. É associada à estrutura, proteção e ordem universal.",
    interpretation:
      "Sugere organização profunda, geometria de proteção, clareza estrutural e alinhamento espiritual.",
    readings: "Cubo de Metatron, sólidos platônicos, geometria sagrada e proteção.",
  },
  "Cosmos 2000": {
    image: graphImageBank.cosmos2000,
    description:
      "Gráfico de alta complexidade geométrica, associado à expansão, ordenamento sutil e conexão com padrões cósmicos de organização.",
    interpretation:
      "A seleção de Cosmos 2000 sugere busca de ampliação de consciência, reorganização ampla e harmonização em camadas mais sutis.",
    readings: "Cosmos 2000, expansão, geometria complexa, campo cósmico e ordenamento sutil.",
  },
  "Cruz Atlante": {
    image: graphImageBank.cruzAtlante,
    description:
      "Gráfico com cruz e círculos concêntricos, associado à proteção, amplificação e sustentação de intenção em trabalhos de materialização e fortalecimento.",
    interpretation:
      "A seleção de Cruz Atlante sugere necessidade de força direcional, proteção e sustentação do propósito terapêutico.",
    readings: "Cruz Atlante, proteção, materialização, força direcional e sustentação energética.",
  },
  "Energia Divina": {
    image: graphImageBank.energiaDivina,
    description:
      "Gráfico simbólico de elevação e conexão espiritual, reunindo geometria e signos sagrados para sustentar proteção, fé e alinhamento superior.",
    interpretation:
      "A seleção de Energia Divina sugere busca de amparo espiritual, elevação vibracional e fortalecimento da confiança interior.",
    readings: "Energia divina, proteção espiritual, alinhamento superior e elevação vibracional.",
  },
  "Fiat Lux": {
    image: graphImageBank.fiatLux,
    description:
      "Gráfico associado à luz, consciência, pensamento e vida, usado como suporte simbólico para clareza, iluminação interior e abertura de percepção.",
    interpretation:
      "A seleção de Fiat Lux sugere foco em clareza, lucidez, consciência e transformação pela luz simbólica.",
    readings: "Fiat Lux, luz, consciência, pensamento, vida e clareza interior.",
  },
  "Gráfico dos Mestres": {
    image: graphImageBank.mestres,
    description:
      "Gráfico radiestésico associado aos raios, mestres e arcanjos, usado como mapa simbólico de qualidades espirituais, proteção, cura e transmutação.",
    interpretation:
      "A seleção do Gráfico dos Mestres sugere busca de orientação, suporte espiritual e identificação de qualidades sutis a serem trabalhadas.",
    readings: "Mestres, arcanjos, sete raios, orientação espiritual e qualidades vibracionais.",
  },
  "Prosperador": {
    image: graphImageBank.prosperador,
    description:
      "Gráfico com setas circulares e pirâmide central, associado ao movimento de prosperidade, circulação material e ativação de oportunidades.",
    interpretation:
      "A seleção de Prosperador sugere foco em fluxo, recursos, trabalho, circulação de oportunidades e reorganização material.",
    readings: "Prosperador, prosperidade, oportunidades, movimento material e recursos.",
  },
  "Prosperidade Divina": {
    image: "",
    description:
      "Gráfico de despertar associado à prosperidade como fluxo espiritual e material, integrando merecimento, abertura, circulação e alinhamento com propósito.",
    interpretation:
      "A seleção de Prosperidade Divina sugere trabalho de abertura de caminhos, confiança, merecimento e organização do campo material em diálogo com valores espirituais.",
    readings: "Prosperidade divina, merecimento, fluxo material, propósito e abertura de caminhos.",
  },
  "Selo Misterioso do Sol": {
    image: "",
    description:
      "Gráfico de despertar associado ao simbolismo solar, vitalidade espiritual, brilho pessoal, clareza, consciência e força de manifestação.",
    interpretation:
      "A seleção de Selo Misterioso do Sol sugere fortalecimento de identidade, clareza de intenção, energia criativa e presença luminosa no tema trabalhado.",
    readings: "Selo solar, vitalidade espiritual, consciência, brilho pessoal e manifestação.",
  },
  "Sorte e Sucesso": {
    image: graphImageBank.sorteSucesso,
    description:
      "Gráfico associado a abertura de caminhos, oportunidades favoráveis, êxito e alinhamento entre intenção, ação e resultado.",
    interpretation:
      "A seleção de Sorte e Sucesso sugere apoio para clareza de direção, confiança e ativação de condições favoráveis.",
    readings: "Sorte, sucesso, oportunidades, abertura de caminhos e realização.",
  },
  "Vórtex": {
    image: graphImageBank.vortex,
    description:
      "Gráfico de movimento espiralado e concêntrico, associado à dinamização, aceleração e reorganização de fluxos energéticos.",
    interpretation:
      "A seleção de Vórtex sugere necessidade de movimento, desbloqueio dinâmico e ativação de transformação.",
    readings: "Vórtex, dinamização energética, movimento, aceleração e transformação.",
  },
};

const bovisFields = [
  { key: "fisico", label: "Físico" },
  { key: "mental", label: "Mental" },
  { key: "emocional", label: "Emocional" },
  { key: "espiritual", label: "Espiritual" },
  { key: "vitalidade_geral", label: "Vitalidade geral" },
  { key: "ambiente_pessoal", label: "Vitalidade do ambiente pessoal" },
  { key: "ambiente_trabalho", label: "Vitalidade do/no ambiente de trabalho" },
];

const promotionalCard = {
  title: "Radiestesia, Reiki, Tarô e Escrita Criativa/Terapêutica",
  text:
    "A radiestesia é uma prática de escuta sutil que ajuda a mapear padrões energéticos, identificar pontos de desequilíbrio e orientar caminhos de limpeza, proteção e reorganização do campo pessoal. Quando associada ao Reiki, ao Tarô terapêutico e à Escrita Criativa/Terapêutica, amplia-se um percurso de autoconhecimento: a pessoa compreende melhor seus movimentos internos, reconhece símbolos importantes da própria história e encontra recursos para cuidar de si com mais presença.",
  duration:
    "As sessões radiônicas (com geometrias sagradas, conhecidas como gráficos radiônicos) atuam nos campos sutis por aproximadamente 28 dias. Recomenda-se reconsulta e reenergização ao final desse período, ou antes, se houver necessidade percebida no acompanhamento.",
  invite:
    "Para aprofundar este processo, é possível realizar sessões complementares de Reiki, leituras terapêuticas de Tarô e práticas de Escrita Criativa/Terapêutica orientada, conforme a necessidade identificada no atendimento. Entre em contato para mais informações.",
};

const selected = {
  field: "emocional",
  limit: "rigido",
  chakras: new Set(),
};

let reportManuallyEdited = false;
let printMode = "";
const storageKey = "registro-sessao-terapeutica-dados";
const defaultDocumentTitle = document.title;

const byId = (id) => document.getElementById(id);

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeCheckbox(name, value, label, extraContent = null) {
  const id = `${name}-${slug(value)}`;
  const wrapper = document.createElement("div");
  wrapper.className = "choice";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.value = value;
  input.id = id;

  const labelEl = document.createElement("label");
  labelEl.htmlFor = id;
  labelEl.textContent = label;

  wrapper.append(input, extraContent || labelEl);
  return wrapper;
}

function makeRadio(name, item, onChange, idPrefix = name) {
  const id = `${idPrefix}-${item.id}`;
  const wrapper = document.createElement("div");
  wrapper.className = "choice";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.value = item.id;
  input.id = id;
  const isFieldRadio = name.startsWith("campo_desequilibrio");
  const isLimitRadio = name.startsWith("tipo_limite");
  input.checked =
    (isFieldRadio && item.id === selected.field) ||
    (isLimitRadio && item.id === selected.limit);
  input.addEventListener("change", onChange);

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = item.label;

  wrapper.append(input, label);
  return wrapper;
}

function getGraphInfo(name, groupName = "Despertar") {
  if (graphInfoOverrides[name]) {
    return { name, groupName, ...graphInfoOverrides[name] };
  }

  const groupDefaults = {
    Harmonia: {
      image: graphImageBank.vesica,
      description:
        "Gráfico de harmonização voltado a reorganizar relações, ambientes, decisões ou estados internos, favorecendo coerência e pacificação.",
      interpretation: "Sugere busca de equilíbrio, reconciliação, organização suave e integração de forças em tensão.",
      readings: "Harmonia energética, coerência vibracional e pacificação de conflitos.",
    },
    Limpeza: {
      image: graphImageBank.limpezaRecarga,
      description:
        "Gráfico voltado a descarregar, limpar, cortar ou neutralizar energias densas, resíduos emocionais e impregnações do campo.",
      interpretation: "Sugere necessidade de purificação, corte de excessos, remoção de cargas e recomposição vibracional.",
      readings: "Limpeza energética, corte vibracional, defumação simbólica e proteção.",
    },
    Proteção: {
      image: graphImageBank.nineCircles,
      description:
        "Gráfico de proteção usado para fortalecer limites sutis, preservar o campo pessoal e criar uma barreira simbólica contra influências externas.",
      interpretation: "Sugere foco em segurança, delimitação, blindagem psíquica e proteção de pessoas ou ambientes.",
      readings: "Proteção energética, limites, escudos radiônicos e geobiologia.",
    },
    Psicoemocional: {
      image: graphImageBank.psicoprotetor,
      description:
        "Gráfico voltado ao campo psicoemocional, apoiando autorregulação, clareza afetiva, disposição interior e transformação de padrões emocionais.",
      interpretation: "Sugere trabalho sobre emoções, crenças, vínculos, motivação e recursos internos.",
      readings: "Autorregulação emocional, psicossomática, crenças e vínculos.",
    },
    Vitalidade: {
      image: graphImageBank.magnetismo,
      description:
        "Gráfico voltado à sustentação vital, recomposição energética, relaxamento, vigor físico e melhora do fluxo de energia no corpo.",
      interpretation: "Sugere apoio à vitalidade, descanso, magnetismo pessoal e recuperação energética.",
      readings: "Vitalidade, magnetismo curativo, descanso e equilíbrio corpo-energia.",
    },
    Despertar: {
      image: graphImageBank.antahkarana,
      description:
        "Gráfico de despertar e expansão, associado a consciência, conexão espiritual, prosperidade, clareza, luz interior e alinhamento com propósito.",
      interpretation: "Sugere abertura de consciência, fortalecimento espiritual e integração entre propósito, presença e ação.",
      readings: "Despertar espiritual, meditação, geometria sagrada, prosperidade e propósito.",
    },
  };

  const fallback = groupDefaults[groupName] || groupDefaults.Despertar;
  return { name, groupName, ...fallback, image: "" };
}

function makeInfoChoice(name, value, label, info, checkboxName) {
  const button = document.createElement("button");
  button.className = "clickable-name";
  button.type = "button";
  button.textContent = label;
  button.title = `${label}: ${info.description}`;
  button.addEventListener("click", () => openModal(info));
  return makeCheckbox(checkboxName, value, label, button);
}

function renderBasicLists() {
  const chakraList = byId("chakraList");
  chakras.forEach((chakra) => {
    const item = makeCheckbox("chakra", chakra.name, chakra.name);
    const input = item.querySelector("input");
    input.dataset.chakraId = chakra.id;
    input.addEventListener("change", () => {
      setChakraSelection(chakra.id, input.checked);
    });
    item.title = "Clique ou passe o mouse sobre o chakra no boneco para ler o resumo.";
    chakraList.appendChild(item);
  });

  renderChakraFigure();

  renderFieldLimitSelectors("causeFieldList", "causeLimitList", "cause", "campo_desequilibrio", "tipo_limite");
}

function renderFieldLimitSelectors(fieldContainerId, limitContainerId, idPrefix, fieldName, limitName) {
  const fieldList = byId(fieldContainerId);
  const limitList = byId(limitContainerId);
  if (!fieldList || !limitList) return;

  fields.forEach((field) => {
    fieldList.appendChild(
      makeRadio(
        fieldName,
        field,
        (event) => {
          selected.field = event.target.value;
          syncFieldLimitRadios();
          renderCauses();
          autoUpdateIntegrativeReport();
          autoSaveFormState();
        },
        `${idPrefix}-campo`
      )
    );
  });

  limitTypes.forEach((limit) => {
    limitList.appendChild(
      makeRadio(
        limitName,
        limit,
        (event) => {
          selected.limit = event.target.value;
          syncFieldLimitRadios();
          renderCauses();
          autoUpdateIntegrativeReport();
          autoSaveFormState();
        },
        `${idPrefix}-limite`
      )
    );
  });
}

function renderChakraFigure() {
  const figure = byId("chakraFigure");
  const body = document.createElement("div");
  body.className = "body-silhouette";
  body.setAttribute("aria-hidden", "true");

  chakras.forEach((chakra) => {
    const point = document.createElement("button");
    point.type = "button";
    point.className = "chakra-point";
    point.dataset.chakraId = chakra.id;
    point.style.setProperty("--chakra-color", chakra.color);
    point.style.top = chakra.top;
    point.title = `${chakra.name}: clique para marcar ou passe o mouse para ler o resumo.`;
    point.setAttribute("aria-label", `${chakra.name}. Marcar chakra em desequilíbrio.`);
    point.addEventListener("click", () => {
      setChakraSelection(chakra.id, !selected.chakras.has(chakra.id));
    });
    point.addEventListener("mouseenter", () => {
      renderChakraBalloons(chakra.id);
    });
    point.addEventListener("focus", () => {
      renderChakraBalloons(chakra.id);
    });
    body.appendChild(point);
  });

  figure.appendChild(body);
  renderChakraBalloons();
}

function setChakraSelection(id, checked) {
  if (checked) {
    selected.chakras.add(id);
  } else {
    selected.chakras.delete(id);
  }

  document.querySelectorAll(`[data-chakra-id="${id}"]`).forEach((element) => {
    if (element.matches("input")) element.checked = checked;
    element.classList.toggle("is-selected", checked);
    element.setAttribute("aria-pressed", checked ? "true" : "false");
  });

  renderChakraBalloons(id);
  autoUpdateIntegrativeReport();
}

function renderChakraBalloons(focusedId = "") {
  const container = byId("chakraBalloons");
  container.innerHTML = "";

  const selectedIds = [...selected.chakras];
  const visibleIds = selectedIds.length ? selectedIds : focusedId ? [focusedId] : [];

  if (!visibleIds.length) {
    container.className = "chakra-balloons is-empty";
    container.textContent = "Marque um chakra em desequilíbrio para exibir o balão explicativo.";
    return;
  }

  container.className = "chakra-balloons";
  visibleIds.forEach((id) => {
    const chakra = chakras.find((item) => item.id === id);
    if (!chakra) return;

    const balloon = document.createElement("article");
    balloon.className = "chakra-balloon";
    balloon.style.setProperty("--chakra-color", chakra.color);
    balloon.innerHTML = `
      <h4>${chakra.name}</h4>
      <p><strong>Representa:</strong> ${chakra.represents}</p>
      <p><strong>Associações físicas, emocionais e psíquicas:</strong> ${chakra.associations}</p>
      <p><strong>Áreas da vida:</strong> ${chakra.lifeAreas}</p>
    `;
    container.appendChild(balloon);
  });
}

function renderCauses() {
  const panel = byId("causePanel");
  panel.innerHTML = "";

  panel.className = "cause-panel";
  const groups =
    selected.field && selected.limit
      ? [{ field: selected.field, limit: selected.limit }]
      : fields.flatMap((field) => limitTypes.map((limit) => ({ field: field.id, limit: limit.id })));

  groups.forEach((group) => {
    const matchingCauses = causes.filter(
      (cause) => cause.field === group.field && cause.limit === group.limit
    );
    if (!matchingCauses.length) return;

    const groupBlock = document.createElement("article");
    groupBlock.className = "cause-group";

    const title = document.createElement("h3");
    title.textContent = `${getLabel(fields, group.field)} - Limite ${getLabel(limitTypes, group.limit)}`;

    const list = document.createElement("div");
    list.className = "choice-grid choice-grid-wide";

    matchingCauses.forEach((cause) => {
      const button = document.createElement("button");
      button.className = "clickable-name";
      button.type = "button";
      button.textContent = cause.name;
      button.title = `${cause.name}: ${cause.description}`;
      button.addEventListener("click", () => openModal(cause));
      list.appendChild(makeCheckbox("causa", cause.id, cause.name, button));
    });

    groupBlock.append(title, list);
    panel.appendChild(groupBlock);
  });
}

function renderGraphs() {
  const container = byId("graphGroups");

  graphGroups.forEach((group) => {
    const section = document.createElement("details");
    section.className = "graph-group";
    section.open = false;

    const summary = document.createElement("summary");
    const title = document.createElement("h3");
    const typeChoice = makeCheckbox("tipo_grafico", group.name, `Tipo: ${group.name}`);
    title.appendChild(typeChoice);
    summary.appendChild(title);

    const items = document.createElement("div");
    items.className = "choice-grid choice-grid-wide";

    group.items.forEach((item) => {
      const info = getGraphInfo(item, group.name);
      items.appendChild(makeInfoChoice("grafico", item, item, info, `grafico_${slug(group.name)}`));
    });

    section.append(summary, items);
    container.appendChild(section);
  });
}

function renderAwakening() {
  const container = byId("awakeningList");
  awakeningItems.forEach((item) => {
    const info = getGraphInfo(item, "Despertar");
    container.appendChild(makeInfoChoice("despertar", item, item, info, "despertar"));
  });
}

function renderHolisticTreatments() {
  const container = byId("holisticList");
  holisticTreatments.forEach((item) => {
    container.appendChild(makeCheckbox("tratamento_holistico", item, item));
  });
}

function openModal(cause) {
  const kicker =
    cause.groupName ||
    `${getLabel(fields, cause.field)} - Limite ${getLabel(limitTypes, cause.limit)}`;
  const image = byId("modalImage");

  byId("modalKicker").textContent = kicker;
  byId("modalTitle").textContent = cause.name;
  byId("modalDescription").textContent = cause.description;
  if (cause.image) {
    image.src = cause.image;
    image.alt = `Imagem ilustrativa de ${cause.name}`;
    image.hidden = false;
  } else {
    image.removeAttribute("src");
    image.alt = "";
    image.hidden = true;
  }
  byId("infoModal").classList.add("active");
  byId("infoModal").setAttribute("aria-hidden", "false");
  byId("closeModal").focus();
}

function closeModal() {
  byId("infoModal").classList.remove("active");
  byId("infoModal").setAttribute("aria-hidden", "true");
}

function getLabel(collection, id) {
  return collection.find((item) => item.id === id)?.label || id;
}

function getCauseReportText(cause) {
  const fieldLabel = getLabel(fields, cause.field);
  const limitLabel = getLabel(limitTypes, cause.limit);

  return [
    `Causa: ${cause.name}`,
    `Campo relacionado: ${fieldLabel}`,
    `Tipo de limite relacionado: ${limitLabel}`,
    `Texto-base: ${cause.description}`,
  ].join("\n");
}

function addReportSection(report, number, title, lines) {
  if (!lines.length) return;
  report.push(`${number}. ${title.toUpperCase()}`);
  report.push("-".repeat(48));
  report.push(...lines);
  report.push("");
}

function addReportBlockTitle(report, title) {
  report.push("=".repeat(56));
  report.push(title.toUpperCase());
  report.push("=".repeat(56));
  report.push("");
}

function getFormValue(name) {
  return document.querySelector(`[name="${name}"]`)?.value.trim() || "";
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`[name="${name}"]:checked`)].map((input) => input.value);
}

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function getBovisLevel(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  if (number <= 300) return "Muito crítico";
  if (number < 4000) return "Crítico";
  if (number < 6000) return "Atenção";
  if (number < 8500) return "Saudável";
  if (number <= 10000) return "Elevado";
  return "Muito elevado";
}

function getBovisCategory(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "";
  if (number <= 300) return "very-critical";
  if (number < 4000) return "critical";
  if (number < 6000) return "attention";
  if (number < 8500) return "healthy";
  if (number <= 10000) return "high";
  return "very-high";
}

function buildBovisRows() {
  return bovisFields
    .map((field) => {
      const initial = getFormValue(`${field.key}_inicial`);
      const final = getFormValue(`${field.key}_final`);
      if (!initial && !final) return null;

      return {
        label: field.label,
        initial,
        final,
        initialLevel: getBovisLevel(initial),
        finalLevel: getBovisLevel(final),
        current: final || initial,
        currentLevel: getBovisLevel(final || initial),
        currentCategory: getBovisCategory(final || initial),
      };
    })
    .filter(Boolean);
}

function formatBovisCell(value) {
  return value || "não informado";
}

function buildBovisReport() {
  const rows = buildBovisRows();
  if (!rows.length) return [];

  return [
    "Campo | Medição inicial | Medição após a sessão",
    "------|-----------------|----------------------",
    ...rows.map((row) => `${row.label} | ${formatBovisCell(row.initial)} | ${formatBovisCell(row.final)}`),
  ];
}

function getSelectedGraphReportData() {
  const selectedTypes = getCheckedValues("tipo_grafico");

  return graphGroups.flatMap((group) => {
    const checkedItems = getCheckedValues(`grafico_${slug(group.name)}`);
    const itemsForReport = checkedItems.length || !selectedTypes.includes(group.name) ? checkedItems : group.items;

    return itemsForReport.map((item) => getGraphInfo(item, group.name));
  });
}

function buildIntegrativeReport() {
  const name = getFormValue("nome") || "cliente";
  const therapist = getFormValue("terapeuta");
  const birth = formatDate(getFormValue("nascimento"));
  const sessionDate = formatDate(getFormValue("sessao"));
  const sessionTheme = getFormValue("tema_sessao");
  const fieldLabel = selected.field ? getLabel(fields, selected.field) : "";
  const limitLabel = selected.limit ? getLabel(limitTypes, selected.limit) : "";
  const selectedCauses = getCheckedValues("causa");
  const selectedCauseData = causes.filter((cause) => selectedCauses.includes(cause.id));
  const selectedChakraData = [...selected.chakras]
    .map((id) => chakras.find((chakra) => chakra.id === id))
    .filter(Boolean);
  const graphTypes = getCheckedValues("tipo_grafico");
  const selectedGraphData = getSelectedGraphReportData();
  const holistic = getCheckedValues("tratamento_holistico");
  const otherHolistic = getFormValue("outro_tratamento_holistico");
  const awakening = getCheckedValues("despertar");
  const selectedAwakeningData = awakening.map((item) => getGraphInfo(item, "Despertar"));
  const bovisLines = buildBovisReport();
  const notes = getFormValue("observacoes");
  const intention = getFormValue("comando");
  const witnesses = getFormValue("testemunhos");
  const therapyDetail = getFormValue("detalhamento_terapeutica");
  const treatmentTime = getFormValue("tempo_tratamento");
  const nextDate = formatDate(getFormValue("nova_afericao"));

  const report = [
    "RELATÓRIO DA SESSÃO",
    "PROTOCOLO DE LIMPEZA E PROTEÇÃO",
    "",
  ];

  addReportBlockTitle(report, "Resultado do formulário");

  addReportSection(report, 1, "Dados do cliente e da sessão", [
    `Cliente: ${name}`,
    birth ? `Data de nascimento: ${birth}` : "Data de nascimento: não informada",
    therapist ? `Terapeuta: ${therapist}` : "Terapeuta: não informado",
    sessionDate ? `Data da sessão: ${sessionDate}` : "Data da sessão: não informada",
    sessionTheme ? `Tema da sessão / questão principal: ${sessionTheme}` : "Tema da sessão / questão principal: não informado",
  ]);

  addReportSection(report, 2, "Avaliação - escala Bovis", bovisLines.length ? bovisLines : ["Nenhuma medição Bovis informada."]);

  if (selectedChakraData.length) {
    addReportSection(
      report,
      3,
      "Chakras em desequilíbrio",
      selectedChakraData.map(
        (chakra) =>
          `${chakra.name}\nRepresenta: ${chakra.represents}\nAssociações: ${chakra.associations}\nÁreas da vida: ${chakra.lifeAreas}`
      )
    );
  }

  if (fieldLabel || limitLabel || selectedCauseData.length) {
    const lines = [];
    if (fieldLabel) {
      lines.push(`Campo selecionado: ${fieldLabel}.`);
    }
    if (limitLabel) {
      lines.push(`Tipo de limite selecionado: ${limitLabel}.`);
    }
    selectedCauseData.forEach((cause) => {
      lines.push(getCauseReportText(cause));
    });
    addReportSection(report, 4, "Campo, tipo de limite e causas selecionadas", lines);
  }

  if (graphTypes.length || selectedGraphData.length) {
    const lines = [];
    if (graphTypes.length) lines.push(`Tipos indicados: ${graphTypes.join(", ")}.`);
    if (selectedGraphData.length) {
      selectedGraphData.forEach((graph) => {
        lines.push(`${graph.name} (${graph.groupName}): ${graph.description}`);
      });
    }
    addReportSection(report, 5, "Tratamento radiônico com geometrias sagradas", lines);
  }

  if (holistic.length || otherHolistic || therapyDetail) {
    const lines = [];
    const namedHolistic = holistic.filter((item) => item !== "Outros");

    if (namedHolistic.length) {
      lines.push(`Terapias indicadas: ${namedHolistic.join(", ")}.`);
    }

    if (otherHolistic) {
      lines.push(`Outros: ${otherHolistic}.`);
    } else if (holistic.includes("Outros")) {
      lines.push("Outros tratamentos também foram indicados.");
    }

    if (therapyDetail) {
      lines.push(`Observações e especificações terapêuticas: ${therapyDetail}`);
    }

    addReportSection(report, 6, "Outros tratamentos holísticos", lines);
  }

  if (awakening.length) {
    addReportSection(
      report,
      7,
      "Despertar",
      selectedAwakeningData.map((graph) => `${graph.name}: ${graph.description}`)
    );
  }

  if (witnesses || intention || notes || treatmentTime || nextDate) {
    const lines = [];
    if (witnesses) lines.push(`Testemunho(s): ${witnesses}`);
    if (intention) lines.push(`Comando / intenção: ${intention}`);
    if (notes) lines.push(`Observações: ${notes}`);
    if (treatmentTime) lines.push(`Tempo de permanência / tratamento indicado: ${treatmentTime}`);
    if (nextDate) lines.push(`Nova aferição sugerida: ${nextDate}`);
    addReportSection(report, 8, "Registro complementar da sessão", lines);
  }

  report.push("OBSERVAÇÃO");
  report.push("-".repeat(48));
  report.push("Observação: este relatório organiza possibilidades de leitura terapêutica e energética. Ele não substitui avaliação médica, psicológica ou qualquer acompanhamento profissional necessário.");
  report.push("");
  report.push(promotionalCard.title.toUpperCase());
  report.push("-".repeat(48));
  report.push(promotionalCard.text);
  report.push("");
  report.push(promotionalCard.duration);
  report.push("");
  report.push(promotionalCard.invite);

  return report.join("\n");
}

function updateIntegrativeReport() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  if (!report) return;
  reportManuallyEdited = false;
  report.value = buildIntegrativeReport();
  if (printView) printView.textContent = report.value;
  syncReportPrintView();
}

function autoUpdateIntegrativeReport() {
  if (!reportManuallyEdited) updateIntegrativeReport();
}

function syncReportPrintView() {
  const report = byId("integrativeReport");
  const printView = byId("reportPrintView");
  const visualView = byId("reportVisualView");
  if (report && printView) printView.textContent = report.value;
  if (visualView) visualView.innerHTML = buildVisualReport();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildVisualReport() {
  const name = getFormValue("nome") || "cliente";
  const therapist = getFormValue("terapeuta") || "não informado";
  const birth = formatDate(getFormValue("nascimento")) || "não informada";
  const sessionDate = formatDate(getFormValue("sessao")) || "não informada";
  const sessionTheme = getFormValue("tema_sessao");
  const fieldLabel = selected.field ? getLabel(fields, selected.field) : "não selecionado";
  const limitLabel = selected.limit ? getLabel(limitTypes, selected.limit) : "não selecionado";
  const selectedCauseData = causes.filter((cause) => getCheckedValues("causa").includes(cause.id));
  const selectedChakraData = [...selected.chakras]
    .map((id) => chakras.find((chakra) => chakra.id === id))
    .filter(Boolean);
  const selectedGraphData = getSelectedGraphReportData();
  const selectedAwakeningData = getCheckedValues("despertar").map((item) => getGraphInfo(item, "Despertar"));
  const allGraphData = [...selectedGraphData, ...selectedAwakeningData];
  const holistic = getCheckedValues("tratamento_holistico");
  const otherHolistic = getFormValue("outro_tratamento_holistico");
  const namedHolistic = holistic.filter((item) => item !== "Outros");
  const therapyDetail = getFormValue("detalhamento_terapeutica");
  const notes = getFormValue("observacoes");
  const intention = getFormValue("comando");
  const bovisRows = buildBovisRows();

  const bovisTable = bovisRows.length
    ? `
      <table class="visual-bovis-table">
        <thead>
          <tr>
            <th>Campo</th>
            <th>Inicial</th>
            <th>Após sessão</th>
          </tr>
        </thead>
        <tbody>
          ${bovisRows
            .map(
              (row) => `
                <tr>
                  <td>${escapeHtml(row.label)}</td>
                  <td>${escapeHtml(formatBovisCell(row.initial))}</td>
                  <td>${escapeHtml(formatBovisCell(row.final))}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <p class="bovis-legend visual-bovis-legend">
        <strong>Muito crítico:</strong> 0 a 300 U.B. ·
        <strong>Crítico:</strong> 301 a 3.999 U.B. ·
        <strong>Atenção:</strong> 4.000 a 5.999 U.B. ·
        <strong>Saudável:</strong> 6.000 a 8.499 U.B. ·
        <strong>Elevado:</strong> 8.500 a 10.000 U.B. ·
        <strong>Muito elevado:</strong> acima de 10.000 U.B.
      </p>
    `
    : `<p class="visual-muted">Nenhuma medição Bovis informada.</p>`;

  const chakraCards = selectedChakraData.length
    ? selectedChakraData
        .map(
          (chakra) => `
            <article class="visual-card chakra-summary-card" style="--chakra-color:${chakra.color}">
              <h4>${escapeHtml(chakra.name)}</h4>
              <p><strong>Representa:</strong> ${escapeHtml(chakra.represents)}</p>
              <p><strong>Associações:</strong> ${escapeHtml(chakra.associations)}</p>
              <p><strong>Áreas da vida:</strong> ${escapeHtml(chakra.lifeAreas)}</p>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhum chakra selecionado.</p>`;

  const chakraFigure = `
    <div class="report-chakra-layout">
      <div class="chakra-figure report-chakra-figure" aria-label="Boneco dos chakras no relatório">
        <div class="body-silhouette" aria-hidden="true">
          ${chakras
            .map((chakra) => {
              const isSelected = selected.chakras.has(chakra.id);
              return `<span class="chakra-point report-chakra-point ${isSelected ? "is-selected" : "is-muted"}" style="--chakra-color:${chakra.color}; top:${chakra.top}" title="${escapeHtml(chakra.name)}"></span>`;
            })
            .join("")}
        </div>
      </div>
      <div class="visual-card-grid">${chakraCards}</div>
    </div>
  `;

  const fieldLimitSummary = `
    <div class="field-limit-summary">
      <article class="visual-card field-summary-card">
        <h4>Campo ${escapeHtml(fieldLabel)}</h4>
        <p>${escapeHtml(fieldSummaries[selected.field] || "Campo não selecionado.")}</p>
      </article>
      <article class="visual-card field-summary-card">
        <h4>Limite ${escapeHtml(limitLabel)}</h4>
        <p>${escapeHtml(limitSummaries[selected.limit] || "Tipo de limite não selecionado.")}</p>
      </article>
    </div>
  `;

  const causeCards = selectedCauseData.length
    ? selectedCauseData
        .map(
          (cause) => `
            <article class="visual-card integrated-summary">
              <h4>${escapeHtml(cause.name)}</h4>
              <p><strong>Campo:</strong> ${escapeHtml(getLabel(fields, cause.field))}</p>
              <p><strong>Tipo de limite:</strong> ${escapeHtml(getLabel(limitTypes, cause.limit))}</p>
              <p>${escapeHtml(cause.description)}</p>
              <p><strong>Leitura orientadora:</strong> esta causa descreve um modo de organizar proteção, abertura, vínculo, autonomia e autorregulação dentro do campo e do limite selecionados.</p>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhuma causa selecionada.</p>`;

  const graphCards = allGraphData.length
    ? allGraphData
        .map(
          (graph) => `
            <article class="graph-report-card ${graph.image ? "" : "graph-report-card-no-image"}">
              ${graph.image ? `<img src="${escapeHtml(graph.image)}" alt="${escapeHtml(graph.name)}" />` : ""}
              <div>
                <p class="visual-kicker">${escapeHtml(graph.groupName)}</p>
                <h4>${escapeHtml(graph.name)}</h4>
                <p>${escapeHtml(graph.description)}</p>
                <p><strong>Interpretação no tratamento:</strong> ${escapeHtml(graph.interpretation)}</p>
              </div>
            </article>
          `
        )
        .join("")
    : `<p class="visual-muted">Nenhum gráfico selecionado.</p>`;

  return `
    <article class="visual-report">
      <header class="visual-report-header">
        <h3>Relatório da sessão</h3>
        <p>PROTOCOLO DE LIMPEZA E PROTEÇÃO</p>
      </header>

      <section class="report-cover">
        <img src="assets/capa-radiestesia.png" alt="Pêndulo sobre gráfico radiestésico" />
        <h2>RELATÓRIO DE ATENDIMENTO RADIESTÉSICO</h2>
      </section>

      <section>
        <h3>1. Dados da sessão</h3>
        <table class="visual-data-table">
          <tbody>
            <tr>
              <th>Cliente</th>
              <td>${escapeHtml(name)}</td>
              <th>Nascimento</th>
              <td>${escapeHtml(birth)}</td>
            </tr>
            <tr>
              <th>Terapeuta</th>
              <td>${escapeHtml(therapist)}</td>
              <th>Data da sessão</th>
              <td>${escapeHtml(sessionDate)}</td>
            </tr>
            <tr>
              <th>Tema</th>
              <td colspan="3">${escapeHtml(sessionTheme || "não informado")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>2. Resultado do formulário</h3>
        <h4>Avaliação Bovis</h4>
        ${bovisTable}
        <h4>Campo e limite identificados</h4>
        <p><strong>Campo:</strong> ${escapeHtml(fieldLabel)} | <strong>Tipo de limite:</strong> ${escapeHtml(limitLabel)}</p>
        ${(namedHolistic.length || otherHolistic || holistic.includes("Outros")) ? `
          <div class="report-detail-block">
            <h4>Outros tratamentos holísticos</h4>
            ${namedHolistic.length ? `<p>${escapeHtml(namedHolistic.join(", "))}</p>` : ""}
            ${otherHolistic ? `<p><strong>Outros:</strong> ${escapeHtml(otherHolistic)}</p>` : holistic.includes("Outros") ? `<p>Outros tratamentos também foram indicados.</p>` : ""}
          </div>
        ` : ""}
        ${therapyDetail ? `<div class="report-detail-block"><h4>Observações e especificações terapêuticas</h4><p class="multiline-text">${escapeHtml(therapyDetail)}</p></div>` : ""}
        ${intention ? `<div class="report-detail-block"><h4>Comando / intenção</h4><p class="multiline-text">${escapeHtml(intention)}</p></div>` : ""}
        ${notes ? `<div class="report-detail-block"><h4>Observações</h4><p class="multiline-text">${escapeHtml(notes)}</p></div>` : ""}
      </section>

      <section>
        <h3>3. Resumo integrado: chakra, campo e causa</h3>
        <p>Esta parte organiza os pontos centrais selecionados no formulário para que o cliente compreenda o processo com clareza e autoconhecimento.</p>
        ${chakraFigure}
        ${fieldLimitSummary}
        <div class="visual-card-grid">${causeCards}</div>
      </section>

      <section class="report-treatment-section">
        <h3>4. Tratamento radiônico com geometrias sagradas</h3>
        <p>Os gráficos abaixo foram selecionados como parte do tratamento radiônico. Eles indicam a direção simbólica e energética do trabalho realizado.</p>
        <div class="graph-report-grid">${graphCards}</div>
      </section>

      <section class="visual-note">
        <h3>Observação</h3>
        <p>Este relatório organiza possibilidades de leitura terapêutica e energética. Ele não substitui avaliação médica, psicológica ou qualquer acompanhamento profissional necessário.</p>
      </section>

      <section class="promo-card">
        <p class="visual-kicker">Convite terapêutico</p>
        <h3>${escapeHtml(promotionalCard.title)}</h3>
        <p>${escapeHtml(promotionalCard.text)}</p>
        <p>${escapeHtml(promotionalCard.duration)}</p>
        <p>${escapeHtml(promotionalCard.invite)}</p>
      </section>
    </article>
  `;
}

function getFormState() {
  const form = byId("sessionForm");
  const fields = {};

  [...form.elements].forEach((element) => {
    if (!element.name || element.type === "file") return;

    if (element.type === "checkbox") {
      if (!fields[element.name]) fields[element.name] = [];
      if (element.checked) fields[element.name].push(element.value);
      return;
    }

    if (element.type === "radio") {
      if (element.checked) fields[element.name] = element.value;
      return;
    }

    fields[element.name] = element.value;
  });

  return {
    savedAt: new Date().toISOString(),
    selected: {
      field: selected.field,
      limit: selected.limit,
      chakras: [...selected.chakras],
    },
    reportManuallyEdited,
    fields,
  };
}

function normalizeOptionValue(value, collection, fallback = "") {
  const normalized = slug(value || "");
  const match = collection.find((item) => item.id === value || slug(item.label) === normalized);
  return match?.id || fallback;
}

function normalizeCauseValues(values = []) {
  return values
    .map((value) => {
      const normalized = slug(value || "");
      const match = causes.find((cause) => cause.id === value || slug(cause.name) === normalized);
      return match?.id || "";
    })
    .filter(Boolean);
}

function normalizeChakraValues(values = []) {
  return values
    .map((value) => {
      const normalized = slug(value || "");
      const match = chakras.find((chakra) => chakra.id === value || slug(chakra.name) === normalized);
      return match?.id || "";
    })
    .filter(Boolean);
}

function normalizeImportedState(state) {
  if (!state || typeof state !== "object") return null;

  const importedFields = state.fields && typeof state.fields === "object" ? { ...state.fields } : { ...state };
  const importedSelected = state.selected && typeof state.selected === "object" ? state.selected : {};

  const normalizedField = normalizeOptionValue(
    importedSelected.field || importedFields.campo_desequilibrio || importedFields.campo_desequilibrio_causa || importedFields.campo,
    fields,
    "emocional"
  );
  const normalizedLimit = normalizeOptionValue(
    importedSelected.limit || importedFields.tipo_limite || importedFields.tipo_limite_causa || importedFields.limite,
    limitTypes,
    "rigido"
  );

  importedFields.campo_desequilibrio = normalizedField;
  importedFields.tipo_limite = normalizedLimit;

  if (Array.isArray(importedFields.causa)) {
    importedFields.causa = normalizeCauseValues(importedFields.causa);
  }

  const chakraValues = Array.isArray(importedSelected.chakras)
    ? importedSelected.chakras
    : Array.isArray(importedFields.chakra)
      ? importedFields.chakra
      : [];

  return {
    fields: importedFields,
    selected: {
      field: normalizedField,
      limit: normalizedLimit,
      chakras: normalizeChakraValues(chakraValues),
    },
    reportManuallyEdited: Boolean(state.reportManuallyEdited),
  };
}

function applyFormState(state) {
  const normalizedState = normalizeImportedState(state);
  if (!normalizedState?.fields) return;

  const form = byId("sessionForm");
  const stateFields = normalizedState.fields;
  form.reset();

  [...form.elements].forEach((element) => {
    if (!element.name || element.type === "file") return;
    const value = stateFields[element.name];

    if (element.type === "checkbox") {
      element.checked = Array.isArray(value) && value.includes(element.value);
      return;
    }

    if (element.type === "radio") {
      element.checked = value === element.value;
      return;
    }

    element.value = value || "";
  });

  selected.field = normalizedState.selected.field;
  selected.limit = normalizedState.selected.limit;
  selected.chakras = new Set(normalizedState.selected.chakras || []);
  reportManuallyEdited = Boolean(normalizedState.reportManuallyEdited);
  syncFieldLimitRadios();

  document.querySelectorAll(".chakra-point").forEach((point) => {
    const checked = selected.chakras.has(point.dataset.chakraId);
    point.classList.toggle("is-selected", checked);
    point.setAttribute("aria-pressed", checked ? "true" : "false");
  });
  document.querySelectorAll("[data-chakra-id]").forEach((element) => {
    if (element.matches("input")) element.checked = selected.chakras.has(element.dataset.chakraId);
  });

  renderCauses();
  if (Array.isArray(stateFields.causa)) {
    document.querySelectorAll('[name="causa"]').forEach((input) => {
      input.checked = stateFields.causa.includes(input.value);
    });
  }
  renderChakraBalloons();
  syncReportPrintView();
}

function syncFieldLimitRadios() {
  document.querySelectorAll('[name="campo_desequilibrio"]').forEach((input) => {
    input.checked = input.value === selected.field;
  });
  document.querySelectorAll('[name="tipo_limite"]').forEach((input) => {
    input.checked = input.value === selected.limit;
  });
}

function autoSaveFormState() {
  localStorage.setItem(storageKey, JSON.stringify(getFormState()));
}

function loadAutosavedFormState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    applyFormState(JSON.parse(raw));
  } catch (error) {
    console.warn("Não foi possível carregar o salvamento automático.", error);
  }
}

function getSuggestedFileName(suffix, extension) {
  const name = slug(getFormValue("nome") || "cliente");
  const date = getFormValue("sessao") || new Date().toISOString().slice(0, 10);
  return `registro-sessao-${name}-${date}-${suffix}.${extension}`;
}

function downloadTextFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function saveDataFile(promptForName = true) {
  autoSaveFormState();
  const suggested = getSuggestedFileName("dados", "json");
  const filename = promptForName
    ? window.prompt("Nome do arquivo de dados:", suggested)
    : suggested;
  if (!filename) return false;

  const finalName = filename.toLowerCase().endsWith(".json") ? filename : `${filename}.json`;
  downloadTextFile(finalName, JSON.stringify(getFormState(), null, 2), "application/json");
  return true;
}

function loadDataFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      applyFormState(JSON.parse(reader.result));
      autoSaveFormState();
      window.alert("Dados carregados com sucesso.");
    } catch (error) {
      console.error("Erro ao carregar arquivo de dados.", error);
      window.alert("Não foi possível carregar este arquivo. Verifique se ele é um JSON salvo por este formulário.");
    }
  });
  reader.readAsText(file);
}

function preparePrint(filenameSuffix) {
  autoSaveFormState();
  const suggested = getSuggestedFileName(filenameSuffix, "pdf").replace(/\.pdf$/i, "");
  const filename = window.prompt("Nome sugerido para o PDF:", suggested);
  if (filename) document.title = filename;
  return Boolean(filename);
}

function saveFullFormPdf() {
  if (!preparePrint("formulario-completo")) return;
  printMode = "full";
  document.body.classList.remove("print-report-only");
  window.print();
}

function saveReportPdf() {
  if (!reportManuallyEdited) updateIntegrativeReport();
  syncReportPrintView();
  if (!preparePrint("relatorio")) return;
  printMode = "report";
  byId("reportSection").open = true;
  document.body.classList.add("print-report-only");
  window.print();
}

function saveBeforeReplacingData(actionLabel) {
  const wantsSave = window.confirm(`Antes de ${actionLabel}, deseja baixar uma cópia dos dados preenchidos?`);
  if (wantsSave) return saveDataFile(true);
  autoSaveFormState();
  return true;
}

function clearForm() {
  const confirmed = window.confirm("Limpar todos os campos preenchidos?");
  if (!confirmed) return;
  if (!saveBeforeReplacingData("limpar o formulário")) return;

  byId("sessionForm").reset();
  selected.field = "emocional";
  selected.limit = "rigido";
  syncFieldLimitRadios();
  selected.chakras.clear();
  reportManuallyEdited = false;
  document.querySelectorAll(".chakra-point").forEach((point) => {
    point.classList.remove("is-selected");
    point.setAttribute("aria-pressed", "false");
  });
  renderCauses();
  renderChakraBalloons();
  byId("integrativeReport").value = "";
  syncReportPrintView();
  autoSaveFormState();
}

function bindActions() {
  byId("clearForm").addEventListener("click", clearForm);
  byId("clearFormBottom").addEventListener("click", clearForm);
  byId("saveData").addEventListener("click", () => saveDataFile(true));
  byId("saveDataBottom").addEventListener("click", () => saveDataFile(true));
  byId("loadData").addEventListener("click", () => byId("loadDataFile").click());
  byId("loadDataFile").addEventListener("change", (event) => {
    loadDataFile(event.target.files[0]);
    event.target.value = "";
  });
  byId("printForm").addEventListener("click", saveFullFormPdf);
  byId("printFormBottom").addEventListener("click", saveFullFormPdf);
  byId("generateReport").addEventListener("click", () => {
    if (!saveBeforeReplacingData("gerar/atualizar o relatório")) return;
    updateIntegrativeReport();
    autoSaveFormState();
  });
  byId("saveReportPdf").addEventListener("click", saveReportPdf);
  byId("saveReportPdfBottom").addEventListener("click", saveReportPdf);
  byId("sessionForm").addEventListener("input", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
    autoSaveFormState();
  });
  byId("sessionForm").addEventListener("change", (event) => {
    if (event.target.id === "integrativeReport") {
      reportManuallyEdited = true;
      syncReportPrintView();
    } else {
      autoUpdateIntegrativeReport();
    }
    autoSaveFormState();
  });
  byId("closeModal").addEventListener("click", closeModal);
  byId("infoModal").addEventListener("click", (event) => {
    if (event.target === byId("infoModal")) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  window.addEventListener("beforeprint", () => {
    if (!reportManuallyEdited) updateIntegrativeReport();
    syncReportPrintView();
    document.querySelectorAll("details.section").forEach((section) => {
      section.open = true;
    });
    document.querySelectorAll("details.bovis-scale").forEach((section) => {
      section.open = false;
    });
  });
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-report-only");
    document.title = defaultDocumentTitle;
    printMode = "";
  });
}

renderBasicLists();
renderCauses();
renderGraphs();
renderHolisticTreatments();
renderAwakening();
bindActions();
loadAutosavedFormState();
