/* eslint-disable no-useless-escape */
const faker = require("faker");

faker.locale = "ko";

const fakeReply = (count, label, num) => {
  const result = [];
  for (let i = 1; i <= count; i += 1) {
    const replyData = {
      users_id: Math.floor(Math.random() * 10) + 1,
      reply: faker.lorem.sentence(20),
      is_reported: 0,
      is_blocked: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    replyData[label] = Math.floor(Math.random() * num) + 1;
    result.push(replyData);
  }
  return result;
};

module.exports = fakeReply;
