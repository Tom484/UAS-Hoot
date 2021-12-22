const facts = [
  "The world’s oldest wooden wheel has been around for more than 5,000 years.",
  "Dead skin cells are a main ingredient in household dust.",
  "Sudan has more pyramids than any country in the world",
  "The bumblebee bat is the world’s smallest mammal.",
  "The circulatory system is more than 60,000 miles long.",
  "There are parts of Africa in all four hemispheres.",
  "The cornea is one of only two parts of the human body without blood vessels.",
  "German chocolate cake was invented in Texas.",
  "Marla Gibbs continued to work as a flight attendant for two years after being cast on a hit TV show.",
  "Fact: A one-way trip on the Trans-Siberian Railway involves crossing 3,901 bridges.",
  "Glaciers and ice sheets hold about 69 percent of the world's freshwater.",
  "The fastest gust of wind ever recorded on Earth was 253 miles per hour.",
  "Recent droughts in Europe were the worst in 2,100 years.",
  "The best place in the world to see rainbows is in Hawaii.",
  "There are fossilized plants in Greenland under 1.4 km of ice.",
  "Whale songs can be used to map out the ocean floor.",
  "Mount Everest is bigger now than the last time it was measured.",
  "Climate change is causing flowers to change color.",
  "North Korea and Cuba are the only places you can't buy Coca-Cola.",
]

const randomFactIndex = () => Math.floor(Math.random() * facts.length)

export const getRandomFact = () => {
  return facts[randomFactIndex()]
}

export const getRandomFacts = numberOfFacts => {
  const randomFacts = []
  let randomFactsIndex = {}

  for (let i = 0; i < numberOfFacts; i++) {
    let factIndex = randomFactIndex()

    while (randomFactsIndex?.[factIndex]) {
      factIndex = randomFactIndex()
    }
    randomFactsIndex[factIndex] = true
    randomFacts.push(facts[factIndex])
  }
  return randomFacts
}
