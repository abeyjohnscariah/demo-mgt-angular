import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';


import { Providers,Msal2Provider } from "@microsoft/mgt";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-mgt-angular';
  ngOnInit(): void {
    Providers.globalProvider=new Msal2Provider({clientId:'57aab24e-15fd-4b67-ba5f-87023c030ba2'
    ,scopes:['user.read,people.read']
  });
  }
}
