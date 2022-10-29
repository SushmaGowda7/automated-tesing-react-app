import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
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

    test('renders change text when button is Not clicked!', () => {
        //arrange
        render(<Greetings />);

        //assert
        const changeElement = screen.getByText('good to see you', { exact: false});
        expect(changeElement).toBeInTheDocument();
    })
    test('renders change text when button is clicked!', () => {
        //arrange
        render(<Greetings />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const changeElement = screen.getByText('changed', { exact: false});
        expect(changeElement).toBeInTheDocument();
    })

    test('checks wheather text is visible when button is clicked!', () => {
        //arrange
        render(<Greetings />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const changeElement = screen.queryByText('good to see you', { exact: false});
        expect(changeElement).toBeNull();
    })

})
