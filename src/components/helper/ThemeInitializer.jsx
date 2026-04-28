"use client";

import { useEffect } from "react";

const ThemeInitializer = ({ pathName }) => {
  useEffect(() => {
    document.cookie = `pathname=${pathName}; path=/; max-age=86400`;
  }, []);

  return null;
};

export default ThemeInitializer;
