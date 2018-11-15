import { Component, OnInit } from '@angular/core';
import { DbInfoService} from '../db-info.service';

@Component({
  selector: 'app-landing',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usernames = null;
  constructor(private dbinfo: DbInfoService) {
    this.usernames = dbinfo.getUsernames();
  }

  ngOnInit() {
  }

}
