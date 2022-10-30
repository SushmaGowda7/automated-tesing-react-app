import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders if the request succeeds', async () => {
        render(<Async />);
        const outputEl = await screen.findAllByRole('listitem');
        expect(outputEl).not.toHaveLength(0);
    });
});