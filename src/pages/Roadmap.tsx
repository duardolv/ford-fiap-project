import { Timeline } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "../components/HeroSection";

export default function RoadmapPage() {
  return (
    <Layout>
      <HeroSection
        title="Roadmap"
        description="Confira as próximas etapas e novidades que estamos preparando."
      />

      <Timeline active={1} mt="xl">
        <Timeline.Item title="Versão Beta">Tradução inicial + testes básicos</Timeline.Item>
        <Timeline.Item title="Integração com GitHub">Suporte a repositórios</Timeline.Item>
        <Timeline.Item title="Testes Avançados">Cobertura de casos complexos</Timeline.Item>
        <Timeline.Item title="Extensão VSCode">Tradução dentro do editor</Timeline.Item>
      </Timeline>
    </Layout>
  );
}
