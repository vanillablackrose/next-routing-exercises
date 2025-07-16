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

const COLORS = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  // ...
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];

export function generateStaticParams() {
  return COLORS.map((color) => ({
    color,
  }));
}

export default ScreenSaverExercise;
