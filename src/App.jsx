import React from 'react';
import TableComponent from './components/TableComponent';
import { NextUIProvider } from '@nextui-org/react';

function App() {
    return (
      <NextUIProvider>
        <TableComponent />
      </NextUIProvider>
    );
  }

  export default App;
