import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '600ms ease',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const slider = trigger('routeAnimations', [
  transition('home => *', slideTo('right')),
  transition('* => chefs', slideTo('right')),
  transition('* => home', slideTo('left')),
  transition('chefs => *', slideTo('left')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };

  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          width: '100%',
          [direction]: 0,
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}
