import { api } from "../api";

interface Props {
  idToken?: string;
}

const setAuthorizationHeader = ({ idToken }: Props) => {
  api.defaults.headers.common = {
    ...api.defaults.headers.common,
    authorization: `Bearer ${idToken}`,
  };
};

export default setAuthorizationHeader;
