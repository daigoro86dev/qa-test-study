import countrySpecifics from '../data/countrySpecifics.json';

interface GeoSpecifics {
  countrySpecificUrl: string;
  multiStepRegistration: boolean;
}

export default class GeoUtils {
  static LoadCountrySpecificData() {
    return countrySpecifics as Array<GeoSpecifics>;
  }
}
