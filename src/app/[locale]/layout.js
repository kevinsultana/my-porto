"use client";

import { use, useEffect } from "react";

export default function LocaleLayout({ children, params }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "id";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return children;
}
