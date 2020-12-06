// import MainContainer from "../src/navigation/MainContainer"
//
// export default MainContainer

// pages/index.tsx
import React from "react";
import { GetServerSideProps } from "next";
import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";

// : { initialAuth: AuthTokens }

const Home = (props) => {
  const auth = useAuth(props.initialAuth);
  const { login, logout } = useAuthFunctions();

  return (
    <React.Fragment>
      {auth ? (
        <button type="button" onClick={() => logout()}>
          sign out
        </button>
      ) : (
        <React.Fragment>
          <button type="button" onClick={() => login()}>
            sign in
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);

  return { props: { initialAuth } };
};

export default Home;
