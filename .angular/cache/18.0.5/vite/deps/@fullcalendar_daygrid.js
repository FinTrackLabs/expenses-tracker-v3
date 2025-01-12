import {
  DayTableView,
  TableDateProfileGenerator
} from "./chunk-YJRY5CIR.js";
import "./chunk-T7UM46HU.js";
import {
  createPlugin
} from "./chunk-OG7LGAAX.js";
import "./chunk-5KA7BMW3.js";
import "./chunk-X44R5TYK.js";
import "./chunk-REJARLXV.js";

// node_modules/@fullcalendar/daygrid/index.js
var index = createPlugin({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: { years: 1 }
    }
  }
});
export {
  index as default
};
//# sourceMappingURL=@fullcalendar_daygrid.js.map
