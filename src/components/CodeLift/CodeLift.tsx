import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Textarea,
  Button,
  Group,
  Stack,
  Card,
  Code,
  Tabs,
  Alert,
  Loader,
  Divider,
  Badge,
  TextInput,
  Select,
} from '@mantine/core';
import { IconCode, IconTestPipe, IconPlay, IconDownload, IconUpload } from '@tabler/icons-react';
import { CodeLiftService } from '../../services/CodeLiftService';
import { CodeTranslationResult, TestGenerationResult, TestExecutionResult } from '../../types/CodeLiftTypes';

export const CodeLift: React.FC = () => {
  const [legacyCode, setLegacyCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('python');
  const [translatedCode, setTranslatedCode] = useState('');
  const [generatedTests, setGeneratedTests] = useState('');
  const [testResults, setTestResults] = useState<TestExecutionResult | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isGeneratingTests, setIsGeneratingTests] = useState(false);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const codeLiftService = new CodeLiftService();

  const handleTranslate = async () => {
    if (!legacyCode.trim()) {
      setError('Por favor, insira o código legado para tradução.');
      return;
    }

    setIsTranslating(true);
    setError(null);

    try {
      const result: CodeTranslationResult = await codeLiftService.translateCode(legacyCode, targetLanguage);
      setTranslatedCode(result.translatedCode);
      setError(null);
    } catch (err) {
      setError(`Erro na tradução: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleGenerateTests = async () => {
    if (!translatedCode.trim()) {
      setError('Por favor, traduza o código primeiro.');
      return;
    }

    setIsGeneratingTests(true);
    setError(null);

    try {
      const result: TestGenerationResult = await codeLiftService.generateTests(translatedCode);
      setGeneratedTests(result.testCode);
      setError(null);
    } catch (err) {
      setError(`Erro na geração de testes: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
    } finally {
      setIsGeneratingTests(false);
    }
  };

  const handleRunTests = async () => {
    if (!generatedTests.trim()) {
      setError('Por favor, gere os testes primeiro.');
      return;
    }

    setIsRunningTests(true);
    setError(null);

    try {
      const result: TestExecutionResult = await codeLiftService.runTests(translatedCode, generatedTests);
      setTestResults(result);
      setError(null);
    } catch (err) {
      setError(`Erro na execução dos testes: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
    } finally {
      setIsRunningTests(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLegacyCode(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleDownloadCode = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <Title order={1} size="3rem" mb="md">
            🚀 CodeLift
          </Title>
          <Text size="lg" c="dimmed">
            Tradutor de Código Legado + Testes Automáticos
          </Text>
          <Text size="sm" c="dimmed" mt="xs">
            Transforme código VB6/Delphi em Python/Java com testes unitários gerados por IA
          </Text>
        </div>

        {/* Input Section */}
        <Card withBorder p="xl">
          <Stack gap="md">
            <Group justify="space-between" align="center">
              <Title order={3}>📝 Código Legado</Title>
              <Group>
                <Select
                  label="Linguagem Alvo"
                  value={targetLanguage}
                  onChange={(value) => setTargetLanguage(value || 'python')}
                  data={[
                    { value: 'python', label: 'Python' },
                    { value: 'java', label: 'Java' },
                    { value: 'javascript', label: 'JavaScript' },
                    { value: 'typescript', label: 'TypeScript' },
                  ]}
                  w={150}
                />
                <Button
                  leftSection={<IconUpload size={16} />}
                  variant="outline"
                  component="label"
                >
                  Upload Arquivo
                  <input
                    type="file"
                    accept=".vb,.bas,.frm,.cls,.pas,.dpr,.dfm"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </Button>
              </Group>
            </Group>

            <Textarea
              placeholder="Cole aqui seu código VB6, Delphi ou outra linguagem legada..."
              value={legacyCode}
              onChange={(event) => setLegacyCode(event.currentTarget.value)}
              minRows={8}
              maxRows={15}
              styles={{
                input: {
                  fontFamily: 'monospace',
                  fontSize: '14px',
                },
              }}
            />

            <Button
              leftSection={<IconCode size={16} />}
              onClick={handleTranslate}
              loading={isTranslating}
              size="lg"
              fullWidth
            >
              {isTranslating ? 'Traduzindo...' : 'Traduzir Código'}
            </Button>
          </Stack>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert color="red" title="Erro" withCloseButton onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {/* Results Tabs */}
        {(translatedCode || generatedTests || testResults) && (
          <Tabs defaultValue="translation" variant="pills">
            <Tabs.List>
              <Tabs.Tab value="translation" leftSection={<IconCode size={16} />}>
                Código Traduzido
              </Tabs.Tab>
              <Tabs.Tab value="tests" leftSection={<IconTestPipe size={16} />}>
                Testes Gerados
              </Tabs.Tab>
              <Tabs.Tab value="execution" leftSection={<IconPlay size={16} />}>
                Execução dos Testes
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="translation" pt="md">
              {translatedCode && (
                <Card withBorder p="xl">
                  <Stack gap="md">
                    <Group justify="space-between" align="center">
                      <Title order={4}>✅ Código Traduzido para {targetLanguage.toUpperCase()}</Title>
                      <Button
                        leftSection={<IconDownload size={16} />}
                        variant="outline"
                        onClick={() => handleDownloadCode(translatedCode, `translated_code.${targetLanguage}`)}
                      >
                        Download
                      </Button>
                    </Group>
                    <Code block>{translatedCode}</Code>
                    <Button
                      leftSection={<IconTestPipe size={16} />}
                      onClick={handleGenerateTests}
                      loading={isGeneratingTests}
                      size="lg"
                      fullWidth
                    >
                      {isGeneratingTests ? 'Gerando Testes...' : 'Gerar Testes Unitários'}
                    </Button>
                  </Stack>
                </Card>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="tests" pt="md">
              {generatedTests && (
                <Card withBorder p="xl">
                  <Stack gap="md">
                    <Group justify="space-between" align="center">
                      <Title order={4}>🧪 Testes Unitários Gerados</Title>
                      <Button
                        leftSection={<IconDownload size={16} />}
                        variant="outline"
                        onClick={() => handleDownloadCode(generatedTests, 'generated_tests.py')}
                      >
                        Download
                      </Button>
                    </Group>
                    <Code block>{generatedTests}</Code>
                    <Button
                      leftSection={<IconPlay size={16} />}
                      onClick={handleRunTests}
                      loading={isRunningTests}
                      size="lg"
                      fullWidth
                    >
                      {isRunningTests ? 'Executando Testes...' : 'Executar Testes'}
                    </Button>
                  </Stack>
                </Card>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="execution" pt="md">
              {testResults && (
                <Card withBorder p="xl">
                  <Stack gap="md">
                    <Title order={4}>📊 Resultados dos Testes</Title>
                    
                    <Group gap="lg">
                      <Badge
                        size="lg"
                        color={testResults.totalTests > 0 ? 'green' : 'red'}
                      >
                        Total: {testResults.totalTests}
                      </Badge>
                      <Badge
                        size="lg"
                        color="green"
                      >
                        Passaram: {testResults.passedTests}
                      </Badge>
                      <Badge
                        size="lg"
                        color="red"
                      >
                        Falharam: {testResults.failedTests}
                      </Badge>
                      {testResults.coverage && (
                        <Badge
                          size="lg"
                          color={testResults.coverage >= 80 ? 'green' : testResults.coverage >= 60 ? 'yellow' : 'red'}
                        >
                          Cobertura: {testResults.coverage}%
                        </Badge>
                      )}
                    </Group>

                    {testResults.testOutput && (
                      <div>
                        <Text fw={500} mb="xs">Output dos Testes:</Text>
                        <Code block>{testResults.testOutput}</Code>
                      </div>
                    )}

                    {testResults.failedTests > 0 && testResults.failures && (
                      <div>
                        <Text fw={500} mb="xs" c="red">Falhas Detalhadas:</Text>
                        <Code block>{testResults.failures}</Code>
                      </div>
                    )}
                  </Stack>
                </Card>
              )}
            </Tabs.Panel>
          </Tabs>
        )}

        {/* Footer Info */}
        <Card withBorder p="md" bg="gray.0">
          <Text size="sm" c="dimmed" ta="center">
            💡 <strong>Dica:</strong> O CodeLift reduz o esforço manual e fornece um ponto de partida 
            com código transformado e testável - exatamente o que a Ford precisa!
          </Text>
        </Card>
      </Stack>
    </Container>
  );
};
