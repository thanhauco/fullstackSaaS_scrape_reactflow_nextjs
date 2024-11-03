import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } else if (req.method === "POST") {
    const { title, userId } = req.body;
    const project = await prisma.project.create({
      data: { title, userId },
    });
    res.json(project);
  }
}