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

    return piece

}

export const usePottery = (forSalePottery) => {
    cloneForSalePottery = structuredClone(forSalePottery)
    return cloneForSalePottery
}