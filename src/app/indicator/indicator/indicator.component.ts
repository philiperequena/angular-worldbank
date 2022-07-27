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
  countryOption!: any[];
  selected!:string;

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit(): void {
    this.indicatorService.getAllCountriesCodes().subscribe(d => {
      this.countryOption = d;
    })
  }

  onSubmit(){
    this.indicatorService.getAllIndicatorsByContry(this.selected).subscribe(d => {
      this.dataSource = d;
    })
  }
}
