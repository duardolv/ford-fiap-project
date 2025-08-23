import { type CSSVariablesResolver, lighten } from "@mantine/core";

const generateCSSVariables = (colors: string[], id: string) => {
  const variables: Record<string, string> = {};

  colors.forEach((c, i) => {
    variables[`--color-${id}-${i}`] = c;
  });

  return variables;
};

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // typography
    "--font-family": theme.fontFamily,
    "--font-family-headings": theme.headings.fontFamily,

    // colors
    "--color-primary":
      theme.colors[theme.primaryColor][theme.primaryShade as number],
    "--color-text-primary": "var(--mantine-color-black)",
    "--color-text-secondary": "#696969",
    "--color-text-tertiary": "#BCBCBC",
    "--color-input-placeholder": "#9B95A8",
    // main
    "--color-main": theme.colors.main[theme.primaryShade as number],
    "--color-main-hover": lighten(
      theme.colors.main[theme.primaryShade as number],
      0.2
    ),
    // brand
    ...generateCSSVariables([...theme.colors.brand], "brand"),
    "--color-brand": theme.colors.brand[theme.primaryShade as number],
    // secondary
    ...generateCSSVariables([...theme.colors.secondary], "secondary"),
    "--color-secondary": theme.colors.secondary[theme.primaryShade as number],

    // radius
    "--radius-xs": theme.radius.xs,
    "--radius-sm": theme.radius.sm,
    "--radius-md": theme.radius.md,
    "--radius-lg": theme.radius.lg,
    "--radius-xl": theme.radius.xl,

    // font sizes
    "--font-size-xs": theme.fontSizes.xs,
    "--font-size-sm": theme.fontSizes.sm,
    "--font-size-md": theme.fontSizes.md,
    "--font-size-lg": theme.fontSizes.lg,
    "--font-size-xl": theme.fontSizes.xl,

    // headings sizes
    "--heading-h1-size": theme.headings.sizes.h1.fontSize,
    "--heading-h1-line-height": theme.headings.sizes.h1.lineHeight,
    "--heading-h2-size": theme.headings.sizes.h2.fontSize,
    "--heading-h2-line-height": theme.headings.sizes.h2.lineHeight,

    // shadows
    "--shadow-xs": theme.shadows.xs,
    "--shadow-sm": theme.shadows.sm,
    "--shadow-md": theme.shadows.md,
    "--shadow-lg": theme.shadows.lg,
    "--shadow-xl": theme.shadows.xl,
  },
  light: {
    // light mode vars
  },
  dark: {
    // dark mode vars
  },
});
