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
const oils = ["Gerânio","Bergamota","Alecrim","Rosa","Tea Tree","Lavanda","Esclareia","Canela","Anis Estrelado","Laranja","Ylang Ylang","Cedro","Artemísia","Pimenta Rosa","Olíbano","Hortelã Pimenta","Melaleuca","Limão","Eucalipto","Camomila","Sândalo","Copaíba","Sálvia","Grapefruit","Lemongrass","Manjericão","Patchouli","Tomilho","Erva Doce","Pinho","Gengibre","Jasmim","Vetiver","Outro"];

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
  $("chakraList").innerHTML=chakras.map(x=>choice("chakra",x)).join("")+`<label class="field other-detail"><span>Especificar outro</span><input name="outro_chakra"></label>`;
  $("axisList").innerHTML=axes.map(x=>choice("eixo",x)).join("")+choice("eixo","Outro")+`<label class="field other-detail"><span>Especificar outro</span><input name="outro_eixo"></label>`;
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

function htmlTable(title, rows){
  if(!rows || !rows.length) return "";
  return `<section class="report-table-section">
    <h3>${escapeHtml(title)}</h3>
    <div class="table-wrap">
      <table class="report-table">
        <thead><tr><th>Item</th><th>Descrição / indicação</th></tr></thead>
        <tbody>${rows.map(r=>`<tr><td>${escapeHtml(r.name ?? r[0] ?? "")}</td><td>${escapeHtml(r.description ?? r[1] ?? "")}</td></tr>`).join("")}</tbody>
      </table>
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
  visual.push(`<article class="visual-report"><header class="report-header"><h2>SOLAR</h2><p class="subtitle">Sistema de observação, limpeza e alinhamento pela radiestesia</p></header>`);

  if(val("nome")||val("nascimento")||val("sessao")||val("queixas")){
    visual.push(htmlTable("Identificação",[
      ...(val("nome")?[{name:"Cliente",description:val("nome")}]:[]),
      ...(val("nascimento")?[{name:"Data de nascimento",description:fmtDate(val("nascimento"))}]:[]),
      ...(val("sessao")?[{name:"Data da sessão",description:fmtDate(val("sessao"))}]:[]),
      ...(val("queixas")?[{name:"Queixas / tema",description:val("queixas")}]:[])
    ]));
  }

  visual.push(`<section class="diagnosis-intro"><h3>Leitura diagnóstica</h3><p>${escapeHtml(diagnosisText)}</p></section>`);

  if(b.length){
    visual.push(htmlTable("Biômetro de Bovis",b.map(x=>({
      name:x.split(":")[0],
      description:x.substring(x.indexOf(":")+1).trim()
    }))));
  }

  if(c.length||val("outro_chakra")){
    visual.push(htmlTable("Chakras envolvidos",[
      ...c.filter(x=>x!=="Outro").map(x=>({name:x,description:"Identificado como envolvido na leitura radiestésica da sessão."})),
      ...(val("outro_chakra")?[{name:"Outro",description:val("outro_chakra")}]:[])
    ]));
  }

  if(e.length||val("outro_eixo")){
    visual.push(htmlTable("Eixos ativos",[
      ...e.filter(x=>x!=="Outro").map(x=>({name:x,description:"Eixo identificado como ativo na leitura radiestésica da sessão."})),
      ...(val("outro_eixo")?[{name:"Outro",description:val("outro_eixo")}]:[])
    ]));
  }

  // DIAGNÓSTICOS — somente Partes 1 a 6.
  parts.slice(0,6).forEach((p,idx)=>{
    const arr=checked("parte_"+(idx+1)).filter(x=>x!=="Outro");
    const rows=arr.map(x=>({
      name:x,
      description:"Aspecto identificado durante a leitura radiestésica da sessão."
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
    description:graphDescriptions[x] || "Gráfico selecionado como recurso de tratamento dentro do protocolo radiestésico SOLAR."
  }));
  graphRows.push(...collectOtherPart(6,treatmentPart));
  if(graphRows.length){
    visual.push(`<section class="treatment-block">${htmlTable("Parte 7 — Tratamento com geometrias sagradas",graphRows)}</section>`);
  }

  const namedHol=checked("tratamento_holistico").filter(x=>x!=="Outros");
  const holRows=namedHol.map(x=>({
    name:x,
    description:"Tratamento complementar identificado na leitura."
  }));
  if(val("outro_tratamento_holistico")){
    holRows.push({name:"Outro",description:val("outro_tratamento_holistico")});
  }
  if(holRows.length){
    visual.push(`<section class="treatment-block">${htmlTable("Outros tratamentos holísticos",holRows)}</section>`);
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
      description:bachDescriptions[x] || "Floral selecionado na leitura."
    }));
    visual.push(`<section class="treatment-block">${htmlTable("Florais de Bach",floralRows)}</section>`);
  }

  const oilRows=o.map(x=>({
    name:x,
    description:oilDescriptions[x] || "Óleo essencial selecionado."
  }));
  if(val("outro_oleo")){
    oilRows.push({name:"Outro",description:val("outro_oleo")});
  }
  if(oilRows.length){
    visual.push(`<section class="treatment-block">${htmlTable("Aromaterapia",oilRows)}</section>`);
  }

  if(tarot.length||val("outro_taro")){
    const tarotRows=tarot.map(x=>({
      name:x,
      description:tarotDescriptions[x] || "Arcano selecionado."
    }));
    if(val("outro_taro")){
      tarotRows.push({name:"Outro / observação",description:val("outro_taro")});
    }
    visual.push(`<section class="treatment-block">${htmlTable("Tarô — Arcanos Maiores",tarotRows)}
      <p class="report-source"><strong>Fonte das descrições do Tarô:</strong> Clube do Tarô. Síntese elaborada a partir de conteúdos interpretativos do portal. ${escapeHtml(tarotSource.replace("Clube do Tarô — ",""))}</p>
    </section>`);
  }

  if(val("observacoes_complementares")){
    visual.push(htmlTable("Observações complementares",[
      {name:"Registro",description:val("observacoes_complementares")}
    ]));
  }

  if(val("observacoes")){
    visual.push(htmlTable("Observações da sessão",[
      {name:"Registro",description:val("observacoes")}
    ]));
  }

  if(val("testemunhos")||val("comando")||val("tempo_tratamento")||val("nova_afericao")){
    const rows=[];
    if(val("testemunhos")) rows.push({name:"Testemunho(s) utilizado(s)",description:val("testemunhos")});
    if(val("comando")) rows.push({name:"Comando / intenção",description:val("comando")});
    if(val("tempo_tratamento")) rows.push({name:"Tempo de permanência / tratamento",description:val("tempo_tratamento")});
    if(val("nova_afericao")) rows.push({name:"Nova aferição",description:fmtDate(val("nova_afericao"))});
    visual.push(htmlTable("Registro da sessão",rows));
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
  return data;
}
function apply(data){
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