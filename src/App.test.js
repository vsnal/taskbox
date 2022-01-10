import { render } from '@testing-library/react';
import App from './App';

test('renders InboxScreen', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.page.lists-show')).not.toBe(null);
});
