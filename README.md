# App Form Web - Projeto Educacional de DevOps

> **⚠️ IMPORTANTE:** Este é um projeto educacional desenvolvido para fins de estudo e aprendizado de conceitos básicos de DevOps e CI/CD. Não deve ser utilizado em ambientes de produção sem as devidas adaptações de segurança.

## 📚 Sobre o Projeto

Este repositório foi criado especificamente para pessoas que estão **iniciando na carreira de DevOps** e precisam compreender os conceitos fundamentais e práticos sobre **CI/CD (Continuous Integration/Continuous Deployment)** na prática. 

O projeto apresenta uma aplicação web simples que consiste em um formulário onde o usuário pode inserir dados como: nome, e-mail, telefone e data de nascimento, demonstrando na prática como implementar pipelines de integração e entrega contínua utilizando o **GitHub Actions**.

## 🎯 Objetivos de Aprendizado

Ao estudar este projeto, você aprenderá:

- ✅ Configuração de pipelines CI/CD com GitHub Actions
- ✅ Estratégias de branching (GitFlow simplificado)
- ✅ Deploy automatizado em diferentes ambientes
- ✅ Containerização com Docker
- ✅ Conceitos de staging e produção
- ✅ Gerenciamento de secrets e variáveis de ambiente
- ✅ Boas práticas de segurança em DevOps

## 📁 Estrutura do Projeto

```
app-form-web/
├── .github/workflows/          # Workflows do GitHub Actions
│   ├── deploy-prod.yml         # Pipeline para Produção
│   └── deploy-stage.yml        # Pipeline para Staging
├── scripts/
│   └── sync-branchs.sh         # Script para sincronização de branches
├── src/
│   ├── index.html              # Interface da aplicação
│   ├── script.js               # Lógica JavaScript
│   └── Dockerfile              # Configuração do container
├── .gitignore
├── LICENSE.md
├── README.md
└── SECURITY.md
```

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Containerização:** Docker
- **CI/CD:** GitHub Actions
- **Infraestrutura:** AWS EC2, ECR (exemplos educacionais)

## 🌟 Estratégia de Branches e Deploy

### Fluxo de Trabalho (GitFlow Simplificado)

```
main → feature/nova-funcionalidade → stage → main
```

1. **Branch `main`:** Ambiente de produção (estável)
2. **Branch `stage`:** Ambiente de homologação/testes
3. **Feature branches:** Desenvolvimento de novas funcionalidades

### Ambientes de Deploy

- **Staging (branch `stage`):** Ambiente para testes e validação
- **Produção (branch `main`):** Ambiente final para usuários

## 📋 Pré-requisitos para Estudos

### Conhecimentos Básicos
- Git e GitHub
- Conceitos básicos de Linux
- HTML, CSS e JavaScript básico
- Conceitos de containerização

### Ferramentas Necessárias
- Git
- Docker
- Editor de código (VS Code recomendado)
- Conta no GitHub
- Conta na AWS (para testes avançados - opcional)

## 🧪 Teste Local

Para testar a aplicação localmente:

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/app-form-web.git
cd app-form-web/src/

# Build da imagem Docker
docker build -t app-form-web-local .

# Execute o container
docker run -d --name app-form-web-local -p 8080:80 app-form-web-local:latest
```

Acesse: `http://localhost:8080`

## 🔐 Configuração de Secrets (Para Estudos Avançados)

Para implementar os pipelines completos, você precisará configurar os seguintes secrets no GitHub:

### Secrets Necessários
- `AWS_ACCESS_KEY_ID` - Chave de acesso AWS
- `AWS_SECRET_ACCESS_KEY` - Chave secreta AWS
- `AWS_REGION` - Região AWS (ex: us-east-1)
- `AWS_ECR_REGISTRY` - URL do registry ECR
- `AWS_ECR_REPOSITORY` - Nome do repositório ECR
- `AWS_EC2_HOST` - IP ou hostname da instância EC2
- `AWS_EC2_USER` - Usuário SSH da instância
- `EC2_SSH_PRIVATE_KEY` - Chave privada SSH

> **⚠️ SEGURANÇA:** Nunca commite secrets ou chaves no código. Use sempre o sistema de secrets do GitHub ou variáveis de ambiente.

## 📖 Como Estudar Este Projeto

1. **Comece pelo básico:** Entenda a aplicação HTML/JS
2. **Explore os Workflows:** Analise os arquivos `.yml` em `.github/workflows/`
3. **Teste localmente:** Execute a aplicação com Docker
4. **Simule o CI/CD:** Crie forks e teste os pipelines
5. **Experimente:** Modifique e veja os resultados

## 🤝 Contribuições

Este é um projeto educacional aberto a contribuições que melhorem o aprendizado:

- Correções de bugs
- Melhorias na documentação
- Exemplos adicionais
- Tutoriais complementares

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## ⚠️ Disclaimer

Este projeto foi desenvolvido exclusivamente para fins educacionais. Para uso em produção, implemente as seguintes melhorias:

- Autenticação e autorização robustas
- Validação de dados no backend
- Monitoramento e logging adequados
- Testes automatizados abrangentes
- Configurações de segurança avançadas
- Backup e recuperação de dados

---

**Desenvolvido com 💙 para a comunidade DevOps iniciante**
