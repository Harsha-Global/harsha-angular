import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { SipCalculator } from './sip-calculator/sip-calculator';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "about", component: About },
    { path: "contact", component: Contact },
    { path: "sip-calculator", component: SipCalculator},
    { path: "dashboard", component: Dashboard},
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
