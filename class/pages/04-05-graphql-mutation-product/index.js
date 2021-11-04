import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller:$seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationProductPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT)
        
  

    async function zzz(){

        const result = await createProduct({
            variables: {
                seller: "짱구",
                createProductInput:{
                    name: "초코비",
                    detail: "초코맛",
                    price: 1500
                }
            }
        })
        console.log(result)
    
        
    } 

    return(
        <>
            판매자: <input type="text"/><br/>
            상품명: <input type="text"/><br/>
            상품내용: <input type="text"/><br/>
            상품가격: <input type="text"/><br/>
            <button onClick={zzz}>상품 등록하기</button>
        </>
    
    )


}