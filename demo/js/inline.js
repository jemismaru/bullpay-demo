const getUrlForSol = () => {
  const requestData = {
    "wallet_address": "A77HCDzUpsRNbYFYx7gyCmMq9x4EqTEdY64rfgHPSXHX", // You will receive token amount in this address - Required
    "listing_price": "0.0001", // Specify price of the listing - Required
    "listing_title": "Shoes", // Specify title of the listing - Required
    "token": "SOL", // Name of the token that you want to receive (ex: SOL, BULL etc.) - Required
    "token_address": "So11111111111111111111111111111111111111112", // Mint address of the token - Required
    "listing_image": "https://d11pbhd09043s5.cloudfront.net/public/1720626374shoes_real.png", // Image of the listing - Optional
    "description": "Send sol to buy this item", // Description of the listing - Required
    "type": "sale", // Listing type (supported option: 1. sale and 2. donation) - Required
    "creator_name": "buyMe", // Name of the listing creator or Item owner - Required
    "creator_avatar": "", // Avatar image of the listing creator or Item owner - Optional
    "creator_username": "buyme", // Username of the listing creator or Item owner - Required
    "return_url": "https://www.youtube.com/@BullVerse_?hash=" // Specify url if you want to redirect user after purchasing the item - Optional
  }

  // Encode request to send data using query param.
  const apiHash = btoa(JSON.stringify(requestData));

  const iframeElement = document.querySelector("#sol_embed");
  iframeElement.src = `https://pay.bullverse.io/checkout?api=${apiHash}`;
}

const getUrlForSpl = () => {
  const requestData = {
    "wallet_address": "A77HCDzUpsRNbYFYx7gyCmMq9x4EqTEdY64rfgHPSXHX", // You will receive token amount in this address - Required
    "listing_price": "1", // Specify price of the listing - Required
    "listing_title": "Watch", // Specify title of the listing - Required
    "token": "BULL", // Name of the token that you want to receive (ex: SOL, BULL etc.) - Required
    "token_address": "E3USNPRk8c2sAUjzEisGRgPSBsCDrDG5fCtcyZLHNz3f", // Mint address of the token - Required
    "listing_image": "https://d11pbhd09043s5.cloudfront.net/public/1713291926watch.jpeg", // Image of the listing - Optional
    "description": "Send sol to buy this item", // Description of the listing - Required
    "type": "sale", // Listing type (supported option: 1. sale and 2. donation) - Required
    "creator_name": "buyMe", // Name of the listing creator or Item owner - Required
    "creator_avatar": "", // Avatar image of the listing creator or Item owner - Optional
    "creator_username": "buyme", // Username of the listing creator or Item owner - Required
    "return_url": "https://www.youtube.com/@BullVerse_?hash=" // Specify url if you want to redirect user after purchasing the item - Optional
  }

  // Encode request to send data using query param.
  const apiHash = btoa(JSON.stringify(requestData));

  const iframeElement = document.querySelector("#spl_embed");
  iframeElement.src = `https://pay.bullverse.io/checkout?api=${apiHash}`;
}


document.addEventListener('DOMContentLoaded', function () {
  getUrlForSol();
  getUrlForSpl();
})
