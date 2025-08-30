import {
  Group,
  Highlight,
  rem,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  Button,
} from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import FordLogo from "@/logo";

export function HeaderSection() {
  const { colorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

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
        c={colorScheme === "dark" ? "#0072ce" : "main"}
        style={{
          fontSize: rem(38),
        }}
      >
        Ford <Highlight highlight="Code Translator">Code Translator</Highlight>
      </Title>

      <Text ta="center" size="lg" c="dimmed" maw={600} mx="auto">
        Converta <strong>códigos legados</strong> em versões modernas em{" "}
        <Text span c={colorScheme === "dark" ? "#0072ce" : "main"} style={{  fontWeight: 700 }}>JavaScript</Text>{" "}
        com testes automatizados criados por IA.
      </Text>

      <Group justify="center" mt="md">
        <Button
          leftSection={<IconRocket size={16} />}
          size="lg"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
          onClick={() => navigate('/code-lift')}
        >
          🚀 Experimentar CodeLift
        </Button>
      </Group>
    </>
  );
}
