import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GtagModule, Gtag } from 'angular-gtag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { TechListComponent } from './tech-list/tech-list.component';
import { TechConfigPipe } from './tech-config.pipe';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    TechListComponent,
    TechConfigPipe,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    GtagModule.forRoot({ trackingId: 'UA-154148293-1', trackPageviews: true }),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'HomePage' }
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: { animation: 'ExperiencePage' }
      },
      {
        path: 'education',
        component: EducationComponent,
        data: { animation: 'EducationePage' }
      },
      {
        path: 'skills',
        component: SkillsComponent,
        data: { animation: 'SkillsPage' }
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: { animation: 'ProjectsPage' }
      },
      {
        path: 'resume',
        component: ResumeComponent,
        data: { animation: 'ResumesPage' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animation: 'ContactPage' }
      },
      {
        path: '**',
        redirectTo: '/about',
        pathMatch: 'full',
        data: { animation: 'HomePage' }
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(gtag: Gtag) {
    
  }
}
