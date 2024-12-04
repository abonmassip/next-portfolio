"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelProvider() {
  useEffect(() => {
    mixpanel.init("c84cb8f4e192569bac70517d09c46c7b", {
      ignore_dnt: true,
    });

    mixpanel.track("Page View", { page: "portfolio" });
  }, []);

  return null;
}
