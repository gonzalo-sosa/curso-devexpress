import "./matchMediaMock";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App", () => {
	test("renders learn react link", async () => {
		await act(async () => {
			render(<App />);
		});
		const linkElement = screen.getByText(/create react app/i);
		expect(linkElement).toBeInTheDocument();
	});
});
