const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});
const openai = new OpenAIApi(configuration);


async function getPromt(prompt:string) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a random shayari genrator bot. you have to write a  joke in simple english with only 50 tokens. Add some good emojis to jokes so it can be more relatable. Keep a tract of past genrated jokes and every time genrate a new joke" },
        { role: "user", content: `${prompt}` },
      ],
      max_tokens:50,
      temperature:0.8
    });
   // console.log(response.data.choices[0].message.content)
   return (response.data.choices[0].message.content);
   
  } catch (err:any) {
    console.log(err);
  }
}

export default getPromt;
