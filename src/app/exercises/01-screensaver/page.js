import React from 'react';

import Link from 'next/link';

function ScreenSaverList({ params, searchParams }) {
  return (
    <main>
      <p>Choose a screensaver color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/hotpink">
            Hot Pink
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/purple">Purple</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverList;
