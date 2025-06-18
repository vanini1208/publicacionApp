import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

const productos = [
  {
     id: '1',
   nombre: 'Bare Vainilla VICTORIA SECRET',
   precio: 320.00,
   imagen: 'https://lagaleriaboutique.com/cdn/shop/files/d6e271c9-dea4-4ef6-b1cd-c6851e4ca5d2.jpg?v=1708108144',
   reseñas: [5, 4, 4, 5],
  },
  {
    id: '2',
   nombre: 'Good Girl BLUSH Elixir CAROLINA HERRERA',
   precio: 4025.00,
   imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IsuFJcjrYmmD2iBzb_H81_WnMEaOxV472aNcWFOCZCzC8J74RHLYOdbuUdWTUJKeay4&usqp=CAU',
    reseñas: [3, 4, 5],
  },
  {
   id: '3',
   nombre: 'BOOMBSHELL VICTORIA SECRET',
   precio: 1799.00,
   imagen: 'https://www.victoriassecretbeauty.es/on/demandware.static/-/Sites-VS-Library/default/dwc878f609/VS/PLP_Cat/profumo.jpg',
    reseñas: [5, 5, 5, 4],
  },
  {
    id: '4',
   nombre: 'CH Gardyn Party ',
   precio: 1783.00,
   imagen: 'https://assets-v3.wikiparfum.com/api-assets/images/49d93de89OpP54ssyuJMG6rJFludbz9msL3IWFYm-w1400-q75.jpg',
    reseñas: [4, 4, 3],
  },
    {
   id: '5',
   nombre: 'Good Girl CAROLINA HERRERA',
   precio: 3399.00,
   imagen: 'https://i.pinimg.com/474x/a0/75/63/a07563a373e92ea9263c12978a9d0017.jpg',
   reseñas: [5, 4, 4, 5],
  },
    {
     id: '6',
   nombre: 'Sweet Like Candy ARIANA GRANDE',
   precio: 789.00,
   imagen: 'https://ultrafemme.com/media/catalog/product/3/4/349827_812256021711_01_1191.png?optimize=medium&fit=bounds&height=1000&width=1250&canvas=1250:1000&format=jpeg',
   reseñas: [5, 4, 4, 5],
  },
    {
   id: '7',
   nombre: 'Thank U Next ARIANA GRANDE',
   precio: 849.00,
   imagen: 'https://cdn1.coppel.com/images/catalog/mkp/1032/25000/103223821-3.jpg?iresize=width:400,height:320',
   reseñas: [5, 4, 4, 5],
  },
    {
     id: '8',
   nombre: 'R.E.M ARIANA GRANDE',
   precio: 703.00,
   imagen: 'https://romanamx.com/cdn/shop/products/ArianaGrandeREM_1800x1800.png?v=1676300015',
   reseñas: [5, 4, 4, 5],
  },
    {
     id: '9',
   nombre: 'Cloud pik ARIANA GRANDE',
   precio: 1789.00,
   imagen: 'https://maatbeauty.com/wp-content/uploads/2023/08/2614010.png',
   reseñas: [5, 4, 4, 5],
  },
    {
      id: '10',
   nombre: 'Bright Crystal VERSACE',
   precio: 3950.00,
   imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liverpool.com.mx%2Ftienda%2Fpdp%2Feau-de-toilette-versace-crystals-para-mujer%2F1074607829&psig=AOvVaw01WyrjtAPwCMzgQTKhZmKl&ust=1749340223810000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODu9af-3Y0DFQAAAAAdAAAAABAE',
   reseñas: [5, 4, 4, 5],
  },
    {
   id: '11',
   nombre: 'Miss DIOR',
   precio: 2400.00,
   imagen: 'https://media.vogue.mx/photos/614dc1ee1e7bf25325854f42/master/w_1600%2Cc_limit/perfumes_07.png',
   reseñas: [5, 4, 4, 5],
  },
    {
      id: '12',
   nombre: 'Parfums de Marly ',
   precio: 350.00,
   imagen: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/04/535d9996-6927-47d6-be82-d5279301b58f.jpg',
   reseñas: [5, 4, 4, 5],
  },
    {
    id: '13',
   nombre: 'Prada PARADOXE',
   precio: 3800.00,
   imagen: 'https://www.druni.es/blog/wp-content/uploads/2022/09/prada-paradoxe-prada.jpg',
   reseñas: [5, 4, 4, 5],
  },
    {
    id: '14',
   nombre: 'Yves Saint Laurent LIBRE',
   precio: 1824.92,
   imagen: 'https://i.blogs.es/5dac96/libre/450_1000.jpeg',
   reseñas: [5, 4, 4, 5],
  },
    {
      id: '15',
   nombre: 'CHANEL N°5',
   precio: 3950.00,
   imagen: 'https://estaticosgn-cdn.deia.eus/clip/1e0c34c6-8060-487a-a1d2-254acb9fe930_source-aspect-ratio_default_0.jpg',
   reseñas: [5, 4, 4, 5],
  },
];

function HomeScreen({ navigation }) {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('✅ Producto agregado', `${producto.nombre} ha sido agregado al carrito.`);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#9a9ebf' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuAbierto(!menuAbierto)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>VOGUEZZA</Text>
      </View>

      {/* Menú lateral */}
      {menuAbierto && (
        <View style={styles.menuLateral}>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuItem}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setMenuAbierto(false);
              navigation.navigate('Carrito', { carrito, setCarrito });
            }}>
              <Text style={styles.menuItem}>🛒 Ir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuCerrar}>✖️ Cerrar menú</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView style={{ marginBottom: 60 }}>
        {/* Buscador */}
        <TextInput
          style={styles.input}
          placeholder="🔍 Buscar productos..."
          value={busqueda}
          onChangeText={setBusqueda}
        />

        {/* Productos destacados */}
        <Text style={styles.subtitulo}>🔥 Productos destacados</Text>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.destacadoCard}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagenDestacada} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Todos los productos */}
        <Text style={styles.subtitulo}>Todos los productos</Text>
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.card}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>$ {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}></Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Botón flotante carrito */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Carrito', { carrito, setCarrito })}
          style={styles.botonIrCarrito}
        >
          <Text style={styles.textoBoton}>🛒 Ver carrito ({carrito.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

function CarritoScreen({ route, navigation }) {
  const { carrito, setCarrito } = route.params;

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    Alert.alert('🗑️ Producto eliminado');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9' }]}>
      <Text style={styles.subtitulo}>🛒 Carrito</Text>
      <ScrollView style={{ marginBottom: 60 }}>
        {carrito.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>El carrito está vacío.</Text>
        ) : (
          carrito.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <TouchableOpacity
                onPress={() => eliminarDelCarrito(index)}
                style={[styles.botonAgregar, { backgroundColor: 'red' }]}
              >
                <Text style={{ color: '#fff' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
        <View style={styles.carrito}>
          <Text>🧾 Artículos: {carrito.length}</Text>
          <Text>💰 Total: ${total.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* Botón flotante Comprar */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pago', { total })}
          style={[styles.botonIrCarrito, { backgroundColor: '#28a745' }]}
        >
          <Text style={styles.textoBoton}>💳 Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PagoScreen({ route }) {
  const { total } = route.params;

  const confirmarPago = (metodo) => {
    Alert.alert('✅ Pago confirmado', `Has pagado $${total.toFixed(2)} con ${metodo}. ¡Gracias por tu compra!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9' }]}>
      <Text style={styles.subtitulo}>💳 Opciones de pago</Text>
      <TouchableOpacity onPress={() => confirmarPago('Tarjeta de crédito')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Tarjeta de crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('PayPal')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Transferencia bancaria')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Transferencia bancaria</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetalleProductoScreen({ route }) {
  const { producto, agregarAlCarrito } = route.params;

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f9f9f9' }]}>
      <Text style={styles.subtitulo}>{producto.nombre}</Text>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>💲 {producto.precio.toFixed(2)}</Text>
      <Text style={{ marginBottom: 10 }}>Descripción: Este es un excelente producto de calidad premium que no te puedes perder.</Text>
      <Text style={styles.subtitulo}>⭐ Reseñas</Text>
      <Text style={styles.precio}>${item.precio.toFixed(2)}</Text>
      <View style={styles.estrellas}>
        {Array(promedioEstrellas(producto.reseñas))
          .fill()
          .map((_, i) => (
            <Text key={i}>⭐</Text>
          ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        {producto.reseñas.map((r, index) => (
          <Text key={index}>⭐ {r} estrellas - ¡Muy buen producto!</Text>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => agregarAlCarrito(producto)}
        style={[styles.botonAgregar, { backgroundColor: '#28a745' }]}
      >
        <Text style={{ color: '#fff' }}>🛒 Agregar al carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carrito" component={CarritoScreen} />
        <Stack.Screen name="Pago" component={PagoScreen} />
        <Stack.Screen name="Detalle" component={DetalleProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 10,
    
  },
header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: StatusBar.currentHeight || 40, 
  height: 60 + (StatusBar.currentHeight || 40),
  backgroundColor: '#fff',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  elevation: 5,
  zIndex: 1000,
},
menuIcon: {
  fontSize: 28,
  position: '',
  left: -100,
},

titulo: {
  fontSize: 24,
  fontWeight: 'bold',
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 100,
  },
  card: {
     flexDirection: 'row',
   backgroundColor: '#f9f9f9',
   margin: 8,
   padding: 10,
   borderRadius: 10,
   alignItems: 'center',
  },
imagen: { width: 60, height: 60, borderRadius: 8 },
 nombre: { fontSize: 16, fontWeight: 'bold' },

  imagenDestacada: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  
  botonAgregar: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carrito: {
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  botonFijo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  botonIrCarrito: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  destacadoCard: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 28,
    elevation: 2,
    width: 140,
  },
  menuLateral: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 999,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuCerrar: {
    fontSize: 16,
    color: 'red',
  },
  estrellas: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
