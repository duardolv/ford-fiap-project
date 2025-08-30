export interface RoutePathsType {
  readonly [key: string]: string | RoutePathsType;
}

export type LeafRoutes<T> = T extends string
  ? T
  : { [K in keyof T]: LeafRoutes<T[K]> }[keyof T];

export const RoutePaths = Object.freeze({
  dashboard: "/",
  auth: Object.freeze({
    signUp: "/sign-up",
    signIn: "/sign-in",
    forgotPassword: "/forgot-password",
  }),
  features: "/features",
  codeLift: "/code-lift",
  learn: {
    main: "#learn",
    examples: "/examples",
    guide: "/guide",
    bestPractices: "/best-practices",
  },
  about: "/about",
  roadmap: "/roadmap",
  support: {
    main: "#support",
    faq: "/faq",
    demo: "/demo",
    help: "/help",
  },
}) satisfies RoutePathsType;

export type AllPaths = LeafRoutes<typeof RoutePaths>;
