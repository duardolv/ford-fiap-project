import { Group, Highlight, rem, Text, ThemeIcon, Title } from "@mantine/core";
import FordLogo from "@/logo";

export function HeaderSection() {
  return (
    <>
      <Group justify="center">
        <ThemeIcon radius="xl" variant="transparent" size={100}>
          <FordLogo size={100} />
        </ThemeIcon>
      </Group>

      <Title
        order={1}
        ta="center"
        fw={900}
        style={{
          fontSize: rem(38),
          color: "#003478",
        }}
      >
        Ford <Highlight highlight="Code Translator">Code Translator</Highlight>
      </Title>

      <Text ta="center" size="lg" c="dimmed" maw={600} mx="auto">
        Converta <strong>códigos legados</strong> em versões modernas em{" "}
        <span style={{ color: "#003478", fontWeight: 700 }}>JavaScript</span> com
        testes automatizados criados por IA.
      </Text>
    </>
  );
}
