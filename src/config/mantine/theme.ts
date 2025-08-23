import {
  colorsTuple,
  createTheme,
  type MantineColorsTuple,
  rem,
  // Button,
  // TextInput,
  // PasswordInput,
  // Text,
} from "@mantine/core";

// import buttonClasses from "@/styles/Button.module.css";
// import inputClasses from "@/styles/Input.module.css";
// import textClasses from "@/styles/Text.module.css";

const brand: MantineColorsTuple = [
  "#E3F5FF", // 0 - lightest shade of primary
  "#B8E4FF", // 1
  "#8DD3FF", // 2
  "#62C2FF", // 3
  "#37B1FF", // 4
  "#2DBCFF", // 5 - primary
  "#2496CC", // 6
  "#1A7099", // 7
  "#114A66", // 8
  "#092533", // 9 - darkest shade of primary
];

const secondary: MantineColorsTuple = [
  "#F0FAFF", // 0 - lightest shade of secondary
  "#D9F2FF", // 1
  "#C2EAFF", // 2
  "#ABE2FF", // 3
  "#94DAFF", // 4
  "#9FE0FF", // 5 - secondary
  "#7FB3CC", // 6
  "#5F8699", // 7
  "#3F5966", // 8
  "#202C33", // 9 - darkest shade of secondary
];

export const theme = createTheme({
  primaryColor: "main",
  primaryShade: 5,
  fontFamily: "Poppins, sans-serif",
  cursorType: "pointer",
  defaultRadius: "xs",

  colors: {
    main: colorsTuple("#EF8600"),
    brand,
    secondary,
  },

  radius: {
    xs: rem("4px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },

  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
  },

  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: {
        fontSize: rem("36px"),
        lineHeight: rem("44px"),
        fontWeight: "600",
      },
      h2: {
        fontSize: rem("30px"),
        lineHeight: rem("38px"),
        fontWeight: "600",
      },
      h3: {
        fontSize: rem("24px"),
        lineHeight: rem("32px"),
        fontWeight: "600",
      },
      h4: {
        fontSize: rem("20px"),
        lineHeight: rem("30px"),
        fontWeight: "600",
      },
    },
  },

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1400px",
  },

  // components: {
  //   Button: Button.extend({ classNames: buttonClasses }),
  //   TextInput: TextInput.extend({ classNames: inputClasses }),
  //   PasswordInput: PasswordInput.extend({ classNames: inputClasses }),
  //   Text: Text.extend({ classNames: textClasses }),
  // },
});
