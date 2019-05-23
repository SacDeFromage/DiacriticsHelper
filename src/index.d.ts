function removeDiacritics(originalString: string): string;
function toSearchableString(originalString: string, filterSaints: boolean = true): string;

export const result = {
    removeDiacritics,
    toSearchableString,
};
