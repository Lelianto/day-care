import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      home --
      <Link href="/about" passHref>
        <a>
          <button>ke about</button>
        </a>
      </Link>
    </div>
  )
}

export default Home
