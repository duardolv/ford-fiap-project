import {
  Button,
  Card,
  Code,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Tabs,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconCode,
  IconCopy,
  IconDownload,
  IconChecks,
} from "@tabler/icons-react";
import styles from "../Dashboard.module.css";

interface ResultTabsProps {
  modernCode: string;
  testCode: string;
}

export function ResultTabs({ modernCode, testCode }: ResultTabsProps) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Card
      withBorder
      shadow="lg"
      radius="lg"
      p="lg"
      className={styles.hover_card}
    >
      <Stack gap="md">
        <Title order={4} c="blue.7">
          Resultado
        </Title>

        <Tabs defaultValue="modern" variant="outline" radius="md">
          <Tabs.List>
            <Tabs.Tab value="modern" leftSection={<IconCode size={16} />}>
              Código Moderno
            </Tabs.Tab>
            <Tabs.Tab value="tests" leftSection={<IconChecks size={16} />}>
              Testes
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="modern" pt="xs">
            <ScrollArea h={280} type="always">
              <Paper withBorder p="md" radius="md" bg="dark">
                <Code block>{modernCode}</Code>
              </Paper>
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="tests" pt="xs">
            <ScrollArea h={280} type="always">
              <Paper withBorder p="md" radius="md" bg="dark">
                <Code block>{testCode}</Code>
              </Paper>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>

        <Group justify="space-between" mt="sm">
          <Button
            color={colorScheme === "dark" ? "#0072ce" : "main"}
            variant="light"
            radius="md"
            leftSection={<IconCopy size={18} />}
          >
            Copiar
          </Button>
          <Button
            radius="md"
            gradient={{ from: "#003478", to: "blue" }}
            variant="gradient"
            leftSection={<IconDownload size={18} />}
          >
            Baixar
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
