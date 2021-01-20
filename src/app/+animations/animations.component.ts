import { Component } from '@angular/core';

const loaderState = {
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

type loaderStateKeys = keyof typeof loaderState;

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent {
  public loaderState = loaderState;
  public showLoaderBox = false;

  /**
   * [toggleLoader description]
   * @method toggleLoader
   */
  public toggleLoader(name: loaderStateKeys): void {
    this.showLoaderBox = !this.showLoaderBox;
    this.loaderState[name] = !this.loaderState[name];
  }
}
