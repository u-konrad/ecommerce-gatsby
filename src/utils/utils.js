export const capitalize = str => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1)
}

export const convertGenderToPl = str => {
  return str === "male" ? "męskie" : "damskie"
}

export const convertGender = str => {
  return str === "male"
    ? { adj: "męskie", nounPlural: "men", nounSingular: "mężczyzna" }
    : { adj: "damskie", nounPlural: "women", nounSingular: "kobieta" }
}
