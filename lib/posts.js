import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// - query a db directly 
//import someDatabaseSDK from 'someDatabaseSDK'
//const databaseClient = someDatabaseSDK.createClient(...)

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });


  // Instead of the file system,
  // fetch post data from an external API endpoint
  //const res = await fetch('..');
  //return res.json();

  // Instead of the file system,
  // fetch post data from a database
  //return databaseClient.query('SELECT posts...')

//extract methods
}