import { Title, Text, Button, Stack } from "@mantine/core";

export default function HeroSection({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <Stack align="center" justify="center" py="xl" ta="center">
      <Title order={1}>{title}</Title>
      <Text size="lg" c="dimmed" maw={600}>
        {description}
      </Text>
      {cta && <Button size="lg">{cta}</Button>}
    </Stack>
  );
}
