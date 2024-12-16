import { render, screen, fireEvent } from '@testing-library/react';
import CreateChannel from '@/Pages/CreateChannel';

jest.mock('@inertiajs/react', () => ({
    useForm: jest.fn(),
}));

const mockPost = jest.fn();
const mockSetData = jest.fn();
const mockUseForm = require('@inertiajs/react').useForm;

mockUseForm.mockImplementation(() => ({
    data: { name: '', amount: 1 },
    setData: mockSetData,
    post: mockPost,
    errors: {},
}));

describe('CreateChannel Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the form with initial values', () => {
        render(<CreateChannel />);
        const nameInput = screen.getByLabelText(/Name:/i) as HTMLInputElement;
        const amountInput = screen.getByLabelText(/Amount:/i) as HTMLInputElement;

        expect(screen.getByText('Add new channel'));
        expect(nameInput.value).toEqual('');
        expect(+amountInput.value).toEqual(1);
        expect(screen.getByRole('button', { name: /submit/i }));
    });

    test('updates form state on input change', () => {
        render(<CreateChannel />);
        const nameInput = screen.getByLabelText(/Name:/i);
        const amountInput = screen.getByLabelText(/Amount:/i);

        fireEvent.change(nameInput, { target: { value: 'Test Channel' } });
        fireEvent.change(amountInput, { target: { value: 5 } });

        expect(mockSetData).toHaveBeenCalledWith('name', 'Test Channel');
        expect(mockSetData).toHaveBeenCalledWith('amount', 5);
    });

    test('displays errors when errors are present', () => {
        mockUseForm.mockImplementation(() => ({
            data: { name: '', amount: 1 },
            setData: mockSetData,
            post: mockPost,
            errors: { name: 'Name is required' },
        }));

        render(<CreateChannel />);

        expect(screen.getByText(/Name is required/i));
    });

    test('submits the form correctly', () => {
        render(<CreateChannel />);

        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.click(submitButton);

        // Assert that the POST request is made to the correct endpoint
        expect(mockPost).toHaveBeenCalledWith('/create');
    });

    test('redirects to the homepage when clicked', () => {
        render(<CreateChannel />);

        const cancelButton = screen.getByRole('button', { name: /cancel/i });

        fireEvent.click(cancelButton);

        // Assert that the POST request is made to the correct endpoint
        expect(window.location.href).toBe('http://localhost/');
    });
});