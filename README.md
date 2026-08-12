# Allegro Piano Club

Site estatico em HTML e CSS para o projeto Allegro Piano Club. Nao precisa de
Node, build, instalacao, terminal ou dependencias.

## Publicacao no GitHub Pages

1. Envie este repositorio para o GitHub.
2. Em `Settings > Pages`, escolha `Deploy from a branch`.
3. Selecione a branch principal e a pasta `/root`.
4. Em `Custom domain`, use `www.allegropiano.com.br`.
5. Salve. O GitHub Pages vai renderizar o arquivo `index.html`.

## DNS do dominio

No provedor DNS, mantenha o dominio raiz com os quatro registros `A` do GitHub Pages:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Crie tambem o registro para o subdominio `www`:

- Tipo: `CNAME`
- Nome/Host: `www`
- Valor/Destino: `SEU_USUARIO_OU_ORG.github.io`

O erro `InvalidDNSError` em `www.allegropiano.com.br` acontece quando esse registro `www` nao existe, aponta para o destino errado, ou ainda nao propagou.

Arquivos principais:

- `index.html`: conteudo do site.
- `styles.css`: identidade visual e responsividade. Pode ficar na mesma pasta
  do HTML sem problema.
- `assets/allegro-piano-club.png`: imagem principal da marca.
- `assets/favicon.svg`: icone da aba do navegador.
- `CNAME`: dominio customizado do GitHub Pages.
