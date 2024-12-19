import { AuthService } from './../shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onLogOut() {
    this.authService.deleteToken();
    this.router.navigateByUrl('user/signin');
  }
}
