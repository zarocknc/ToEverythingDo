import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { SiNextdotjs, SiChakraui, SiVercel, SiWebstorm } from 'react-icons/si';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack >

            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function SimpleThreeColumns() {
    return (
        <><Heading
            color={'black'}
            mb={5}
            fontSize={{ base: '3xl', md: '5xl' }}>
            Tecnologias usadas en esta pagina
        </Heading>
        <Box  p={4}>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                <Feature
                    icon={<Icon color={'black'} as={SiNextdotjs} w={10} h={10} />}
                    title={'Next js'}
                    text={
                        'Next js con typescript'
                    }
                />
                <Feature
                    icon={<Icon color={'black'} as={SiChakraui} w={10} h={10} />}
                    title={'Chackra UI'}
                    text={
                        'Framework de css para crear componentes de manera sencilla'
                    }
                />
                <Feature
                    icon={<Icon color={'black'} as={SiVercel} w={10} h={10} />}
                    title={'Vercel'}
                    text={
                        'Creadores de next js y deploy gratuito'
                    }
                />
                <Feature
                    icon={<Icon color={'black'} as={SiWebstorm} w={10} h={10} />}
                    title={'Web Storm'}
                    text={
                        'IDE usada(se uso este ide solamente por su facil uso de git)'
                    }
                />
            </SimpleGrid>
        </Box></>
    );
}