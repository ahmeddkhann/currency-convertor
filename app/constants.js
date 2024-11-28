const currency = [
    { id: 1, country: "Afghanistan", flag: "🇦🇫", currencyLogo: "؋", valueInPKR: 1 / 2.55 },
  { id: 2, country: "Albania", flag: "🇦🇱", currencyLogo: "L", valueInPKR: 1 / 2.68 },
  { id: 3, country: "Algeria", flag: "🇩🇿", currencyLogo: "دج", valueInPKR: 1 / 1.98 },
  { id: 4, country: "Andorra", flag: "🇦🇩", currencyLogo: "€", valueInPKR: 1 / 298 },
  { id: 5, country: "Angola", flag: "🇦🇴", currencyLogo: "Kz", valueInPKR: 1 / 0.52 },
  { id: 6, country: "Argentina", flag: "🇦🇷", currencyLogo: "ARS$", valueInPKR: 1 / 0.37 },
  { id: 7, country: "Armenia", flag: "🇦🇲", currencyLogo: "֏", valueInPKR: 1 / 0.74 },
  { id: 8, country: "Australia", flag: "🇦🇺", currencyLogo: "A$", valueInPKR: 1 / 182 },
  { id: 9, country: "Austria", flag: "🇦🇹", currencyLogo: "€", valueInPKR: 1 / 298 },
  { id: 10, country: "Azerbaijan", flag: "🇦🇿", currencyLogo: "₼", valueInPKR: 1 / 165 },
  { id: 11, country: "Bahamas", flag: "🇧🇸", currencyLogo: "B$", valueInPKR: 1 / 281 },
  { id: 12, country: "Bahrain", flag: "🇧🇭", currencyLogo: "BD", valueInPKR: 1 / 748 },
  { id: 13, country: "Bangladesh", flag: "🇧🇩", currencyLogo: "৳", valueInPKR: 1 / 2.66 },
  { id: 14, country: "Barbados", flag: "🇧🇧", currencyLogo: "BBD$", valueInPKR: 1 / 140.5 },
  { id: 15, country: "Belarus", flag: "🇧🇾", currencyLogo: "Br", valueInPKR: 1 / 112 },
  { id: 16, country: "Belgium", flag: "🇧🇪", currencyLogo: "€", valueInPKR: 1 / 298 },
  { id: 17, country: "Belize", flag: "🇧🇿", currencyLogo: "BZ$", valueInPKR: 1 / 140.5 },
  { id: 18, country: "Benin", flag: "🇧🇯", currencyLogo: "CFA", valueInPKR: 1 / 0.45 },
  { id: 19, country: "Bhutan", flag: "🇧🇹", currencyLogo: "Nu.", valueInPKR: 1 / 3.5 },
  { id: 20, country: "Bolivia", flag: "🇧🇴", currencyLogo: "Bs.", valueInPKR: 1 / 41 },
  { id: 21, country: "Bosnia and Herzegovina", flag: "🇧🇦", currencyLogo: "KM", valueInPKR: 1 / 152 },
  { id: 22, country: "Botswana", flag: "🇧🇼", currencyLogo: "P", valueInPKR: 1 / 20 },
  { id: 23, country: "Brazil", flag: "🇧🇷", currencyLogo: "R$", valueInPKR: 1 / 57 },
  { id: 24, country: "Brunei", flag: "🇧🇳", currencyLogo: "B$", valueInPKR: 1 / 206 },
  { id: 25, country: "Bulgaria", flag: "🇧🇬", currencyLogo: "лв", valueInPKR: 1 / 152 },
  { id: 26, country: "Burkina Faso", flag: "🇧🇫", currencyLogo: "CFA", valueInPKR: 1 / 0.45 },
  { id: 27, country: "Cambodia", flag: "🇰🇭", currencyLogo: "៛", valueInPKR: 1 / 0.07 },
  { id: 28, country: "Cameroon", flag: "🇨🇲", currencyLogo: "CFA", valueInPKR: 1 / 0.45 },
  { id: 29, country: "Canada", flag: "🇨🇦", currencyLogo: "C$", valueInPKR: 1 / 207 },
  { id: 30, country: "Chad", flag: "🇹🇩", currencyLogo: "CFA", valueInPKR: 1 / 0.45 },
  { id: 31, country: "Chile", flag: "🇨🇱", currencyLogo: "CLP$", valueInPKR: 1 / 0.31 },
  { id: 32, country: "China", flag: "🇨🇳", currencyLogo: "¥", valueInPKR: 1 / 39 },
  { id: 33, country: "Colombia", flag: "🇨🇴", currencyLogo: "COL$", valueInPKR: 1 / 0.07 },
  { id: 34, country: "Comoros", flag: "🇰🇲", currencyLogo: "KMF", valueInPKR: 1 / 0.64 },
  { id: 35, country: "Costa Rica", flag: "🇨🇷", currencyLogo: "₡", valueInPKR: 1 / 0.43 },
  { id: 36, country: "Croatia", flag: "🇭🇷", currencyLogo: "HRK", valueInPKR: 1 / 46 },
  { id: 37, country: "Cuba", flag: "🇨🇺", currencyLogo: "CUP$", valueInPKR: 1 / 10 },
  { id: 38, country: "Cyprus", flag: "🇨🇾", currencyLogo: "€", valueInPKR: 1 / 298 },
  { id: 39, country: "Czech Republic", flag: "🇨🇿", currencyLogo: "Kč", valueInPKR: 1 / 13 },
  { id: 40, country: "Denmark", flag: "🇩🇰", currencyLogo: "kr", valueInPKR: 1 / 42 },
  { id: 41, country: "Djibouti", flag: "🇩🇯", currencyLogo: "Fdj", valueInPKR: 1 / 0.36 },
  { id: 42, country: "Dominican Republic", flag: "🇩🇴", currencyLogo: "RD$", valueInPKR: 1 / 5 },
  { id: 43, country: "Ecuador", flag: "🇪🇨", currencyLogo: "$", valueInPKR: 1 / 281 },
  { id: 44, country: "Egypt", flag: "🇪🇬", currencyLogo: "£", valueInPKR: 1 / 9 },
  { id: 45, country: "El Salvador", flag: "🇸🇻", currencyLogo: "$", valueInPKR: 1 / 281 },
  { id: 46, country: "Estonia", flag: "🇪🇪", currencyLogo: "€", valueInPKR: 1 / 298 },
  { id: 47, country: "Eswatini", flag: "🇸🇿", currencyLogo: "SZL", valueInPKR: 1 / 15 },
  { id: 48, country: "Ethiopia", flag: "🇪🇹", currencyLogo: "ብር", valueInPKR: 1 / 5 },
  { id: 49, country: "Fiji", flag: "🇫🇯", currencyLogo: "FJ$", valueInPKR: 1 / 125 },
  { id: 50, country: "Finland", flag: "🇫🇮", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 51, country: "France", flag: "🇫🇷", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 52, country: "Germany", flag: "🇩🇪", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 53, country: "Ghana", flag: "🇬🇭", currencyLogo: "₵", valueInPKR: 1 / 20 },
    { id: 54, country: "India", flag: "🇮🇳", currencyLogo: "₹", valueInPKR: 1 / 3.5 },
    { id: 55, country: "Indonesia", flag: "🇮🇩", currencyLogo: "Rp", valueInPKR: 1 / 0.018 },
    { id: 56, country: "Iran", flag: "🇮🇷", currencyLogo: "﷼", valueInPKR: 1 / 0.006 },
    { id: 57, country: "Iraq", flag: "🇮🇶", currencyLogo: "IQD", valueInPKR: 1 / 0.19 },
    { id: 58, country: "Italy", flag: "🇮🇹", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 59, country: "Japan", flag: "🇯🇵", currencyLogo: "¥", valueInPKR: 1 / 1.93 },
    { id: 60, country: "Kenya", flag: "🇰🇪", currencyLogo: "KSh", valueInPKR: 1 / 2 },
    { id: 61, country: "Malaysia", flag: "🇲🇾", currencyLogo: "RM", valueInPKR: 1 / 61 },
    { id: 62, country: "Maldives", flag: "🇲🇻", currencyLogo: "MVR", valueInPKR: 1 / 18 },
    { id: 63, country: "Mexico", flag: "🇲🇽", currencyLogo: "MX$", valueInPKR: 1 / 15 },
    { id: 64, country: "Nepal", flag: "🇳🇵", currencyLogo: "रू", valueInPKR: 1 / 2.2 },
    { id: 65, country: "Netherlands", flag: "🇳🇱", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 66, country: "New Zealand", flag: "🇳🇿", currencyLogo: "NZ$", valueInPKR: 1 / 173 },
    { id: 67, country: "Nigeria", flag: "🇳🇬", currencyLogo: "₦", valueInPKR: 1 / 0.56 },
    { id: 68, country: "Norway", flag: "🇳🇴", currencyLogo: "kr", valueInPKR: 1 / 28 },
    { id: 69, country: "Pakistan", flag: "🇵🇰", currencyLogo: "₨", valueInPKR: 1 },
    { id: 70, country: "Philippines", flag: "🇵🇭", currencyLogo: "₱", valueInPKR: 1 / 5.03 },
    { id: 71, country: "Qatar", flag: "🇶🇦", currencyLogo: "﷼", valueInPKR: 1 / 77 },
    { id: 72, country: "Russia", flag: "🇷🇺", currencyLogo: "₽", valueInPKR: 1 / 3.5 },
    { id: 73, country: "Saudi Arabia", flag: "🇸🇦", currencyLogo: "﷼", valueInPKR: 1 / 75 },
    { id: 74, country: "Singapore", flag: "🇸🇬", currencyLogo: "S$", valueInPKR: 1 / 206 },
    { id: 75, country: "South Africa", flag: "🇿🇦", currencyLogo: "R", valueInPKR: 1 / 15 },
    { id: 76, country: "South Korea", flag: "🇰🇷", currencyLogo: "₩", valueInPKR: 1 / 0.22 },
    { id: 77, country: "Spain", flag: "🇪🇸", currencyLogo: "€", valueInPKR: 1 / 298 },
    { id: 78, country: "Sri Lanka", flag: "🇱🇰", currencyLogo: "රු", valueInPKR: 1 / 0.86 },
    { id: 79, country: "Sweden", flag: "🇸🇪", currencyLogo: "kr", valueInPKR: 1 / 26 },
    { id: 80, country: "Switzerland", flag: "🇨🇭", currencyLogo: "CHF", valueInPKR: 1 / 310 },
    { id: 81, country: "Thailand", flag: "🇹🇭", currencyLogo: "฿", valueInPKR: 1 / 7.92 },
    { id: 82, country: "Turkey", flag: "🇹🇷", currencyLogo: "₺", valueInPKR: 1 / 10 },
    { id: 83, country: "United Arab Emirates", flag: "🇦🇪", currencyLogo: "د.إ", valueInPKR: 1 / 76.5 },
    { id: 84, country: "United Kingdom", flag: "🇬🇧", currencyLogo: "£", valueInPKR: 1 / 347 },
    { id: 85, country: "United States", flag: "🇺🇸", currencyLogo: "$", valueInPKR: 1 / 281 },
    { id: 86, country: "Vietnam", flag: "🇻🇳", currencyLogo: "₫", valueInPKR: 1 / 0.012 },
    { id: 87, country: "Yemen", flag: "🇾🇪", currencyLogo: "﷼", valueInPKR: 1 / 0.45 },
    { id: 88, country: "Zambia", flag: "🇿🇲", currencyLogo: "ZK", valueInPKR: 1 / 11 },
    { id: 89, country: "Zimbabwe", flag: "🇿🇼", currencyLogo: "Z$", valueInPKR: 1 / 0.31 },
  ];
  
  export default currency;
  