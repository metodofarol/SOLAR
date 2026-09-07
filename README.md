# SOLAR — Formulário de Registro de Sessão

**SOLAR — Sistema de observação, limpeza e alinhamento pela radiestesia.**  
Matriz organizada por Rodrigo Bittencourt.

Esta versão transforma os biômetros do protocolo de divórcio energético em formulário digital e mantém o Biômetro de Bovis da versão anterior.

## Estrutura
1. Identificação
2. Biômetro de Bovis
3. Chakras envolvidos
4. Eixos ativos
5. Parte 1 — Vínculos residuais
6. Parte 2 — Feridas emocionais ativas
7. Parte 3 — Pendências e não encerramento
8. Parte 4 — Mecanismos de ativação do vínculo e do sofrimento
9. Parte 5 — Vínculos energéticos
10. Parte 6 — Barreiras à disponibilidade afetiva
11. Parte 7 — Tratamento com geometrias sagradas
12. Outros tratamentos holísticos
13. Óleos essenciais
14. Registro da sessão
15. Relatório da sessão

O relatório mostra somente os itens selecionados e inclui descrições dos gráficos de tratamento quando disponíveis.

## Publicação
Substitua no repositório GitHub os arquivos `index.html`, `app.js`, `styles.css`, `README.md` e `vercel.json`.  
Se o Vercel estiver conectado à branch principal desse repositório, um novo commit deve iniciar um novo deploy.

## Observação
A linguagem do relatório enquadra a radiestesia como prática integrativa/simbólica e não como diagnóstico médico ou psicológico.


## Revisão editorial do relatório
- Florais de Bach tratados como sistema fechado: removida a opção **Outro**.
- Relatório visual sem duplicação textual: mantém apenas introdução diagnóstica, títulos e quadros/tabelas.
- Tarô com descrições ampliadas; a fonte Clube do Tarô aparece uma única vez, abaixo da tabela.
- A seção **Leitura diagnóstica** aparece antes dos quadros e sintetiza os eixos observados sem repetir todos os itens.


## Correção V3.1
- Corrigida a geração das tabelas do relatório.
- O botão **Gerar / atualizar relatório** volta a funcionar.
- O relatório passa a se atualizar automaticamente durante o preenchimento e ao carregar dados salvos.


## Correção V3.2
- Corrigida a função ausente que impedia as Partes 1–6 de aparecerem no relatório.
- O relatório agora é organizado explicitamente em **diagnósticos (Partes 1–6)** e **tratamentos (Parte 7 e terapias complementares)**.
- Mantidos e reforçados os quadros editoriais dos tratamentos.
- Florais de Bach agora são um sistema fechado: removidas todas as opções e campos “Outro”.
- O relatório continua sem repetição textual anterior aos quadros.


## V3.3
Removidos os campos Outro e Especificar outro das seções 3 (Chakras envolvidos) e 4 (Eixos ativos).


## V3.4 — descrições
O relatório passa a explicar chakras, eixos ativos e cada item diagnóstico das Partes 1–6, preservando as descrições específicas dos gráficos e o padrão editorial em tabelas.


## V3.5 — integração final do relatório
- Florais de Bach: cada floral marcado gera linha própria com indicação e potencial positivo, usando a base textual fornecida pelo usuário.
- Tarô: cada Arcano Maior marcado gera linha própria com descrição interpretativa ampliada, sintetizada a partir de Kira Mayos (2017, p. 14–19).
- A fonte do Tarô aparece uma única vez abaixo da tabela.
- O relatório continua condicionado ao que foi efetivamente marcado no formulário.
- Mantidos diagnósticos, chakras, eixos, gráficos, tratamentos, aromaterapia e observações no padrão editorial de títulos e quadros.

## V3.6 — atualização consolidada
- Integra todas as correções anteriores do relatório.
- Florais de Bach: 38 florais, sistema fechado, com indicação e potencial positivo conforme a base fornecida.
- Tarô: 22 Arcanos Maiores, descrições ampliadas e fonte bibliográfica única abaixo da tabela.
- Aromaterapia: descrições atualizadas a partir dos guias fornecidos; nomes equivalentes foram normalizados e Melaleuca/Tea Tree foi unificada.
- Para óleos presentes no formulário mas sem descrição nos documentos fornecidos, o relatório informa que a base não trouxe indicação específica, sem inventar conteúdo.
- Seção 17 removida do formulário.
- Mantido salvamento automático e geração seletiva do relatório conforme os itens marcados.

- Correção final V3.6: removido integralmente o antigo **17. Registro da sessão**; o relatório passa a ser a seção 17.


## V3.7 — base de Aromaterapia revisada
- Artemísia removida definitivamente; Lavanda permanece como Lavandula angustifolia.
- Sálvia comum removida; permanece apenas Sálvia Esclareia (Salvia sclarea).
- Pinho especificado como Pinho-silvestre (Pinus sylvestris).
- Tea Tree/Melaleuca unificados em uma única opção.
- Nomes botânicos adicionados para reduzir ambiguidades.
- Descrições dos óleos ausentes nos guias originais foram complementadas com literatura científica e linguagem conservadora.
- O relatório continua exibindo apenas os óleos efetivamente marcados.


## V3.8 — descrições dos gráficos no relatório
- Banco de dados dos gráficos atualizado com as descrições fornecidas para o método.
- Cada gráfico marcado no formulário gera sua própria descrição no relatório.
- A descrição reúne “Atuação” e “Uso no protocolo”.
- Gráficos não marcados não aparecem no relatório.
- Código 21 e Chama Trina preservam explicitamente a referência ao Método RAI.
- Yoshua preserva a definição adotada no método para limpeza de obsessões e influências espirituais.

## V3.9.2 — correção funcional crítica
- Corrigido conflito JavaScript entre `catalogos.js` e `app.js`.
- O conflito impedia `render()` de executar no navegador e, por isso, os campos dinâmicos do formulário ficavam vazios.
- Restaurada a renderização dos campos de Bovis, Chakras, Eixos, Partes 1–7, tratamentos holísticos, Florais, Aromaterapia e Tarô.
- Mantidas as melhorias do relatório e as descrições dos gráficos.


## V3.9.3 — descrições individualizadas e relatório editável
- Descrições das Partes 1–6 substituídas por banco individualizado baseado em `Descrição Biometros Divorcio.pdf`.
- Eliminados os textos genéricos repetitivos para os radiantes.
- Quando não existe descrição no banco, a célula fica em branco.
- Células de descrição do relatório são editáveis diretamente.
- Edições manuais do relatório são salvas automaticamente no navegador e incluídas no arquivo JSON de backup.
- Cabeçalho atualizado para `SOLAR - Rodrigo Bittencourt`.
- Mantidas as descrições específicas dos gráficos, florais, óleos, chakras, eixos e tarô quando disponíveis.


## V3.9.4 - capa do relatório
- Incorporada a capa fornecida em `capa.pdf` como `capa-relatorio.png`.
- A capa aparece somente ao usar **Salvar relatório em PDF** / impressão do relatório.
- O formulário na tela permanece sem a capa.
- O conteúdo do relatório começa em nova página após a capa.
- Mantidas as funcionalidades e correções da V3.9.3.
