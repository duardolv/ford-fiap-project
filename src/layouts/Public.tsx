import { Navigate, Outlet, useLocation } from "react-router-dom";
import useStore from "@/stores";
import Header from "@/components/Header";
import { Container } from "@mantine/core";

function Public() {
  const { userData } = useStore();
  const { state } = useLocation();

  if (userData.isAuth)
    return (
      <Navigate
        to={(state?.from === "logout" ? "/" : state?.from) || "/"}
        replace
      />
    );

  return (
    <>
      <Header />
      <Container size='1800px'>
        <Outlet />
      </Container>
    </>
  );
}

export default Public;
