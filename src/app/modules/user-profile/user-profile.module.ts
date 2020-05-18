import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { TeamMembersCardComponent } from './team-members-card/team-members-card.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    TeamMembersCardComponent,
    ProfileDetailsComponent,
    EditProfileComponent
  ],

  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserProfileModule {}
