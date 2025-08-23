import {
  AppShell,
  Container,
  Divider,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { HeaderSection } from "./HeaderSection";
import { LegacyCodeInput } from "./LegacyCodeInput";
import { ResultTabs } from "./ResultsTabs";

function DashboardComponents() {
  return (
    <AppShell padding="md">
      <Container size="xl" py="xl">
        <Stack gap="lg">
          <HeaderSection />

          <Divider my="md" label="Área de trabalho" labelPosition="center" />

          <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }} spacing="lg">
            <LegacyCodeInput />
            <ResultTabs
              modernCode={`function modernExample() {
  return "Hello World!";
}`}
              testCode={`describe("modernExample", () => {
  it("should return Hello World!", () => {
    expect(modernExample()).toBe("Hello World!");
  });
});`}
            />
          </SimpleGrid>
        </Stack>
      </Container>

    </AppShell>
  );
}

export default DashboardComponents;
