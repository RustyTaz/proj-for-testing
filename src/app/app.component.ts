import { Component, OnInit } from '@angular/core';
interface CellClickEvent {
  row: any;
  headerTitle: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

   ngOnInit() {
    console.log('OnInit')
  }
   headerData = [
    { title: 'Name' },
    { title: 'Age' },
    { title: 'Email' },
    { title: 'City' },
    { title: 'Country' }
  ];

  tableData = [
    { Name: 'John', Age: 25, Email: 'john@example.com', City: 'Samara',Country: "Russia" },
    { Name: 'Jane', Age: 30, Email: 'jane@example.com', City: 'Samara',Country: "Russia" },
    { Name: 'Mike', Age: 35, Email: 'mike@example.com', City: 'Samara', Country: "Russia"},
    { Name: 'Vic', Age: 45, Email: 'vic@example.com', City: 'Samara', Country: "Russia"}
  ];

   onCellClick(event: CellClickEvent): void {
    console.log('Clicked cell:', event.row, 'Header title:', event.headerTitle);
  }

  onColumnClick(headerTitle: string): void {
    console.log('Clicked column:', headerTitle);
  }
}
