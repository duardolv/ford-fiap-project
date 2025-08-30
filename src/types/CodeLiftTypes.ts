export interface CodeTranslationResult {
  translatedCode: string;
  sourceLanguage: string;
  targetLanguage: string;
  translationTime: number;
  confidence: number;
}

export interface TestGenerationResult {
  testCode: string;
  testFramework: string;
  testCount: number;
  generationTime: number;
  coverage: number;
}

export interface TestExecutionResult {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  executionTime: number;
  coverage?: number;
  testOutput?: string;
  failures?: string;
  errorDetails?: string;
}

export interface CodeAnalysis {
  complexity: number;
  linesOfCode: number;
  functions: string[];
  variables: string[];
  imports: string[];
  warnings: string[];
}

export interface TranslationPrompt {
  sourceCode: string;
  sourceLanguage: string;
  targetLanguage: string;
  requirements: string[];
}

export interface TestPrompt {
  sourceCode: string;
  targetLanguage: string;
  testFramework: string;
  testRequirements: string[];
}

export interface GuardrailConfig {
  maxInputSize: number; // em caracteres
  maxExecutionTime: number; // em segundos
  allowedLanguages: string[];
  blockedKeywords: string[];
  sanitizationRules: string[];
}

export interface CodeLiftConfig {
  aiProvider: 'openai' | 'ollama' | 'local';
  apiKey?: string;
  modelName: string;
  temperature: number;
  maxTokens: number;
  guardrails: GuardrailConfig;
}
