import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
	return (
		<div>
			profile --
			<Link href="/" passHref>
        <a>
          <button>ke home</button>
        </a>
      </Link>
		</div>
	)
}

export default AboutPage;