Package.describe({
  "summary": "Build mobile apps with simple HTML‚ CSS‚ and JS components."
});

Package.on_use(function (api) {

  api.add_files("lib/fonts/ratchicons.eot", "client");
  api.add_files("lib/fonts/ratchicons.svg", "client");
  api.add_files("lib/fonts/ratchicons.ttf", "client");
  api.add_files("lib/fonts/ratchicons.woff", "client");
  
  api.add_files("lib/css/ratchet.min.css", "client");
  api.add_files("lib/js/ratchet.min.js", "client");

  api.add_files("ratchet-overrides.css", "client");
  
});