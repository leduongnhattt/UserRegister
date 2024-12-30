import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  fullname: string = '';
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: (data: any) =>  {
        this.fullname = data.fullName
      },
      error : (error: any) => console.log('error while retrieving user profile \n', error)
    });
  }

  onLogOut() {
    this.authService.deleteToken();
    this.router.navigateByUrl('user/signin');
  }
}
