import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";

export const Root = () => {
  //   if (isLoading) {
  //     return (
  //       <Box pos="relative" h="100vh">
  //         <LoadingOverlay
  //           visible={true}
  //           zIndex={1000}
  //           loaderProps={{ color: "main" }}
  //         />
  //       </Box>
  //     );
  //   }

  return (
    <Box bg="#FDFCFA" h="100vh">
      <Outlet />
    </Box>
  );
};
