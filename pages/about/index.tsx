import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
	return (
		<div>
			about --
			<Link href="/profile" passHref>
        <a>
          <button>ke profile</button>
        </a>
      </Link>
		</div>
	)
}

export default AboutPage;