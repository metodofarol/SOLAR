# Registro de Sessão Terapêutica

Aplicação estática em HTML, CSS e JavaScript para registrar uma sessão radiônica.

## Recursos

- Identificação com nome, terapeuta, data de nascimento e data da sessão.
- Campo de tema da sessão / questão principal, usado somente quando houver base para interpretação integrativa.
- Tabela Bovis para os campos físico, mental, emocional, espiritual, vitalidade geral, ambiente pessoal e ambiente de trabalho, com medição inicial e medição após a sessão.
- Régua descritiva Bovis com legenda resumida em fonte pequena e faixas de referência, considerando 6.000 U.B. ou mais como saudável.
- Caixas do formulário recolhíveis e expansíveis.
- Seções fechadas por padrão, para navegação mais compacta.
- Seleção de Chakra, Campo do desequilíbrio e Tipo de limite.
- Boneco dos chakras com cores correspondentes, marcação de desequilíbrio e balões explicativos.
- Lógica dinâmica Campo -> Limite -> Causa.
- Causas clicáveis com modal explicativo.
- Avisos de clique ou passagem do mouse nos itens com informação adicional.
- Textos explicativos condensados para causas dos campos emocional e mental.
- Tratamento radiônico com geometrias sagradas: Harmonia, Limpeza, Proteção, Psicoemocional e Vitalidade, com popups explicativos e imagens ilustrativas.
- Outros tratamentos holísticos identificados pela radiestesia, incluindo Tarô e a opção **Outros**, com campo livre para especificar outro tratamento e área de **Observações e especificações terapêuticas**.
- Seção Despertar.
- Registro da sessão com testemunhos, intenção, observações, tempo de tratamento e nova aferição.
- Relatório da sessão, editável e dividido em seções.
- Prévia visual do relatório para o cliente, com boneco dos chakras, resumo integrado de chakra, campo e causa, além de imagens e descrições dos gráficos selecionados.
- Avaliação Bovis no relatório em tabela simples e compacta, com medição inicial, medição após a sessão e legenda resumida dos padrões de saúde.
- Card institucional ao final do relatório, apresentando radiestesia, Reiki, Tarô, Escrita Criativa/Terapêutica e a recomendação de reconsulta/reenergização em 28 dias.
- Opção para salvar o relatório em PDF.
- Salvamento automático no navegador para evitar perda de dados.
- Opção para baixar e carregar os dados preenchidos em arquivo `.json`.
- Carregamento compatível com arquivos salvos em versões anteriores do formulário, quando os campos puderem ser reconhecidos.
- Opção para salvar o formulário completo em PDF e o relatório/resumo em PDF separado.
- Botões para limpar e imprimir/salvar em PDF.
- Layout responsivo para celular, tablet e desktop.

## Como usar

Abra o arquivo `index.html` no navegador. Para salvar em PDF, use o botão **Imprimir / salvar PDF** e escolha a opção de salvar como PDF no navegador.

## Publicação no GitHub Pages

Envie `index.html`, `styles.css`, `app.js`, `README.md`, `.gitignore` e `vercel.json` para um repositório no GitHub. Depois, ative o GitHub Pages usando a branch principal e a pasta raiz.

Inclua também a pasta `assets`, pois ela contém a imagem usada na capa do relatório.

## Observação

Os textos explicativos foram condensados a partir do material fornecido para organização do formulário. Antes de publicar publicamente, verifique se há alguma restrição de uso do conteúdo original.
