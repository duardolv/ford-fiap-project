import { Timeline, Text } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "../components/HeroSection";

export default function GuidePage() {
  return (
    <Layout>
      <HeroSection
        title="Guia de Uso"
        description="Siga este passo a passo para modernizar seus códigos de forma eficiente."
      />

      <Timeline active={3} mt="xl">
        <Timeline.Item title="Upload do código">
          <Text c="dimmed">Envie o trecho legado que deseja traduzir.</Text>
        </Timeline.Item>
        <Timeline.Item title="Processamento">
          <Text c="dimmed">Nosso sistema analisa e prepara a tradução.</Text>
        </Timeline.Item>
        <Timeline.Item title="Código Moderno">
          <Text c="dimmed">Receba sua versão em JS moderna e otimizada.</Text>
        </Timeline.Item>
        <Timeline.Item title="Testes Automatizados">
          <Text c="dimmed">Obtenha testes unitários prontos para uso.</Text>
        </Timeline.Item>
      </Timeline>
    </Layout>
  );
}
