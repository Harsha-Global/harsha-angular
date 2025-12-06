import { trigger, transition, query, style, animate, group } from "@angular/animations";

export const fadeAnimation =
    trigger("routeAnimations", [
        transition("* <=> *", [
            query(":enter, :leave",
                style({ position: 'absolute', width: '98%' }),
                { optional: true }),

            group([

                query(":enter", [
                    style({ opacity: 0 }),
                    animate("0.6s", style({ opacity: '1' }))
                ], { optional: true }),

                query(":leave", [
                    style({ opacity: 1 }),
                    animate("0.6s", style({ opacity: '0' }))
                ], { optional: true })

            ])
        ])
    ]);

export const slideUpAnimation =
    trigger("routeAnimations", [
        transition("* <=> *", [
            query(":enter, :leave",
                style({ position: 'absolute', width: '98%' }),
                { optional: true }),

            group([

                query(":enter", [
                    style({ transform: "translateY(100%)" }),
                    animate("0.6s", style({ transform: "translateY(0%)" }))
                ], { optional: true }),

                query(":leave", [
                    style({ transform: "translateY(0%)" }),
                    animate("0.6s", style({ transform: "translateY(-100%)" }))
                ], { optional: true })

            ])
        ])
    ]);



export const zoomUpAnimation =
    trigger("routeAnimations", [
        transition("* <=> *", [
            query(":enter, :leave",
                style({ position: 'absolute', width: '98%' }),
                { optional: true }),

            group([

                query(":enter", [
                    style({ transform: "scale(0) translateY(100%)" }),
                    animate("0.6s", style({ transform: "scale(1) translateY(0%)" }))
                ], { optional: true }),

                query(":leave", [
                    style({ transform: "scale(1) translateY(0%)" }),
                    animate("0.6s", style({ transform: "scale(0) translateY(-100%)" }))
                ], { optional: true })

            ])
        ])
    ]);



export const zoomLeftAnimation =
    trigger("routeAnimations", [
        transition("* <=> *", [
            query(":enter, :leave",
                style({ position: 'absolute', width: '98%' }),
                { optional: true }),

            group([

                query(":enter", [
                    style({ transform: "scale(0) translateX(100%)" }),
                    animate("0.6s", style({ transform: "scale(1) translateX(0%)" }))
                ], { optional: true }),

                query(":leave", [
                    style({ transform: "scale(1) translateX(0%)" }),
                    animate("0.6s", style({ transform: "scale(0) translateX(-100%)" }))
                ], { optional: true })

            ])
        ])
    ]);