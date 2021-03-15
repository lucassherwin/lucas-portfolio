import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BlogSection = styled.div`
  background-color: #f5f5f5;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  border: 1px solid black;
  /* max-width: 50%; */
  margin: 5px;
  padding: 5px;
  box-shadow: -8px 5px 2px black;
  &:hover {
    transform: translateY(-10px);
  }

`;

export default function Blog() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lksherwin").then(resp => setBlogs(resp.data.items));
  }, [])

  const toText = (node) => {
    const tag = document.createElement('div');
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

  return (
    <BlogSection id='blog'>
      <h1>Blog Page</h1>
      <CardsContainer>
        {
          blogs ? blogs.map((blog) => (
            <Card onClick={() => window.open(blog.link, '_blank')}>
              <h4 style={{textAlign: 'center'}}>{blog.title}</h4>
              <p>{toText(blog.content.substring(0, 500))}</p>
            </Card>
          )) : <p>Loading...</p>
        }
      </CardsContainer>
    </BlogSection>
  )
}

// setBlogs(resp.data.items)

// onClick={window.open()}