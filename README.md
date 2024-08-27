# BullPay Integration Guide

## Parameters:

- **wallet_address**: required (You will receive token amount in this address)
- **listing_price**: required (Specify price of the listing)
- **listing_title**: required (Specify title of the listing)
- **token**: required (Name of the token that you want to receive. Example: SOL, BULL, etc.)
- **token_address**: required (Mint address of the token)
- **listing_image**: optional (Image of the listing)
- **description**: required (Description of the listing)
- **type**: required (Listing type (supported options: 1. sale and 2. donation))
- **creator_name**: required (Name of the listing creator or Item owner)
- **creator_avatar**: optional (Avatar image of the listing creator or Item owner)
- **creator_username**: required (Username of the listing creator or Item owner)
- **return_url**: optional (Specify the URL if you want to redirect the user after purchasing the item)

## Example:

### Inline Method

#### HTML Code:

```html
<iframe id="sol_embed" src="">
</iframe>
```

#### Javscript code:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const requestData = {
    "wallet_address": "A77HCDzUpsRNbYFYx7gyCmMq9x4EqTEdY64rfgHPSXHX",
    "listing_price": "0.0001",
    "listing_title": "Shoes",
    "token": "SOL",
    "token_address": "So11111111111111111111111111111111111111112",
    "listing_image": "https://d11pbhd09043s5.cloudfront.net/public/1720626374shoes_real.png",
    "description": "Send sol to buy this item",
    "type": "sale",
    "creator_name": "buyMe",
    "creator_avatar": "",
    "creator_username": "buyme",
    "return_url": "https://www.youtube.com/@BullVerse_?hash="
  }

  // Encode request to send data using query param.
  const apiHash = btoa(JSON.stringify(requestData));

  const iframeElement = document.querySelector("#sol_embed");
  iframeElement.src = `https://pay.bullverse.io/checkout?api=${apiHash}`;
})
``` 
### Popup Method:

#### HTML code:

```html
<button onclick="openPayWithSplModal()" id="splBtn">Pay with SPL</button>

<!-- Modal Structure -->
<div id="modal" class="modal">
  <div class="modal-content">
    <div class="iframe_container">
      <iframe id="bullpay_embed" src="">
      </iframe>
    </div>
  </div>
</div>
```

#### Javscript code:

```javascript

function openPayWithSplModal() {
  const requestData = {
    "wallet_address": "A77HCDzUpsRNbYFYx7gyCmMq9x4EqTEdY64rfgHPSXHX",
    "listing_price": "1",
    "listing_title": "Watch",
    "token": "BULL",
    "token_address": "E3USNPRk8c2sAUjzEisGRgPSBsCDrDG5fCtcyZLHNz3f",
    "listing_image": "https://d11pbhd09043s5.cloudfront.net/public/1713291926watch.jpeg",
    "description": "Send sol to buy this item",
    "type": "sale",
    "creator_name": "buyMe",
    "creator_avatar": "",
    "creator_username": "buyme",
    "return_url": "https://www.youtube.com/@BullVerse_?hash="
  }

  // Encode request to send data using query param.
  const apiHash = btoa(JSON.stringify(requestData));

  const iframeElement = document.querySelector("#bullpay_embed");
  iframeElement.src = `https://pay.bullverse.io/checkout?api=${apiHash}`;

  modal.style.display = "block";
}
```
