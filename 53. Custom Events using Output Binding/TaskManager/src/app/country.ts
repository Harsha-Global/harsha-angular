export class Country
{
    countryID: number;
    countryName: string;

    constructor(countryIDParam: number, countryNameParam: string)
    {
        this.countryID = countryIDParam;
        this.countryName = countryNameParam;
    }
}
