import {
  Theme,
  createPlugin,
  injectStyles
} from "./chunk-OG7LGAAX.js";
import "./chunk-5KA7BMW3.js";
import "./chunk-X44R5TYK.js";
import "./chunk-REJARLXV.js";

// node_modules/@fullcalendar/bootstrap/internal.js
var BootstrapTheme = class extends Theme {
};
BootstrapTheme.prototype.classes = {
  root: "fc-theme-bootstrap",
  table: "table-bordered",
  tableCellShaded: "table-active",
  buttonGroup: "btn-group",
  button: "btn btn-primary",
  buttonActive: "active",
  popover: "popover",
  popoverHeader: "popover-header",
  popoverContent: "popover-body"
};
BootstrapTheme.prototype.baseIconClass = "fa";
BootstrapTheme.prototype.iconClasses = {
  close: "fa-times",
  prev: "fa-chevron-left",
  next: "fa-chevron-right",
  prevYear: "fa-angle-double-left",
  nextYear: "fa-angle-double-right"
};
BootstrapTheme.prototype.rtlIconClasses = {
  prev: "fa-chevron-right",
  next: "fa-chevron-left",
  prevYear: "fa-angle-double-right",
  nextYear: "fa-angle-double-left"
};
BootstrapTheme.prototype.iconOverrideOption = "bootstrapFontAwesome";
BootstrapTheme.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome";
BootstrapTheme.prototype.iconOverridePrefix = "fa-";
var css_248z = ".fc-theme-bootstrap a:not([href]){color:inherit}.fc-theme-bootstrap .fc-more-link:hover{text-decoration:none}";
injectStyles(css_248z);

// node_modules/@fullcalendar/bootstrap/index.js
var index = createPlugin({
  name: "@fullcalendar/bootstrap",
  themeClasses: {
    bootstrap: BootstrapTheme
  }
});
export {
  index as default
};
//# sourceMappingURL=@fullcalendar_bootstrap.js.map
