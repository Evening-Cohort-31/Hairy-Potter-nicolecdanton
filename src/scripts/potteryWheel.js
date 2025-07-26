
export let potteryPrimaryKey = 1;

export const makePottery = (shape, weight, height) => {
    const newPiece = {
         id: potteryPrimaryKey,
         shape: shape,
         weight: weight,
         height: height,
        }
    
    potteryPrimaryKey++; // increment for the next piece

    return newPiece;
}


