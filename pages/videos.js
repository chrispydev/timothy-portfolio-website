import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../lib";
import VideoCard from "../components/videoCard";
import { video } from "../data/video";
import Heading from "../components/Heading";

export default function blog({ posts }) {
  return (
    <div className="dark:bg-darker h-screen dark:text-white">
      <main className="lg:max-w-[70%] mx-auto p-2">
        <Heading center headingText="Video recording of my projects" small />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {video.map(
            ({ projectImage, link, sourceCode, info, technology }, index) => (
              <div key={index}>
                <VideoCard
                  projectImage={projectImage}
                  link={link}
                  sourceCode={sourceCode}
                  info={info}
                  technology={technology}
                />
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
