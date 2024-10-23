import { Feature, FeatureColorInput, FeatureNumberInput } from '../base';

export const bellyitem_color: Feature<string> = {
  name: 'Belly Color',
  description: `
    Belly coloration.  Match this to your skin, Augments+ or Mutcols to make it look smooth!
  `,
  component: FeatureColorInput,
};

export const bellyitem_sizemod: Feature<number> = {
  name: 'Belly Size Divider',
  component: FeatureNumberInput,
  description: `
    Size divider - all belly size sources are divided by this.  Smaller means more belly.
  `,
};

export const bellyitem_size_base: Feature<number> = {
  name: 'Base Cosmetic Size',
  component: FeatureNumberInput,
  description: `
    Provides a baseline cosmetic belly size with no noise.  Good for Mom Critters expecting.
  `,
};

export const bellyitem_size_endo: Feature<number> = {
  name: 'Base Endosoma Size',
  component: FeatureNumberInput,
  description: `
    Provides a baseline endo-intended belly size with gentle fullness noises.  For bellypets or snoozing/AFK guests.
  `,
};

export const bellyitem_size_stuffed: Feature<number> = {
  name: 'Base Stuffed Size',
  component: FeatureNumberInput,
  description: `
    Provides a baseline stuffing-intended belly size with the full gwurgly suite.  Remember to stay away from the pool!
  `,
};
