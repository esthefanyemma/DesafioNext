import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "BATLEFIELD 4",
      price: 10.98,
      image:
        "https://upload.wikimedia.org/wikipedia/pt/8/84/Battlefield_4_capa.png",
      description: "Product Description",
    },
    {
      name: "THE SIMS 4",
      price: 10.98,
      image:
        "https://upload.wikimedia.org/wikipedia/pt/3/34/Nova_capa_de_The_Sims_4.png",
      description: "Product Description",
    },
    {
      name: "HOGWARTS LEGACY",
      price: 10.98,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/Ah7Ar9MU0r1BBlzAUflmhyQP.png",
      description: "Product Description",
    },
    {
      name: "HADES",
      price: 10.98,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
      description: "Product Description",
    },
    {
      name: "HERO SIEGE",
      price: 10.98,
      image:
        "https://images.stopgame.ru/games/logos/17058/c280x280/4lyj9DarccbGh8SyVFRmWQ/hero_siege-square.jpg",
      description: "Product Description",
    },
    {
      name: "A HAT IN TIME",
      price: 10.98,
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/2a/A_Hat_in_Time_cover_art.png",
      description: "Product Description",
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
