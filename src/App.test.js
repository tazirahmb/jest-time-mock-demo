import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

beforeEach(() => {
  render(<App />);
})

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('jest time mock', () => {
  const buttonElem = screen.getByText(/click me/i);
  expect(buttonElem).toBeInTheDocument();
  
  fireEvent.click(buttonElem);  

  const TextElem = screen.getByText(/the text is visible/i)

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  
  expect(TextElem).toBeInTheDocument()

  
}); 