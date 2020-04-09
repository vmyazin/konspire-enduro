define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"main-header\">\n  <a href=\"content\" class=\"access\">Skip to content</a>\n  <section class=\"header-wrapper\">\n    <h1>\n      <a href=\"/\"><img src=\"/assets/img/kd-logo.png\" width=\"460\" height=\"186\" alt=\"Konspire Design\"></a>\n      <div class=\"nav-toggle-wrapper hidden-lg\">\n        <a id=\"nav-toggle\" href=\"javascript:void(0)\"><span></span></a>          \n      </div>\n    </h1>\n    <nav class=\"main-nav hidden-sm hidden-xs\">\n      <ul>\n        <li><a id=\"nav-home\" href=\"/\">Home</a></li>\n        <li><a id=\"nav-about\" href=\"/about\">About</a></li>\n        <li><a id=\"nav-portfolio\" href=\"/portfolio\">Portfolio</a></li>\n        <li><a id=\"nav-contact\" href=\"/contact\">Contact</a></li>\n        <div id=\"nav-helper\" class=\"hidden-xs hidden-sm\"></div>\n      </ul>\n    </nav>\n    <div id=\"bg-helper\">&nbsp;</div>\n		\n  </section> <!-- /header-wrapper -->\n\n</header>\n<nav class=\"mobile-nav hidden-lg\">\n  <ul>\n    <li><a id=\"nav-home\" href=\"/index\">Home</a></li>\n    <li><a id=\"nav-about\" href=\"/about\">About</a></li>\n    <li><a id=\"nav-portfolio\" href=\"/portfolio\">Portfolio</a></li>\n    <li><a id=\"nav-contact\" href=\"mailto:vm@konspiredesign.com?Subject=Inquiry%20about%20web%20design\">Contact</a></li>\n  </ul>\n</nav>\n<div class=\"mobile-nav-overlay\"></div>\n<div class=\"wrapper\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"_contact-bubble"),depth0,{"name":"_contact-bubble","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true}); });