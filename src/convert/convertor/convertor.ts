import { Unit, unitConversionMap } from './data';

/**
 * Class that is converting units to different units
 * @since 1.0.1
 */
export class Convertor {
    public value: number;
    public unit: Unit;

    constructor(value: number, unit: Unit) {
        this.value = value;
        this.unit = unit;
    }

    /**
   * Method that returns a new Convertor with the converted value
   * @param unit target unit
   * @returns new Convertor with the converted value
   * @since 1.0.1
   */
    public to(unit: Unit) {
        const currentFactor = findValueByLeafName(unitConversionMap, this.unit);
        const targetFactor = findValueByLeafName(unitConversionMap, unit);
        const conversionFactor = currentFactor / targetFactor;

        this.value = this.value * conversionFactor;
        this.unit = unit;

        return this;
    }
}


// TODO: move this to some utils
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findValueByLeafName(obj: Record<string, any>, leafName: string) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const result = findValueByLeafName(obj[key], leafName);
            if (result !== undefined) {
                return result;
            }
        } else if (key === leafName) {
            return obj[key];
        }
    }
}