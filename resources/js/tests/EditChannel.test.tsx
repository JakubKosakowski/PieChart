import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditChannel from '@/Pages/EditChannel';
import { router } from '@inertiajs/react';
import { User } from '@/types';

jest.mock('@inertiajs/react', () => ({
    useForm: jest.fn(),
    router: { delete: jest.fn() },
}));

const mockPost = jest.fn();
const mockSetData = jest.fn();
const mockUseForm = require('@inertiajs/react').useForm;

// mockUseForm.mockImplementation(() => ({
//     data: { name: '', amount: 1 },
//     setData: mockSetData,
//     post: mockPost,
// }));

describe('EditChannel Component', () => {
    const mockChannel = { id: 1, name: 'Test Channel', amount: 10 };
    const mockUser: User = { id: 1, name: 'Test User', email: 'test@example.com', email_verified_at: '2024-01-01T00:00:00Z' }; // Add mock user
    const mockAuth = { user: mockUser };
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders the form with initial values', () => {
        mockUseForm.mockImplementation(() => ({
            data: mockChannel,
            setData: mockSetData,
            post: mockPost,
        }));
        render(<EditChannel channel={mockChannel} auth={mockAuth}/>);
        const nameInput = screen.getByLabelText(/Name:/i) as HTMLInputElement;
        const amountInput = screen.getByLabelText(/Amount:/i) as HTMLInputElement;

        expect(screen.getByText('Edit channel'));
        expect(nameInput.value).toEqual(mockChannel.name);
        expect(+amountInput.value).toEqual(mockChannel.amount);
        expect(screen.getByRole('button', { name: /submit/i }));
        expect(screen.getByRole('button', { name: /delete channel/i }));
    });

    test('updates form state on input change', () => {
        render(<EditChannel channel={mockChannel} auth={mockAuth}/>);

        const nameInput = screen.getByLabelText(/Name:/i);
        const amountInput = screen.getByLabelText(/Amount:/i);

        fireEvent.change(nameInput, { target: { value: 'Updated Channel Name' } });
        fireEvent.change(amountInput, { target: { value: 20 } });

        expect(mockSetData).toHaveBeenCalledWith('name', 'Updated Channel Name');
        expect(mockSetData).toHaveBeenCalledWith('amount', 20);
    });

    test('submits the form correctly', () => {
        render(<EditChannel channel={mockChannel} auth={mockAuth}/>);

        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.click(submitButton);

        expect(mockPost).toHaveBeenCalledWith(`/edit/${mockChannel.id}`);
    });

    test('calls delete endpoint when delete button is clicked', () => {
        render(<EditChannel channel={mockChannel} auth={mockAuth}/>);

        const deleteButton = screen.getByRole('button', { name: /delete channel/i });

        fireEvent.click(deleteButton);

        expect(router.delete).toHaveBeenCalledWith(`/edit/${mockChannel.id}`);
    });

    test('redirects to the homepage when clicked', () => {
            render(<EditChannel channel={mockChannel} auth={mockAuth}/>);
    
            const cancelButton = screen.getByRole('button', { name: /cancel/i });
    
            fireEvent.click(cancelButton);
    
            // Assert that the POST request is made to the correct endpoint
            expect(window.location.href).toBe('http://localhost/');
        });
});