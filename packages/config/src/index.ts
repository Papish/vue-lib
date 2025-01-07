export interface Greeting {
  text: string;
}

export const config = (obj: Greeting) => {
  console.log(`Hello, ${obj.text}`);
};
