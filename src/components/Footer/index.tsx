import { Anchor, Group, Stack, Text } from "@mantine/core";
import FordLogo from "@/logo";

export default function FooterBar() {
  return (
    <Stack
      style={{
        width: "100%",
        padding: "1.5rem 0",
        borderTop: "1px solid rgba(0,52,120,0.15)",
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      <Stack align="center" gap="sm">
        <FordLogo size={36} />
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} Ford Code Translator. Todos os direitos reservados.
        </Text>

        <Group gap="md">
          <Anchor href="/features" c="blue">Funcionalidades</Anchor>
          <Anchor href="/about" c="blue">Sobre</Anchor>
          <Anchor href="/roadmap" c="blue">Roadmap</Anchor>
          <Anchor href="/help" c="blue">Suporte</Anchor>
        </Group>
      </Stack>
    </Stack>
  );
}
