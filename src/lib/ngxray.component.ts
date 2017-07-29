import { Component } from '@angular/core';
import chroma from 'chroma-js';

const xrayTextColor = '#6bf';
const xrayBgColor = '#011629';
const gridSize = 8;
const backgroundPosition = 'top left'; // or center center

export const gradient = (angle = 0, size, color) =>
  `linear-gradient(${angle}deg, transparent, transparent ${size -
    1}px, ${color} ${size - 1}px)`;

export const alpha = (val, a) => {
  try {
    return chroma(val).alpha(a).css();
  } catch (e) {
    return val;
  }
};

@Component({
  selector: 'ng-xray, [ngXray]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
    :host {
      padding: 0;
      color: ${xrayTextColor};
      background-color: ${xrayBgColor};
      background-position: ${backgroundPosition};
      background-image: ${gradient(
        0,
        gridSize,
        alpha(xrayTextColor, 1 / 4)
      )}, ${gradient(90, gridSize, alpha(xrayTextColor, 1 / 4))};
      background-size: ${gridSize}px ${gridSize}px;
    }
    :host /deep/ * {
      color: ${xrayTextColor};
      outline: 1px solid ${alpha(xrayTextColor, 1 / 2)} !important;
    }
  `,
  ],
})
export class NgXRayComponent {}
