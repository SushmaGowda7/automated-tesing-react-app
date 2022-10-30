import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders if the request succeeds', async () => {
        //here we're not sending actual requests instead mock will be sent
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{
                id: 'p1', title: 'First post'
            }]
        })
        render(<Async />);
        const outputEl = await screen.findAllByRole('listitem');
        expect(outputEl).not.toHaveLength(0);
    });
});