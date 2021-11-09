
import { useRouter } from "next/router"

export default function GraphqlMutationProductUpPage(){

    const router = useRouter()
    const [createProduct] = useMutation(CREATE_PRODUCT)


    async function productUp(){
        try {
            const result = await createProduct({
                variables: {
                    seller, createProductInput: {name, detail, price}
                }
            })
                console.log(result)

            router.push(`읽는페이지'${result.data.createProduct._id}`)
        } catch {

        }
    }
    return(


    )
}