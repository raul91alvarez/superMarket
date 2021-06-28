import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  link(link: Boolean){
    if (link) {
      this.router.navigate(['/store/landingPage']);
    } else {
      this.router.navigate(['/user/auth/signin']);
    }
  }

}
