import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
import {IoCheckboxOutline, IoPersonAddSharp, IoHelpCircleOutline} from 'react-icons/io5';
import Link from 'next/link'
export default function SplitScreen() {
    return (
        <Stack bg={'#17181a'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'red'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                /*bg: 'blue.400',*/
                                zIndex: -1,
                            }}>
                            <Icon as={IoCheckboxOutline}/>El mejor
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Espacio de trabajo
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Ahora tus proyectos tienen una direccion.
                        perfecto para MYPES, y grupos de estudio.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link href={'/registerForm'}><Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            rightIcon={<IoPersonAddSharp/>}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Registrate
                        </Button></Link>
                        <Link href={"/acercade"}><Button rightIcon={<IoHelpCircleOutline/>} rounded={'full'}>Como Funciona</Button></Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://i.ibb.co/0JcS93H/blurrytodo.png'
                    }
                />
            </Flex>
        </Stack>
    );

}