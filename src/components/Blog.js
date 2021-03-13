import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lksherwin").then(resp => setBlogs(resp.data.items));
  }, [])

  return (
    <div id='blog'>
      <h1>Blog Page</h1>
      {
        blogs ? blogs.map((blog) => (
          <div>
            <p>{blog.title}</p>
            <p>{blog.content.substring(0, 1000)}</p>
          </div>
        )) : <p>Loading...</p>
      }
    </div>
  )
}
