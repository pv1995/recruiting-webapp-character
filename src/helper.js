export function isNotValid(attr_value) {
  if (
    Object.keys(attr_value).reduce((accumulator, currentValue) => {
      return accumulator + attr_value[currentValue].attribute;
    }, 0) >= 70
  )
    return true;
  return false;
}

export function isBarbarian(attr_value) {
  if (
    attr_value.Strength.attribute >= 14 &&
    attr_value.Dexterity.attribute >= 9 &&
    attr_value.Constitution.attribute >= 9 &&
    attr_value.Intelligence.attribute >= 9 &&
    attr_value.Wisdom.attribute >= 9 &&
    attr_value.Charisma.attribute >= 9
  )
    return true;
  return false;
}

export function isWizard(attr_value) {
  if (
    attr_value.Strength.attribute >= 9 &&
    attr_value.Dexterity.attribute >= 9 &&
    attr_value.Constitution.attribute >= 9 &&
    attr_value.Intelligence.attribute >= 14 &&
    attr_value.Wisdom.attribute >= 9 &&
    attr_value.Charisma.attribute >= 9
  )
    return true;
  return false;
}

export function isBard(attr_value) {
  if (
    attr_value.Strength.attribute >= 9 &&
    attr_value.Dexterity.attribute >= 9 &&
    attr_value.Constitution.attribute >= 9 &&
    attr_value.Intelligence.attribute >= 9 &&
    attr_value.Wisdom.attribute >= 9 &&
    attr_value.Charisma.attribute >= 14
  )
    return true;
  return false;
}
