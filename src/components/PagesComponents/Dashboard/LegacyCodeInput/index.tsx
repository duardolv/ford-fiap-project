import { Button, Card, Stack, Textarea, Title } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import styles from '../Dashboard.module.css'

interface LegacyCodeInputProps {
  onTranslate?: () => void;
}

export function LegacyCodeInput({ onTranslate }: LegacyCodeInputProps) {
  return (
    <Card withBorder shadow="lg" radius="lg" p="lg" className={styles.hover_card}>
      <Stack gap="sm">
        <Title order={4} c="blue.7">
          Código Legado
        </Title>
        <Textarea
          minRows={14}
          placeholder="// Cole aqui seu código legado..."
          autosize
        />
        <Button
          fullWidth
          size="md"
          radius="md"
          gradient={{ from: "blue", to: "cyan" }}
          variant="gradient"
          leftSection={<IconCode size={18} />}
          onClick={onTranslate}
        >
          Traduzir código
        </Button>
      </Stack>
    </Card>
  );
}
