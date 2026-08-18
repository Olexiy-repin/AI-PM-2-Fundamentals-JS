/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card js-product-card" data-id="">
  <div class="product-card-img-wrapper">
    <img src="" alt="" class="product-card-img" />
  </div>
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

const products = [
  {
    id: 1,
    imgUrl: 'https://content.rozetka.com.ua/goods/images/big/629962972.jpg',
    title: 'Samsung Odyssey G5',
    price: 10000,
    description:
      'A QHD monitor (2560x1440) has 1.7 times the number of pixels of a Full HD monitor (1920 x 1080), making QHD a sharper and more realistic display.',
  },
  {
    id: 2,
    imgUrl: 'https://content.rozetka.com.ua/goods/images/big/624812207.webp',
    title: 'MSI Thin 15',
    price: 39000,
    description: 'The Thin 15 B13U laptop offers excellent performance when running demanding games and multitasking.',
  },
  {
    id: 3,
    imgUrl: 'https://content.rozetka.com.ua/goods/images/big/653253781.jpg',
    title: 'Xiaomi 17',
    price: 45000,
    description: 'Smartphone and camera in one body.',
  },
  {
    id: 4,
    imgUrl: 'https://content2.rozetka.com.ua/goods/images/big/558718757.jpg',
    title: 'Xiaomi Redmi Pad 2',
    price: 10000,
    description: 'Everything you need for entertainment. A new era in user comfort.',
  },
];

const refs = {
  productsList: document.querySelector('.js-products'),
};

const createProductCardTemplate = product => {
  return `
  <li class="product-card js-product-card" data-id="${product.id}">
    <div class="product-card-img-wrapper">
      <img src="${product.imgUrl}" alt="${product.title}" class="product-card-img" />
    </div>
    <div class="product-card-text-content">
      <h2 class="product-card-title">${product.title}</h2>
      <p class="product-card-price">Price: ${product.price}uah.</p>
    </div>
  </li>
  `;
};

const productCardsTemplate = products.map(product => createProductCardTemplate(product)).join('');

refs.productsList.innerHTML = productCardsTemplate;

const onProductCardClick = event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const productCardEl = event.target.closest('.js-product-card');

  const productId = Number(productCardEl.dataset.id);

  const productInfo = products.find(product => product.id === productId);

  const modalInstance = basicLightbox.create(`
      <img class="product-modal-img" src="${productInfo.imgUrl}" alt="${productInfo.title}" />
      <div class="product-modal-text-content">
        <h2 class="product-modal-title">${productInfo.title}</h2>
        <p class="product-modal-price">Price: ${productInfo.price}uah.</p>
        <p class="product-modal-desc">${productInfo.description}</p>
      </div>
    `);

  modalInstance.show();
};

refs.productsList.addEventListener('click', onProductCardClick);
