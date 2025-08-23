import { Avatar, Group, Text } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "@/components/HeroSection";

export default function About() {
  return (
    <Layout>
      <HeroSection
        title="Sobre o Projeto"
        description="Nossa missão é modernizar o legado para acelerar a inovação."
      />

      <Group mt="xl">
        <Avatar src="https://i.pravatar.cc/150" size="xl" radius="xl" />
        <Text size="lg">
          Criado por especialistas em engenharia de software com foco em
          modernização de sistemas legados.
        </Text>
      </Group>
    </Layout>
  );
}
