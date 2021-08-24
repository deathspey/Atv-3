import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  main: {
    width: '100%', 
    //justifyContent: 'space-around',
  },

  scrollview:{
    height: '100%',
    padding: 15,
    backgroundColor: '#D3D3D3',
  },

  box: {
    width: '90%',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderBottomColor: '#777',
    borderWidth: 1,
  },

  text: {
    color: '#000',
    fontSize: 20,
  },
  
  input: {
    width: '90%',
    backgroundColor:'#fff',
    height: 70,
    borderBottomColor: '#777',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 5,
    textAlign: 'center' 
  },

  save: {
    paddingTop: 30,
    width: '30%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#D3D3D3',
  },

  image: {
    width: 60,
    height: 60
  },

  saveAction:{
    width: '90%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
  slider: {
      width: '90%',
      flexDirection: 'column',
      height: 120,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 12,
      marginBottom: 12,
      backgroundColor: '#fff',
      borderBottomColor: '#777',
      borderWidth: 1,
  },
  sliderText: {
    padding: 30,
    color: '#000',
    fontSize: 20,
  },

  item:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000',
    paddingLeft: 15
  },

  info: {
    backgroundColor:'#fff',
    height: 70,
    borderBottomColor: '#777',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 5,
    color: '#000'
  }

})

export default styles;