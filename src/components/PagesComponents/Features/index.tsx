import { SimpleGrid } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";


export default function Features() {
  return (
    <Layout>
      <HeroSection
        title="Funcionalidades"
        description="Descubra tudo o que nosso tradutor de código legado pode oferecer para modernizar seus projetos."
      />

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" mt="xl">
        <FeatureCard
          title="Tradução Automática"
          description="Converta código legado em JavaScript moderno com um clique."
        />
        <FeatureCard
          title="Testes Unitários Gerados por IA"
          description="Ganhe tempo e qualidade com testes automatizados prontos."
        />
        <FeatureCard
          title="Integração Contínua"
          description="Facilmente integrável em pipelines CI/CD."
        />
      </SimpleGrid>
    </Layout>
  );
}
