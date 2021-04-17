---
title: Como criar um Setup (Inno Setup)
tags: Tutorial
---

Depois de tudo pronto agora é a hora de distribuir uma aplicação e pode ser necessário um instalador para organizar tudo na hora do usuário instalar sua aplicação. 

# Inno Setup 
O Inoo Setup é um instalador de programas para Windows. Com código aberto, foi criado em 1997 e é atualizado até hoje.

# Criando o instalador
As instalaçòes são feitas seguindo um script .iss, esse script é criado pela IDE do Inno Setup e é compilada em uma arquivo .EXE que executará a instalação.

# Formato do script
## Seções
O script é dividido em seções, onde cada seção é responsável por um aspecto da instalação, os nomes das seções são padronizados e devem ser colocador entre colchetes, por exemplo "[Setup]".

## Diretivas
As diretivas devem ficar dentro das seções, existem algumas diretivas características do Inno, como "AppName", e algumas que existem em outras linguagens, como "#include".

## Parametros


# Referências
[Documentação Inno Setup](https://jrsoftware.org/ishelp/)



