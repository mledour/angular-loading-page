import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent {
  public loaderState = {};
  public showLoaderBox: boolean;

  /**
   * [toggleLoader description]
   * @method toggleLoader
   * @param  {string}     name [description]
   */
  public toggleLoader(name: string): void {
    this.showLoaderBox = !this.showLoaderBox;
    this.loaderState[name] = !this.loaderState[name];
  }
}
