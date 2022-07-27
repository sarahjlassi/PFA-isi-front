import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/service/token-storage.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  showAdminBoard = false;
  showUserBoard = false;
  username:any;
  email:any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private _router: Router, private tokenStorage: TokenStorageService) { }
  currentPage: string ="TimeLine"
  ngOnInit() {
    this.username=this.tokenStorage.getUser().username;
    this.email=this.tokenStorage.getUser().email;
    console.log( this.username);
  }
  showPage(page: string) {
    this.currentPage = page;
}
}
