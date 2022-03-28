export type CommonStringField<T> = {
    [key:string]: T
}

export type Spread<T> = {
    [P in keyof T]: T[P]
}

export type Merge<FirstType, SecondType> = {
    [P in keyof (FirstType & SecondType) ]: P extends keyof SecondType ? SecondType[P] : P extends keyof FirstType ? FirstType[P] : never
}

export type SetOptional <T, U extends keyof T> = Spread<Partial<Pick<T, U>> & Pick<T, Exclude<keyof T ,U>>>  