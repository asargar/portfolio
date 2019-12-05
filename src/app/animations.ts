import { trigger, style, transition, animate, state } from '@angular/animations';

export const routeAnimations =
  trigger('routeAnimations', [
    transition('*<=>*',
      [
        style({
          opacity: 0.2,
          transform: 'translateY(-100%)'
        }),
        animate('300ms ease-in')
      ]
    )
  ]);
