import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-export',
    imports: [ButtonModule],
    templateUrl: './export.component.html',
    styleUrl: './export.component.css'
})
export class IntegritableExportComponent {
  @Input({ required: true }) tableRef: Table | null = null;
  @Input() fileName = '';

  export() {
    if(!this.tableRef){
      console.error("tableRef is not initialized")
      return
    }

    const fileName = `${this.fileName}.csv`;

    let data = this.tableRef.value;

    if (this.tableRef.selection.length > 0) {
      data = this.tableRef.selection;
    }

    const columns = this.tableRef.columns || [];

    let csv = '';
    const headerRow = columns.map(col => col.header || col.field).join(',');
    csv += headerRow + '\n';

    data.forEach(record => {
      const row = columns
        .map(col => {
          if (col.transformer) {
            return `"${col.transformer(record)}"`;
          }
          return record[col.field] || '';
        })
        .join(',');

      csv += row + '\n';
    });

    console.log(csv)

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
