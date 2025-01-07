export interface Greeting {
  text: string;
}

export const greetings = (obj: Greeting) => {
  console.log(`Hello, ${obj.text}`);
};
