import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgxPaginationModule } from 'ngx-pagination'; // At the top of your module

// @NgModule({
//   imports: [
//     CommonModule,
//     NgxPaginationModule // Add this line of code here
//   ],
@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];
  repos: any[];
  username:string;
  page: number=1;
  totalRepos: number;
  constructor(private profileService: ProfileService) {

  }
  ngOnInit() {
  }
  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
      this.totalRepos = this.repos.length;
  	})
  }



}
