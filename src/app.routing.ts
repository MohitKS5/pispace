import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './app/components/home/home.component';
import {AboutComponent} from './app/components/about/about.component';
import {EventsComponent} from './app/components/events/events.component';
import {AppComponent} from './app/app.component';
import {TechshikhsaComponent} from './app/components/events/techshikhsa/techshikhsa.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'events',
          component: EventsComponent,
        },
        {
          path: 'techshiksha',
          component: TechshikhsaComponent
        }
      ],
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RoutingModule {
}
