import { nameChecker } from ".client/js/nameChecker";

describe("Testing the submit functionality", () => {
    test("Testing the nameChecker() function", () => {
        const input = [
            { id: 1, text: "word 1"},
            { id: 2, text: "word 2"},
            { id: 3, text: null}
        ];

        const output = [{ id: 3, text: null }];

        expect(nameChecker(input, "null")).toEqual(output);
    });
});

export { nameChecker }