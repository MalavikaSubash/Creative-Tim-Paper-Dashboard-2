import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [EditProfileComponent, UserProfileComponent],
  imports: [CommonModule, UserProfileRoutingModule]
})
export class UserProfileModule {}
