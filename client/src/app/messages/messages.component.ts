import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination } from '../_models/pagination';
import { MessageParams } from '../_models/paginationParams';
import { ConfirmService } from '../_services/confirm.service';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  pagination: Pagination;
  messageParams: MessageParams;
  loadingFlag = false;

  constructor(private messageService: MessageService, private confirmService: ConfirmService) {
    this.messageParams = this.messageService.getMessageParams();
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  lastRequest: string;
  loadMessages() {
    this.loadingFlag = true;

    if (this.lastRequest !== (this.lastRequest = this.messageParams.container))
      this.messageParams = new MessageParams(this.lastRequest);

    this.messageService.setMessageParams(this.messageParams);

    this.messageService.getMessages().subscribe(response =>
      [this.messages, this.pagination, this.loadingFlag] = [response.result, response.pagiantion, false]);
  }

  pageChanged(event: any) {
    this.messageParams.currentPage = event.page;
    this.loadMessages();
  }

  deleteMessage(id: number) {
    this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(r => {
      if (r) {
        this.messageService.deleteMessage(id).subscribe(() =>
          this.messages.splice(this.messages.findIndex(m => m.id == id), 1));
      }
    });
  }
}
