import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer', () => {
    it('Footer renders successfully', () => {
        render(<Footer />);
        expect(screen.getByText(/Nikita/)).toBeInTheDocument();
    })
})