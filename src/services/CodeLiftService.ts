import { 
  CodeTranslationResult, 
  TestGenerationResult, 
  TestExecutionResult,
  CodeLiftConfig,
  GuardrailConfig 
} from '../types/CodeLiftTypes';

export class CodeLiftService {
  private config: CodeLiftConfig;
  private guardrails: GuardrailConfig;

  constructor() {
    this.config = {
      aiProvider: 'openai',
      modelName: 'gpt-4',
      temperature: 0.1,
      maxTokens: 4000,
      guardrails: {
        maxInputSize: 10000,
        maxExecutionTime: 30,
        allowedLanguages: ['vb6', 'delphi', 'pascal', 'cobol', 'fortran'],
        blockedKeywords: ['exec', 'eval', 'system', 'shell', 'subprocess'],
        sanitizationRules: ['remove_executable_code', 'validate_syntax', 'check_imports']
      }
    };
    this.guardrails = this.config.guardrails;
  }

  /**
   * Valida e sanitiza o código de entrada
   */
  private validateAndSanitizeCode(code: string, sourceLanguage: string): string {
    // Verificar tamanho máximo
    if (code.length > this.guardrails.maxInputSize) {
      throw new Error(`Código muito longo. Máximo permitido: ${this.guardrails.maxInputSize} caracteres`);
    }

    // Verificar linguagem permitida
    if (!this.guardrails.allowedLanguages.includes(sourceLanguage.toLowerCase())) {
      throw new Error(`Linguagem não suportada: ${sourceLanguage}`);
    }

    // Sanitizar código (remover palavras-chave perigosas)
    let sanitizedCode = code;
    this.guardrails.blockedKeywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      sanitizedCode = sanitizedCode.replace(regex, `/* ${keyword} bloqueado por segurança */`);
    });

    return sanitizedCode;
  }

  /**
   * Gera prompt para tradução de código
   */
  private generateTranslationPrompt(sourceCode: string, sourceLanguage: string, targetLanguage: string): string {
    return `Converta este código ${sourceLanguage} em ${targetLanguage}, mantendo a lógica, nomeando variáveis claramente e adicionando docstrings.

Código fonte:
${sourceCode}

Requisitos:
- Mantenha a funcionalidade original
- Use nomes de variáveis descritivos
- Adicione documentação clara
- Siga as melhores práticas da linguagem ${targetLanguage}
- Inclua tratamento de erros quando apropriado

Código traduzido:`;
  }

  /**
   * Gera prompt para criação de testes
   */
  private generateTestPrompt(sourceCode: string, targetLanguage: string): string {
    return `Gere testes pytest cobrindo caminhos felizes, erros e bordas; inclua fixtures e explicite expectativa.

Código fonte em ${targetLanguage}:
${sourceCode}

Requisitos dos testes:
- Use pytest como framework
- Cubra todos os cenários possíveis (happy path, edge cases, erros)
- Inclua fixtures quando apropriado
- Teste casos de borda e valores inválidos
- Use nomes descritivos para os testes
- Inclua assertions claras e mensagens de erro úteis

Testes gerados:`;
  }

  /**
   * Traduz código legado para linguagem moderna
   */
  async translateCode(sourceCode: string, targetLanguage: string): Promise<CodeTranslationResult> {
    const startTime = Date.now();
    
    try {
      // Detectar linguagem fonte automaticamente
      const sourceLanguage = this.detectSourceLanguage(sourceCode);
      
      // Validar e sanitizar código
      const sanitizedCode = this.validateAndSanitizeCode(sourceCode, sourceLanguage);
      
      // Simular chamada para IA (em produção, seria uma chamada real para OpenAI, Ollama, etc.)
      const translatedCode = await this.callAI(
        this.generateTranslationPrompt(sanitizedCode, sourceLanguage, targetLanguage)
      );

      const translationTime = Date.now() - startTime;

      return {
        translatedCode,
        sourceLanguage,
        targetLanguage,
        translationTime,
        confidence: 0.95 // Simulado
      };
    } catch (error) {
      throw new Error(`Falha na tradução: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  /**
   * Gera testes unitários para o código traduzido
   */
  async generateTests(sourceCode: string): Promise<TestGenerationResult> {
    const startTime = Date.now();
    
    try {
      const testCode = await this.callAI(
        this.generateTestPrompt(sourceCode, 'python')
      );

      const generationTime = Date.now() - startTime;

      return {
        testCode,
        testFramework: 'pytest',
        testCount: this.countTestFunctions(testCode),
        generationTime,
        coverage: 85 // Simulado
      };
    } catch (error) {
      throw new Error(`Falha na geração de testes: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  /**
   * Executa os testes gerados
   */
  async runTests(sourceCode: string, testCode: string): Promise<TestExecutionResult> {
    const startTime = Date.now();
    
    try {
      // Em um ambiente real, aqui seria executado o pytest
      // Por enquanto, simulamos os resultados
      const mockResults = this.simulateTestExecution(sourceCode, testCode);
      
      const executionTime = Date.now() - startTime;

      return {
        ...mockResults,
        executionTime
      };
    } catch (error) {
      throw new Error(`Falha na execução dos testes: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  /**
   * Detecta automaticamente a linguagem fonte do código
   */
  private detectSourceLanguage(code: string): string {
    const codeLower = code.toLowerCase();
    
    if (codeLower.includes('sub ') || codeLower.includes('function ') || codeLower.includes('dim ')) {
      return 'vb6';
    }
    if (codeLower.includes('procedure ') || codeLower.includes('var ') || codeLower.includes('begin ')) {
      return 'delphi';
    }
    if (codeLower.includes('cobol') || codeLower.includes('identification division')) {
      return 'cobol';
    }
    if (codeLower.includes('fortran') || codeLower.includes('program ')) {
      return 'fortran';
    }
    
    return 'vb6'; // Padrão
  }

  /**
   * Simula chamada para IA (em produção seria real)
   */
  private async callAI(prompt: string): Promise<string> {
    // Simulação de delay de IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulação de resposta baseada no prompt
    if (prompt.includes('Converta este código')) {
      return this.generateMockTranslatedCode();
    } else if (prompt.includes('Gere testes pytest')) {
      return this.generateMockTests();
    }
    
    return '// Código gerado pela IA';
  }

  /**
   * Gera código traduzido simulado para demonstração
   */
  private generateMockTranslatedCode(): string {
    return `def calcular_inss(salario_bruto: float) -> float:
    """
    Calcula o desconto do INSS baseado no salário bruto.
    
    Args:
        salario_bruto (float): Salário bruto do funcionário
        
    Returns:
        float: Valor do desconto do INSS
        
    Raises:
        ValueError: Se o salário for negativo
    """
    if salario_bruto < 0:
        raise ValueError("Salário não pode ser negativo")
    
    # Tabela de alíquotas do INSS (2024)
    if salario_bruto <= 1320.00:
        return salario_bruto * 0.075
    elif salario_bruto <= 2571.29:
        return salario_bruto * 0.09
    elif salario_bruto <= 3856.94:
        return salario_bruto * 0.12
    else:
        return salario_bruto * 0.14

def calcular_salario_liquido(salario_bruto: float, outros_descontos: float = 0.0) -> float:
    """
    Calcula o salário líquido após todos os descontos.
    
    Args:
        salario_bruto (float): Salário bruto
        outros_descontos (float): Outros descontos (padrão: 0.0)
        
    Returns:
        float: Salário líquido
    """
    inss = calcular_inss(salario_bruto)
    return salario_bruto - inss - outros_descontos`;
  }

  /**
   * Gera testes simulados para demonstração
   */
  private generateMockTests(): string {
    return `import pytest
from unittest.mock import patch
import sys
import os

# Adiciona o diretório src ao path para importar o módulo
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

# Importa as funções a serem testadas
try:
    from main import calcular_inss, calcular_salario_liquido
except ImportError:
    # Fallback para demonstração
    def calcular_inss(salario_bruto: float) -> float:
        if salario_bruto < 0:
            raise ValueError("Salário não pode ser negativo")
        if salario_bruto <= 1320.00:
            return salario_bruto * 0.075
        elif salario_bruto <= 2571.29:
            return salario_bruto * 0.09
        elif salario_bruto <= 3856.94:
            return salario_bruto * 0.12
        else:
            return salario_bruto * 0.14
    
    def calcular_salario_liquido(salario_bruto: float, outros_descontos: float = 0.0) -> float:
        inss = calcular_inss(salario_bruto)
        return salario_bruto - inss - outros_descontos

class TestCalcularINSS:
    """Testes para a função calcular_inss"""
    
    def test_salario_ate_1320(self):
        """Testa cálculo para salário até R$ 1.320,00 (7.5%)"""
        resultado = calcular_inss(1000.00)
        assert resultado == 75.00
        assert resultado == pytest.approx(75.00, rel=1e-2)
    
    def test_salario_ate_2571(self):
        """Testa cálculo para salário até R$ 2.571,29 (9%)"""
        resultado = calcular_inss(2000.00)
        assert resultado == 180.00
        assert resultado == pytest.approx(180.00, rel=1e-2)
    
    def test_salario_ate_3856(self):
        """Testa cálculo para salário até R$ 3.856,94 (12%)"""
        resultado = calcular_inss(3000.00)
        assert resultado == 360.00
        assert resultado == pytest.approx(360.00, rel=1e-2)
    
    def test_salario_acima_3856(self):
        """Testa cálculo para salário acima de R$ 3.856,94 (14%)"""
        resultado = calcular_inss(5000.00)
        assert resultado == 700.00
        assert resultado == pytest.approx(700.00, rel=1e-2)
    
    def test_salario_negativo(self):
        """Testa erro para salário negativo"""
        with pytest.raises(ValueError, match="Salário não pode ser negativo"):
            calcular_inss(-100.00)
    
    def test_salario_zero(self):
        """Testa cálculo para salário zero"""
        resultado = calcular_inss(0.00)
        assert resultado == 0.00
    
    def test_salario_limite_inferior_1320(self):
        """Testa valor limite inferior da primeira faixa"""
        resultado = calcular_inss(1320.00)
        assert resultado == pytest.approx(99.00, rel=1e-2)
    
    def test_salario_limite_superior_1320(self):
        """Testa valor limite superior da primeira faixa"""
        resultado = calcular_inss(1320.01)
        assert resultado == pytest.approx(118.80, rel=1e-2)

class TestCalcularSalarioLiquido:
    """Testes para a função calcular_salario_liquido"""
    
    def test_salario_liquido_sem_outros_descontos(self):
        """Testa cálculo sem outros descontos"""
        resultado = calcular_salario_liquido(2000.00)
        inss_esperado = 180.00
        salario_liquido_esperado = 2000.00 - inss_esperado
        assert resultado == pytest.approx(salario_liquido_esperado, rel=1e-2)
    
    def test_salario_liquido_com_outros_descontos(self):
        """Testa cálculo com outros descontos"""
        resultado = calcular_salario_liquido(2000.00, 100.00)
        inss_esperado = 180.00
        salario_liquido_esperado = 2000.00 - inss_esperado - 100.00
        assert resultado == pytest.approx(salario_liquido_esperado, rel=1e-2)
    
    def test_salario_liquido_zero(self):
        """Testa cálculo para salário zero"""
        resultado = calcular_salario_liquido(0.00)
        assert resultado == 0.00
    
    def test_outros_descontos_negativos(self):
        """Testa com outros descontos negativos (bônus)"""
        resultado = calcular_salario_liquido(2000.00, -100.00)
        inss_esperado = 180.00
        salario_liquido_esperado = 2000.00 - inss_esperado + 100.00
        assert resultado == pytest.approx(salario_liquido_esperado, rel=1e-2)

# Fixtures para reutilização
@pytest.fixture
def salarios_teste():
    """Fixture com salários para testes"""
    return [1000.00, 2000.00, 3000.00, 5000.00]

@pytest.fixture
def descontos_teste():
    """Fixture com descontos para testes"""
    return [0.00, 100.00, 200.00, -50.00]

def test_integracao_calculo_completo(salarios_teste, descontos_teste):
    """Teste de integração do cálculo completo"""
    for salario in salarios_teste:
        for desconto in descontos_teste:
            if salario >= 0:  # Evita erro de salário negativo
                inss = calcular_inss(salario)
                liquido = calcular_salario_liquido(salario, desconto)
                
                # Verifica se o cálculo está correto
                assert liquido == pytest.approx(salario - inss - desconto, rel=1e-2)
                assert inss >= 0  # INSS nunca pode ser negativo
                assert liquido <= salario  # Salário líquido nunca pode ser maior que o bruto`;
  }

  /**
   * Simula execução de testes
   */
  private simulateTestExecution(sourceCode: string, testCode: string): TestExecutionResult {
    // Simula resultados de testes baseados no código
    const totalTests = this.countTestFunctions(testCode);
    const passedTests = Math.floor(totalTests * 0.95); // 95% passam
    const failedTests = totalTests - passedTests;
    
    return {
      totalTests,
      passedTests,
      failedTests,
      skippedTests: 0,
      executionTime: 0,
      coverage: 95,
      testOutput: `collected ${totalTests} items

test_calcular_inss.py::TestCalcularINSS::test_salario_ate_1320 PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_ate_2571 PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_ate_3856 PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_acima_3856 PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_negativo PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_zero PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_limite_inferior_1320 PASSED
test_calcular_inss.py::TestCalcularINSS::test_salario_limite_superior_1320 PASSED
test_calcular_salario_liquido.py::TestCalcularSalarioLiquido::test_salario_liquido_sem_outros_descontos PASSED
test_calcular_salario_liquido.py::TestCalcularSalarioLiquido::test_salario_liquido_com_outros_descontos PASSED
test_calcular_salario_liquido.py::TestCalcularSalarioLiquido::test_salario_liquido_zero PASSED
test_calcular_salario_liquido.py::TestCalcularSalarioLiquido::test_outros_descontos_negativos PASSED
test_integracao.py::test_integracao_calculo_completo PASSED

============================== ${totalTests} passed, ${failedTests} failed in 2.34s ==============================`,
      failures: failedTests > 0 ? 'Alguns testes falharam devido a problemas de configuração do ambiente.' : undefined
    };
  }

  /**
   * Conta o número de funções de teste no código
   */
  private countTestFunctions(testCode: string): number {
    const testMatches = testCode.match(/def test_/g);
    return testMatches ? testMatches.length : 0;
  }

  /**
   * Configura o serviço
   */
  configure(config: Partial<CodeLiftConfig>): void {
    this.config = { ...this.config, ...config };
    this.guardrails = this.config.guardrails;
  }

  /**
   * Obtém a configuração atual
   */
  getConfig(): CodeLiftConfig {
    return { ...this.config };
  }
}
