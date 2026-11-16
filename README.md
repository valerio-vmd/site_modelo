# Landing page reutilizável — odontologia

Site estático, sem instalação, banco de dados, PHP ou bibliotecas externas. Primeiro modelo para visitantes do Instagram, com layout mobile, formulário que prepara uma mensagem no WhatsApp, galeria acessível e mapa carregado sob solicitação.

## Personalizar

1. Edite `config.js`: identidade, textos, serviços, imagens, contatos, endereço, horário, profissional e CRO. Valores vazios são demonstrativos; não há telefone fictício ativo. Use somente conteúdo autorizado e informações verdadeiras.
2. Altere as cores e fontes em `tema.css`. Mantenha contraste suficiente entre texto e fundo.
3. Substitua as fotografias em `assets/` e atualize textos alternativos. Use imagens licenciadas ou próprias e formatos comprimidos. As fotos iniciais são ilustrativas do Unsplash; fontes em `assets/CREDITOS.md`.
4. Ative ou desative seções em `sections`. Para reorganizar, mova as respectivas seções em `index.html`.
5. Revise os títulos fixos, botões e textos complementares em `index.html` ao adaptar para outro segmento. O arquivo de configuração cobre os conteúdos específicos; o HTML mantém a composição editorial do modelo.
6. Preencha a política em `privacidade.html` com os dados reais do controlador e as práticas da clínica.
7. Ajuste também o título e as metas iniciais de `index.html` (as redes sociais normalmente não executam JavaScript). Inclua `og:url`, `og:image` com URLs absolutas e canonical após definir o domínio. A configuração atualiza esses campos no navegador, mas não substitui as metas estáticas para robôs.
8. Configure `url` com HTTPS e `whatsapp` com DDI, DDD e número, somente dígitos. Preencha os dados reais e então altere `demo` para `false`.

## Testar localmente

Na pasta do projeto execute `python -m http.server 8080 --bind 127.0.0.1` e abra `http://127.0.0.1:8080`. O servidor Python não aplica `.htaccess`: cabeçalhos e regras Apache só podem ser confirmados na hospedagem. JavaScript deve estar habilitado.

Confira larguras de 360, 390, 768 e 1440 pixels; navegação por teclado; menu e Escape; ampliação de imagens; formulário obrigatório e contato configurado. Os links do WhatsApp abrem o serviço externo; o formulário nunca afirma que houve envio. O usuário precisa clicar no link preparado, revisar e enviar por conta própria.

## Publicar na HostGator compartilhada

1. Ative o certificado SSL no painel para o domínio.
2. Envie **apenas** `index.html`, `privacidade.html`, `config.js`, `tema.css`, `styles.css`, `app.js`, `.htaccess` e a pasta `assets` para `public_html` ou para a pasta do domínio. Mostre arquivos ocultos para incluir `.htaccess`.
3. Não envie `.git`, documentos do projeto, credenciais ou arquivos de backup. Em subpastas os caminhos relativos funcionam, sem configuração de SPA.
4. Teste o domínio com HTTPS, redirecionamento HTTP, mapa, imagens, WhatsApp e formulário. Confirme os cabeçalhos de resposta no navegador; o suporte a módulos Apache depende do plano.
5. Se houver erro 500, consulte os registros do provedor para identificar a diretiva não permitida. Não remova indiscriminadamente as proteções.

O site não inclui servidor de e-mail nem formulário que armazene mensagens. Não há autenticação, upload ou consulta SQL. Nenhuma chave deve ser colocada em `config.js`, pois ele é público. A CSP bloqueia scripts inline e origens não autorizadas; o código cria conteúdo com `textContent`, sem interpretar HTML do cliente. Links externos são validados. Mapa: conexão ao Google apenas após clique. As proteções reduzem a superfície de ataque, sem substituir a segurança da conta de hospedagem, HTTPS e controle de acesso ao GitHub.

## Replicar no GitHub

Crie um repositório, envie os arquivos e marque-o como template nas configurações. Para cada cliente use **Use this template**, personalize e publique os arquivos estáticos. Não há repositório ou publicação criados automaticamente nesta entrega. Cópias não recebem atualizações do template automaticamente.

## Antes de entregar ao cliente

- Substituir textos e fotos ilustrativas; confirmar especialidades e identificação profissional.
- Publicar somente depoimentos reais autorizados. A lista inicial está vazia.
- Definir domínio, metadados estáticos e imagem social; revisar privacidade.
- Testar os números e destinos reais sem enviar mensagens de teste sem autorização.
- Conferir HTTPS e cabeçalhos Apache na HostGator. Não foi realizada auditoria ou medição de Core Web Vitals em produção.
