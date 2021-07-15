import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expand = trigger('expandSearch', [
  transition(':enter', [
    animate(
      '600ms ease-in-out',
      keyframes([
        style({ transform: 'scale(0.2)' }),
        style({ transform: 'scale(1)' }),
      ])
    ),
  ]),
]);
