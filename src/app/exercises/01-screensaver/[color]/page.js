import React from 'react';
import ScreenSaver from '../../../../components/ScreenSaver';
import Link from 'next/link';

async function ScreenSaverExercise({ params, searchParams }) {
  const { color } = await params;

  if (!color) {
    throw new Error(`Error: No color specified.`);
  } else {
    return (
      <main className="screen-saver-wrapper">
        <ScreenSaver color={color} />
      </main>
    );
  }
}

export default ScreenSaverExercise;
