import { ChangeEvent } from "react";

export interface IStylesProps {
      color: any
    }

export interface INewProps {
      isEdit: boolean
      data?: any

}

export interface INewWriteUIProps {

      writerError: (event: ChangeEvent<HTMLInputElement>) => void
      passwordError: (event: ChangeEvent<HTMLInputElement>) => void
      titleError: (event: ChangeEvent<HTMLInputElement>) => void
      contentsError: (event: ChangeEvent<HTMLInputElement>) => void
      onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
      onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
      onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
      onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
      onClickCorrect: () => void
      color: () => void
      isEdit: boolean
      onClickEdit: any

}

export interface INewWriteProps{
      isEdit: boolean
      data?: any
      onChangeWriter: any
      writerError: any
      onChangePassword: any
      passwordError: any
      onChangeTitle: any
      titleError: any
      onChangeContents: any
      contentsError: any
      color: any
      onClickCorrect: any
      onClickEdit: any
    }

   