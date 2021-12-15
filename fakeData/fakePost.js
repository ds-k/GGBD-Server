/* eslint-disable no-useless-escape */
const faker = require("faker");

faker.locale = "ko";

const fakePost = (count) => {
  const result = [];
  const weatherSample = ["맑음", "구름", "비"];
  const imgSample = [
    "https://images.unsplash.com/photo-1540287983765-d95785313eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2382&q=80",
    "https://images.unsplash.com/photo-1429679310900-bad303d0e63a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1508975174-c000113b5900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2380&q=80",
    "https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80",
    "https://images.unsplash.com/photo-1526642738196-ad8ed2d50805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80",
    "https://images.unsplash.com/photo-1421790082661-8b611e70484b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80",
    "https://images.unsplash.com/photo-1519184814414-e083efb8a3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80",
    "https://images.unsplash.com/photo-1533592740891-f0470ef71e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG1pbmltYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1592993264644-2b645ab13878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    "https://images.unsplash.com/photo-1531593773601-7a75ca4cd915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1541087823427-949258b6ffee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1597842325046-347f754e8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1486184841738-8386d5ea4497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80",
    "https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
    "https://images.unsplash.com/photo-1532928448850-d740ccdd9f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  ];

  for (let i = 1; i <= count; i += 1) {
    const title = faker.lorem.sentence(4);

    const postData = {
      users_id: Math.floor(Math.random() * 10) + 1,
      weather: weatherSample[i % 3],
      title,
      description: faker.lorem.sentence(7).replace(/·/gi, ""),
      body: `<h1>테스트</h1>${faker.lorem.paragraphs(15, "<br>")}`,
      thumbnail: imgSample[i % 15],
      likes: 0,
      scraps: 0,
      public: true,
      allow_reply: true,
      is_reported: 0,
      is_blocked: false,
      slug: `${title
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim, "")
        .replace(/\s/g, "-")}`,
      departments_id: Math.floor(Math.random() * 42) + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    result.push(postData);
  }
  return result;
};

module.exports = fakePost;
