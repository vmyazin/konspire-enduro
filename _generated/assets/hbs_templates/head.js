define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">\n  <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"global") : depth0)) != null ? lookupProperty(stack1,"site_title") : stack1), depth0))
    + " &ndash; "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page_settings") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</title>\n  <link rel=\"stylesheet\" href=\"/assets/css/reset.css\" type=\"text/css\" media=\"screen\" /> \n  <link rel=\"stylesheet\" href=\"/assets/css/main.css\" type=\"text/css\" media=\"screen\" />\n  <link rel=\"stylesheet\" href=\"/assets/css/tooltipster.css\" type=\"text/css\" media=\"screen\" />\n\n  <link rel='stylesheet' media='screen and (min-width: 701px) and (max-width: 900px)' href='/assets/css/medium.css' />\n  <link rel='stylesheet' media='screen and (min-width: 480px) and (max-width: 700px)' href='/assets/css/small.css' />\n  <link rel='stylesheet' media='screen and (max-width: 479px)' href='/assets/css/narrow.css' />\n\n  <!--[if IE]>\n  <script src=\"http://html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n  <![endif]-->\n\n  <!-- Set the viewport width to device width for mobile -->\n  <meta name=\"viewport\" content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi\" />\n  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n\n</head>";
},"useData":true}); });