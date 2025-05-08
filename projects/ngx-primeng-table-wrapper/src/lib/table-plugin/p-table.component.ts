import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  model,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TableState } from 'primeng/api';
import {
  Table,
  TableFilterEvent,
  TableLazyLoadEvent,
  TableService,
} from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TableColumnsDef,
} from './interfaces/p-table.interface';

export function tableFactory(tableComponent: AppTableComponent) {
  return tableComponent.primengTable;
}

const COLUMNS_SELECTED_STATE_NAME = 'column-selected';

@Component({
    selector: 'app-table',
    templateUrl: './p-table.component.html',
    styleUrl: './p-table.component.css',
    imports: [
        FormsModule,
        CommonModule,
        ButtonModule,
        TableModule,
        MultiSelectModule,
    ],
    providers: [
        TableService,
        {
            provide: Table,
            useFactory: tableFactory,
            deps: [AppTableComponent],
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppTableComponent implements OnInit {
  @Input({ required: true }) value: any[] = [];
  @Input() cols: TableColumnsDef[] = [];

  selectedRows = model([]);
  @Input() showFilterColumns = false;

  @Input() dataKey!: string;

  //for server side data
  @Input() lazy: boolean = false;
  @Input() paginator: boolean = false;
  @Input() rows = 10;
  @Input() totalRecords = 10;

  @Input() reorderableColumns = false;

  @Input() stateKey = '';

  @Output() onLoadData = new EventEmitter<TableLazyLoadEvent>();

  @ContentChild('header') headerTemplate!: TemplateRef<any>;
  @ContentChild('body') bodyTemplate!: TemplateRef<any>;
  @ContentChild('expandedrow') expandedTemplate!: TemplateRef<any>;
  @ContentChild('emptymessage') emptyTemplate!: TemplateRef<any>;

  @ViewChild('primengTable', { static: true }) public primengTable!: Table;

  selectedColumns: TableColumnsDef[] = [];
  stateName = '';

  ngOnInit() {
    this.stateName = `${this.stateKey}-${COLUMNS_SELECTED_STATE_NAME}`;

    this.selectedColumns = this.cols;
    if (this.stateKey) {
      const savedColumnState = localStorage.getItem(this.stateName);
      if (savedColumnState) {
        const ids = JSON.parse(savedColumnState);
        this.selectedColumns = this.cols.filter((col: TableColumnsDef) =>
          ids.includes(col.field)
        );
      }
    }
  }

  loadData(event: TableLazyLoadEvent) {
    this.onLoadData.emit(event)
  }

  onSelectionChange(newSelection: never[]) {
    this.selectedRows.set(newSelection);
  }

  changeColumnState() {
    if (this.stateKey) {
      const columnIds = this.selectedColumns.map((col) => col.field);
      localStorage.setItem(this.stateName, JSON.stringify(columnIds));

      setTimeout(() => {
        this.primengTable.saveState();
      });
    }
  }

  resetStorage() {
    localStorage.removeItem(this.stateKey);
    localStorage.removeItem(this.stateName);
  }

  resetStateColumns() {
    this.selectedColumns = this.cols;
  }

  onStateChange(tableState: TableState) {
    const keysToRemove = ['selection', 'expandedRowKeys'];
    const newState = tableState;
    keysToRemove.forEach((key) => delete (newState as any)[key]);

    //no store pagination
    newState['first'] = 0;

    localStorage.setItem(this.stateKey, JSON.stringify(newState));
  }

  onChangeFilter(tableFilter: TableFilterEvent) {
    if (this.stateKey) {
      //fix bug first time changing sorting and change filter
      const contextFilters = tableFilter.filters;
      let currentFilters = {};
      setTimeout(() => {
        try {
          currentFilters = JSON.parse(
            localStorage.getItem(this.stateKey || '') as string
          ).filters;
          if (
            JSON.stringify(contextFilters) !== JSON.stringify(currentFilters)
          ) {
            this.primengTable.saveState();
          }
        } catch (e) {
          console.error('Error applying logic to save filters', e);
        }
      }, 500);
    }
  }
}
