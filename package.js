Package.describe({
  "summary": "Build mobile apps with simple HTML‚ CSS‚ and JS components."
});

Package.on_use(function (api) {

  api.add_files("lib/fonts/fontawesome-webfont.eot", "client");
  api.add_files("lib/fonts/fontawesome-webfont.svg", "client");
  api.add_files("lib/fonts/fontawesome-webfont.ttf", "client");
  api.add_files("lib/fonts/fontawesome-webfont.woff", "client");
  api.add_files("lib/fonts/FontAwesome.otf", "client");
  
  api.add_files("lib/css/font-awesome.min.css", "client");
  api.add_files("font-awesome-overrides.css", "client");
  
});