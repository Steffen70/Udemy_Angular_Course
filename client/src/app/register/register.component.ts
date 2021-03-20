import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() accountService: AccountService;
  @Output() cancelRegister = new EventEmitter();

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(() => this.cancel());
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
