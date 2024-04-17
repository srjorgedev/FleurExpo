import { View, Text, StyleSheet } from "react-native"
import { Rojo } from '../components/estilos/PaletaColores'
import Layout from '../components/layout/Layout'
import Boton from "../components/Boton"
import FlorIcono from "../components/iconos/Flor"
import { DatosGirasoles } from "../components/data/Girasoles"
import { DatosRosas } from "../components/data/Rosas"
import { DatosTulipanes } from "../components/data/Tulipanes"
import { DatosPeonias } from "../components/data/Peonias"
import { DatosJazmines } from "../components/data/Jazmines"
import { useNavigation } from "@react-navigation/native"
import { DatosGerberas } from "../components/data/Gerberas"

export default function PantallaFlores() {
    const Navegar = useNavigation()
    return (
        <Layout>
            <View style={estilos.headerFlor}>
                {FlorIcono(Rojo[800], 60)}
                <Text style={{ color: Rojo[800], fontSize: 24 }}>Explorar flores</Text>
            </View>

            <View style={estilos.contenedorBotones}>
                <Boton Texto="ROSAS" Fondo="#70f8ff"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosRosas })} />
                <Boton Texto="GIRASOLES" Fondo="#fffd70"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosGirasoles })} />
                <Boton Texto="PEONIAS" Fondo="#ff70cf"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosPeonias })} />
                <Boton Texto="GERBERAS" Fondo="#ffcf70"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosGerberas })} />
                <Boton Texto="TULIPANES" Fondo="#ff7088"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosTulipanes })} />
                <Boton Texto="JAZMINES" Fondo="#d1d1d1"
                    Funcion={() => Navegar.navigate('CatalogoFlores', { data: DatosJazmines })} />
            </View>
        </Layout>
    )
}

const estilos = StyleSheet.create({
    headerFlor: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
    },
    contenedorBotones: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
})