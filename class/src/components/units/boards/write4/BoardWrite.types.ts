import { ChangeEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any

}

export interface IMyVariables {
    number: number,
    writer?: string,
    title?: string,
    contents?: string
}

export interface IBoardWriteUIProps {
    aaa: (event: ChangeEvent<HTMLInputElement>) => void
    bbb: (event: ChangeEvent<HTMLInputElement>) => void
    ccc: (event: ChangeEvent<HTMLInputElement>) => void
    zzz: () => void
    qqq: boolean
    ggg: boolean
    xxx: () => void
    data: any
}



export interface IMyButtonProps {
    aaa: any  
    bbb: any
    ccc: any
    zzz: any
    xxx: any
    qqq: boolean
    ggg: any
    data: any
}