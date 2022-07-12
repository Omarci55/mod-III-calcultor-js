`use strict`

class Calculator{

    constructor(){
        this.pi = Math.PI,
        this.e = Math.E
        //this.divisor = divisor !== 0
    }

    //getter
    
    //methods
    add( initValue, toBeAdd ) {
        return initValue + toBeAdd
    }

    subtract( initValue, toBeSubt ) {
        return initValue - toBeSubt
    }

    multiply( multiplicand, multiplier ) {
        return multiplicand * multiplier
    }

    divide( dividend, divisor ) {
        return divisor !== 0 ? dividend / divisor : "Error!"
    }

    elevate( base, exponent ) {
        return base ** exponent
    }

    modulation( dividend, divisor ) {
        return divisor !== 0 ? dividend % divisor : "Error!"
    }

    sqrt( number ) {
        return Math.sqrt( number ) 
    }


    //calculating the proper height to preserve the original aspect ratio
    ratio( originalHeight, originalWidth, newWidth ) {
        return ( originalHeight / originalWidth) * newWidth
    }
}

calculate = new Calculator( )
//console.log( calculate.e )
console.log( calculate.add(13, 2) )
console.log( calculate.subtract(16, 6) )
console.log( calculate.multiply(5, 5) )
console.log( calculate.divide(49, 7) )
console.log( calculate.divide(36, 0) )
console.log( calculate.elevate(3, 4) )
console.log( calculate.modulation(10, 3) )
console.log( calculate.modulation(10, 0) )
console.log( calculate.sqrt(49) )
console.log( calculate.ratio(1200, 1600, 800) )