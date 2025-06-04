# 🎓 UNIESP - Portal Institucional

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
</div>

---

## 🌟 Sobre o Projeto

Portal web moderno para a UNIESP, focado em disponibilizar informações institucionais, notícias dinâmicas e conteúdos relacionados à LGPD/DPO, com design responsivo e boa experiência para o usuário.

### Principais funcionalidades:
- 🏫 Exibição de informações institucionais claras e organizadas  
- 📰 Notícias dinâmicas consumidas via API com Axios  
- 🔐 Conteúdo educativo sobre LGPD e DPO  
- 🎨 Layout responsivo usando Bootstrap 5  
- ✨ Código padronizado com Prettier e ESLint

---

## 🛠 Tecnologias Utilizadas

### React 18  
- Componentes funcionais e Hooks  
- Gerenciamento de estado simples e eficaz

### Bootstrap 5  
- Sistema de grid flexível e responsivo  
- Componentes pré-estilizados (Navbar, Carousel, Cards)  
- Customização via SASS

### Axios  
- Consumo de API RESTful com tratamento de erros  
- Configuração de interceptores para requisições

### Ferramentas de Qualidade  
- Prettier para formatação automática  
- ESLint para padronização e qualidade do código  
- Vite como bundler moderno e rápido

---

## 🚀 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/lulmaia/site-uniesp-frontend

# Entre na pasta do projeto
cd site-uniesp-frontend

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev

# Para gerar a build de produção
npm run build

# Pré-visualize a build
npm run preview
````

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BannerAd.jsx       # Carrossel de banners na página inicial
│   └── CustomNavbar.jsx   # Barra de navegação responsiva
├── pages/
│   ├── DpoLgpd.jsx        # Página sobre LGPD e DPO
│   ├── Faculdade.jsx      # Informações institucionais da faculdade
│   ├── Inicial.jsx        # Página inicial
│   └── Noticias.jsx       # Página de notícias consumidas via API
├── App.jsx                # Configuração das rotas do React Router
└── main.jsx               # Ponto de entrada da aplicação
```

---

## 📜 Scripts Úteis

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento    |
| `npm run build`   | Cria a build para produção              |
| `npm run preview` | Visualiza a build de produção           |
| `npm run format`  | Formata o código com Prettier           |
| `npm run lint`    | Verifica problemas de estilo com ESLint |

---

## 💡 Dicas para quem for copiar esse código (ou só dar uma espiada)

* Configure seu editor para formatar automaticamente com Prettier ao salvar
* Habilite o ESLint para receber feedback imediato sobre problemas de estilo e bugs
* Utilize componentes funcionais e Hooks para manter o código moderno e limpo
* Centralize chamadas API com Axios para facilitar manutenção
* Padronize commits: Use mensagens claras e padronizadas para facilitar o histórico e a colaboração.
* Documentação: Atualize o README e comentários no código sempre que adicionar funcionalidades ou modificar comportamento.

---

<div align="center">
  <sub>📄 Licença MIT • Feito com ❤️ por Luís Maia</sub>
</div>
