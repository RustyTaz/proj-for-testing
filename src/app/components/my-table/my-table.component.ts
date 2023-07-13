import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

interface CellClickEvent {
  row: any;
  headerTitle: string;
}

interface Header {
  title: string;
}

interface Data {
  [key: string]: any;
}

@Component({
  selector: 'test-lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTableComponent {
  @Input() header: Header[] = [];
  @Input() data: Data[] = [];
  @Output() cellClick: EventEmitter<CellClickEvent> = new EventEmitter<CellClickEvent>();
  @Output() columnClick: EventEmitter<string> = new EventEmitter<string>();
  

  onCellClick(row: Data, headerTitle: string): void {
    this.cellClick.emit({ row, headerTitle });
  }

  onColumnClick(headerTitle: string): void {
    this.columnClick.emit(headerTitle);
  }

  getHeaderColumns(): string[] {
    return this.header.map(headerColumn => headerColumn.title);
  }

  getDisplayedColumns(): string[] {
    return this.header.map(headerColumn => headerColumn.title);
  }
}


