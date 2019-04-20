import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LeadComponent } from '../../leads/lead.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthorizationCheckService } from 'app/interceptors/authorizationCheck';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthorizationCheckService]},
    { path: 'user-profile',   component: UserProfileComponent , canActivate: [AuthorizationCheckService]},
    { path: 'lead',     component: LeadComponent , canActivate: [AuthorizationCheckService]},
    { path: 'typography',     component: TypographyComponent , canActivate: [AuthorizationCheckService]},
    { path: 'icons',          component: IconsComponent , canActivate: [AuthorizationCheckService]},
    { path: 'maps',           component: MapsComponent , canActivate: [AuthorizationCheckService]},
    { path: 'notifications',  component: NotificationsComponent , canActivate: [AuthorizationCheckService]},
    { path: 'upgrade',        component: UpgradeComponent , canActivate: [AuthorizationCheckService]},
];
