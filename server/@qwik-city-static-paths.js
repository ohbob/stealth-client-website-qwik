const staticPaths = new Set(["/_headers","/favicon.svg","/images/Client_setup.png","/images/Mastercard_logo.png","/images/Open_profile_setup.png","/images/Settings1.jpg","/images/Shard_setup.png","/images/Visa_Logo.png","/images/copyright.gif","/images/liqpay.png","/images/login.gif","/images/logo.gif","/images/lupa.gif","/images/paypal.png","/images/picher.jpg","/images/placeholder-1024x640.png","/images/profiles.png","/images/settings_common.png","/images/settings_journal.png","/images/settings_logs.png","/images/settings_script_engine.png","/images/settings_server.png","/images/spacer.gif","/images/stealth_logo.png","/images/tile.gif","/images/tile1.gif","/images/tile2.gif","/images/tile3.gif","/images/touch-icons/logo-192.png","/images/touch-icons/logo-800.png","/images/uo-205x246.jpg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/window.png"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };