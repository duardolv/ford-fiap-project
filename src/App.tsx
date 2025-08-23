// import { Amplify } from "aws-amplify";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import AuthWrapper from "@/components/AuthWrapper";
// import config from "@/config/amplify";
import AppRouter from "@/routes/router.tsx";
import { theme, cssVariablesResolver } from "@/config/mantine";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();
// Amplify.configure(config);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeScript defaultColorScheme="light" />

      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        stylesTransform={emotionTransform}
        defaultColorScheme="light"
        withCssVariables
      >
        <MantineEmotionProvider>
          <AuthWrapper>
            <AppRouter />
            <ToastContainer />
          </AuthWrapper>
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
