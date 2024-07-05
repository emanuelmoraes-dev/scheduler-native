export function captalizeWeekDay(value: string): string {
    if ((value.charAt(0) ?? '').match(/[a-z]/)) {
        value = (value.charAt(0)?.toLocaleUpperCase() ?? '') + value.substring(1)
    }
    const sepIndex = value.indexOf('-')
    if (sepIndex >= 0 && sepIndex+1 < value.length && value.charAt(sepIndex+1).match(/[a-z]/)) {
        value = value.substring(0, sepIndex) + '-' + value.charAt(sepIndex+1).toLocaleUpperCase() + value.substring(sepIndex+2)
    }
    return value
}
