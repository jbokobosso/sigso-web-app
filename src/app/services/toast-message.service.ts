import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastr: ToastrService) { }

  showToastSuccess(toast_message:string, toast_duration?:number, toast_title?:string) {
    this.toastr.success(toast_message, toast_title, {timeOut: toast_duration});
  }

  showToastError(toast_message:string, toast_duration?:number, toast_title?:string) {
    this.toastr.error(toast_message, toast_title, {timeOut: toast_duration});
  }

  showWarnningMessage(toast_message:string, toast_duration?:number, toast_title?:string) {
    this.toastr.warning(toast_message, toast_title, {timeOut: toast_duration});
  }
}
