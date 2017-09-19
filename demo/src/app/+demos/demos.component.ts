import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent {
  public loaderState = {
    chasingDots: false,
    circle: false,
    cubeGrid: false,
    doubleBounce: false,
    fadingCircle: false,
    foldingCube: false,
    materialBar: false,
    pulse: false,
    slidingBar: false,
    threeBounce: false,
    wanderingCubes: false,
    wave: false
  };
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
