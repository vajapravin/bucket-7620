import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user.model';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class TransactionService {
  propertyMarkerClicked = new EventEmitter<string>();

  constructor(
    private router: Router,
    private location: Location
  ) {
  };
}