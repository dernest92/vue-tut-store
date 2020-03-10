const baseUrl = window.location.origin;
const products = [
  {
    slug: "fresh-foam-hierro-v5",
    name: "Fresh Foam Hierro v5",
    description:
      "Distance and time. Our latest evolution of the Fresh Foam Hierro v5 trail shoes takes the limits off of both. Designed and engineered with a plush Fresh Foam platform, a Vibram® MegaGrip outsole and an upper that's refined for improved breathability, your boundaries will need to be reimagined. A snug bootie construction, paired with a toe-protecting upper, will make this your new go-to shoe for wherever the trail takes you",
    price: 134.99,
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    variants: [
      {
        color: "Light Aluminum with Blue Ashes & Chromatic Yellow",
        images: [
          `${baseUrl}/mthierg5_nb_02_i.jpg`,
          `${baseUrl}/mthierg5_nb_03_i.jpg`,
          `${baseUrl}/mthierg5_nb_07_i.jpg`
        ]
      },
      {
        color: "Black with Moonbeam",
        images: [
          `${baseUrl}/mthierk5_nb_02_i.jpg`,
          `${baseUrl}/mthierk5_nb_03_i.jpg`,
          `${baseUrl}/mthierk5_nb_04_i.jpg`
        ]
      },
      {
        color: "Varsity Gold with Neo Classic Blue & Phantom",
        images: [
          `${baseUrl}/mthiery5_nb_02_i.jpg`,
          `${baseUrl}/mthiery5_nb_03_i.jpg`,
          `${baseUrl}/mthiery5_nb_07_i.jpg`
        ]
      }
    ]
  },
  {
    slug: "fresh-foam-roav-tee-shirt",
    name: "Fresh Foam Roav Tee Shirt",
    description:
      "Comfort and style you can wear anywhere, just like your favorite tee. The men's Fresh Foam Roav Tee Shirt is designed and engineered with an Ultra Heel design that adapts to your foot, providing a seamless feel coupled with the premium softness of the Fresh Foam midsole. Soft, cotton tee-shirt inspired details on the laces and Ultra Heel put this style at the front of your lineup.",
    price: 79.99,
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    variants: [
      {
        color: "Black with Light Aluminum",
        images: [
          `${baseUrl}/mroavtk_nb_02_i.jpg`,
          `${baseUrl}/mroavtk_nb_03_i.jpg`,
          `${baseUrl}/mroavtk_nb_04_i.jpg`
        ]
      },
      {
        color: "Varsity Gold with Light Aluminum",
        images: [
          `${baseUrl}/mroavtv_nb_02_i.jpg`,
          `${baseUrl}/mroavtv_nb_03_i.jpg`,
          `${baseUrl}/mroavtv_nb_04_i.jpg`
        ]
      }
    ]
  },
  {
    slug: "numeric-440",
    name: "Numeric 440",
    description:
      "Our NB Numeric 440 blends leading edge technology with soft cushioning to create a go-to shoe for both everyday skate and wear. A foam wedge in the heel helps enhance comfort, while a reinforced toe helps absorb wear and tear from skateboarding.",
    price: 74.99,
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    variants: [
      {
        color: "Black with Grey",
        images: [
          `${baseUrl}/nm440bel_nb_02_i.jpg`,
          `${baseUrl}/nm440bel_nb_03_i.jpg`,
          `${baseUrl}/nm440bel_nb_04_i.jpg`
        ]
      },
      {
        color: "Light Grey with Grey",
        images: [
          `${baseUrl}/nm440elg_nb_02_i.jpg`,
          `${baseUrl}/nm440elg_nb_03_i.jpg`,
          `${baseUrl}/nm440elg_nb_04_i.jpg`
        ]
      }
    ]
  },
  {
    slug: "sd100v3",
    name: "SD100v3",
    description:
      "Featuring a new sprint spike plate inspired by our elite racing spikes, the SD100v3 provides a dynamic fit and ride for the emerging sprinter. The removable six-spike forefoot configuration offers just enough rigidity, while a molded heel with textured outsole rubber provides traction in the blocks.",
    price: 69.99,
    sizes: [8, 8.5, 9, 9.5, 10, 11, 12],
    variants: [
      {
        color: "Black with White",
        images: [
          `${baseUrl}/usd100b3_nb_02_i.jpg`,
          `${baseUrl}/usd100b3_nb_03_i.jpg`,
          `${baseUrl}/usd100b3_nb_04_i.jpg`
        ]
      },
      {
        color: "Light Grey with Grey",
        images: [
          `${baseUrl}/usd100w3_nb_02_i.jpg`,
          `${baseUrl}/usd100w3_nb_03_i.jpg`,
          `${baseUrl}/usd100w3_nb_04_i.jpg`
        ]
      }
    ]
  }
];

export default {
  getProducts() {
    console.log("get products");
    console.log(window.location.origin);

    return new Promise(resolve => {
      resolve(products);
    });
  },
  getProductBySlug(slug) {
    const product = products.find(p => p.slug === slug);
    return new Promise(resolve => {
      resolve(product);
    });
  }
};
