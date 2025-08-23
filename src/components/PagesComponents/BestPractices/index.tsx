import { List, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Layout from "@/layouts/CommonPages";
import HeroSection from "@/components/HeroSection";

export default function BestPractices() {
  return (
    <Layout>
      <HeroSection
        title="Boas Práticas"
        description="Melhore ainda mais a qualidade do código modernizado seguindo estas práticas."
      />

      <List
        spacing="md"
        size="lg"
        mt="xl"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item>Organize o código em módulos reutilizáveis</List.Item>
        <List.Item>Use testes automatizados como base de qualidade</List.Item>
        <List.Item>Aplique ferramentas de lint e formatação</List.Item>
        <List.Item>Integre o código em pipelines CI/CD</List.Item>
      </List>
    </Layout>
  );
}
