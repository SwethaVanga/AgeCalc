import { fireEvent, render, screen } from "@testing-library/react"
import { DateInput } from "../DateInput"

describe("DateInput", () =>{
   it('should test label, date input value', () => {
    render(<DateInput label="Date Label" value="2022-09-04" handleDateChange={jest.fn} />);
    expect(screen.getByText('Date Label')).toBeInTheDocument();
    expect(screen.getByTestId('date-input')).toHaveValue('2022-09-04');
   }) 

   it('should test onchange', () => {
    const mockOnChange = jest.fn()
    render(<DateInput label="Date Label" value="2022-09-04" handleDateChange={mockOnChange} />);
    expect(screen.getByTestId('date-input')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('date-input'), {
        target: {
            value: "2023-09-04"
        }
    })
    expect(mockOnChange).toBeCalledTimes(1)
    expect(mockOnChange).toBeCalledWith("2023-09-04")
   })
})