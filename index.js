/* CART */

let cart =
  JSON.parse(
    localStorage.getItem('cart')
  ) || [];

/* ELEMENTS */

const floatingCart =
  document.getElementById(
    'floating-cart'
  );

const floatingCount =
  document.getElementById(
    'floating-count'
  );

const floatingTotal =
  document.getElementById(
    'floating-total'
  );

const navCartCount =
  document.getElementById(
    'nav-cart-count'
  );

const toast =
  document.getElementById(
    'toast'
  );

/* UPDATE CART UI */

function updateCartUI(){

  /* TOTAL */

  const total =
    cart.reduce(
      (sum,item)=>sum+item.price,
      0
    );

  /* COUNT */

  const count =
    cart.length;

  /* NAV COUNT */

  navCartCount.innerText =
    count;

  /* FLOATING BAR */

  floatingCount.innerText =
    `${count} Dessert${count !== 1 ? 's' : ''}`;

  floatingTotal.innerText =
    total;

  /* SHOW / HIDE */

  if(count > 0){

    floatingCart.classList.add(
      'active'
    );

  }else{

    floatingCart.classList.remove(
      'active'
    );

  }

}

/* ADD TO CART */

function addToCart(name,price){

  /* PUSH ITEM */

  cart.push({
    name:name,
    price:price
  });

  /* SAVE */

  localStorage.setItem(
    'cart',
    JSON.stringify(cart)
  );

  /* UPDATE UI */

  updateCartUI();

  /* TOAST */

  toast.innerText =
    `${name} added ♡`;

  toast.classList.add(
    'show'
  );

  setTimeout(()=>{

    toast.classList.remove(
      'show'
    );

  },2000);

}

/* INITIAL LOAD */

updateCartUI();
