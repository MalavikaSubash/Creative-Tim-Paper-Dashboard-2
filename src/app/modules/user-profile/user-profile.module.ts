import { NgModule } from '@angular/core';
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
  imports: [CommonModule, UserProfileRoutingModule]
})
export class UserProfileModule {}
