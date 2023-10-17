export enum HeadingEnum {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type HeadingSizeUnion = `${HeadingEnum}`

export const headingSizeMap = {
  [HeadingEnum.H1]: {
    size: "xl:text-6xl text-4xl",
    margin: "mb-12"
  },
  [HeadingEnum.H2]: {
    size: "text-4xl",
    margin: "mb-12"
  },
  [HeadingEnum.H3]: {
    size: "text-2xl",
    margin: "mb-8"
  },
  [HeadingEnum.H4]: {
    size: "text-xl",
    margin: "mb-4"
  },
  [HeadingEnum.H5]: {
    size: "text-l",
    margin: "mb-4"
  },
  [HeadingEnum.H6]: {
    size: "text-m",
    margin: "mb-2"
  },
};