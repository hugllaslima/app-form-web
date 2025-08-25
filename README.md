# App Form Web

Este repositório foi criado para você que está iniciando na carreira de DevOps e precisa inicialmente de conceitos básico e práticos sobre o que de fato é um CI/CD.

## Arquitetura

app-form-web/

├── .github/workflows/ # Diretório dos Workflows (CI/CD) 

│   ├── deploy-prod.yml # (Para Ambiente de Produção)

│   └── deploy-stage.yml # (Para Ambiente de Stage)

├── src/

│   ├── index.html

│   ├── script.js

│   └──  Dockerfile

├── .gitgnore/

├── LICENSE.md

├── README.md

└── SECURITY.md

## Aplicação

Esta aplicação foi desenvolvida em "html" e "JavaScript" onde existem duas branchs com seus respectivos deploys:

- Branch "main": Deploy realizado em uma instancia EC2 utilixando o ECR (serviço de registro de imagens de contêiner).
- Branch "stage": Deploy realizado em um ambiente local utilizando uma VM no Proxmox VE.

