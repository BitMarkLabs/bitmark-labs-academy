const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Bitcoin" },
        { name: "Ethereum" },
        { name: "Cardano" },
        { name: "Solana" },
        { name: "Wallets" },
        { name: "DEX" },
        { name: "NFTs" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main().catch((error) => {
  console.error("Error running the script:", error);
  process.exit(1);
});