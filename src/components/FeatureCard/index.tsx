import { Card, Text, Title } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card shadow="md" radius="lg" p="xl" withBorder>
      <IconCode size={32} stroke={1.5} />
      <Title order={3} mt="md">
        {title}
      </Title>
      <Text mt="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  );
}
