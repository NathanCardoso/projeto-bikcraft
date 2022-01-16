# Uso da base front-end
Após o download da base, é necessário que coloque a pasta `assets` e `static` na raiz do projeto que vai trabalhar.

## Assets
No interior da pasta assets, temos o arquivo `package.json`, `gulpfile.js` e a pasta `source` . A seguir vou esta falando um pouco sobre esses arquivos.

### package.json
É o arquivo responsável por instalar os módulos de dependências para o funcionamento do `gulpfile`. (Importante, como essa base não possui webpack não é possível baixar, instalar e utilizar dependências para o projeto através desse `package.json`).

### gulpfile.js
Nesta base ele é responsável por automatizar algumas tarefas, tais como:
- Concatenar todos os aquivos `Js` em apenas um arquivo chamado `scripts.js`, minificar o arquivo gerado e jogar essa saída para pasta `static/js`.
- Converter arquivos `scss` para `css`, adicionar prefixos em propriedades não suportada por todos os browsers, minificar o arquivo gerado e jogar a saída para pasta `static/css`. (Importante, é utilizado o sourcemaps para facilitar o debug no browser, informando em qual arquivo `scss` está vindo determinado estilo).
- As fontes e as imagens não passam por nenhum tratamento, é feito apenas o espelho da pasta `assets/fonts` e `assets/images` para `static/fonts` e `assets/images`.

### Source
Nesta pasta vamos ter todos os ativos do projeto, onde devemos colocar e criar os arquivos nas respectivas pasta já existente `fonts`, `images`, `js` e `scss`.

#### Fonts
As fontes utilizadas no projeto deve passar pelo site `https://transfonter.org/`. Esse site é responsável por gerar as variações das fontes para o funcionamento correto no variado número de browsers. As configurações no site deve ficar da seguinte forma:
- Clicar no botão `add fonts`, selecionar os arquivos de fonte.
- Marcar os checkbox `TTF`, `EOT`, `WOFF`, `WOFF2`, `SVG`.
- No select com placeholder `all` devemos marcar apenas as opções `Latin` e `Latin extended`.
- Clicar no botão `convert`.
- Clicar no botão `Download`.

Após fazer o download, basta colocar os arquivos gerados na pasta `assets/fonts`.

#### Images
As imagens utilizadas no projeto devem ser redimensionada para os tamanhos corretos que será exibido, levando sempre em consideração o maior tamanho de exibição. Deve também passar pelo site `https://imagecompressor.com/` para reduzir o tamanho do arquivo. 
No site `https://imagecompressor.com/` você deve: 
- clicar no botão `upload files`.
- selecionar os arquivos de imagens (até 20 imagens).
- Após conversão, clicar no botão `download all`.

Após fazer o download, basta colocar os arquivos gerados na pasta `assets/images`. (Importante, o site em questão adiciona o sufixo `.min` no nome do arquivo).

#### Js
De um modo geral os arquivos `.js` já existentes não precisam ser alterados, a não ser que haja necessidade. A pasta Js possui subpastas descritas abaixo.

##### Commons
Está pasta possui funções comuns que são utilizadas no projeto, e nela contempla inicialmente 3 arquivos que são:
- `background-image.js` responsável por adicionar a propriedade css `background-image` em todos os elementos HTML com o seletor `picture.background-image` de acordo com display `desktop`, `tablet` e `mobile`. (No arquivo `static/index.html` possui um exemplo de uso).
- `screen-height.js` responsável por adicionar a propriedade css `min-height` em todos os elementos HTML com o seletor `.screen-height`. (No arquivo `static/index.html` possui um exemplo de uso).
- `target-blank.js` responsável por adicionar a propriedade HTML `target="_blank"` nos link que tem o `href` apontando para domínios externos.

##### Components
Está pasta está inicialmente vazia, e é aonde você vai estar colocando suas funções de componentes como: `carrousel`, `accordion`, `menu` e etc.
Conforme esse exemplo de arquivo: `menu-mobile.js`
```
const menuMobile = () => {
    
    // Esse conteudo abaixo é apenas um exemplo, vai variar de acordo com cada projeto
    const handleClick = e => {
        e.preventDefault();
        $('.seletor-conteudo-menu').slideToggle(); 
    }
    
    $('.seletor-botao-menu').on('click', handleClick);
}
```

##### Helpers
Está pasta possui funções de ajuda que são utilizadas no projeto, ela contempla inicialmente apenas 1 arquivo que é:
- `device.js` responsável por retorna o display `desktop`, `tablet` e `mobile`.

##### Vendor
Está pasta é responsável por guardar todas as bibliotecas utilizadas no projeto, ela contempla inicial apenas 1 arquivo `jquery-3.5.1.min.js`.

De um modo geral você pode criar seus arquivos `.js` em qualquer uma destas pastas internas da pasta js, exceto na pasta `vendor`. Para manter um padrão devemos seguir com o nome do arquivo hifenizado `por-exemplo` e o nome da função em camelCase `porExemplo`. 
A forma de chamar essas funções criadas é no arquivo `assets/js/scripts.js`. (No arquivo `assets/js/scripts.js` possue exemplos de chamadas).

#### Scss
De um modo geral os arquivos `.scss` já existentes não precisam ser alterados, a não ser que haja necessidade. A pasta Scss possui subpastas descritas abaixo.

##### Commons
Está pasta possui estilos comuns que são utilizadas no projeto, e nela contempla inicialmente 2 arquivos que são:
- `background-image.scss` responsável por adicionar estilos css a partir do seletor `.wrap-background-image`. (No arquivo `static/index.html` possui um exemplo de uso).
- `container.scss` responsável por adicionar estilos css a partir do seletor `.container`. De acordo com o projeto você deve criar as ramificações da classe `.container` por exemplo `.container .container-sm`, `.container .container-md`, `.container .container-lg` e `.container .container-xl`.

##### Components
Está pasta possui estilos dos componentes utilizados no projeto, e nela contempla inicialmente 3 arquivos que são:
- `button.scss` responsável por adicionar estilos css a partir do seletor `.button`. De acordo com o projeto você deve criar as ramificações da classe `.button` por exemplo `.button .button-primary`, `.button .button-secondary` entre outras.
- `header.scss` responsável por adicionar estilos css a partir do seletor `#header`. (Arquivo inicialmente vazio).
- `footer.scss` responsável por adicionar estilos css a partir do seletor `#footer`. (Arquivo inicialmente vazio).

##### helpers
Está pasta possui estilos dos ajudantes utilizados no projeto, e nela contempla inicialmente 1 arquivo:
- `rem.scss` esse arquivo não precisa ser modificado, e permite que a função `rem` pode ser chamada em qualquer outro arquivo `.scss`. (No arquivo `assets/scss/commons/container.scss` possui um exemplo de uso).

##### Modules
Está pasta está inicialmente vazia, e é aonde você vai estar colocando seus estilos de módulos. Por exemplo: `banner`, `contact`, `faq` e etc.

##### Theme
Está pasta possui arquivos com variáveis do tema que precisam ser configurados de acordo com cada projeto. Essas variaveis podem ser utilizadas em qualquer arquivo `.scss` do projeto.
- `breakpoint.scss` contem os valores que podem ser utilizados nos `@media queries`. (Modificar somente se houver necessidade).
- `color.scss` deve ser configurado com as cores do projeto. (Seguir o exemplo que está no arquivo).
- `font.scss` deve ser configurado de acordo com as fontes utilizadas no projeto. (Seguir o exemplo que está no arquivo).
- `path.scss` contém os valores com os caminhos relativos. (Modificar somente se houver necessidade).
- `spacing.scss` contém os valores de possíveis espaçamentos padrões. (Modificar de acordo com a necessidade).

##### Vendor
Está pasta está inicialmente vazia e deve conter somente estilos de bibliotecas externas. (Importante alterar a extensão `.css` do arquivo para `.scss`).

De um modo geral você pode criar seus arquivos `.scss` em qualquer uma destas pastas internas da pasta scss, exceto na pasta `vendor`. Para manter um padrão devemos seguir com o nome do arquivo semelhante ao nome da `class` ou `id`. 
A forma de chamar esses arquivos criados é no arquivo `assets/scss/styles.scss`. (No arquivo `assets/scss/styles.scss` possue exemplos de chamadas).
Na raiz da pasta `assets/scss` possui o arquivo `fonts.scss`, esse arquivo deve ser configurado conforme o exemplo deixado nele. Os demais arquivos `global.scss` e `reset.scss` não precisam ser alterados.

### Static
Está deve conter todo o HTML estático, deixei um arquivo `index.html` com alguns exemplos de uso. Para iniciar um projeto você deve excluir todo o conteúdo dentro da `<div id="app"></div>`. 

## Vamos lá...
Após toda essa configuração inicial, vamos para o que enteressa. Para que os arquivos criados na pasta `assets/source` possa ir para pasta `static` é necessário rodar o comando `gulp` na raiz da pasta `assets`, mas antes precisamos instalar os módulos necessários que estão no arquivo `assets/package.json`. Para instalar essas depedências rodamos na raiz da pasta `assets` o comando `npm install`, tudo dando certo rodamos o próximo comando `npm run dev:win` que é um comando criado no arquivo `package.json`.
Se tudo der certo, você verá as pastinhas `images, fonts, js e css` sendo criadas na raiz da pasta `static`.

*** importante essas pastas geradas devem ser colocadas no `.gitignore`.









