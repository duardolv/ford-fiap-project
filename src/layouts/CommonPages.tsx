import { AppShell, Container } from "@mantine/core";
import FooterBar from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      header={{ height: 70 }}
      footer={{ height: 135 }}
      padding="md"
    >

      <AppShell.Main>
        <Container size="lg">{children}</Container>
      </AppShell.Main>

      <AppShell.Footer>
        <FooterBar />
      </AppShell.Footer>
    </AppShell>
  );
}
