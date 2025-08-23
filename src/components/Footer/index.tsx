import {
  Anchor,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import FordLogo from "@/logo";

export default function FooterBar() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack w="100%" py={16}>
      <Stack align="center" gap="sm" h={100}>
        <FordLogo size={36} />
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} Ford Code Translator. Todos os direitos
          reservados.
        </Text>

        <Group gap="md" c={colorScheme === "dark" ? "#0072ce" : "main"}>
          <Anchor href="/features" c="inherit">
            Funcionalidades
          </Anchor>
          <Anchor href="/about" c="inherit">
            Sobre
          </Anchor>
          <Anchor href="/roadmap" c="inherit">
            Roadmap
          </Anchor>
          <Anchor href="/help" c="inherit">
            Suporte
          </Anchor>
        </Group>
      </Stack>
    </Stack>
  );
}
