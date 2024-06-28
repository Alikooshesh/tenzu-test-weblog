import { hslColorGen } from '@/utils/colorGen';
import { timestampToGre } from '@/utils/dateAndTimeHandlers';
import { createRandomTimeStamp } from '@/utils/fakeData';

describe('hslColorGen', () => {
    it('generates correct HSL color string', () => {
        const h = 200;
        const minS = 20;
        const l = 50;
        const factor = 10;

        const result = hslColorGen(h, minS, l, factor);

        expect(result).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/); // Basic check for HSL format
    });
});

describe('timestampToGre', () => {
    it('converts timestamp to correct date format', () => {
        const timestamp = 1628123456000; // August 5, 2021

        const result = timestampToGre(timestamp);

        expect(result).toBe('August 5, 2021');
    });
});

describe('createRandomTimeStamp', () => {
    it('generates random timestamp within range', () => {
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-12-31');

        const result = createRandomTimeStamp(startDate, endDate);

        expect(result).toBeGreaterThanOrEqual(startDate.getTime());
        expect(result).toBeLessThanOrEqual(endDate.getTime());
    });
});