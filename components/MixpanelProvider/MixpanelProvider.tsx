"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelProvider() {
  useEffect(() => {
    if (process.env.MIXPANEL_TOKEN) {
      mixpanel.init(process.env.MIXPANEL_TOKEN, {
        ignore_dnt: true,
      });
    }

    mixpanel.track("Page View", { page: "portfolio" });
  }, []);

  return null;
}
