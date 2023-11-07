"use client";

import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

export const AppMarkdown = ({ body }: { body: string }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      className="markdown-body"
    >
      {body}
    </Markdown>
  );
};
