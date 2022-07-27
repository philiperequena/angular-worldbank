import { Component, OnInit, ViewChild } from '@angular/core';
import { IndicatorService } from '../service/indicator.service';


@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {
  displayedColumns: string[] = ['year', 'indicator'];
  dataSource!: any[];

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit(): void {
    this.indicatorService.getAllIndicatorsByContry('BR').subscribe(d => {
      this.dataSource = d;
      console.log(this.dataSource);
    })
  }

}
