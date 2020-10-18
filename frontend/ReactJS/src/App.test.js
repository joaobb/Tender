import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { SubmitButton } from './view/styles/Auth';

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
		render(<SubmitButton>Is loading</SubmitButton>, container);
	});

	expect(document.querySelector("[data-testid='submitButton']").getAttribute('disabled')).toEqual(null);
});

it('should be disabled when loading', () => {
	act(() => {
		render(<SubmitButton isLoading>Is loading</SubmitButton>, container);
	});

	expect(document.querySelector("[data-testid='submitButton']")?.getAttribute('disabled')).toEqual('');
});
