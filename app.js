const $ = (id) => document.getElementById(id);

const bovisFields = ["Físico","Mental","Emocional","Espiritual","Vitalidade geral","Ambiente pessoal","Ambiente de trabalho"];
const chakras = ["Coronário","Frontal / terceiro olho","Laríngeo","Cardíaco","Plexo solar","Sacral","Básico / raiz","Outro"];
const axes = ["Vínculos residuais","Feridas emocionais","Apegos","Ativação in/consciente dos vínculos","Vínculos energéticos e/ou espirituais","Fechamento ou barreiras à disponibilidade afetiva"];

const parts = [
  {n:5,title:"Parte 1 — Vínculos residuais",groups:{
    "Amor, afeto e saudade":["Amor ainda presente","Saudade da pessoa","Saudade da convivência","Carinho e ternura persistentes","Desejo de proximidade","Apego às experiências positivas vividas","Desejo de manter o/a ex como figura afetiva"],
    "Idealizações":["Esperança de reconciliação","Fantasia que o/a ex mudará","Idealização do/a ex","Idealização da relação","Minimização das vivências ruins","Crença de que era a “pessoa certa”","Espera de fato pelo retorno"],
    "Identidades":["Dificuldade de sair do “nós” para o “eu”","Não sabe quem é fora da relação","Apego às rotinas do casal","Apego às memórias do casal","Apego à família","Luto pelos projetos futuros","Sensação de perder parte de si"],
    "Vínculo sexual":["Atração física persistente","Desejo sexual pelo/a ex","Saudade do toque","Saudade da intimidade sexual","Associação entre prazer e o/a ex","Necessidade de ser amado pelo/a ex"],
    "Dependência emocional":["Necessidade de validação pelo/a ex","Necessidade de sentir-se importante","Necessidade de segurança","Necessidade de companhia","Medo de ficar sozinho","Sensação que não pode seguir sozinho/a"]
  }},
  {n:6,title:"Parte 2 — Feridas emocionais ativas",groups:{
    "Mágoas e raiva":["Sentir mágoa","Guardar ressentimento","Sentir raiva","Sentir que foi injustiçado/a","Sentir revolta pela forma do término"],
    "Culpa e arrependimentos":["Sentir-se culpado/a pelo término","Arrepender-se (por ter ou não feito algo)","Sentir que fracassou na relação","Sentir culpa por ter ferido o/a ex","Sentir culpa por seguir adiante"],
    "Ciúme e substituição":["Sentir ciúme do/a ex","Sentir-se substituído/a","Sofrer ao imaginar o/a ex com outra pessoa","Comparar-se com o/a novo/a parceiro/a","Competir com o/a novo/a parceiro/a","Precisar mostrar que está melhor que o/a ex"],
    "Rejeição e abandono":["Sentir-se rejeitado/a","Sentir-se abandonado/a","Sentir-se desvalorizado/a","Sentir-se inadequado e insuficiente","Sentir-se humilhado"]
  }},
  {n:7,title:"Parte 3 — Pendências e não encerramento",groups:{
    "Pendências emocionais":["Precisar entender por que terminou","Ter perguntas sem respostas","Ter coisas importantes que não foram ditas","Precisar expressar / ser ouvido/a","Precisar de pedido de desculpas","Precisar pedir desculpas / “reparar” algo","Sem um encerramento claro ou despedida"],
    "Pendências materiais":["Dívidas financeiras","Divisão de bens / patrimônio","Objetos e pertences pessoais","Moradia / propriedade","Questões judiciais / documentais","Negócios ou obrigações profissionais","Outras pendências materiais"]
  }},
  {n:8,title:"Parte 4 — Mecanismos de ativação do vínculo e do sofrimento",groups:{
    "Monitoramento":["Monitorar novo relacionamento","Perguntar sobre o/a ex a terceiros","Ver fotos atuais","Observar likes, comentários e interações nas redes","Buscar sinais de interesse ou retorno","Procurar notícia do/a ex","Ver redes sociais"],
    "Exposição reativadora":["Manter contato não necessário","Criar motivos para falar com o/a ex","Reler mensagens antigas","Rever fotografias etc. repetidamente","Revisitar lugares do casal","Manter rituais antigos feitos pelo casal"],
    "Ruminação e reativação mental":["Pensar repetidamente no/a ex","Rever mentalmente vivências dolorosas","Imaginar conversas com o/a ex","Pensar “e se...?” repetidamente","Tentar compreender o término sem parar","Fantasiar reconciliação","“Sentir” a presença da pessoa no seu dia a dia","Reviver situações da relação"]
  }},
  {n:9,title:"Parte 5 — Vínculos energéticos",groups:{
    "Laços mantidos / emaranhados energéticos":["Cordões energéticos persistentes","Nós energéticos","Entrelaçamento dos campos","Conexão energética residual","Reconexão energética após contato"],
    "Impregnações / resíduos energéticos":["Impregnação no campo pessoal","Impregnação sexual por contato","Resíduos energéticos da convivência","Impregnação de objetos","Impregnação ambiental"],
    "Formas-pensamento / vampirismo":["Forma-pensamento autogerada","Forma-pensamento atribuída ao ex","Forma-pensamento compartilhada","Conglomerado de formas-pensamento","Projeção mental/energética externa","Vampirismo energético entre vivos"],
    "Interferências externas / magias":["Interferência externa energética intencional","Trabalho feito / bruxaria percebida","Amarração afetiva percebida","Ataque psíquico percebido","Influência energética de terceiros sobre o vínculo"],
    "Obsessores":["Influência espiritual obsessiva (espíritos)","Vampirismo espiritual (desencarnados)","Influência espiritual de natureza sexual"]
  }},
  {n:10,title:"Parte 6 — Barreiras à disponibilidade afetiva",groups:{
    "Evitação e autoproteção":["Evitar se envolver emocionalmente","Manter relações superficiais (defesa)","Recuar quando surge possível intimidade","Evitar conhecer novas pessoas","Antecipar que uma nova relação vai dar errado","Bloquear ou conter o desejo","Preferir não se envolver para não sofrer"],
    "Apego residual":["Reservar espaço emocional para o/a ex","Sentir culpa por desejar outra pessoa","Não se permitir investir em alguém novo","Achar que ninguém poderá ocupar o lugar"],
    "Comparação":["Comparar personalidade","Comparar aparência","Comparar conexão emocional","Comparar sexualidade","Comparar a intensidade da paixão","Comparar estilo de vida","Rejeitar novas pessoas por não serem como o/a ex"],
    "Insegurança relacional":["Medo da rejeição","Medo do abandono","Medo de nova perda","Medo de traição","Dificuldade de se mostrar vulnerável","Medo de intimidade","Desconfiança de potenciais parceiros/as"]
  }},
  {n:11,title:"Parte 7 — Tratamento com geometrias sagradas",groups:{
    "Gráficos / geometrias":["Antimagia","Yoshua","Alta vitalidade","KLIM","Turbilhão de Vênus","Turbilhão de Mercúrio","Turbilhão clássico","SRIM","Labirinto de Amiens","Labirinto de Chartres","Shin","Vesica Piscis","Flor da vida","Autoestima 5.7.3","Código 21","Chama Trina","KRIM","Desembaraçador de relacionamentos","Desembaraçador material","Triturador","Desimpregnador","Diafragma","Harmonia","Harmonia familiar","HRIM","SCAP","Keiti","Nove círculos","Escudo protetor","IAVE"]
  }}
];

const holistic = ["Reiki","Florais de Bach","Meditação / Yoga","Apometria","Mesa Radiônica","Tarot Terapêutico","Radiestesia Terapêutica","Banhos","Ho’oponopono","Mantras / Afirmações","Subliminal","Musicoterapia","Barra de Access","Acupuntura","Cromoterapia","ThetaHealing","Aromaterapia","Ecoterapia","Hipnoterapia","Fitoterapia","Constelação Familiar","Quiropraxia","Outros"];
const oils = ["Gerânio (Pelargonium graveolens)", "Bergamota (Citrus bergamia)", "Alecrim (Rosmarinus officinalis)", "Rosa", "Melaleuca / Tea Tree (Melaleuca alternifolia)", "Lavanda (Lavandula angustifolia)", "Sálvia Esclareia (Salvia sclarea)", "Canela", "Anis-estrelado (Illicium verum)", "Laranja Doce (Citrus sinensis)", "Ylang Ylang (Cananga odorata)", "Cedro", "Pimenta-rosa (Schinus terebinthifolia)", "Olíbano / Frankincense (Boswellia carterii)", "Hortelã-Pimenta (Mentha piperita)", "Limão Siciliano (Citrus limon)", "Eucalipto (Eucalyptus globulus)", "Camomila Romana (Chamaemelum nobile)", "Sândalo", "Copaíba (Copaifera officinalis)", "Grapefruit (Citrus × paradisi)", "Lemongrass / Capim-Limão (Cymbopogon flexuosus)", "Manjericão (Ocimum basilicum)", "Patchouli (Pogostemon cablin)", "Tomilho (Thymus vulgaris)", "Erva-doce / Funcho (Foeniculum vulgare)", "Pinho-silvestre (Pinus sylvestris)", "Gengibre (Zingiber officinale)", "Jasmim", "Vetiver", "Outro"];


function safeName(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"_").replace(/^_|_$/g,"").toLowerCase();}
function choice(name,value){const id=safeName(name+"_"+value);return `<label class="choice" for="${id}"><input id="${id}" type="checkbox" name="${name}" value="${value}"><span>${value}</span></label>`;}
function checked(name){return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value);}
function val(name){return document.querySelector(`[name="${name}"]`)?.value?.trim() || "";}
function fmtDate(v){if(!v)return ""; const [y,m,d]=v.split("-"); return `${d}/${m}/${y}`;}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function render(){
  $("bovisGrid").innerHTML=bovisFields.map(label=>{
    const k=safeName(label);
    return `<article class="bovis-card"><h3>${label}</h3><label><span>Inicial</span><input type="number" name="${k}_inicial" placeholder="U.B."></label><label><span>Após sessão</span><input type="number" name="${k}_final" placeholder="U.B."></label></article>`;
  }).join("");
  $("chakraList").innerHTML=chakras.filter(x=>x!=="Outro").map(x=>choice("chakra",x)).join("");
  $("axisList").innerHTML=axes.filter(x=>x!=="Outro").map(x=>choice("eixo",x)).join("");
  $("protocolParts").innerHTML=parts.map((p,idx)=>`<details class="section"><summary><h2>${p.n}. ${p.title}</h2></summary>${Object.entries(p.groups).map(([g,items],gidx)=>`<div class="subgroup"><h3>${g}</h3><div class="choice-grid">${[...items,...(items.includes("Outro")?[]:["Outro"])].map(x=>choice("parte_"+(idx+1),x)).join("")}</div><label class="field other-detail"><span>Especificar outro — ${g}</span><input name="outro_parte_${idx+1}_${gidx}"></label></div>`).join("")}</details>`).join("");
  $("holisticList").innerHTML=holistic.map(x=>choice("tratamento_holistico",x)).join("");
  $("bachGroups").innerHTML=Object.entries(bachGroups).map(([g,items])=>`<div class="subgroup"><h3>${g}</h3><div class="choice-grid">${items.map(x=>choice("floral_bach",x)).join("")}</div></div>`).join(""); $("oilList").innerHTML=oils.map(x=>choice("oleo",x)).join(""); $("tarotList").innerHTML=tarotCards.map(x=>choice("taro",x)).join("");
}

function bovisSummary(){
  const rows=[];
  bovisFields.forEach(label=>{
    const k=safeName(label), a=val(k+"_inicial"), b=val(k+"_final");
    if(a||b) rows.push(`${label}: inicial ${a||"—"} U.B.; após sessão ${b||"—"} U.B.`);
  });
  return rows;
}


let reportEditOverrides = {};
try { reportEditOverrides = JSON.parse(localStorage.getItem("solar_report_edits") || "{}") || {}; } catch { reportEditOverrides = {}; }

function reportEditKey(title,item){
  return safeName(`${title}__${item}`);
}
function editableReportText(key,text){
  const value = Object.prototype.hasOwnProperty.call(reportEditOverrides,key) ? reportEditOverrides[key] : (text || "");
  return `<span class="report-editable" contenteditable="true" spellcheck="true" data-report-edit-key="${escapeHtml(key)}">${escapeHtml(value)}</span>`;
}
function saveReportEdits(){
  localStorage.setItem("solar_report_edits", JSON.stringify(reportEditOverrides));
}

function htmlTable(title, rows){
  if(!rows || !rows.length) return "";
  return `<section class="report-table-section">
    <h3>${escapeHtml(title)}</h3>
    <div class="table-wrap">
      <table class="report-table">
        <thead><tr><th>Item</th><th>Descrição / indicação</th></tr></thead>
        <tbody>${rows.map(r=>{
          const name = r.name ?? r[0] ?? "";
          const description = r.description ?? r[1] ?? "";
          return `<tr><td>${escapeHtml(name)}</td><td>${editableReportText(reportEditKey(title,name),description)}</td></tr>`;
        }).join("")}</tbody>
      </table>
    </div>
  </section>`;
}


function htmlSingleColumn(title, rows){
  if(!rows || !rows.length) return "";
  return `<section class="report-single-section">
    <h3>${escapeHtml(title)}</h3>
    <div class="report-single-list">
      ${rows.map(r=>{
        const name = r.name ?? r[0] ?? "";
        const description = r.description ?? r[1] ?? "";
        return `<div class="report-single-row">
          <strong>${escapeHtml(name)}</strong>
          <span>${editableReportText(reportEditKey(title,name),description)}</span>
        </div>`;
      }).join("")}
    </div>
  </section>`;
}

function collectOtherPart(idx,p){
  const rows=[];
  Object.keys(p.groups).forEach((groupName,gidx)=>{
    const detail=val(`outro_parte_${idx+1}_${gidx}`);
    if(detail){
      rows.push({
        name:`Outro — ${groupName}`,
        description: detail
      });
    }
  });
  return rows;
}

function diagnosisIntro(){
  const activeParts=[];
  parts.forEach((p,idx)=>{
    const arr=checked("parte_"+(idx+1)).filter(x=>x!=="Outro");
    const others=collectOtherPart(idx,p);
    if(arr.length||others.length) activeParts.push({title:p.title.replace(/^Parte \d+ — /,""),count:arr.length+others.length});
  });
  if(!activeParts.length) return "A leitura desta sessão não registrou diagnósticos/achados nos biômetros específicos do protocolo.";
  const labels=activeParts.map(x=>x.title.toLowerCase());
  return `A leitura radiestésica desta sessão concentrou-se principalmente em ${labels.join(", ")}. Os quadros abaixo organizam os achados identificados e os recursos selecionados, preservando a distinção entre diagnóstico radiestésico e tratamento indicado.`;
}


const chakraDescriptions = {"Coronário": "Relaciona-se à conexão espiritual, propósito, fé, sentido de vida e integração com o sutil.", "Frontal / terceiro olho": "Relaciona-se à intuição, percepção, clareza mental, imaginação, discernimento e visão interior.", "Laríngeo": "Relaciona-se à comunicação, expressão, verdade pessoal, escuta e capacidade de manifestar ideias e sentimentos.", "Cardíaco": "Relaciona-se ao amor, vínculo, compaixão, perdão, pertencimento e equilíbrio entre dar e receber.", "Plexo solar": "Relaciona-se à autonomia, autoestima, poder pessoal, ação, decisão, limites e elaboração das experiências.", "Sacral": "Relaciona-se ao prazer, criatividade, sexualidade, intimidade, fluidez emocional e movimento da vida.", "Básico / raiz": "Relaciona-se à segurança, presença, aterramento, corpo físico, estabilidade e recursos materiais."};
const axisDescriptions = {"Vínculos residuais": "Investiga o que ainda permanece incorporado em relação ao ex: sentimentos, desejos, necessidades, representações e referências afetivas que mantêm o vínculo ativo.", "Feridas emocionais": "Investiga o sofrimento que permanece ativo em decorrência da relação ou do término, incluindo mágoas, culpa, ciúme, rejeição, abandono e desvalorização.", "Apegos": "Investiga formas de apego emocional, identitário, sexual ou relacional que dificultam a passagem do vínculo anterior para uma organização mais autônoma.", "Ativação in/consciente dos vínculos": "Investiga comportamentos, pensamentos, lembranças e exposições que reativam repetidamente o vínculo e o sofrimento associado.", "Vínculos energéticos e/ou espirituais": "No paradigma radiestésico, investiga estruturas sutis associadas à manutenção do vínculo, como cordões, impregnações, formas-pensamento e influências espirituais percebidas.", "Fechamento ou barreiras à disponibilidade afetiva": "Investiga mecanismos de autoproteção, comparação, apego residual e insegurança que podem dificultar abertura emocional e disponibilidade para novos vínculos."};
const supplementalGraphDescriptions = {"Yoshua": "No método SOLAR, é utilizado como recurso de limpeza voltado a influências obsessivas no campo sutil, dentro do paradigma radiestésico.", "Código 21": "No método SOLAR, é empregado com a intenção de limpar, desbloquear e purificar registros deformados, trabalhando simbolicamente traumas, bloqueios e medos.", "Chama Trina": "No método SOLAR, é utilizada com a intenção de fortalecer, conectar e purificar, favorecendo uma nova visão orientada pelo amor, pela verdade, pelo belo e pelo bom, especialmente diante de medo, opressão, sensação de falta de saída e traumas.", "Desembaraçador de relacionamentos": "Voltado simbolicamente a desfazer nós e emaranhamentos em vínculos afetivos, favorecendo reorganização e liberação de padrões relacionais.", "Desembaraçador material": "Direcionado a bloqueios e emaranhamentos de ordem material, prática ou financeira, dentro do paradigma radiestésico.", "Desimpregnador": "Utilizado com intenção de limpeza de impregnações e resíduos energéticos associados a pessoas, objetos ou ambientes.", "Escudo protetor": "Recurso de proteção e estabilização do campo, empregado simbolicamente para reforçar limites diante de influências externas.", "Harmonia": "Recurso orientado à harmonização e ao equilíbrio do campo trabalhado.", "Harmonia familiar": "Recurso voltado à harmonização simbólica de vínculos e dinâmicas familiares.", "Autoestima 5.7.3": "Recurso psicoemocional associado ao fortalecimento simbólico da autoestima, autovalorização e referência pessoal.", "Antimagia": "Recurso empregado, dentro do paradigma radiestésico, com intenção de neutralização e proteção diante de interferências energéticas percebidas.", "Flor da vida": "Geometria sagrada utilizada simbolicamente para harmonização, organização e integração do campo.", "Vesica Piscis": "Geometria associada à integração de polaridades, união e alinhamento de aspectos complementares.", "Triturador": "Recurso empregado simbolicamente para desagregar padrões, cargas ou formas energéticas consideradas indesejáveis.", "Alta vitalidade": "Recurso direcionado ao fortalecimento e sustentação simbólica da vitalidade."};
const radiantDescriptions = {"Necessidade de ser amado pelo/a ex":"Sentir que ainda precisa receber amor do ex para se sentir emocionalmente completo ou seguro. Pode aparecer em pensamentos como “eu precisava que ele ainda me amasse”, busca de demonstrações afetivas ou dificuldade de aceitar que esse amor possa ter terminado.","Necessidade de validação pelo/a ex":"Necessidade de que o ex confirme seu valor, suas escolhas, sua versão dos acontecimentos ou sua importância. Pode levar a imaginar conversas, procurar aprovação ou permanecer afetado pelo que o ex pensa a seu respeito.","Necessidade de sentir-se importante":"Sofrimento diante da ideia de deixar de ocupar um lugar especial na vida do ex. Pode surgir como desejo de continuar sendo lembrado, procurado ou considerado alguém insubstituível.","Necessidade de segurança":"Associar o ex ou a antiga relação à sensação de estabilidade e proteção. O término pode produzir insegurança e pensamentos de que sozinho será mais difícil enfrentar a vida, tomar decisões ou lidar com problemas.","Necessidade de companhia":"Sentir falta principalmente de ter alguém presente para conversar, compartilhar rotina, sair ou realizar atividades. A ausência do ex pode ser vivenciada como um vazio cotidiano, mesmo quando não existe desejo claro de retomar a relação.","Medo de ficar sozinho":"Angústia diante da possibilidade de permanecer sem parceiro. Pode gerar pensamentos catastróficos sobre solidão, urgência para restabelecer o vínculo ou dificuldade de tolerar períodos sem relacionamento.","Sensação que não pode seguir sozinho/a":"Percepção de incapacidade para reorganizar a vida sem aquela pessoa. Pode aparecer como paralisia, adiamento de decisões, sensação de desorientação ou crença de que a própria vida não avançará sem o ex.","Amor ainda presente":"Reconhecer que continua amando o ex apesar do término. O sentimento pode coexistir com a compreensão racional de que a relação acabou e, isoladamente, não significa dependência ou necessidade de reconciliação.","Saudade da pessoa":"Sentir falta especificamente do ex: sua presença, personalidade, voz, jeito, conversas ou características pessoais. Pode produzir vontade de vê-lo ou saber como está.","Saudade da convivência":"Sentir falta da experiência cotidiana de viver em relação: refeições, conversas, horários, passeios e pequenos hábitos compartilhados. O objeto da saudade pode ser mais a vida conjunta do que propriamente a pessoa.","Carinho e ternura persistentes":"Permanência de sentimentos calorosos, cuidado e afeição pelo ex, mesmo depois do encerramento. Não implica necessariamente desejo de retorno.","Desejo de proximidade":"Vontade de estar perto, conversar, encontrar, abraçar ou compartilhar momentos com o ex. Pode surgir como impulso de diminuir a distância criada pelo término.","Apego às experiências positivas vividas":"Fixação predominante nas boas lembranças, com forte desejo de preservar emocionalmente aquilo que foi vivido. Pode dificultar integrar ao mesmo tempo os aspectos positivos e negativos da relação.","Desejo de manter o/a ex como figura afetiva":"O ex continua ocupando posição emocional central ou privilegiada, sendo mentalmente procurado como referência de apoio, intimidade, conselho ou pertencimento.","Esperança de reconciliação":"Manter a expectativa de que a relação possa recomeçar, mesmo sem evidências concretas. Pode dificultar decisões que pressupõem aceitar definitivamente o término.","Fantasia que o/a ex mudará":"Imaginar que uma transformação futura do ex resolverá os problemas que inviabilizaram a relação: “se ele mudasse isso, daria certo”. Mantém aberta uma relação hipotética diferente daquela efetivamente vivida.","Idealização do/a ex":"Supervalorizar qualidades e reduzir defeitos ou incompatibilidades, construindo mentalmente uma versão do ex melhor ou mais adequada do que a experiência completa indica.","Idealização da relação":"Recordar a relação como excepcional, perfeita ou melhor do que realmente foi, deixando em segundo plano conflitos, sofrimento e incompatibilidades.","Minimização das vivências ruins":"Reconhecer racionalmente os problemas, mas diminuir sua importância emocional: “não era tão ruim”, “dava para suportar”. Pode alimentar dúvida sobre a legitimidade do término.","Crença de que era a “pessoa certa”":"Convicção de que o ex era a única pessoa, a alma gêmea ou o parceiro ideal, fazendo o término parecer perda de uma oportunidade amorosa irrepetível.","Espera de fato pelo retorno":"Organizar escolhas ou a própria disponibilidade afetiva como se fosse necessário permanecer disponível caso o ex volte. Diferentemente da simples esperança, aqui a expectativa começa a orientar comportamentos e decisões.","Dificuldade de sair do “nós” para o “eu”":"Continuar pensando, planejando ou percebendo a vida a partir da antiga unidade do casal, com dificuldade para recuperar decisões, gostos e projetos formulados individualmente.","Não sabe quem é fora da relação":"Sentir perda de referências sobre identidade, desejos, valores ou modo de viver depois que o papel de parceiro deixa de organizar a vida.","Apego às rotinas do casal":"Dificuldade de abandonar horários, hábitos e práticas construídos durante a relação. A ausência dessas rotinas pode produzir vazio ou desorientação.","Apego às memórias do casal":"Necessidade intensa de permanecer ligado às lembranças como forma de conservar a relação internamente. Pode envolver retornar mentalmente ao passado ou dificuldade de permitir que as lembranças ocupem um lugar menos central.","Apego à família":"Sofrimento pela perda ou transformação dos vínculos sociais construídos por meio da relação: família do ex, amigos comuns, grupos e espaços de pertencimento.","Luto pelos projetos futuros":"Sofrer não apenas pelo que aconteceu, mas pela vida que se imaginava viver: viagens, casa, envelhecimento conjunto, filhos ou outros projetos que deixaram de existir como futuro compartilhado.","Sensação de perder parte de si":"Vivenciar o término como se uma parte da própria identidade, história ou existência tivesse desaparecido junto com a relação.","Atração física persistente":"Continuar percebendo o ex como fisicamente muito atraente, com respostas corporais ou interesse que permanecem intensos após o término.","Desejo sexual pelo/a ex":"Permanência de vontade de ter relações sexuais especificamente com o ex, podendo ou não coexistir com desejo de reconciliação.","Saudade do toque":"Sentir falta do abraço, beijo, cheiro, contato corporal, dormir junto ou outras formas de proximidade física.","Saudade da intimidade sexual":"Sentir falta da experiência sexual construída com aquela pessoa — confiança, familiaridade, cumplicidade e formas particulares de prazer.","Associação entre prazer e o/a ex":"Dificuldade de imaginar ou experimentar prazer e sexualidade sem que o ex apareça como referência predominante, comparação ou representação mental.","Sentir-se rejeitado/a":"Vivenciar o término como mensagem de que não foi escolhido ou desejado. Pode gerar tristeza, vergonha, busca de explicações e pensamentos como “por que não fui suficiente?”.","Sentir-se abandonado/a":"Experimentar a saída do outro como perda abrupta de apoio, presença ou segurança. Pode envolver sensação de ter sido deixado sozinho justamente quando precisava do parceiro.","Sentir-se desvalorizado/a":"Perceber que suas qualidades, esforços, sentimentos ou importância não foram reconhecidos. Pode gerar pensamentos de que “tudo o que fiz não valeu nada”.","Sentir-se inadequado e insuficiente":"Interpretar o término como evidência de defeito ou insuficiência pessoal: não ser bonito, interessante, desejável, competente ou “bom o bastante”.","Sentir-se humilhado":"Sentir que foi diminuído, exposto, desrespeitado ou colocado em posição degradante durante a relação ou o término, frequentemente acompanhado de vergonha e raiva.","Sentir mágoa":"Dor emocional ligada a algo que o ex fez, deixou de fazer ou disse. A lembrança permanece capaz de ferir mesmo depois do término.","Guardar ressentimento":"Manter a ofensa emocionalmente ativa ao longo do tempo, revivendo o dano e tendo dificuldade de deixar que o acontecimento perca centralidade.","Sentir raiva":"Experimentar irritação, hostilidade ou indignação dirigida ao ex, a si mesmo ou às circunstâncias da separação.","Sentir que foi injustiçado/a":"Perceber desequilíbrio entre aquilo que ofereceu e recebeu ou acreditar que sofreu consequências que não merecia.","Sentir revolta pela forma do término":"A dor concentra-se no modo como a separação aconteceu — mentira, frieza, desaparecimento, traição, exposição, desrespeito ou ausência de diálogo — mais do que no término em si.","Sentir-se culpado/a pelo término":"Atribuir a si responsabilidade excessiva ou dolorosa pelo fim da relação, pensando que poderia ou deveria tê-lo impedido.","Arrepender-se (por ter ou não feito algo)":"Voltar repetidamente a escolhas passadas imaginando que, se tivesse agido de outra maneira, o desfecho seria diferente.","Sentir que fracassou na relação":"Interpretar o fim do relacionamento como fracasso pessoal, e não como resultado possível de uma relação entre duas pessoas e suas circunstâncias.","Sentir culpa por ter ferido o/a ex":"Permanecer emocionalmente preso ao sofrimento que acredita ter causado, mesmo depois de reconhecer, reparar ou não poder mais modificar o ocorrido.","Sentir culpa por seguir adiante":"Experimentar novos prazeres, projetos ou relações como deslealdade ao ex, à história compartilhada ou ao sofrimento vivido.","Sentir ciúme do/a ex":"Sofrer diante da ideia de que o ex possa dirigir afeto, desejo, atenção ou intimidade a outra pessoa, apesar de a relação já ter terminado.","Sentir-se substituído/a":"Interpretar um novo parceiro como alguém que tomou o lugar que era seu, podendo produzir sensação de descarte ou perda de importância.","Sofrer ao imaginar o/a ex com outra pessoa":"Experimentar tristeza, ansiedade, raiva ou imagens mentais dolorosas ao pensar na intimidade afetiva ou sexual do ex com alguém.","Comparar-se com o/a novo/a parceiro/a":"Avaliar aparência, personalidade, sucesso, sexualidade ou outras características próprias em comparação com a nova pessoa.","Competir com o/a novo/a parceiro/a":"Sentir necessidade de superar, derrotar ou demonstrar superioridade em relação a quem se relaciona com o ex.","Precisar mostrar que está melhor que o/a ex":"Organizar conquistas, aparência, relacionamentos ou exposição social com a preocupação de demonstrar ao ex que saiu ganhando ou que não sofreu.","Precisar entender por que terminou":"Sentir que só conseguirá encerrar a história quando compreender plenamente as causas do término, podendo permanecer buscando uma explicação definitiva.","Ter perguntas sem respostas":"Permanecer mentalmente ocupado por dúvidas específicas que não foram respondidas e sentir que essas lacunas impedem o fechamento.","Ter coisas importantes que não foram ditas":"Sentir que pensamentos, sentimentos ou informações essenciais ficaram sem expressão e continuam pedindo uma oportunidade de serem comunicados.","Precisar expressar / ser ouvido/a":"Necessidade de que o ex conheça ou reconheça como a pessoa viveu os acontecimentos, especialmente quando sente que sua perspectiva foi ignorada.","Precisar de pedido de desculpas":"Sentir que o encerramento depende de o ex admitir um dano, reconhecer responsabilidade ou pedir desculpas.","Precisar pedir desculpas / “reparar” algo":"Perceber responsabilidade própria e sentir necessidade de reconhecer, reparar ou se desculpar por algo que fez.","Sem um encerramento claro ou despedida":"Experimentar o término como abrupto, ambíguo ou incompleto, sem um momento em que o fim tenha sido claramente reconhecido pelas partes.","Dívidas financeiras":"Valores, pagamentos, empréstimos ou compromissos financeiros ainda compartilhados que exigem contato ou resolução.","Divisão de bens / patrimônio":"Bens comuns cuja propriedade, divisão, venda ou utilização ainda precisa ser definida.","Objetos e pertences pessoais":"Pertences de uma pessoa que permanecem com a outra ou objetos cuja destinação ainda produz contato ou conflito.","Moradia / propriedade":"Questões relativas à residência, imóvel compartilhado, aluguel, financiamento ou uso de propriedade comum.","Questões judiciais / documentais":"Divórcio formal, contratos, registros, procurações, documentação ou outros procedimentos legais ainda pendentes.","Negócios ou obrigações profissionais":"Empresa, sociedade, atividade profissional ou responsabilidade de trabalho que continua ligando objetivamente as partes.","Outras pendências materiais":"Qualquer questão concreta não contemplada nas anteriores que ainda necessite resolução entre as partes.","Pensar repetidamente no/a ex":"O ex retorna involuntária ou deliberadamente ao pensamento muitas vezes, inclusive por imagens ou fantasias sexuais, mantendo elevada sua presença mental.","Rever mentalmente vivências dolorosas":"Repassar cenas da relação ou do término procurando compreender, corrigir mentalmente ou reviver aquilo que aconteceu.","Imaginar conversas com o/a ex":"Criar diálogos internos com o ex, ensaiando o que diria, o que gostaria que ele respondesse ou conversas que provavelmente nunca acontecerão.","Pensar “e se...?” repetidamente":"Construir cenários alternativos — “e se eu tivesse feito...?”, “e se ele voltasse?” — que mantêm a mente ligada a possibilidades contrafactuais.","Tentar compreender o término sem parar":"A busca legítima por compreensão transforma-se em investigação mental circular que não produz novas respostas nem encerramento.","Fantasiar reconciliação":"Imaginar cenas futuras de encontro, pedido de desculpas, mudança ou retomada da relação, experimentando emocionalmente um futuro hipotético.","“Sentir” a presença da pessoa no seu dia a dia":"Perceber frequentemente situações a partir da referência do ex — imaginar o que diria, lembrar dele em atividades comuns ou experimentar subjetivamente sua presença na rotina.","Monitorar novo relacionamento":"Acompanhar especificamente sinais, evolução ou características de um novo vínculo afetivo do ex.","Perguntar sobre o/a ex a terceiros":"Utilizar amigos, familiares ou conhecidos como fontes de informação sobre o ex.","Ver fotos atuais":"Procurar ou observar repetidamente imagens recentes do ex para verificar aparência, companhia, lugares ou mudanças.","Observar likes, comentários e interações nas redes":"Interpretar atividade digital do ex e de outras pessoas procurando pistas sobre sentimentos, relações ou acontecimentos.","Buscar sinais de interesse ou retorno":"Interpretar mensagens, visualizações, curtidas, encontros ou comportamentos ambíguos como possíveis indícios de que o ex ainda deseja aproximação.","Procurar notícia do/a ex":"Buscar direta ou indiretamente informações sobre onde está, o que faz ou como está vivendo.","Ver redes sociais":"Acessar perfis, stories ou publicações do ex para acompanhar sua vida, mesmo sabendo que isso pode provocar reativação emocional.","Manter contato não necessário":"Continuar conversas, mensagens ou encontros que não são exigidos por filhos, trabalho, patrimônio ou outra necessidade concreta e que mantêm proximidade emocional.","Criar motivos para falar com o/a ex":"Encontrar pretextos aparentemente práticos para iniciar contato quando a motivação principal é recuperar proximidade ou aliviar saudade/ansiedade.","Reler mensagens antigas":"Retornar repetidamente a conversas anteriores para reviver sentimentos, procurar significados ou manter sensação de proximidade.","Rever fotografias etc. repetidamente":"Utilizar fotografias, vídeos, presentes ou lembranças como forma recorrente de retornar emocionalmente à relação.","Revisitar lugares do casal":"Procurar repetidamente espaços associados ao casal com intenção ou expectativa de reviver a experiência emocional.","Manter rituais antigos feitos pelo casal":"Continuar hábitos que pertenciam especificamente à dinâmica do casal como forma de preservar simbolicamente a relação.","Cordões energéticos persistentes":"Hipótese de existência de um canal ou ligação energética entre as pessoas que permaneceria ativo depois do término. Laço = ligação.","Nós energéticos":"Hipótese de pontos de enredamento, tensão ou bloqueio formados dentro da ligação energética. Nó = enredamento existente na ligação.","Entrelaçamento dos campos":"Hipótese de mistura, sobreposição ou dificuldade de diferenciação entre os campos energéticos das duas pessoas.","Conexão energética residual":"Hipótese mais geral de que alguma conexão sutil relacionada à antiga relação permanece ativa, mesmo sem caracterização específica como cordão ou nó.","Reconexão energética após contato":"Hipótese de que uma conexão anteriormente enfraquecida ou desfeita volta a se estabelecer depois de contato físico, sexual, emocional ou comunicacional.","Impregnação no campo pessoal":"Resíduo energético atribuído à relação ou ao ex que teria permanecido registrado no próprio campo após a experiência.","Impregnação sexual por contato":"Resíduo atribuído especificamente à intimidade corporal e sexual compartilhada.","Resíduos energéticos da convivência":"Marcas energéticas atribuídas à convivência prolongada, hábitos e trocas cotidianas do casal.","Impregnação de objetos":"Hipótese de que objetos ligados à relação conservem registros ou resíduos energéticos associados às pessoas ou acontecimentos.","Impregnação ambiental":"Hipótese de que casa, quarto ou outros espaços de convivência conservem resíduos energéticos relacionados à antiga relação.","Forma-pensamento autogerada":"Estrutura energética que, dentro desse referencial, seria produzida e sustentada pelos próprios pensamentos e emoções repetidos sobre a relação.","Forma-pensamento atribuída ao ex":"Estrutura cuja origem é atribuída aos pensamentos ou emoções persistentes do ex dirigidos à pessoa ou à antiga relação.","Forma-pensamento compartilhada":"Estrutura considerada alimentada simultaneamente pelas duas pessoas.","Conglomerado de formas-pensamento":"Conjunto ou acúmulo de formas-pensamento que teriam se associado, produzindo uma estrutura mais complexa ou persistente.","Projeção mental/energética externa":"Hipótese de emissão ou direcionamento externo de conteúdo mental/energético para a pessoa, sem necessariamente constituir prática intencional de magia.","Vampirismo energético entre vivos":"Hipótese de troca desequilibrada entre pessoas vivas em que uma delas seria percebida como drenando ou recebendo energia da outra.","Interferência externa energética intencional":"Categoria geral para uma atuação energética deliberada atribuída a outra pessoa.","Trabalho feito / bruxaria percebida":"Hipótese, dentro do sistema espiritual adotado, de ritual ou prática intencional dirigida à pessoa ou ao relacionamento.","Amarração afetiva percebida":"Hipótese específica de intervenção destinada a criar, intensificar ou manter ligação afetiva/sexual contra o fluxo espontâneo da relação.","Ataque psíquico percebido":"Hipótese de direcionamento mental ou energético hostil com intenção de atingir, perturbar ou enfraquecer a pessoa.","Influência energética de terceiros sobre o vínculo":"Hipótese de interferência no vínculo proveniente de outra pessoa que não os integrantes do antigo casal.","Influência espiritual obsessiva (espíritos)":"Hipótese espiritualista de influência persistente de entidade/consciência desencarnada sobre a pessoa ou sobre a dinâmica do vínculo.","Vampirismo espiritual (desencarnados)":"Hipótese de drenagem ou consumo energético atribuído a influência espiritual, diferentemente do vampirismo energético entre pessoas vivas.","Influência espiritual de natureza sexual":"Hipótese de influência espiritual cuja manifestação percebida envolve sexualidade, desejo, excitação, sonhos ou sensações corporais de natureza sexual.","Medo da rejeição":"Antecipar que uma nova pessoa não irá escolhê-lo ou desejá-lo, podendo evitar aproximação ou interpretar ambiguidades como rejeição.","Medo do abandono":"Esperar que um novo parceiro também vá embora, tornando difícil confiar na continuidade de uma nova relação.","Medo de nova perda":"Evitar investir emocionalmente porque se apegar significaria correr novamente o risco de experimentar perda e luto.","Medo de traição":"Antecipar infidelidade ou quebra de confiança, podendo produzir vigilância, desconfiança ou dificuldade de relaxar em novos vínculos.","Dificuldade de se mostrar vulnerável":"Evitar revelar sentimentos, necessidades, fragilidades ou desejo por receio de voltar a ser ferido.","Medo de intimidade":"Sentir desconforto ou ameaça quando uma nova relação começa a envolver proximidade emocional, sexual ou compromisso.","Desconfiança de potenciais parceiros/as":"Partir da expectativa de que novas pessoas poderão mentir, abandonar, manipular ou ferir, mesmo sem sinais suficientes no vínculo atual.","Evitar se envolver emocionalmente":"Manter distância afetiva deliberadamente para reduzir a possibilidade de apego e sofrimento.","Manter relações superficiais (defesa)":"Aceitar contato, encontros ou sexo, mas impedir aprofundamento emocional como estratégia de autoproteção.","Recuar quando surge possível intimidade":"Aproximar-se inicialmente, mas perder interesse, afastar-se ou criar obstáculos quando percebe que a relação está ficando emocionalmente significativa.","Evitar conhecer novas pessoas":"Reduzir oportunidades de encontro, convívio ou aproximação não por ausência genuína de interesse, mas para evitar risco emocional.","Antecipar que uma nova relação vai dar errado":"Antecipar fracasso antes que o novo vínculo se desenvolva, usando a experiência anterior como previsão do futuro.","Bloquear ou conter o desejo":"Reprimir interesse, atração ou vontade de aproximação porque desejar alguém passa a ser associado ao risco de sofrer.","Preferir não se envolver para não sofrer":"Escolher conscientemente a distância como proteção, mesmo percebendo desejo de companhia, intimidade ou relacionamento.","Reservar espaço emocional para o/a ex":"Evitar comprometer-se plenamente com outra pessoa porque uma parte de si continua esperando ou deixando aberta a possibilidade de reconciliação.","Sentir culpa por desejar outra pessoa":"Experimentar atração por alguém novo como traição ao ex, à relação vivida ou aos próprios sentimentos anteriores.","Não se permitir investir em alguém novo":"Interromper ou limitar conscientemente novos vínculos porque ainda sente que não deveria ou não poderia seguir adiante.","Achar que ninguém poderá ocupar o lugar":"Acreditar que o lugar afetivo ocupado pelo ex é único e insubstituível, tornando qualquer nova pessoa necessariamente inferior ou inadequada.","Comparar personalidade":"Avaliar constantemente jeito, humor, inteligência, carinho ou comportamento de novas pessoas a partir das características do ex.","Comparar aparência":"Utilizar o corpo ou aparência do ex como padrão para avaliar atração por novas pessoas.","Comparar conexão emocional":"Esperar que intimidade, cumplicidade e sensação de conexão surjam com a mesma forma ou intensidade da relação anterior.","Comparar sexualidade":"Avaliar experiências sexuais novas tomando como referência habitual o desempenho, práticas ou intimidade sexual construída com o ex.","Comparar a intensidade da paixão":"Considerar insuficiente uma nova relação porque não produz imediatamente a mesma intensidade emocional experimentada anteriormente.","Comparar estilo de vida":"Avaliar hábitos, interesses, rotina, condição social ou projetos de novas pessoas segundo o padrão estabelecido pelo ex.","Rejeitar novas pessoas por não serem como o/a ex":"Descartar possibilidades potencialmente compatíveis porque a pessoa nova não reproduz características consideradas essenciais por terem pertencido ao ex."};

function diagnosticDescription(partNumber,item){ return radiantDescriptions[item] || ""; }


const graphDescriptionAliases = {
  "Anti-Magia":"Antimagia",
  "Antimagia":"Antimagia",
  "Desembaraçador de Relacionamentos":"Desembaraçador de relacionamentos",
  "Desembaraçador Material":"Desembaraçador material",
  "Harmonia Familiar":"Harmonia familiar",
  "Nove Círculos":"Nove círculos",
  "Escudo Protetor":"Escudo protetor",
  "Alta Vitalidade":"Alta vitalidade",
  "Turbilhão com Vênus":"Turbilhão de Vênus",
  "Turbilhão com Mercúrio":"Turbilhão de Mercúrio",
  "Shin":"Shin",
  "Flor da Vida":"Flor da vida"
};
function graphReportDescription(name){
  const key = graphDescriptionAliases[name] || name;
  return graphDescriptions[key] || (typeof supplementalGraphDescriptions !== "undefined" ? supplementalGraphDescriptions[name] : "") || "Gráfico selecionado na leitura radiestésica da sessão.";
}

function generateReport(){
  const diagnosisText = diagnosisIntro();
  const b=bovisSummary();
  const c=checked("chakra");
  const e=checked("eixo");
  const det=val("detalhamento_terapeutica");
  const florais=checked("floral_bach");
  const o=checked("oleo").filter(x=>x!=="Outro");
  const tarot=checked("taro").filter(x=>x!=="Outro");

  $("integrativeReport").value=diagnosisText;

  const visual=[];
  visual.push(`<article class="visual-report"><header class="report-header"><h2>SOLAR <span class="report-therapist-name">- Rodrigo Bittencourt</span></h2><p class="subtitle">Sistema de observação, limpeza e alinhamento pela radiestesia</p></header>`);

  if(val("nome")||val("nascimento")||val("sessao")||val("queixas")){
    visual.push(htmlTable("Identificação",[
      ...(val("nome")?[{name:"Cliente",description:val("nome")}]:[]),
      ...(val("nascimento")?[{name:"Data de nascimento",description:fmtDate(val("nascimento"))}]:[]),
      ...(val("sessao")?[{name:"Data da sessão",description:fmtDate(val("sessao"))}]:[]),
      ...(val("queixas")?[{name:"Queixas / tema",description:val("queixas")}]:[])
    ]));
  }

  visual.push(`<section class="diagnosis-intro"><h3>Leitura diagnóstica</h3><p>${editableReportText("diagnosis_intro",diagnosisText)}</p></section>`);

  if(b.length){
    visual.push(htmlTable("Biômetro de Bovis",b.map(x=>({
      name:x.split(":")[0],
      description:x.substring(x.indexOf(":")+1).trim()
    }))));
  }

  if(c.length){
    visual.push(htmlTable("Chakras envolvidos",
      c.filter(x=>x!=="Outro").map(x=>({name:x,description:chakraDescriptions[x] || "Chakra identificado como envolvido na leitura radiestésica da sessão."}))
    ));
  }

  if(e.length){
    visual.push(htmlTable("Eixos ativos",
      e.filter(x=>x!=="Outro").map(x=>({name:x,description:axisDescriptions[x] || "Eixo identificado como ativo na leitura radiestésica da sessão."}))
    ));
  }

  // DIAGNÓSTICOS — somente Partes 1 a 6.
  parts.slice(0,6).forEach((p,idx)=>{
    const arr=checked("parte_"+(idx+1)).filter(x=>x!=="Outro");
    const rows=arr.map(x=>({
      name:x,
      description:diagnosticDescription(idx+1,x)
    }));
    rows.push(...collectOtherPart(idx,p));
    if(rows.length){
      visual.push(htmlTable(p.title,rows));
    }
  });

  // TRATAMENTOS — quadros editoriais preservados.
  const treatmentPart=parts[6];
  const graphItems=checked("parte_7").filter(x=>x!=="Outro");
  const graphRows=graphItems.map(x=>({
    name:x,
    description:graphDescriptions[x] || supplementalGraphDescriptions[x] || "Gráfico selecionado como recurso de tratamento dentro do protocolo radiestésico SOLAR; sua função específica é interpretada conforme o protocolo utilizado na sessão."
  }));
  graphRows.push(...collectOtherPart(6,treatmentPart));
  if(graphRows.length){
    visual.push(`<section class="treatment-block">${htmlTable("Parte 7 — Tratamento com geometrias sagradas",graphRows)}</section>`);
  }

  const namedHol=checked("tratamento_holistico").filter(x=>x!=="Outros");
  const holRows=namedHol.map(x=>({
    name:x,
    description:""
  }));
  if(val("outro_tratamento_holistico")){
    holRows.push({name:"Outro",description:val("outro_tratamento_holistico")});
  }
  if(holRows.length){
    visual.push(`<section class="treatment-block">${htmlSingleColumn("Outros tratamentos holísticos",holRows)}</section>`);
  }

  if(val("quantidade_sessoes")||val("periodicidade")||det){
    const specs=[];
    if(val("quantidade_sessoes")) specs.push({name:"Quantidade de sessões",description:val("quantidade_sessoes")});
    if(val("periodicidade")) specs.push({name:"Periodicidade",description:val("periodicidade")});
    if(det) specs.push({name:"Observações e especificações",description:det});
    visual.push(`<section class="treatment-block">${htmlTable("Especificações terapêuticas",specs)}</section>`);
  }

  if(florais.length){
    const floralRows=florais.map(x=>({
      name:x,
      description:bachDescriptions[x] || ""
    }));
    visual.push(`<section class="treatment-block">${htmlTable("Florais de Bach",floralRows)}</section>`);
  }

  const oilRows=o.map(x=>({
    name:x,
    description:oilDescriptions[x] || ""
  }));
  if(val("outro_oleo")){
    oilRows.push({name:"Outro",description:val("outro_oleo")});
  }
  if(oilRows.length){
    visual.push(`<section class="treatment-block">${htmlTable("Aromaterapia",oilRows)}</section>`);
  }

  if(tarot.length){
    const tarotRows=tarot.map(x=>({
      name:x,
      description:tarotDescriptions[x] || "Arcano selecionado."
    }));
    visual.push(`<section class="treatment-block">${htmlTable("Tarô — Arcanos Maiores",tarotRows)}
      
    </section>`);
  }

  if(val("observacoes_complementares")){
    visual.push(htmlTable("Observações complementares",[
      {name:"Registro",description:val("observacoes_complementares")}
    ]));
  }

  visual.push(`<section class="report-note"><h3>Orientação</h3><p>A radiestesia, no contexto do SOLAR, é apresentada como prática integrativa de observação e organização simbólica/energética. Os achados deste relatório registram a leitura realizada na sessão e não constituem diagnóstico médico ou psicológico. O atendimento não substitui avaliação, acompanhamento ou tratamento médico, psicológico, psiquiátrico ou de outros profissionais de saúde quando necessários.</p><p>Se fizer sentido para o seu processo, a leitura pode ser retomada em sessões posteriores para acompanhar os aspectos observados e os recursos selecionados. Também podem ser considerados, de forma complementar e conforme sua escolha, atendimentos de Reiki e Tarô.</p><p><strong>Rodrigo Bittencourt</strong><br>SOLAR — Sistema de observação, limpeza e alinhamento pela radiestesia</p></section></article>`);

  $("reportVisualView").innerHTML=visual.join("");
  saveLocal();
  return diagnosisText;
}

function collect(){
  const data={};
  document.querySelectorAll("#sessionForm [name]").forEach(el=>{
    if(el.type==="checkbox"){
      if(!data[el.name])data[el.name]=[];
      if(el.checked)data[el.name].push(el.value);
    } else data[el.name]=el.value;
  });
  data.__reportEdits = reportEditOverrides;
  return data;
}
function apply(data){
  if(data && data.__reportEdits && typeof data.__reportEdits==="object"){ reportEditOverrides = data.__reportEdits; saveReportEdits(); }
  document.querySelectorAll("#sessionForm [name]").forEach(el=>{
    if(el.type==="checkbox") el.checked=Array.isArray(data[el.name])&&data[el.name].includes(el.value);
    else if(data[el.name]!==undefined) el.value=data[el.name];
  });
  try { generateReport(); } catch (error) { console.error("Erro ao reconstruir relatório:", error); }
}
function saveLocal(){localStorage.setItem("solar_form_data",JSON.stringify(collect()));}
function loadLocal(){const raw=localStorage.getItem("solar_form_data");if(raw)apply(JSON.parse(raw));}
function downloadData(){
  const blob=new Blob([JSON.stringify(collect(),null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`SOLAR_${safeName(val("nome")||"sessao")}.json`;a.click();URL.revokeObjectURL(a.href);
}
function printReport(){generateReport();document.body.classList.add("print-report-only");setTimeout(()=>{window.print();document.body.classList.remove("print-report-only");},100);}
function clearAll(){if(confirm("Limpar todos os campos desta sessão?")){document.getElementById("sessionForm").reset();localStorage.removeItem("solar_form_data");localStorage.removeItem("solar_report_edits");reportEditOverrides={};$("reportVisualView").innerHTML="";}}

render();
document.getElementById("sessionForm").addEventListener("input",saveLocal);

$("reportVisualView").addEventListener("input",e=>{
  const el=e.target.closest("[data-report-edit-key]");
  if(!el) return;
  reportEditOverrides[el.dataset.reportEditKey]=el.innerText;
  saveReportEdits();
  saveLocal();
  markAutosaved();
});

$("generateReport").addEventListener("click",generateReport);
$("saveReportPdf").addEventListener("click",printReport);
$("saveReportPdfBottom").addEventListener("click",printReport);
$("printForm").addEventListener("click",()=>window.print());
$("printFormBottom").addEventListener("click",()=>window.print());
$("saveData").addEventListener("click",downloadData);
$("saveDataBottom").addEventListener("click",downloadData);
$("loadData").addEventListener("click",()=>$("loadDataFile").click());
$("loadDataFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{apply(JSON.parse(r.result));saveLocal();}catch{alert("Arquivo de dados inválido.");}};r.readAsText(f);});
$("clearForm").addEventListener("click",clearAll);
$("clearFormBottom").addEventListener("click",clearAll);
loadLocal();
try { generateReport(); } catch (error) { console.error("Erro ao gerar relatório inicial:", error); }


let reportUpdateTimer;
function scheduleReportUpdate(){
  clearTimeout(reportUpdateTimer);
  reportUpdateTimer = setTimeout(() => {
    try {
      generateReport();
    } catch (error) {
      console.error("Erro ao atualizar o relatório SOLAR:", error);
    }
  }, 180);
}
document.getElementById("sessionForm").addEventListener("input", scheduleReportUpdate);
document.getElementById("sessionForm").addEventListener("change", scheduleReportUpdate);

let solarDirty=false;function markAutosaved(){solarDirty=false;const e=$("autosaveStatus");if(e)e.textContent=`Salvo automaticamente às ${new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}`;}document.getElementById("sessionForm").addEventListener("input",()=>{solarDirty=true;saveLocal();markAutosaved();});window.addEventListener("beforeunload",e=>{if(solarDirty){e.preventDefault();e.returnValue="";}});$("endSession")?.addEventListener("click",()=>{if(confirm("Deseja baixar uma cópia dos dados antes de encerrar esta sessão?")){downloadData();setTimeout(()=>{if(confirm("Deseja limpar o formulário desta sessão agora?"))clearAll()},250)}else if(confirm("Deseja encerrar e limpar sem baixar uma cópia?"))clearAll();});