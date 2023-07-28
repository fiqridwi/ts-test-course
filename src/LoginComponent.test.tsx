import LoginComponent from "./LoginComponent";
import { render, screen } from "@testing-library/react";

describe("Login component tests", () => {
	const loginServiceMock = {
		login: jest.fn(),
	};
	const setTokenMock = jest.fn();

	let container: HTMLElement;
	function setup() {
		container = render(<LoginComponent loginService={loginServiceMock} setToken={setTokenMock} />).container;
	}

	beforeEach(() => {
		setup();
	});

	it("should render the login component", () => {
		const mainElement = screen.getByRole("main");
		expect(mainElement).toBeInTheDocument();
		expect(screen.queryByTestId("resutLabel")).not.toBeInTheDocument();
	});
	it("should render correctly - query by test id", () => {
		// const inputs = screen.getAllByTestId("input");
		const inputs = container.querySelectorAll("input");
		expect(inputs).toHaveLength(3);
		expect(inputs[0].getAttribute("value")).toBe("");
		expect(inputs[1].getAttribute("value")).toBe("");
		expect(inputs[2].getAttribute("value")).toBe("Login");
	});
});
