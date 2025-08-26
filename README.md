# App Form Web

Este repositório foi desenvolvido para profissionais que estão iniciando na carreira de DevOps e precisam compreender os conceitos fundamentais e práticos sobre CI/CD (Continuous Integration/Continuous Deployment). O projeto apresenta uma aplicação web simples que consiste em um formulário onde o usuário pode inserir nome e e-mail, demonstrando na prática como implementar pipelines de integração e entrega contínuas com o GitActions.

## Arquitetura

app-form-web/

├── .github/workflows/ # Diretório dos Workflows (CI/CD) 

│   ├── deploy-prod.yml # (Para Ambiente de Produção)

│   └── deploy-stage.yml # (Para Ambiente de Stage)

├── src/

│   ├── index.html

│   ├── script.js

│   └──  Dockerfile

├── .gitgnore

├── LICENSE.md

├── README.md

└── SECURITY.md

## Aplicação

Esta aplicação foi desenvolvida em "html" e "JavaScript" onde existem duas branchs com seus respectivos deploys:

- **Branch "main":** Deploy realizado em uma instancia EC2 com Ubuntu Server 24.04 LTS via ssh utilixando o ECR (serviço de registro de imagens de contêiner).
- **Branch "stage":** Deploy realizado em um ambiente local via "self-hosted runner" utilizando uma VM com Ubuntu Server 24.04 LTS no Proxmox VE.

## Pré-requisitos

- Docker

## Teste Local Para Ambiente Linux

Os comandos são:
```
git clone https://github.com/hugllaslima/app-form-web
cd app-form-web/src/
docker build -t app-form-web-stage .
docker run -d --restart=always --name app-form-web-stage -p 8080:80 app-form-web-stage:latest
```