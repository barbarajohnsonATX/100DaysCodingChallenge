function boxBlur(image: number[][]): number[][] {
  
     console.log(`${image.length} x ${image[0].length}`)

     let res = [];
 
     for(let i = 0; i < image.length ; i++) {
        let sum = 0;
        let count = 0;

        for(let j = 0 ; j < image[0].length ; j++) {

            console.log(i, j)

            for(let k = 0; k < image[0][0].length; k++) {
                console.log(j, k)
                console.log(image[i][j][k])
                sum += image[i][j][k]
                console.log(sum)
                count++
                console.log(count)

            }
            console.log(sum)
            console.log(count)
 
        }
        res.push([Math.floor(sum/count])

 

    }
    console.log(res)
    return res

 }

 const x = [ 
     [[1,1,1], [1,7,1], [1, 1, 1]],
     [[1,1,1], [1,7,1], [1, 1, 1]],

    ]


 
console.log(boxBlur(x);


 

       
