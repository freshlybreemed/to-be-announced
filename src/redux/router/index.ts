import Router from "next/router";

export function addRouteCompleteEvent(fx: (url: string) => void) {
  onRouteCompleteEvents.push(fx);
}

const onRouteCompleteEvents: ((url: string) => void)[] = [];

Router.events.on("routeChangeComplete", (err, url) => {
  if (err) return err;
  onRouteCompleteEvents.forEach((fx) => fx(url));
});
