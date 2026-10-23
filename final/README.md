# Aula 02 — final

O front-end funciona como SPA.

Ainda não existe servidor.

Os dados ficam em memória e desaparecem ao atualizar a página.

Atividade Complementar — Evolução do HelpDesk Web

Desenvolvimento Web III — HelpDesk Web

A atividade será uma evolução do projeto HelpDesk Web desenvolvido em aula. Atualmente, o sistema já possui uma SPA em JavaScript, um array de chamados com id, titulo, descricao, prioridade e status, além das telas de Dashboard, listagem de chamados e cadastro de novo chamado. app

Na tela de chamados, o projeto atualmente apresenta apenas ID, Título, Prioridade e Status. app O objetivo agora é fazer com que os alunos evoluam o projeto existente, trabalhando manipulação de arrays, objetos, funções, eventos, DOM, Bootstrap e regras de negócio. Isso também prepara o projeto para as próximas etapas de Desenvolvimento Web III, cujo PPC prevê desenvolvimento de aplicações web, back-end, arquitetura e versionamento. PPC_DSM_FrancodaRocha_extensao_…

Atividades obrigatórias

1. Tornar a prioridade dos chamados mais visual e interativa. Na tela Chamados, a prioridade não deverá mais aparecer apenas como texto simples. Quando um chamado possuir prioridade Alta, deverá aparecer uma label/badge vermelha e piscando, chamando a atenção do usuário. Para prioridade Média, utilizar uma identificação visual diferente, como amarelo ou laranja. Para prioridade Baixa, utilizar outra identificação, como verde. O efeito de piscar deverá ser criado pelos alunos utilizando CSS.

2. Criar um array específico para as prioridades. Atualmente, as opções Baixa, Média e Alta estão escritas diretamente dentro do <select>. app Isso deverá ser alterado. Os alunos deverão criar um array JavaScript, por exemplo com as prioridades disponíveis, e o <select> deverá ser montado dinamicamente a partir desse array. Não será aceito manter as opções de prioridade escritas manualmente no HTML gerado pelo formulário. A ideia é que, se futuramente for adicionada uma nova prioridade ao array, como "Urgente", ela automaticamente possa aparecer no formulário sem alterar manualmente cada <option>.

3. Adicionar uma coluna de ações na tela de chamados. A tabela deverá possuir uma nova coluna chamada Ações. Nela, cada chamado poderá possuir botões de acordo com sua situação. Para chamados ainda não encerrados, deverá existir pelo menos a opção Encerrar chamado. Chamados já encerrados não deverão permitir um novo encerramento.

4. Criar uma tela para encerramento do chamado. Ao clicar em Encerrar chamado, o sistema deverá abrir uma nova tela da SPA mostrando as

principais informações daquele chamado, como número, título, descrição, prioridade e status atual. Nessa tela deverá existir obrigatoriamente um campo de texto chamado, por exemplo, Solução realizada, Procedimento realizado ou O que foi feito?. O técnico deverá informar o procedimento utilizado para resolver o problema antes de encerrar o chamado.

5. Guardar a solução dentro do próprio objeto do chamado. Quando o chamado for encerrado, deverá ser acrescentada ao objeto uma informação contendo o que foi realizado. Por exemplo, além de id, titulo, descricao, prioridade e status, o objeto poderá passar a possuir uma propriedade como solucao. O status deverá ser alterado automaticamente para Encerrado. Atualmente, novos chamados são adicionados ao array com o status inicial "Aberto", portanto os alunos deverão localizar esse objeto e implementar a alteração de estado corretamente. app

6. Criar uma tela para visualizar os detalhes do chamado. Na própria listagem deverá existir uma opção Visualizar. Ao clicar nela, apresentar uma tela com todas as informações daquele chamado. Se o chamado estiver encerrado, também deverá ser apresentada a solução informada durante seu encerramento. Dessa forma, o usuário poderá consultar não apenas que o chamado foi encerrado, mas também como o problema foi resolvido.

7. Melhorar visualmente os status. Assim como a prioridade, o status também deverá possuir identificação visual. Por exemplo, Aberto, Em atendimento e Encerrado devem ser apresentados utilizando badges ou labels diferentes. O aluno deverá decidir as cores, desde que seja possível identificar claramente cada situação.

8. Atualizar o Dashboard. O Dashboard atualmente calcula a quantidade de chamados abertos utilizando filter() e apresenta o total de chamados e os chamados abertos. app Ele deverá ser ampliado para apresentar pelo menos Total de chamados, Chamados abertos, Chamados em atendimento, Chamados encerrados e Chamados de prioridade Alta. Os valores deverão ser calculados a partir do array, não poderão ser números fixos escritos diretamente na página.

9. Criar validações. Um chamado não poderá ser encerrado sem informar o que foi realizado. Caso o usuário tente concluir o encerramento com esse campo vazio, o sistema deverá apresentar uma mensagem informando que o preenchimento é obrigatório. Também deverão permanecer as validações existentes no cadastro do chamado.

10. Manter o projeto funcionando como SPA. Não deverão ser criados vários arquivos HTML para representar cada tela. O projeto atualmente utiliza data-view e JavaScript para substituir o conteúdo da <div id="app">, mantendo o comportamento de uma Single Page Application. index As novas telas de Detalhes do chamado e Encerrar chamado deverão seguir a mesma ideia.

Exemplo de comportamento esperado

Imagine que o chamado seja:

#1 — Computador não liga

Prioridade: ALTA

Status: Aberto

Na listagem, a palavra ALTA deverá aparecer destacada em uma label vermelha piscando.

Ao clicar em Encerrar chamado, o aluno deverá apresentar algo semelhante a:

Chamado: #1 Problema: Computador não liga Descrição: O computador não apresenta sinal de energia. Prioridade: Alta Status atual: Aberto

O que foi feito?

[ Foi realizada a troca da fonte de alimentação do computador. ]

[Confirmar encerramento]

Depois da confirmação, o objeto deverá passar a representar conceitualmente algo como:

{

id: 1,

titulo: "Computador não liga",

descricao: "O computador não apresenta sinal de energia.",

prioridade: "Alta",

status: "Encerrado",

solucao: "Foi realizada a troca da fonte de alimentação do computador."

}

Não é necessário copiar exatamente essa estrutura; o aluno pode propor outra solução, desde que a informação do encerramento fique relacionada ao chamado.

Importante

Nesta etapa, não é necessário banco de dados. O projeto atual ainda trabalha somente com dados armazenados em memória, que são perdidos quando a página é atualizada. README Portanto, o objetivo desta atividade é praticar bem a manipulação dos objetos e arrays antes de avançarmos para persistência, API e back-end.

Entrega

O aluno deverá entregar o link do repositório Git contendo o projeto atualizado. O projeto deverá abrir e funcionar sem erros, mantendo as funcionalidades anteriores e acrescentando todos os requisitos desta atividade.

Além dos requisitos obrigatórios, será considerada positivamente a criatividade na interface, desde que o aluno não complique desnecessariamente o projeto. O objetivo principal é demonstrar que compreendeu como utilizar arrays, objetos, map(), filter(), eventos, funções, manipulação do DOM e atualização dinâmica de uma SPA.