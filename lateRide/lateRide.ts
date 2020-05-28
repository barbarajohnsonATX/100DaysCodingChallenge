function lateRide(n: number): number {
    const time = convertMinToArray(n)
    console.log(time)
    let result = time.toString().split('').filter(item => item != ',').map(item => parseInt(item))

    console.log(result)
    return result.reduce( (accum, item) => accum + item, 0);

}

function convertMinToArray(min){
    let hours = Math.floor(min/60);
    let minutes = min - 60 * hours
    return [hours, minutes]
 }

console.log(lateRide(240));
console.log(lateRide(808));
