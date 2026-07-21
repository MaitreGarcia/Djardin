
export async function fetchFlowers(): Promise<Flower[]> {
  // We put a fake fetch here
  return [
    {
      name: 'Rose',
      scheme: 'monthly',
      last_watered: new Date(),
      image: 'https://emova-monceaufleurs-fr-storage.omn.proximis.com/Imagestorage/images/2560/1600/5f6dbfa2deb61_visuel1_1_.jpg'
    },
    {
      name: 'Monstera',
      scheme: 'weekly',
      last_watered: new Date(),
      image: 'https://passionjardins.com/assets/craft4/_1200x665_crop_center-center_100_none/8421/shutterstock_1650851710-scaled.webp'
    },
    {
      name: 'Pothos',
      scheme: 'weekly',
      last_watered: new Date(),
      image: 'https://costafarms.com/cdn/shop/articles/Golden_Pothos_Houseplant_Header-Costa_Farms_abe353ca-4807-42c8-aba3-bdcc46f3175a.jpg?v=1781212549'
    },
    {
      name: 'Zamioculcas',
      scheme: 'weekly',
      last_watered: new Date(),
      image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Orchidée',
      scheme: 'weekly',
      last_watered: new Date(),
      image: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Lys',
      scheme: 'bi-weekly',
      last_watered: new Date(),
      image: 'https://www.carrementfleurs.com/modules/prestablog/views/img/grid-for-1-7/up-img/21.jpg'
    },
    {
      name: 'Lavande',
      scheme: 'bi-weekly',
      last_watered: new Date(),
      image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80'
    },
  ]
}
