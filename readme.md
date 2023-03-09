# HTML & CSS  
Curso de HTML & CSS da [Origamid](https://www.origamid.com/curso/html-e-css-para-iniciantes/)  

⚠️ _observação: este documento contém apenas algumas anotações e dicas do curso_  

&nbsp;
## BROWSER
[Stat Counter](https://gs.statcounter.com/) é um site com estatísticas globais de uso do browser, mostrando qual o mais utilizado e plataforma mais utilizada.  

[Can I Use](https://caniuse.com/) é um site onde é possível encontrar onde foram implementadas novas tecnologias e recursos.  

### ESTILOS DO BROWSER
Algumas soluções foram criadas para lidar com os estilos iniciais. O principal objetivo delas é reduzir a inconsistência entre os browsers.

[Reset](https://meyerweb.com/eric/tools/css/reset/) remove parte dos estilos iniciais  

[Normalize](https://necolas.github.io/normalize.css/) Normaliza os estilos iniciais entre os browsers sem remover os mesmos.  

[Reboot](https://raw.githubusercontent.com/twbs/bootstrap/main/dist/css/bootstrap-reboot.css) é uma mistura de Reset e Normalize utilizada pelo Bootstrap.  

&nbsp;
## DOCUMENTAÇÃO
- Mozilla  
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element  
    https://developer.mozilla.org/en-US/docs/Web/CSS/Reference  

- W3C  
    https://www.w3.org/TR/  

&nbsp;
## SEMÂNTICA
A escrita de um documento semântico, além de dar sentido ao conteúdo, beneficia principalmente leitores de tela (acessibilidade) e leitores de códigos (robôs como o do Google).  

- Acessibilidade  
    Leitores de tela (JAWS, NVDA, VoiceOver) utilizam as tags para a navegação e compreensão do conteúdo. Interfaces de voz estão cada vez mais presentes.  
    - Pesquisa: Desde 2009 a WebAIM vêm fazendo pesquisas com usuários de leitores de tela. https://webaim.org/projects/screenreadersurvey9/  
    
    - Headings: A navegação pelos cabeçalhos (h1, h2, h3) é um dos principais métodos utilizados para procurar conteúdo na página.  
    
    - Landmarks: Os pontos de referência (nav, main) das páginas são utilizadas por mais de 75% dos usuários para navegar pelo conteúdo.

- Browsers e Funcionalidades  
    Define um estilo padrão para o conteúdo, mesmo sem o CSS. Facilita a organização do conteúdo em browsers que oferecem modo leitura.  

- Indexadores e Máquina  
    Facilita o trabalho de indexadores como o robô do Google a identificar o conteúdo do seu site.  

### LANDMARKS  
Tags que marcam pontos de referência (landmarks) foram introduzidas no lançamento do HTML5.  

#### `<main>`  
Marca o conteúdo principal da página.  
- **Observação**: Utilize uma por página.  

#### `<nav>`  
Marca um bloco de navegação.  
- **Exemplos**: Geralmente utilizado para a navegação primária e secundária do site.  
- **Observação**: Evite o uso de diversas tags `<nav>`, use apenas para a navegação essencial.  

O uso mais comum de listas é na marcação de blocos de navegação, pois um menu é uma lista de links.  

Não é obrigatório o uso de listas para criar uma navegação. Uma discussão sobre o assunto gerou os pontos positivos e negativos do uso sem listas, a conclusão foi de que com listas seria o ideal.  
https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/  
https://css-tricks.com/wrapup-of-navigation-in-lists/

#### `<article>`  
Representa uma região do site que é autoexplicativa (não precisa do restante do site para fazer sentido). Geralmente deve conter um título (h's).  
- **Exemplos**: Lista de produtos do site, um artigo, post na rede social e outros.  
- **aria-label**: Título da região visualmente escondido, mas lido pelo leitor de tela.  
- **aria-labelledby**: Caso o título exista na tela, marque o mesmo com um `id` e use este atributo para criar uma relação entre eles.  
- **Observação**: Oficialmente não cria uma landmark, mas muitos leitores de tela utilizam como referência para marcar regiões do site. A tag é até mais consistente do que a `<section>` para marcar regiões do site.  
https://www.smashingmagazine.com/2020/01/html5-article-section/  

#### `<section>`  
Pode ser utilizada para agrupar o conteúdo do site em diferentes regiões. Geralmente o conteúdo necessita do seu contexto para ser compreendido.
- **aria-label**: Utiliza-se deste atributo para criar uma região do site.
- **Observação**: O `<h1>` é impactado em termos visuais quando utilizado na `<section>`. A `<section>` foi criada para melhor lidar com os headings: https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html  

#### `<aside>`  
Utilizada para marcar conteúdo complementar ao principal do site.
- **Exemplos**: Lista de posts mais visitados, informações extras como a descrição de um termo usado no artigo e outros.  

#### `<header>`  
Marca o cabeçalho do site (banner), onde geralmente estão presentes a marca, navegação do site e as vezes uma informação introdutória.  
- **Exemplos**: Pode também ser utilizada para marcar o cabeçalho de regiões como o título de um artigo, data, autor e outras informações.  
- **Observação**: Apenas cria uma landmark se não estiver dentro de `<main>`, `<section>`, `<article>` ou `<aside>`.  

#### `<footer>`  
Marca o rodapé do site. Geralmente contém informação sobre os direitos autorias, quem escreveu e links para documentos relacionados.
- **Observação**: Apenas cria uma landmark se não estiver dentro de `<main>`, `<section>`, `<article>` ou `<aside>`.  

#### `<img>`  
Utilizada para adicionarmos imagens à nossa página. o Atributo `alt` é um texto alternativo que será lido por leitores de tela (acessibilidade), robôs e que irá aparecer caso a imagem não carregue.  
- **Observação**: Para manter uma boa resolução, utilize imagens com cerca de duas vezes o tamanho máximo que ela irá ocupar na tela (em pixels).  
- **Dica**: Não é necessário carregar imagens muito grandes se não serão utilizadas neste formato. [Squoosh](https://squoosh.app/) é uma ferramenta para otimizar e reduzir o tamanho da imagem mantendo qualidade.  

&nbsp;  
## CSS POSICIONAMENTO  
### GRID  
Com o `display: grid;` é possível definirm colunas e linhas para organizar os elementos que estiverem dentro do grid.
- `fr`  
    Uma unidade fracionária que terá como objetivo distribuir o espaço restante, entre os elementos do grid.
#### Guia CSS Grid Layout - align e justify  
https://www.origamid.com/projetos/grid/  
https://www.origamid.com/projetos/css-grid-layout-guia-completo/  
https://css-tricks.com/snippets/css/complete-guide-grid/  

### FLEXBOX  
Com o `display: flex;` os filhos passam a ter um tamanho flexível e ficam um ao lado do outro.  
- `flex-grow: 1;`  
    Se esse elemento deve crescer para ocupar o espaço vazio. O `0` impede o crescimento, e valores maiores que `0` funcionam como a unidade `fr` do css grid.  
- `flex-basis: 200px;`  
    Valor inicial antes de distribuir o espaço em branco.  
- `flex-shrink: 0;`  
    Caso exista um valor de base, o flex-shrink irá determinar se esse valor pode ser reduzido ou não. `0` significa que ele não pode ser reduzido.  
- `flex: 1;`  
    Atalho para `flex-grow: 1;`, `flex-shrink: 1;` `e flex-basis: 0;`  

### GRID VS FLEX  
Usar ambos no layout, pois resolvem problemas diferentes. O grid dá controle em todos os eixos e o flexbox apenas no total de itens por linha.  

&nbsp;  
## RESPONSIVO  
### Tipo de tela  
Levar em consideração a operação do site (mobile e desktop).  

### Tamanhos  
Unidades relativas como %, vw, fr são mais utilizadas.  

### Media Queries  
Código será ativado de acordo com o tamanho da tela. Alterar o layout, esconder/exibir itens e adicionar funcionalidades.  
Existem outras condições, como por exemplo se uma propriedade é suportada ou não pelo browser, ou se o CSS está sendo aplicado para tela ou impressão. https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries  

### Flexbox e Grid  
Manipular o flexbox e o grid para adaptar o conteúdo.  
- `repeat(auto-fit)` gera o total de colunas que forem necessárias para preencher a área.  
- `minmax(px, fr)` redimensiona o elemento de acordo com as medidas mínimas e máximas.  
- exemplo: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`  

### object-fit  
Preenche o elemento pai com a imagem, sem distorcer a mesma. Similar ao `background-size: cover;`  
- `object-position` posiciona o objeto, indicando como ele deve ser cortado: top, left, top, center. Similar ao `background-position`  

&nbsp;  
## CSS ESPECIFICIDADE  
A ordem dos elementos declarados só importa se eles possuírem a mesma especificidade. Caso contrário o seletor mais específico irá prevalecer.  
- **id**: Primeiro nível (1, 0, 0)  
- **classes, atributos e pseudo classes**: Segundo nível (0, 1, 0)  
- **elementos e pseudo elementos**: Terceiro nível (0, 0, 1)  
```html
<html>
    <head>
        <style>
            .titulo { color: tomato; } /* (0, 1, 0) */
            #produtos { color: lightgreen; } /* (1, 0, 0) */
            #intro #produtos.titulo { color: violet; } /* (2, 1, 0) */
            #intro #produtos { color: blueviolet; } /* (2, 0, 0) */
            html body section h2.titulo { border-left: 8px solid lightgreen; } /* (0, 1, 4) */
            body section h2.titulo { border-left: 8px solid lightsalmon; } /* (0, 1, 3) */
            #servicos { border-left: 8px solid lightskyblue; } /* (1, 0, 0) */
        </style>
    </head>
    <body>
        <section id="intro">
        <h2 id="produtos" class="titulo">Produtos</h2>
        <h2 id="servicos" class="titulo">Serviços</h2>
        </section>
    </body>
<html>
```

&nbsp;  
## CSS PROPRIEDADES CUSTOMIZADAS  
Também conhecidas como variáveis css (custom properties), permite definir valores no CSS que podem ser reutilizados no código.  
A propriedade é herdada pelos elementos filhos. É comum definir as mesmas nos elementos `:root`, assim é possível acessar a propriedade em todos os elementos do site.  
**Definição**: `--roxo: #caf`  
**Utilização**: `var(--roxo)`  

### prefers-color-scheme  
A `@media (prefers-color-scheme)` irá executar o código css conforme a preferência de tema do usuário, com relação ao modo escuro (dark) ou claro (light).  
```html
<html>
    <head>
        <style>
            :root {
                --fundo: #fff;
                --texto-1: #111;
                --texto-2: #444;
            }

            @media (prefers-color-scheme: dark) {
                :root {
                    --fundo: #222;
                    --texto-1: #eee;
                    --texto-2: #bbb;
                }
            }

            body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            background: var(--fundo);
            }

            h1 {
            color: var(--texto-1);
            }

            p {
            color: var(--texto-2);
            }
        </style>
    </head>
    <body>
        <h1>Nossos Produtos</h1>
        <p>A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
        equipada com os melhores acessórios da marca.</p>
    </body>
<html>
```