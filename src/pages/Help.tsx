import { Text, Anchor } from "@mantine/core";
import Layout from "@/layouts/CommonPages";
import HeroSection from "../components/HeroSection";

export default function HelpPage() {
  return (
    <Layout>
      <HeroSection
        title="Central de Ajuda"
        description="Encontre respostas rápidas ou entre em contato com nosso time."
      />

      <Text mt="xl">
        Precisa de suporte? Acesse nossa{" "}
        <Anchor href="/faq">página de perguntas frequentes</Anchor> ou entre em
        contato pelo email suporte@ford.com.
      </Text>
    </Layout>
  );
}
