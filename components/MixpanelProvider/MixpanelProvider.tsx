"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const TOKEN: string = process.env.MIXPANEL_TOKEN || "";

export default function MixpanelProvider() {
  useEffect(() => {
    mixpanel.init(TOKEN, { debug: true, ignore_dnt: true });

    mixpanel.track("Page View", { page: "portfolio" });
  }, []);

  return null;
}
