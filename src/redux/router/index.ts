import Router from "next/router";

export function addRouteCompleteEvent(fx: (url) => void) {
  onRouteCompleteEvents.push(fx);
}

const onRouteCompleteEvents = [];

Router.events.on("routeChangeComplete", (err, url) => {
  onRouteCompleteEvents.forEach((fx) => fx(url));
});
