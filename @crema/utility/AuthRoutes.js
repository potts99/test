import React, { useCallback, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AppContext from "./AppContext";
import { useAuthToken } from "./AppHooks";
import PropTypes from "prop-types";

const AuthRoutes = ({ children }) => {
  const router = useRouter();
  const { query } = router;

  const { changeNavStyle, updateThemeMode, setRTL } = useContext(
    AppContext
  );
  useAuthToken();

  const updateNavStyle = useCallback(
    (navStyle) => {
      return changeNavStyle(navStyle);
    },
    [changeNavStyle]
  );
  const updateRTL = useCallback(
    (isRtl) => {
      return setRTL(isRtl);
    },
    [setRTL]
  );
  const setThemeMode = useCallback(
    (themMode) => {
      return updateThemeMode(themMode);
    },
    [updateThemeMode]
  );


  useEffect(() => {
    function handleQueryParams() {
      if (query.layout) {
        updateNavStyle(query.layout);
      }
      if (query.mode) {
        setThemeMode(query.mode);
      }
      if (query.rtl) {
        updateRTL(true);
      }
    }

    if (query) {
      handleQueryParams();
    }
  }, [updateNavStyle, updateRTL, setThemeMode]);
  return <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired
};
