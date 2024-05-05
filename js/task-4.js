function getShippingCost(country) {
    let priceChina = 100;
    let priceChile = 250;
    let priceAustralia = 170;
    let priceJamaica = 120;
    switch (country) {

            case "Australia":
            return `Shipping to ${country} will cost ${priceAustralia} credits`; 
            break;
            case "China":
            return `Shipping to ${country} will cost ${priceChina} credits`; 
            break;
            case "Chile":
            return `Shipping to ${country} will cost ${priceChile} credits`; 
            break;
            case "Jamaica":
            return `Shipping to ${country} will cost ${priceJamaica} credits`; 
            break;
            default:
                return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 