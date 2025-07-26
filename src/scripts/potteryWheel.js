
export let potteryPrimaryKey = 1; //(had to look this up)

export const makePottery = (shape, weight, height) => {
    const newPiece = {
         id: potteryPrimaryKey,
         shape: shape,
         weight: weight,
         height: height,
        }
    
    potteryPrimaryKey++; // increment for the next piece (had to look this up)

    return newPiece;
}


