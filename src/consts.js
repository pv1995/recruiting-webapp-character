export const ATTRIBUTE_LIST = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const INIT_ATTR_STATE = {
  Strength: {
    attribute: 10,
    modifier: 0,
  },
  Dexterity: {
    attribute: 10,
    modifier: 0,
  },
  Constitution: {
    attribute: 10,
    modifier: 0,
  },
  Intelligence: {
    attribute: 10,
    modifier: 0,
  },
  Wisdom: {
    attribute: 10,
    modifier: 0,
  },
  Charisma: {
    attribute: 10,
    modifier: 0,
  },
};

export const CLASS_LIST = {
  barbarian: {
    Strength: 14,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 9,
  },
  wizard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 14,
    Wisdom: 9,
    Charisma: 9,
  },
  bard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 14,
  },
};

export const SKILL_LIST = [
  { name: "Acrobatics", attributeModifier: "Dexterity" },
  { name: "Animal Handling", attributeModifier: "Wisdom" },
  { name: "Arcana", attributeModifier: "Intelligence" },
  { name: "Athletics", attributeModifier: "Strength" },
  { name: "Deception", attributeModifier: "Charisma" },
  { name: "History", attributeModifier: "Intelligence" },
  { name: "Insight", attributeModifier: "Wisdom" },
  { name: "Intimidation", attributeModifier: "Charisma" },
  { name: "Investigation", attributeModifier: "Intelligence" },
  { name: "Medicine", attributeModifier: "Wisdom" },
  { name: "Nature", attributeModifier: "Intelligence" },
  { name: "Perception", attributeModifier: "Wisdom" },
  { name: "Performance", attributeModifier: "Charisma" },
  { name: "Persuasion", attributeModifier: "Charisma" },
  { name: "Religion", attributeModifier: "Intelligence" },
  { name: "Sleight of Hand", attributeModifier: "Dexterity" },
  { name: "Stealth", attributeModifier: "Dexterity" },
  { name: "Survival", attributeModifier: "Wisdom" },
];

export const INIT_SKILL = {
  acrobatic: {
    value: 0,
    attribute: "Dexterity",
    modifier: 0,
  },
  animal_handling: {
    value: 0,
    attribute: "Wisdom",
    modifier: 0,
  },
  arcana: {
    value: 0,
    attribute: "Intelligence",
    modifier: 0,
  },
  athletics: {
    value: 0,
    attribute: "Strength",
    modifier: 0,
  },
  deception: {
    value: 0,
    attribute: "Charisma",
    modifier: 0,
  },
  history: {
    value: 0,
    attribute: "Intelligence",
    modifier: 0,
  },
  insight: {
    value: 0,
    attribute: "Wisdom",
    modifier: 0,
  },
  investigation: {
    value: 0,
    attribute: "Intelligence",
    modifier: 0,
  },
  intimidation: {
    value: 0,
    attribute: "Charisma",
    modifier: 0,
  },
  medicine: {
    value: 0,
    attribute: "Wisdom",
    modifier: 0,
  },
  nature: {
    value: 0,
    attribute: "Intelligence",
    modifier: 0,
  },
  perception: {
    value: 0,
    attribute: "Wisdom",
    modifier: 0,
  },
  performance: {
    value: 0,
    attribute: "Charisma",
    modifier: 0,
  },
  persuasion: {
    value: 0,
    attribute: "Charisma",
    modifier: 0,
  },
  religion: {
    value: 0,
    attribute: "Intelligence",
    modifier: 0,
  },
  sleight_of_hand: {
    value: 0,
    attribute: "Dexterity",
    modifier: 0,
  },
  stealth: {
    value: 0,
    attribute: "Dexterity",
    modifier: 0,
  },
  survival: {
    value: 0,
    attribute: "Wisdom",
    modifier: 0,
  },
};

export const INIT_ACTIVE_CLASS = {
  wizard: false,
  barbarian: false,
  bard: false,
};

export const SINGLE_CHARACTER = {
  name: null,
  attributes: { ...INIT_ATTR_STATE },
  classes: { ...INIT_ACTIVE_CLASS },
  skills: { ...INIT_SKILL },
  isModifyAllowed: true,
};

export const INIT_SINGLE_GAME = {
  characters: [],
  current_character: null,
  current_roll: null,
  roll_history: [],
};
