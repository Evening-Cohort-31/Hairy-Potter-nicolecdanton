export const potteryList = (potteryCatalogarray) => {
       return potteryCatalogarray.map (piece =>
        `<section class="pottery" id="pottery- ${piece.id}">
             <h2 class="pottery__shape">${piece.shape}</h2>
                <div class="pottery__properties">
                    <p>Item weighs ${piece.weight} grams and is ${piece.height} in height</p>
                </div>
                <div class="pottery__price">Price is ${piece.price}</div>
        </section>`
).join("");
}