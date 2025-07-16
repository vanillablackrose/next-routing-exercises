import React from 'react';

import './styles.css';
import ToastProvider from '../../../../src/components/ToastProvider';
import ToastShelf from '../../../../src/components/ToastShelf';

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
