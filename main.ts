let Compass_Heading = 0
basic.forever(function () {
    Compass_Heading = input.compassHeading()
    if (337.5 > input.compassHeading() && input.compassHeading() < 22.5) {
        basic.showArrow(ArrowNames.West)
    } else if (22.5 < input.compassHeading() && input.compassHeading() < 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (67.5 < input.compassHeading() && input.compassHeading() < 112.5) {
        basic.showArrow(ArrowNames.North)
    } else if (112.5 < input.compassHeading() && input.compassHeading() < 157.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (157.5 < input.compassHeading() && input.compassHeading() < 202.5) {
        basic.showArrow(ArrowNames.East)
    } else if (202.5 < input.compassHeading() && input.compassHeading() < 247.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (247.5 < input.compassHeading() && input.compassHeading() < 292.5) {
        basic.showArrow(ArrowNames.South)
    } else if (292.5 < input.compassHeading() && input.compassHeading() < 337.5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
})
