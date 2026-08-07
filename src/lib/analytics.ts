export const trackEvent = (eventName: string, label: string) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: "Contact",
      event_label: label,
    });
  }
};
