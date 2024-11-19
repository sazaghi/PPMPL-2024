import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('latihan Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });  
    test('Harusnya reset', () => {
        render(<Counter />);
        const resetValue = screen.getByTestId('counter-value');
        const reset = screen.getByText('Reset');
        fireEvent.click(reset);
        expect(resetValue).toHaveTextContent('0');
    });
    test('Harusnya sebut namaku', () => {
        render(<Greeting name="Saad Zaaghi" />);
        const sapaaku = screen.getByTestId('greeting');
        expect(sapaaku).toHaveTextContent('Hello, Saad Zaaghi');
    });
    test('Harusnya sebut nama dosenku', () => {
        render(<Greeting name="Pak Farid" />);
        const sapaaku = screen.getByTestId('greeting');
        expect(sapaaku).toHaveTextContent('Hello, Pak Farid');
    }); 
    test('Harusnya muncul allert', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        render(<AlertButton message={"Sulit kaka enggak pake chat GPT"} />);
        const button = screen.getByTestId('alert-button');
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalledWith("Sulit kaka enggak pake chat GPT");
    });                   
});