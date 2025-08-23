import { IconChevronDown } from "@tabler/icons-react";
import {
  Burger,
  Button,
  Center,
  Container,
  Group,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FordLogo from "@/logo";
import classes from "./Header.module.css";

const links = [
  { link: "/features", label: "Funcionalidades" },
  {
    link: "#learn",
    label: "Aprender",
    links: [
      { link: "/examples", label: "Exemplos de Tradução" },
      { link: "/guide", label: "Guia de Uso" },
      { link: "/best-practices", label: "Boas Práticas" },
    ],
  },
  { link: "/about", label: "Sobre" },
  { link: "/roadmap", label: "Roadmap" },
  {
    link: "#support",
    label: "Suporte",
    links: [
      { link: "/faq", label: "Perguntas Frequentes" },
      { link: "/demo", label: "Agendar Demonstração" },
      { link: "/help", label: "Central de Ajuda" },
    ],
  },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component="a" href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="1800px">
        <div className={classes.inner}>
          <FordLogo size={100} />

          <Group gap="md" visibleFrom="md">
            {items}
            <Button
              radius="md"
              gradient={{ from: "#003478", to: "blue" }}
              variant="gradient"
              size="sm"
              component="a"
              href="/"
            >
              Traduzir Agora
            </Button>
          </Group>

          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
        </div>
      </Container>
    </header>
  );
}
