import { IconChevronDown } from "@tabler/icons-react";
import { Burger, Center, Container, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ForgLogo from "@/logo";
import classes from "./Header.module.css";

const links = [
  { link: "/about", label: "Recursos" },
  {
    link: "#1",
    label: "Aprender",
    links: [
      { link: "/docs", label: "Documentação" },
      { link: "/resources", label: "Materiais" },
      { link: "/community", label: "Comunidade" },
      { link: "/blog", label: "Blog" },
    ],
  },
  { link: "/about", label: "Sobre" },
  { link: "/pricing", label: "Preços" },
  {
    link: "#2",
    label: "Suporte",
    links: [
      { link: "/faq", label: "Perguntas frequentes" },
      { link: "/demo", label: "Agendar demonstração" },
      { link: "/forums", label: "Fórum" },
    ],
  },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
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
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
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
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="1800px">
        <div className={classes.inner}>
          <ForgLogo size={100} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
