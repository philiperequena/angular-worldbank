import { Component, OnInit } from '@angular/core';
import { IndicatorService } from '../service/indicator.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!: any[];
  constructor(private indicatorService: IndicatorService) { }

  ngOnInit(): void {
    this.indicatorService.getAllIndicatorsByContry('BR').subscribe(d => {
      this.dataSource = d;
      console.log(this.dataSource);
    })
  }

}
