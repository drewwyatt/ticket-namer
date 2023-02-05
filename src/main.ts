const file = await Deno.readTextFile("./data/adjectives.txt");
const adjectives = file.split("\n").filter(Boolean);

console.log("adj", file);
