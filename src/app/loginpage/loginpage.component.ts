import { Component, OnInit } from '@angular/core';
import { faAddressCard, faLock, faSchool } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public faSchool = faSchool;
  public faAddressCard = faAddressCard;
  public faLock = faLock;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faGoogle = faGoogle;
  public faLinkedinIn = faLinkedinIn;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:8080/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home/index']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
};
