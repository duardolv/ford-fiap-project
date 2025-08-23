import { CodeHighlight } from '@mantine/code-highlight';
import Layout from '@/layouts/CommonPages';
import HeroSection from "../components/HeroSection";

export default function ExamplesPage() {
  return (
    <Layout>
      <HeroSection
        title="Exemplos de Tradução"
        description="Veja como transformamos código legado em versões modernas de forma automática."
      />

      <CodeHighlight
        language="javascript"
        code={`// Código legado
function sum(a, b){
  return a + b;
}

// Código moderno
export const sum = (a, b) => a + b;`}
        mt="xl"
      />
    </Layout>
  );
}
