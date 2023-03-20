import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faCalendarDays, faCircleInfo, faTicket, faArrowRightFromBracket, faUser, faFire, faLocationDot, faX, faStar, faCheck, faPhone, faPlus, faMinus, faTriangleExclamation, faChartLine, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faTicket, faGear, faStar, faArrowRightFromBracket, faTriangleExclamation, faCalendarDays, faChartLine, faCircleInfo, faUser, faFire, faLocationDot, faX, faCheck, faPhone, faPlus, faMinus);

const app = createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')
