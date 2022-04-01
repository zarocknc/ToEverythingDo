import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [{
    id:1,
    title:'Tus tareas en todas partes',
    text:'Puedes acceder a tus tareas desde todas partes'},
    {
        id:2,
        title:'Crea grupos de trabajo',
        text:'En los grupos de trabajo puedes asignar tareas'},
    {
        id:3,
        title:'Reuniones en la misma aplicacion',
        text:'Puedes agregar tareas con una reunion en la misma app'},
    {
        id:4,
        title:'Fechas de finalizacion',
        text:'Agrega fechas limite a tus tareas y a las que asignas'},
    {
        id:5,
        title:'Backups',
        text:'Puedes crear copias de seguridad y almacenarlas de manera offline'},
    {
        id:6,
        title:'Siempre conectado',
        text:'Compatible con todo tipo de dispositivo via web'},
    {
        id:7,
        title:'Tareas por partes',
        text:'Las tareas pueden tener sub-tareas para que sepas por donde empezar a realizar las cosas'},{
        id:8,
        title:'Completamente gratuito',
        text:'Esto es mentira'}]


export default function GridListWithHeading() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>El mejor espacio de trabajo se llama ToEverythingDo</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Una aplicacion moderna hecha con tecnologia moderna para resolver problemas de los equipos de trabajo
                    modernos
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}