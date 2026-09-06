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

const holistic = ["Reiki","Florais de Bach","Equilíbrio de Chakras","Meditação / Yoga","Apometria","Mesa Radiônica","Tarot Terapêutico","Radiestesia Terapêutica","Banhos","Ho’oponopono","Mantras / Afirmações","Subliminal","Musicoterapia","Barra de Access","Acupuntura","Cromoterapia","ThetaHealing","Aromaterapia","Ecoterapia","Hipnoterapia","Fitoterapia","Constelação Familiar","Quiropraxia","Outros"];
const oils = ["Gerânio","Bergamota","Alecrim","Rosa","Tea Tree","Lavanda","Esclareia","Canela","Anis Estrelado","Laranja","Ylang Ylang","Cedro","Artemísia","Pimenta Rosa","Olíbano","Hortelã Pimenta","Melaleuca","Limão","Eucalipto","Camomila","Sândalo","Copaíba","Sálvia","Grapefruit","Lemongrass","Manjericão","Patchouli","Tomilho","Erva Doce","Pinho","Gengibre","Jasmim","Vetiver"];

const graphDescriptions = {
  "Yoshua":"No método SOLAR, é utilizado como recurso de limpeza voltado a influências obsessivas no campo sutil, dentro do paradigma radiestésico.",
  "Código 21":"No método SOLAR, é empregado com a intenção de limpar, desbloquear e purificar registros deformados, trabalhando simbolicamente traumas, bloqueios e medos.",
  "Chama Trina":"No método SOLAR, é utilizada com a intenção de fortalecer, conectar e purificar, favorecendo uma nova visão orientada pelo amor, pela verdade, pelo belo e pelo bom, especialmente diante de medo, opressão, sensação de falta de saída e traumas.",
  "Desembaraçador de relacionamentos":"Selecionado como apoio radiestésico para trabalhar simbolicamente emaranhamentos e vínculos relacionais que se pretende reorganizar ou liberar.",
  "Desembaraçador material":"Selecionado como apoio radiestésico para questões percebidas como emaranhadas no plano material.",
  "Desimpregnador":"Selecionado com a intenção radiestésica de limpeza de impregnações e resíduos energéticos.",
  "Escudo protetor":"Selecionado com intenção de proteção e estabilização do campo dentro da prática radiestésica.",
  "Harmonia":"Selecionado para favorecer simbolicamente harmonização e equilíbrio do campo.",
  "Harmonia familiar":"Selecionado para favorecer simbolicamente harmonização de dinâmicas familiares.",
  "Autoestima 5.7.3":"Selecionado como apoio ao trabalho radiestésico relacionado à autoestima.",
  "Antimagia":"Selecionado como recurso simbólico de neutralização/proteção diante de interferências percebidas no paradigma radiestésico.",
  "Flor da vida":"Geometria selecionada como suporte simbólico de harmonização e organização do campo.",
  "Vesica Piscis":"Geometria selecionada como suporte simbólico ao alinhamento e à integração.",
  "Triturador":"Selecionado como recurso radiestésico de desagregação simbólica de padrões ou cargas que se pretende desfazer.",
  "Alta vitalidade":"Selecionado como apoio radiestésico voltado simbolicamente à vitalidade do campo."
};

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
  $("chakraList").innerHTML=chakras.map(x=>choice("chakra",x)).join("");
  $("axisList").innerHTML=axes.map(x=>choice("eixo",x)).join("");
  $("protocolParts").innerHTML=parts.map((p,idx)=>`<details class="section"><summary><h2>${p.n}. ${p.title}</h2></summary>${Object.entries(p.groups).map(([g,items])=>`<div class="subgroup"><h3>${g}</h3><div class="choice-grid">${items.map(x=>choice("parte_"+(idx+1),x)).join("")}</div></div>`).join("")}</details>`).join("");
  $("holisticList").innerHTML=holistic.map(x=>choice("tratamento_holistico",x)).join("");
  $("oilList").innerHTML=oils.map(x=>choice("oleo",x)).join("");
}

function bovisSummary(){
  const rows=[];
  bovisFields.forEach(label=>{
    const k=safeName(label), a=val(k+"_inicial"), b=val(k+"_final");
    if(a||b) rows.push(`${label}: inicial ${a||"—"} U.B.; após sessão ${b||"—"} U.B.`);
  });
  return rows;
}

function generateReport(){
  const lines=[];
  lines.push("SOLAR — SISTEMA DE OBSERVAÇÃO, LIMPEZA E ALINHAMENTO PELA RADIESTESIA");
  lines.push("Matriz organizada por Rodrigo Bittencourt.");
  lines.push("");
  if(val("nome")) lines.push(`Cliente: ${val("nome")}`);
  if(val("nascimento")) lines.push(`Data de nascimento: ${fmtDate(val("nascimento"))}`);
  if(val("sessao")) lines.push(`Data da sessão: ${fmtDate(val("sessao"))}`);
  if(val("queixas")) lines.push(`Queixas principais / tema da sessão: ${val("queixas")}`);
  lines.push("");

  const b=bovisSummary();
  if(b.length){lines.push("BIÔMETRO DE BOVIS"); b.forEach(x=>lines.push("• "+x)); lines.push("");}

  const c=checked("chakra");
  if(c.length){lines.push("CHAKRAS ENVOLVIDOS"); lines.push(c.join(", ")+"."); lines.push("");}
  const e=checked("eixo");
  if(e.length){lines.push("EIXOS ATIVOS"); lines.push(e.join(", ")+"."); lines.push("");}

  parts.forEach((p,idx)=>{
    const arr=checked("parte_"+(idx+1));
    if(arr.length){
      lines.push(p.title.toUpperCase());
      arr.forEach(x=>lines.push("• "+x));
      if(idx===6){
        lines.push("");
        lines.push("Recursos selecionados:");
        arr.forEach(x=>lines.push(`• ${x}: ${graphDescriptions[x] || "Gráfico selecionado como recurso de tratamento dentro do protocolo radiestésico SOLAR. A indicação registra a escolha realizada na sessão, sem atribuição de efeito médico ou psicoterapêutico."}`));
      }
      lines.push("");
    }
  });

  const h=checked("tratamento_holistico").filter(x=>x!=="Outros");
  const oh=val("outro_tratamento_holistico");
  const det=val("detalhamento_terapeutica");
  if(h.length||oh||det){
    lines.push("OUTROS TRATAMENTOS HOLÍSTICOS");
    if(h.length) lines.push(`Terapias indicadas: ${h.join(", ")}.`);
    if(oh) lines.push(`Outros: ${oh}.`);
    if(val("quantidade_sessoes")) lines.push(`Quantidade de sessões: ${val("quantidade_sessoes")}.`);
    if(val("periodicidade")) lines.push(`Periodicidade: ${val("periodicidade")}.`);
    if(det) lines.push(`Observações e especificações terapêuticas: ${det}`);
    lines.push("");
  }

  const o=checked("oleo");
  if(o.length||val("outro_oleo")){
    lines.push("ÓLEOS ESSENCIAIS");
    if(o.length) lines.push(o.join(", ")+".");
    if(val("outro_oleo")) lines.push(`Outro / especificação: ${val("outro_oleo")}.`);
    lines.push("");
  }

  if(val("observacoes")){lines.push("OBSERVAÇÕES DA SESSÃO");lines.push(val("observacoes"));lines.push("");}
  if(val("tempo_tratamento")) lines.push(`Tempo de permanência / tratamento indicado: ${val("tempo_tratamento")}.`);
  if(val("nova_afericao")) lines.push(`Nova aferição sugerida para: ${fmtDate(val("nova_afericao"))}.`);
  if(val("tempo_tratamento")||val("nova_afericao")) lines.push("");

  lines.push("ORIENTAÇÃO");
  lines.push("A radiestesia, no contexto do SOLAR, é apresentada como prática integrativa de observação e organização simbólica/energética. As indicações deste relatório registram a leitura realizada na sessão e não constituem diagnóstico médico ou psicológico. O atendimento não substitui avaliação, acompanhamento ou tratamento médico, psicológico, psiquiátrico ou de outros profissionais de saúde quando necessários.");
  lines.push("");
  lines.push("Se fizer sentido para o seu processo, a leitura pode ser retomada em sessões posteriores para acompanhar os aspectos observados e os recursos selecionados. Também podem ser considerados, de forma complementar e conforme sua escolha, atendimentos de Reiki e Tarô.");
  lines.push("");
  lines.push("Rodrigo Bittencourt");
  lines.push("SOLAR — Sistema de observação, limpeza e alinhamento pela radiestesia");

  const text=lines.join("\n");
  $("integrativeReport").value=text;
  $("reportVisualView").innerHTML=`<article class="visual-report"><h2>SOLAR</h2><p class="subtitle">Sistema de observação, limpeza e alinhamento pela radiestesia</p><div class="multiline">${escapeHtml(text)}</div></article>`;
  saveLocal();
  return text;
}

function collect(){
  const data={};
  document.querySelectorAll("#sessionForm [name]").forEach(el=>{
    if(el.type==="checkbox"){
      if(!data[el.name])data[el.name]=[];
      if(el.checked)data[el.name].push(el.value);
    } else data[el.name]=el.value;
  });
  return data;
}
function apply(data){
  document.querySelectorAll("#sessionForm [name]").forEach(el=>{
    if(el.type==="checkbox") el.checked=Array.isArray(data[el.name])&&data[el.name].includes(el.value);
    else if(data[el.name]!==undefined) el.value=data[el.name];
  });
  if(val("relatorio_integrativo")) $("reportVisualView").innerHTML=`<article class="visual-report"><h2>SOLAR</h2><div class="multiline">${escapeHtml(val("relatorio_integrativo"))}</div></article>`;
}
function saveLocal(){localStorage.setItem("solar_form_data",JSON.stringify(collect()));}
function loadLocal(){const raw=localStorage.getItem("solar_form_data");if(raw)apply(JSON.parse(raw));}
function downloadData(){
  const blob=new Blob([JSON.stringify(collect(),null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`SOLAR_${safeName(val("nome")||"sessao")}.json`;a.click();URL.revokeObjectURL(a.href);
}
function printReport(){generateReport();document.body.classList.add("print-report-only");setTimeout(()=>{window.print();document.body.classList.remove("print-report-only");},100);}
function clearAll(){if(confirm("Limpar todos os campos desta sessão?")){document.getElementById("sessionForm").reset();localStorage.removeItem("solar_form_data");$("reportVisualView").innerHTML="";}}

render();
document.getElementById("sessionForm").addEventListener("input",saveLocal);
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
