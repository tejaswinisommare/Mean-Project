import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import { faAddressCard, faLock, faEnvelope, faMobileAlt, faSchool } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  public faAddressCard = faAddressCard;
  public faLock = faLock;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faGoogle = faGoogle;
  public faLinkedinIn = faLinkedinIn;
  public faEnvelope = faEnvelope;
  public faMobileAlt = faMobileAlt;
  public faSchool = faSchool;

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:8080/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }
}

