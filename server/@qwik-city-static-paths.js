const staticPaths = new Set(["/_headers","/favicon.svg","/images/Client_setup.png","/images/Client_setup.png.webp","/images/Mastercard_logo.png","/images/Open_profile_setup.png","/images/Open_profile_setup.png.webp","/images/Settings1.jpg","/images/Settings1.jpg.jpg","/images/Shard_setup.png","/images/Shard_setup.png.jpg","/images/Visa_Logo.png","/images/copyright.gif","/images/liqpay.png","/images/login.gif","/images/logo.gif","/images/lupa.gif","/images/paypal.png","/images/picher.jpg","/images/placeholder-1024x640.png","/images/profiles.png","/images/profiles.png.jpg","/images/settings_common.png","/images/settings_common.png.webp","/images/settings_journal.png","/images/settings_journal.png.webp","/images/settings_logs.png","/images/settings_logs.png.webp","/images/settings_script_engine.png","/images/settings_script_engine.png.webp","/images/settings_server.png","/images/settings_server.png.webp","/images/spacer.gif","/images/stealth_logo.png","/images/tile.gif","/images/tile1.gif","/images/tile2.gif","/images/tile3.gif","/images/touch-icons/logo-192.png","/images/touch-icons/logo-800.png","/images/uo-205x246.jpg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml","/window.png","/window.png.webp","/window@916w.webp"]);
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