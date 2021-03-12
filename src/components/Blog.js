import React from 'react';
import axios from 'axios';

export default function Blog() {

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lksherwin";

  return (
    <div id='blog'>
      <h1>Blog Page</h1>
    </div>
  )
}
