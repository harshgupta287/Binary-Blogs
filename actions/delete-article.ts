"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteArticle = async (articleId: string) => {
  // Step 1: Delete all comments linked to the article
  await prisma.comment.deleteMany({
    where: {
      articleId,
    },
  });

  // Step 2: Delete the article
  await prisma.articles.delete({
    where: {
      id: articleId,
    },
  });

  // Step 3: Revalidate the page
  revalidatePath("/dashboard");
};
