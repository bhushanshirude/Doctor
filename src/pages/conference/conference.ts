import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AddeventPage } from '../addevent/addevent';
import { DatePickerDirective } from 'ion-datepicker';

@IonicPage()
@Component({
  selector: 'page-conference',
  templateUrl: 'conference.html',
  providers: [DatePickerDirective],
})
export class ConferencePage {
  pet = 'puppies';
  @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  public minDate: Date = new Date(2018, 2, 31);
  public maxDate: Date = new Date(2018, 11, 10);
  public disabledDates: Date[] = [new Date(2017, 7, 14)];

  public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  public min: Date = new Date();
  constructor(
    public navCtrl: NavController,
  ) {

  }
  public ngOnInit() {

  }
  //   public closeDatepicker(){
  //     this.datepicker.modal.dismiss();
  // }
  public Log(stuff): void {
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => console.log('test'));
    console.log(stuff);
  }
  public event(data: Date): void {
    this.localDate = data;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }

  addEvent() {
    this.navCtrl.push(AddeventPage);
  }
}
