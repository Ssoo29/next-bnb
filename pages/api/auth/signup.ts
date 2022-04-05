import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const userExist = Data.user.exist({ email });
  // if (!userExist) {
  //   res.statusCode = 409;
  //   res.send("이미 가입된 이메일입니다.");
  // }

  if (req.method === "POST") {
    return res.end();        
  }
  res.statusCode = 405;

  return res.end();
};