import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  declarations: [TeamMembersComponent],
  imports: [CommonModule, UserProfileRoutingModule]
})
export class UserProfileModule {}
