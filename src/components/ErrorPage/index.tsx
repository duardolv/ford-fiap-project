import { Flex, Title, Text, Anchor, Group, Button } from "@mantine/core";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@/routes/routes";

interface Props {
  onReset?: () => void;
}

export function ErrorPage({ onReset }: Props) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate(RoutePaths.auth.signIn);
  };

  const handleDashboardNavigation = () => {
    onReset?.();
    navigate(RoutePaths.dashboard);
  };

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      h="100vh"
      mx="1rem"
    >
      <Title size={64} fw={500}>
        Erro
      </Title>
      <Text size="20px" fw={500} c="#434748" ta="center" mb="1.5rem">
        Se você tiver alguma dúvida, entre em contato conosco <br />{" "}
        <Anchor href="mailto:support@cookiepal.io" underline="always" c="main">
          suporte@ford.com
        </Anchor>
      </Text>
      <Group gap={30} mb="1.5rem">
        <Button variant="filled" onClick={handleLogout}>
          Sair
        </Button>
        <Button variant="filled" onClick={handleDashboardNavigation} w={150}>
          Ir para o Dashboard
        </Button>
      </Group>
    </Flex>
  );
}
