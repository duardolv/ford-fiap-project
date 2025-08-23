import { Button, Stack, TextInput } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "@/components/HeroSection";

export default function Demo() {
  return (
    <Layout>
      <HeroSection
        title="Agendar Demonstração"
        description="Veja o tradutor de código em ação com um especialista."
      />

      <Stack mt="xl" maw={400} mx="auto">
        <TextInput label="Nome" placeholder="Seu nome" required />
        <TextInput label="Email" placeholder="seu@email.com" />
        <Button>Agendar</Button>
      </Stack>
    </Layout>
  );
}
