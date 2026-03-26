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

function slideLeft() {
    return [
        query(":enter, :leave",
            style({ position: 'absolute', width: '98%' }),
            { optional: true }),

        group([

            query(":enter", [
                style({ transform: "translateX(100%)" }),
                animate("0.6s", style({ transform: "translateX(0%)" }))
            ], { optional: true }),

            query(":leave", [
                style({ transform: "translateX(0%)" }),
                animate("0.6s", style({ transform: "translateX(-100%)" }))
            ], { optional: true })

        ])
    ];
}

function slideRight() {
    return [
        query(":enter, :leave",
            style({ position: 'absolute', width: '98%' }),
            { optional: true }),

        group([

            query(":enter", [
                style({ transform: "translateX(-100%)" }),
                animate("0.6s", style({ transform: "translateX(0%)" }))
            ], { optional: true }),

            query(":leave", [
                style({ transform: "translateX(0%)" }),
                animate("0.6s", style({ transform: "translateX(100%)" }))
            ], { optional: true })

        ])
    ];
}


export const slideLeftOrRightAnimation =
    trigger("routeAnimations", [
        transition("0 => 1", slideLeft()),
        transition("0 => 2", slideLeft()),
        transition("0 => 3", slideLeft()),
        transition("0 => 4", slideLeft()),
        transition("0 => 5", slideLeft()),
        transition("0 => 6", slideLeft()),

        transition("1 => 0", slideRight()),
        transition("1 => 2", slideLeft()),
        transition("1 => 3", slideLeft()),
        transition("1 => 4", slideLeft()),
        transition("1 => 5", slideLeft()),
        transition("1 => 6", slideLeft()),

        transition("2 => 0", slideRight()),
        transition("2 => 1", slideRight()),
        transition("2 => 3", slideLeft()),
        transition("2 => 4", slideLeft()),
        transition("2 => 5", slideLeft()),
        transition("2 => 6", slideLeft()),

        transition("3 => 0", slideRight()),
        transition("3 => 1", slideRight()),
        transition("3 => 2", slideRight()),
        transition("3 => 4", slideLeft()),
        transition("3 => 5", slideLeft()),
        transition("3 => 6", slideLeft()),

        transition("4 => 0", slideRight()),
        transition("4 => 1", slideRight()),
        transition("4 => 2", slideRight()),
        transition("4 => 3", slideRight()),
        transition("4 => 5", slideLeft()),
        transition("4 => 6", slideLeft()),

        transition("5 => 0", slideRight()),
        transition("5 => 1", slideRight()),
        transition("5 => 2", slideRight()),
        transition("5 => 3", slideRight()),
        transition("5 => 4", slideRight()),
        transition("5 => 6", slideLeft()),

        transition("6 => 0", slideRight()),
        transition("6 => 1", slideRight()),
        transition("6 => 2", slideRight()),
        transition("6 => 3", slideRight()),
        transition("6 => 4", slideRight()),
        transition("6 => 5", slideRight()),
    ]);