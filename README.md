# 🧮 Calculadora em JavaScript

🔗 **Acesse a demonstração online:** [Clique aqui para testar a calculadora](https://fco-gabriel-silva.github.io/Projeto-Calculadora/)

Projeto pessoal de uma calculadora funcional desenvolvida com **HTML, CSS e JavaScript puro (Vanilla JS)**, criada para praticar lógica de programação, Orientação a Objetos e manipulação do DOM.

---

## 🎯 Objetivos do Projeto

- **Lógica própria sem `eval()`:** A calculadora processa as expressões matemáticas criando uma estrutura de resolução própria, respeitando a ordem das operações (multiplicação e divisão antes de soma e subtração).
- **Código Modular:** O projeto foi dividido em arquivos e pastas para separar a lógica matemática, a interface visual e as funções utilitárias.
- **Estrutura com Classes (POO):** As operações (`Soma`, `Subtracao`, `Multiplicacao`, `Divisao`) foram organizadas em classes herdeiras de uma classe base (`Operacao`).
- **Separação de Responsabilidades:** O arquivo visual (`uiController.js`) cuida apenas dos cliques e da tela, enquanto a `Calculadora` cuida apenas dos cálculos.

---

## 📁 Estrutura do Projeto

```text
.
├── constants/
│   └── operacoes.js        # Lista de operadores aceitos
├── modules/
│   ├── calculadora.js      # Motor que resolve as expressões
│   ├── operacao.js         # Classe base para as operações
│   ├── soma.js             # Classe de soma
│   ├── subtracao.js        # Classe de subtração
│   ├── multiplicacao.js    # Classe de multiplicação
│   ├── divisao.js          # Classe de divisão
│   └── uiController.js     # Gerenciador dos botões e do visor
├── utils/
│   ├── formatarDigitos.js  # Agrupa os números e operadores digitados
│   └── separarExpressao.js # Encontra a próxima operação a ser resolvida
├── index.html              # Estrutura HTML da calculadora
├── index.js                # Ponto de entrada do sistema
└── style.css               # Estilos e visual da calculadora
```

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fco-Gabriel-Silva/Projeto-Calculadora.git
   ```
2. Abra o arquivo `index.html` no seu navegador (ou utilize a extensão **Live Server** no VS Code).
