import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public faSchool = faSchool;
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['loginpage']);
    }
  }

  processLogout() {
    //sessionStorage.removeItem('sid');
    //this.router.navigate(['loginpage']);

    // open modal
    this.modalService.open(LogoutModalComponent, {
      centered: true,
    });
  }
}
