export function isString(value: unknown): value is string {
    return typeof value === "string";
}

export function isNumeric(value: unknown): boolean {
    if (typeof value === "number") return true;
    if (typeof value !== "string") return false;

    return !isNaN(Number(value.trim()));
}

export function isDate(value: unknown): value is Date {
    if (value instanceof Date) return true;

    if (typeof value === "string") {
        const parsed = new Date(value);
        return !isNaN(parsed.getTime());
    }

    return false;
}

export function formatDateAtMidnight(date: Date): string {
    const midnightDate = new Date(date);
    midnightDate.setUTCHours(0, 0, 0, 0);

    return midnightDate
        .toISOString()
        .replace("T", " ")
        .slice(0, 19);
}
