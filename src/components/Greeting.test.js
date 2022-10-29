import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"

describe('Greet compontnt', () => {
    test('renders greeting test', () => {
        //arrange
        render(<Greetings />);
        //act
            //here nothing
        //assert
        const helloworldElement = screen.getByText('Hello world', { exact: false });
        expect(helloworldElement).toBeInTheDocument();
    });

    test('renders change text when button is clicked!', () => {
        render(<Greetings />);
        const changeElement = screen.getByText('good to see you', { exact: false});
        expect(changeElement).toBeInTheDocument();
    })

})
