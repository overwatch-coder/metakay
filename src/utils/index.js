// import product images
import product1 from '../assets/products/product1.jpg';
import product2 from '../assets/products/product2.jpg';
import product3 from '../assets/products/product3.jpg';
import product4 from '../assets/products/product4.jpg';
import product5 from '../assets/products/product5.jpg';
import product6 from '../assets/products/product6.jpg';
import product7 from '../assets/products/product7.jpg';
import product8 from '../assets/products/product8.jpg';
import product9 from '../assets/products/product9.jpg';
import product10 from '../assets/products/product10.jpg';
import product11 from '../assets/products/product11.jpg';
import product12 from '../assets/products/product12.jpg';
import product13 from '../assets/products/product13.jpg';
import product14 from '../assets/products/product14.jpg';
import product15 from '../assets/products/product15.jpg';
import product16 from '../assets/products/product16.jpg';
import product17 from '../assets/products/product17.jpg';
import product18 from '../assets/products/product18.jpg';
import product19 from '../assets/products/product19.jpg';
import product20 from '../assets/products/product20.jpg';

// import collection category images
import categoryImageOne from '../assets/category1.jpg';
import categoryImageTwo from '../assets/category2.jpg';

// import collection images
import col1 from '../assets/collection/col1.jpg';
import col11 from '../assets/collection/col11.jpg';
import col12 from '../assets/collection/col12.jpg';
import col13 from '../assets/collection/col13.jpg';

import col2 from '../assets/collection/col2.jpg';
import col21 from '../assets/collection/col21.jpg';
import col22 from '../assets/collection/col22.jpg';
import col23 from '../assets/collection/col23.jpg';

import col3 from '../assets/collection/col3.jpg';
import col31 from '../assets/collection/col31.jpg';
import col32 from '../assets/collection/col32.jpg';
import col33 from '../assets/collection/col33.jpg';

import col4 from '../assets/collection/col4.jpg';
import col41 from '../assets/collection/col41.jpg';
import col42 from '../assets/collection/col42.jpg';
import col43 from '../assets/collection/col43.jpg';

import heroOne from '../assets/hero/hero1.jpg';
import heroTwo from '../assets/hero/hero2.jpg'

// object to export
export const products = [
    {category: ['woman', 'dress', 'eunoia'], photo: product1, slug: 'product-one', name: 'Product One', price: 199},
    {category: ['woman', 'dress', 'unilever'], photo: product2, slug: 'product-two', name: 'Product Two', price: 220},
    {category: ['man', 'top', 'eunoia'], photo: product3, slug: 'product-three', name: 'Product Three', price: 450},
    {category: ['man', 'top', 'eunoia'], photo: product4, slug: 'product-four', name: 'Product Four', price: 100},
    {category: ['man', 'top', 'unilever'], photo: product5, slug: 'product-five', name: 'Product Five', price: 250},
    {category: ['woman', 'top', 'eunoia'], photo: product6, slug: 'product-six', name: 'Product Six', price: 730},
    {category: ['woman', 'skirt', 'eunoia'], photo: product7, slug: 'product-seven', name: 'Product Seven', price: 70},
    {category: ['woman', 'skirt', 'unilever'], photo: product8, slug: 'product-eight', name: 'Product Eight', price: 30},
    {category: ['woman', 'skirt', 'eunoia'], photo: product9, slug: 'product-nine', name: 'Product Nine', price: 40},
    {category: ['woman', 'top', 'unilever'], photo: product10, slug: 'product-ten', name: 'Product Ten', price: 130},
    {category: ['woman', 'skirt', 'eunoia'], photo: product11, slug: 'product-eleven', name: 'Product Eleven', price: 230},
    {category: ['woman', 'top', 'eunoia'], photo: product12, slug: 'product-twelve', name: 'Product Twelve', price: 530},
    {category: ['woman', 'top', 'unilever'], photo: product13, slug: 'product-thirteen', name: 'Product Thirteen', price: 330},
    {category: ['woman', 'skirt', 'eunoia'], photo: product14, slug: 'product-fourteen', name: 'Product Fourteen', price: 189},
    {category: ['woman', 'dress', 'eunoia'], photo: product15, slug: 'product-fifteen', name: 'Product Fifteen', price: 420},
    {category: ['woman', 'top', 'unilever'], photo: product16, slug: 'product-sixteen', name: 'Product Sixteen', price: 650},
    {category: ['man', 'top', 'eunoia'], photo: product17, slug: 'product-seventeen', name: 'Product Seventeen', price: 1000},
    {category: ['woman', 'dress', 'unilever'], photo: product18, slug: 'product-eighteen', name: 'Product Eighteen', price: 750},
    {category: ['man', 'top', 'eunoia'], photo: product19, slug: 'product-nineteen', name: 'Product Nineteen', price: 930},
    {category: ['woman', 'trouser', 'eunoia'], photo: product20, slug: 'product-twenty', name: 'Product Twenty', price: 760},
    {category: ['woman', 'top', 'unilever'], photo: product16, slug: 'product-sixteen', name: 'Product Sixteen', price: 650},
    {category: ['man', 'top', 'eunoia'], photo: product17, slug: 'product-seventeen', name: 'Product Seventeen', price: 1000},
    {category: ['woman', 'dress', 'unilever'], photo: product18, slug: 'product-eighteen', name: 'Product Eighteen', price: 750},
    {category: ['man', 'top', 'eunoia'], photo: product19, slug: 'product-nineteen', name: 'Product Nineteen', price: 930}
];

export const homeCollection = [
    {image: categoryImageTwo, name: 'eunoia'},
    {image: categoryImageOne, name: 'unilever'}
];

export const collection = [
    {
        photo: col1,
        description: 'Nicely Knitted Unilever Dress',
        images: [col11, col12, col13],
        name: 'Unilever',
        heroImage: heroOne
    },

    {
        photo: col2,
        description: 'Eunoia Beauty Fashion Wear',
        images: [col21, col22, col23],
        name: 'Eunoia',
        heroImage: heroTwo
    },

    {
        photo: col3,
        description: 'Unilever Designed Shirt - Men',
        images: [col31, col32, col33],
        name: 'Unilever'
    },

    {
        photo: col4,
        description: 'Shirt for Men - Eunioa Design',
        images: [col41, col42, col43],
        name: 'Eunoia'
    }
];