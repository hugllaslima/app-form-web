# App Form Web

Este repositório foi desenvolvido para profissionais que estão iniciando na carreira de DevOps e precisam compreender os conceitos basicos, fundamentais e práticos sobre CI/CD (Continuous Integration/Continuous Deployment) na prática. O projeto apresenta uma aplicação web simples que consiste em um formulário onde o usuário pode inserir dados como: nome, e-mail, telefone e data de nascimento, assim demonstrando na prática como implementar pipelines de integração e entrega contínuas com o GitActions.

## Arquitetura

app-form-web/

├── .github/workflows/ # Diretório dos Workflows (CI/CD) 

│   ├── deploy-prod.yml # (Para Ambiente de Produção)

│   └── deploy-stage.yml # (Para Ambiente de Stage)

├── scripts/

│   ├── sync-branchs.sh # (Sincronizar as branchs após pull request)

├── src/

│   ├── index.html

│   ├── script.js

│   └──  Dockerfile

├── .gitgnore

├── LICENSE.md

├── README.md

└── SECURITY.md

## Aplicação

Esta aplicação foi desenvolvida em "html" e "JavaScript" onde existem duas branchs com seus respectivos deploys com ambientes distintos. 

- **Branch "main":** Deploy realizado em uma instancia EC2 com Ubuntu Server 24.04 LTS via ssh utilixando o ECR (serviço de registro de imagens de contêiner).
- **Branch "stage":** Deploy realizado em um ambiente local via "self-hosted runner" utilizando uma VM com Ubuntu Server 24.04 LTS no Proxmox VE.

## Pré-requisitos

Para este projeto, temos os pré-quisitos abaixo:

- Git
- Docker
- Instância EC2 (t3.micro)
- Virtual Machine (Ambiente Local)
- Self-Hosted Runner (Instalado em VM Local)
- Usuário na AWS com Permissões (Para EC2 e ECR)

## Teste Local em Ambiente Linux

Os comandos são:
```
git clone https://github.com/hugllaslima/app-form-web.git
cd app-form-web/src/
docker build -t app-form-web-stage .
docker run -d --restart=always --name app-form-web-stage -p 8080:80 app-form-web-stage:latest
```

## Informações Sobre o Deploy

#### Fluxo Utilizado 

- ✅ main → feature/nova-função → commit: Cria uma nova branch a partir da branch “main”
- ✅ Feature → Stage: Realiza o "Pull Request" para o Ambiente de Stage (Deploy Stage)
- ✅ Stage → Main: Realiza o "Merge Pull Request" para o Ambiente de Produção (Deploy Produção)

A idéia deste projeto foi pensada em desenvolver e entender habilidades básicas de DevOps mais proximo do real utilizando ambientes de Stage e Produção com deploys definidos por branchs, sempre pensando nos itens abaixo:

- ✅ **Segurança:** Feature → Stage → Produção (validação dupla)
- ✅ **Testes:** Ambiente de staging para homologação
- ✅ **Rollback:** Se der problema no stage, não afeta produção
- ✅ **Qualidade:** Só código testado vai para produção
- ✅ **Controle:** Duas barreiras de qualidade

#### Secrets 

- AWS_ACCESS_KEY_ID 
- AWS_EC2_HOST
- AWS_EC2_USER
- AWS_ECR_REGISTRY
- AWS_ECR_REPOSITORY
- AWS_REGION
- AWS_SECRET_ACCESS_KEY
- EC2_SSH_PRIVATE_KEY
