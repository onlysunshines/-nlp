import { formHandler } from ".client/js/formHandler";

describe("Testing the submit functionality", () => {
    test("Testing the formHandler() function", () => {
        const input = [
            { id: 1, text: "word 1"},
            { id: 2, text: "word 2"},
            { id: 3, text: null}
        ];

        const output = [{ id: 3, text: null }];

        expect(formHandler(input, "null")).toEqual(output);
    });
});

export { formHandler }