import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-i24-progress-bar',
  templateUrl: './ngx-i24-progress-bar.component.html',
  styleUrls: ['./ngx-i24-progress-bar.component.scss']
})
export class NgxI24ProgressBarComponent implements OnInit {
  @Input() text = 'HTML';
  @Input() textColor = '#fff';

  @Input() percentage = 75;
  @Input() percentageRadius = '3px';
  @Input() percentageHeight = '8px';
  @Input() percentageColor = '#fff';

  @Input() progressBackColor = '#fff';
  @Input() progressColor = '#e91e63';


  @Input() spaceBetween = '10px';

  constructor() { }
  ngOnInit(): void {
  }

}
