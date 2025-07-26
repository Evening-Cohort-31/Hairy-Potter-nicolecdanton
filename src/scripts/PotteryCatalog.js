const forSalePottery = []

export const toSellOrNotToSell = (piece) => {
    if (piece.weight >= 6 && piece.cracked != true) {
        piece.price = 40
        forSalePottery.push(piece)
    }
    else if (piece.weight < 6 && piece.cracked != true) {
        piece.price = 20
        forSalePottery.push(piece)
    }
    else {
        piece.forSale = false;
        piece.price = 0;
    }
    return piece

}

export const usePottery = () => {
    const cloneForSalePottery = structuredClone(forSalePottery)
    return cloneForSalePottery
}