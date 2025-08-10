import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemeberList } from '../features/members/memeber-list/memeber-list';
import { MemeberDetailed } from '../features/members/memeber-detailed/memeber-detailed';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';

export const routes: Routes = [
    {path:'', component: Home },
    {path:'members', component: MemeberList },
    {path:'members/:id', component: MemeberDetailed },
    {path:'lists', component: Lists },
    {path:'messages', component: Messages },
    {path:'**', component: Home },//we dont have (not found) component yet so we just write Home
    
];
