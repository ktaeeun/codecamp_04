import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

// 타이틀옆에 스트링! <= 타이틀만큼은 있어야한다는것

const myTypeDefs = gql`
  input CreateboardInput {
    writer: String
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String

    createBoard(createBoardInput: CreateboardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoard: async () => {
      // 데이터베이스에서 게시물데이터 꺼내오기

      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);

      return result;
    },
  },

  Mutation: {
    // loginCheck: (parent: any, args: any) => {

    // },

    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      // loginCheck({aaa: "철수"})
      // 데이터베이스에 게시물데이터 등록하기

      // 1번째 방법
      // await Board.insert({
      //   title: "안녕하세요 테스트입니다",
      //   writer: "양순이",
      //   age: 8,
      // });

      // 2번째 방법
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      // 3번째 방법
      await Board.insert({
        ...args.createBoardInput,

        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });
      return "게시물 등록에 성공하였습니다";
    },
  },
};

// 아폴로 서버 설정
const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3320,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행하기
    console.log("연결완료");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행하기
    console.log(error);
  });
