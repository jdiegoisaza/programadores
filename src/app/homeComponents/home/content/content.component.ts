import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('modal_Programas') modal: ElementRef;
  private tablaModal: NgbModalRef;
  // constructor(private ngbmodal: NgbModal) { }

  constructor(){}

  ngOnInit() {
  }

  // selectProgram() {
  //   this.tablaModal = this.ngbmodal.open(this.modal);
  // }

}
