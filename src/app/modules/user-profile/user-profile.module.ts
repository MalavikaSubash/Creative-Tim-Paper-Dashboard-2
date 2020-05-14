import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile.component';
import { TeamMembersCardComponent } from './team-members-card/team-members-card.component';

@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent,
    TeamMembersCardComponent
  ],
  imports: [CommonModule, UserProfileRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserProfileModule {}
