"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelProvider() {
  useEffect(() => {
    const token = process.env.MIXPANEL_TOKEN!;
    mixpanel.init(token, {
      debug: true,
      ignore_dnt: true,
    });

    mixpanel.track("Page View", { page: "portfolio" });
  }, []);

  return null;
}
