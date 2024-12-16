import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowChart from '@/Pages/ShowChart';
import { ChannelData } from '@/interfaces';
import { User } from '@/types';

jest.mock('recharts', () => {
    const OriginalRecharts = jest.requireActual('recharts');
    return {
        ...OriginalRecharts,
        Pie: (props: any) => <OriginalRecharts.Pie {...props} onClick={props.onClick} />,
        Legend: (props: any) => <OriginalRecharts.Legend {...props} onClick={props.onClick} />,
    };
});

describe('ShowChart Component', () => {
    const mockData: Array<ChannelData> = [
        { id: 1, name: 'Channel 1', amount: 10 },
        { id: 2, name: 'Channel 2', amount: 20 },
        { id: 3, name: 'Channel 3', amount: 30 },
    ];
    const mockUser: User = { id: 1, name: 'Test User', email: 'test@example.com', email_verified_at: '2024-01-01T00:00:00Z' };
    const mockAuth = { user: mockUser };

    test('renders the chart with data', () => {
        render(<ShowChart data={mockData} auth={mockAuth}/>);

        expect(screen.getByText('Add new channel'));
        mockData.forEach((item) => {
            expect(screen.getByText(item.name));
        });
    });
});