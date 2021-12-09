const faker = require("faker");

faker.locale = "ko";

const fakePost = (count) => {
  const result = [];
  const weatherSample = ["sunny", "cloudy", "rainy"];

  for (let i = 1; i <= count; i += 1) {
    const title = faker.lorem
      .sentence(4)
      .replace(/\./gi, "")
      .replace(/·/gi, "");
    const postData = {
      users_id: Math.floor(Math.random() * 10) + 1,
      weather: weatherSample[i % 3],
      title,
      description: faker.lorem.sentence(7).replace(/·/gi, ""),
      body: `<h1>테스트</h1>${faker.lorem.paragraphs(15, "<br>")}`,
      thumbnail: faker.image.nature(1000, 1000),
      likes: 0,
      scraps: 0,
      public: true,
      allow_reply: true,
      is_reported: 0,
      is_blocked: false,
      link: `http://localhost:3000/post/detail/${title.replace(/\s/g, "_")}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    result.push(postData);
  }
  return result;
};

module.exports = fakePost;
