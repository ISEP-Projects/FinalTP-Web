import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../Components/Loading';

describe('compontens tests', () => {
  describe('renders correctly', () => {
    it('loading', () => {
      const { queryByTestId } = render(<Loading />);
      expect(queryByTestId('loading')).toBeInTheDocument();
    });
  });
});
