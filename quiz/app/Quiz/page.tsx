"use client"

import { Text,Center,Card, CardHeader, CardBody, CardFooter, SimpleGrid} from "@chakra-ui/react"
export default function TOP(){
    return (
        <>
            <Center>
                <SimpleGrid columns={2} spacing="5">
                    {[...Array(8)].map(() => {
                        return (
                            <>
                                <Card variant="outline">
                                    <CardBody>
                                        <Text>View a summary of all your customers over the last month.</Text>
                                    </CardBody>
                                </Card>
                            </>
                        )
                    })}
                </SimpleGrid>
            </Center>   
        </>
    )
}