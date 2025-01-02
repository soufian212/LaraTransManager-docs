import React from 'react';
import Layout from '@theme-original/Layout'; // Import the original Layout

export default function LayoutWrapper(props) {
  return (
    <div>
      {/* Custom Header */}
      <header>
        <h1>Welcome to LaraTransManager</h1>
        <p>Your tagline here</p>
      </header>

      {/* Original Layout */}
      <Layout {...props} />
    </div>
  );
}