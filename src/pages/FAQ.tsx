import { Accordion } from "@mantine/core";
import Layout from '@/layouts/CommonPages';
import HeroSection from "../components/HeroSection";
import FAQItem from "../components/FAQItem";

export default function FAQPage() {
  return (
    <Layout>
      <HeroSection
        title="Perguntas Frequentes"
        description="Dúvidas comuns sobre o tradutor de código."
      />

      <Accordion mt="xl">
        <FAQItem
          question="Quais linguagens são suportadas?"
          answer="Atualmente, suportamos JavaScript e TypeScript."
        />
        <FAQItem
          question="Os testes são confiáveis?"
          answer="Os testes seguem boas práticas e podem ser refinados pela equipe."
        />
      </Accordion>
    </Layout>
  );
}
