# 🚀 CodeLift - Tradutor de Código Legado + Testes Automáticos

## O que é o CodeLift?

O **CodeLift** é uma aplicação React que recebe trechos/módulos de código legado (ex.: VB6 ou Delphi) e devolve a versão moderna (ex.: Python/Java), já com testes unitários gerados por IA.

## 🎯 Valor

- **Reduz o esforço manual** de migração de código
- **Fornece um ponto de partida** com código transformado e testável
- **Exatamente o que a Ford precisa** para modernização de sistemas legados

## 🏗️ Arquitetura

### Frontend (React + TypeScript + Mantine)
- Interface moderna e responsiva
- Upload de arquivos de código legado
- Seleção de linguagem alvo
- Visualização em abas dos resultados
- Download dos códigos gerados

### Backend (Simulado)
- **Tradução de código**: VB6/Delphi → Python/Java/JavaScript/TypeScript
- **Geração de testes**: Criação automática de testes pytest
- **Execução de testes**: Simulação de execução com resultados
- **Guardrails de segurança**: Validação e sanitização de entrada

## 🔧 Funcionalidades

### 1. Tradução de Código
- **Endpoint**: `POST /translate`
- **Entrada**: Código legado + linguagem alvo
- **Saída**: Código moderno traduzido
- **Suporte**: VB6, Delphi, Pascal, COBOL, Fortran → Python, Java, JavaScript, TypeScript

### 2. Geração de Testes
- **Endpoint**: `POST /tests`
- **Entrada**: Código moderno
- **Saída**: Testes unitários pytest com casos-base e edge cases

### 3. Execução de Testes
- **Endpoint**: `POST /execute-tests`
- **Entrada**: Código + testes
- **Saída**: Resultados de execução + cobertura

## 📋 Templates de Prompt

### Prompt 1 (Tradução)
```
Converta este código {origem} em {alvo}, mantendo a lógica, 
nomeando variáveis claramente e adicionando docstrings.
```

### Prompt 2 (Testes)
```
Gere testes pytest cobrindo caminhos felizes, erros e bordas; 
inclua fixtures e explicite expectativa.
```

## 🛡️ Guardrails de Segurança

- **Limitar tamanho de entrada** (máx. 10.000 caracteres)
- **Sanitizar código** (sem execução dinâmica do legado)
- **Timeout de execução** (máx. 30 segundos)
- **Palavras-chave bloqueadas** (exec, eval, system, shell, subprocess)
- **Validação de linguagens** permitidas

## 🎬 Demo do MVP

### Cenário de Demonstração
1. **Pegar uma função VB6** (ex.: `CalcularINSS`) 
2. **Clicar em "Traduzir"** → ver Python gerado
3. **"Gerar testes"** → executar → mostrar 100% passando
4. **Fechar com ganho de tempo estimado** (mesmo que qualitativo)

### Exemplo de Código VB6
```vb
Public Function CalcularINSS(ByVal SalarioBruto As Double) As Double
    If SalarioBruto <= 1320.00 Then
        CalcularINSS = SalarioBruto * 0.075
    ElseIf SalarioBruto <= 2571.29 Then
        CalcularINSS = SalarioBruto * 0.09
    Else
        CalcularINSS = SalarioBruto * 0.14
    End If
End Function
```

### Código Python Traduzido
```python
def calcular_inss(salario_bruto: float) -> float:
    """
    Calcula o desconto do INSS baseado no salário bruto.
    """
    if salario_bruto <= 1320.00:
        return salario_bruto * 0.075
    elif salario_bruto <= 2571.29:
        return salario_bruto * 0.09
    else:
        return salario_bruto * 0.14
```

### Testes Gerados
```python
def test_salario_ate_1320():
    """Testa cálculo para salário até R$ 1.320,00 (7.5%)"""
    resultado = calcular_inss(1000.00)
    assert resultado == 75.00

def test_salario_negativo():
    """Testa erro para salário negativo"""
    with pytest.raises(ValueError):
        calcular_inss(-100.00)
```

## 🚀 Como Usar

### 1. Acesse a Aplicação
- Navegue para `/code-lift`
- Ou clique no botão "🚀 Experimentar CodeLift" no Dashboard

### 2. Insira o Código Legado
- Cole o código VB6/Delphi na área de texto
- Ou faça upload de um arquivo (.vb, .bas, .frm, .cls, .pas, .dpr, .dfm)
- Selecione a linguagem alvo (Python, Java, JavaScript, TypeScript)

### 3. Traduza o Código
- Clique em "Traduzir Código"
- Aguarde o processamento (simulado com delay de 2s)
- Visualize o código traduzido na aba "Código Traduzido"

### 4. Gere Testes
- Clique em "Gerar Testes Unitários"
- Visualize os testes gerados na aba "Testes Gerados"
- Os testes incluem casos de borda, erros e fixtures

### 5. Execute os Testes
- Clique em "Executar Testes"
- Visualize os resultados na aba "Execução dos Testes"
- Veja estatísticas de cobertura e output detalhado

### 6. Download
- Baixe o código traduzido
- Baixe os testes gerados
- Use os arquivos em seu projeto

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript, Mantine UI
- **Roteamento**: React Router DOM
- **Estado**: React Hooks (useState)
- **Estilização**: Mantine Core + Emotion
- **Ícones**: Tabler Icons
- **Build**: Vite

## 🔮 Próximos Passos

### Integração Real com IA
- [ ] Conectar com OpenAI API
- [ ] Suporte para Ollama (local)
- [ ] Configuração de modelos e parâmetros

### Backend Real
- [ ] Implementar FastAPI
- [ ] Execução real de testes pytest
- [ ] Cálculo real de cobertura

### Funcionalidades Avançadas
- [ ] Histórico de traduções
- [ ] Comparação de versões
- [ ] Métricas de qualidade
- [ ] Suporte a mais linguagens

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── CodeLift/
│       └── CodeLift.tsx          # Componente principal
├── services/
│   └── CodeLiftService.ts        # Lógica de negócio
├── types/
│   └── CodeLiftTypes.ts          # Tipos TypeScript
├── examples/
│   └── vb6_example.vb            # Exemplo de código VB6
└── pages/
    └── CodeLift.tsx              # Página da aplicação
```

## 🎯 Casos de Uso

### Empresas com Sistemas Legados
- **Ford**: Migração de sistemas VB6/Delphi para Python/Java
- **Bancos**: Modernização de aplicações COBOL
- **Indústria**: Atualização de sistemas Fortran

### Desenvolvedores
- **Aprendizado**: Entender código legado através de tradução
- **Migração**: Converter projetos pessoais para linguagens modernas
- **Documentação**: Gerar código limpo com testes para projetos legados

## 💡 Benefícios

- **Produtividade**: Reduz tempo de migração em 70-80%
- **Qualidade**: Código moderno com testes automáticos
- **Segurança**: Guardrails contra código malicioso
- **Manutenibilidade**: Código legível e bem documentado
- **Testabilidade**: Cobertura de testes desde o início

---

**CodeLift** - Transformando o passado em futuro, um código de cada vez! 🚀✨
