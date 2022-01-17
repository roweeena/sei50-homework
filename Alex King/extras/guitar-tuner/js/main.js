console.log('tuner:')

// 12 minutes


const stringEHigh = 329;
const stringB = 247;
const stringG = 196;
const stringD = 147;
const stringA = 110; 
const stringE = 82;

const tuneStatus = [] 
const tuner = function(highE, b, g, d, a, e){
    
    
    if (highE>stringEHigh){
        console.log(`tune down -${highE-stringEHigh}`)
        tuneStatus.push(`-${highE-stringEHigh}`)
    } else{
        console.log(`tune up +${stringEHigh-highE}hz`)
        tuneStatus.push(`+${stringEHigh-highE}`)
    }
    if (b>stringB){
        console.log(`tune down -${b-stringB}`)
        tuneStatus.push(`-${b-stringB}`)
    } else{
        console.log(`tune up +${stringB-b}hz`)
        tuneStatus.push(`+${stringB-b}`)
    }
    if (g>stringG){
        console.log(`tune down -${g-stringG}`)
        tuneStatus.push(`-${g-stringG}`)
    } else{
        console.log(`tune up +${stringG-g}hz`)
        tuneStatus.push(`+${stringG-g}`)
    }
    if (d>stringD){
        console.log(`tune down -${d-stringD}`)
        tuneStatus.push(`-${d-stringD}`)
    } else{
        console.log(`tune up +${stringD-d}hz`)
        tuneStatus.push(`+${stringD-d}`)
    }
    if (a>stringA){
        console.log(`tune down -${a-stringA}`)
        tuneStatus.push(`-${a-stringA}`)
    } else{
        console.log(`tune up +${stringA-a}hz`)
        tuneStatus.push(`+${stringA-a}`)
    }
    if (e>stringE){
        console.log(`tune down -${e-stringE}`)
        tuneStatus.push(`-${e-stringE}`)
    } else{
        console.log(`tune up +${stringE-e}hz`)
        tuneStatus.push(`+${stringE-e}`)
    }
   console.log(tuneStatus.join(', '));
console.log(tuneStatus)
}

tuner(312, 265, 170, 133, 107, 80)