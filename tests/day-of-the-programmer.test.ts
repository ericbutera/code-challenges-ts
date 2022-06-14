import dayOfProgrammer from "../src/day-of-the-programmer";

test("example", () => {
    expect(dayOfProgrammer(1984)).toBe("12.09.1984");
    expect(dayOfProgrammer(2017)).toBe("13.09.2017");
    expect(dayOfProgrammer(2016)).toBe("12.09.2016");
    expect(dayOfProgrammer(1800)).toBe("12.09.1800");
});

test("conversion year 1918", () => {
    expect(dayOfProgrammer(1918)).toBe("26.09.1918");
});
