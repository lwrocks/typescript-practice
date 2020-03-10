// Types
const newTestVariable: any = "hello";
const isIronHackAwesome: boolean = true;
const bootcampLengthInWeeks: number = 9;
const mostPopularReview: string = "Life changing";
const techTaught: string[] = ["JavaScript", "React", "MongoDB"];
const tiredIndexVsCupsOfCoffee: [string, number] = ["very", 3];

// Enum
enum TrafficLight {
  // Useful when you already know the specific values
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

const currentLight: TrafficLight = TrafficLight.Blue;

// Interface
interface IronHackGraduate {
  mood: string;
  linesOfCodeWritten: number;
  favoriteEnergySource?: EnergySources;
}
// You can link two interfaces together when building components of an app

interface EnergySources {
  drink: string;
  activity: string;
  music: string;
}

const graduateNumber1: IronHackGraduate = {
  mood: "Thrilled",
  linesOfCodeWritten: 9000,
  favoriteEnergySource: {
    drink: "Club Mate",
    activity: "Squats",
    music: "Lo-Fi YouTube Mix"
  }
};

// Haiku Function
export const haiku = (a: string, b: string, c: string) => {
  return `${a} ${b} ${c}`;
};

haiku("1", "2", "3");

// Umbrella Problem
export const isItRainingToday = (a: boolean) => {
  if (a === true) {
    return "Alexa play Umbrella by Rihanna";
  } else {
    return "Alexa play Sunny by Boney-M";
  }
};

isItRainingToday(true);
isItRainingToday(false);

// Twitter Activity
const readTweet = (tweets: string | number): string | number => {
  return tweets;
};

readTweet("This is the tweet");
readTweet(1234);

// Tweets posted last month
export const tweetsPostedLastMonth = (
  tweets: (string | number)[] | [number, string, number]
): number | string => {
  if (tweets.length > 0) {
    return tweets.length;
  } else {
    return "Silence is golden";
  }
};

tweetsPostedLastMonth([]);
tweetsPostedLastMonth([1, "tweet", 3])
tweetsPostedLastMonth([1, "tweet", "tweet #2"])

export {};
