import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import GradientButton from './components/GradientButton';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should be abled when not loading', () => {
  act(() => {
    render(<GradientButton>Is loading</GradientButton>, container);
  });

  expect(
    document
      .querySelector("[data-testid='gradientButton']")
      .getAttribute('disabled'),
  ).toEqual(null);
});

it('should be disabled when loading', () => {
  act(() => {
    render(<GradientButton isLoading>Is loading</GradientButton>, container);
  });

  expect(
    document
      .querySelector("[data-testid='gradientButton']")
      ?.getAttribute('disabled'),
  ).toEqual('');
});
